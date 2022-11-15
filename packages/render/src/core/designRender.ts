/* eslint-disable react/no-find-dom-node */
import { CNode, CPageDataType, CSchema, getRandomStr } from '@chameleon/model';
import { isArray } from 'lodash-es';
import React, { useRef } from 'react';
import { AdapterOptionType } from './adapter';
import { RenderPropsType, Render, UseRenderReturnType } from './render';
import * as ReactDOM from 'react-dom';

export class ComponentInstanceManager {
  private instanceMap = new Map<string, any[]>();

  get(id: string) {
    return this.instanceMap.get(id);
  }
  add(id: string, handle: any) {
    const val = this.instanceMap.get(id);
    if (val) {
      val.push(handle);
    } else {
      this.instanceMap.set(id, [handle]);
    }
  }

  remove(id: string, val?: any) {
    const valList = this.instanceMap.get(id);
    if (val !== undefined && Array.isArray(valList)) {
      const newList = valList.filter((el) => el === val);
      this.instanceMap.set(id, newList);
    } else {
      this.instanceMap.delete(id);
    }
  }

  destroy() {
    this.instanceMap.clear();
  }
}

export type DesignRenderProp = Omit<RenderPropsType, 'ref' | 'render'> & {
  ref?: React.MutableRefObject<DesignRender | null>;
  render?: UseDesignRenderReturnType;
};

type DesignWrapType = {
  _DESIGN_BOX: boolean;
  _NODE_MODEL: CNode | CSchema;
  _NODE_ID: string;
  _UNIQUE_ID: string;
};

export class DesignRender extends React.Component<DesignRenderProp> {
  instanceManager = new ComponentInstanceManager();
  renderRef: React.MutableRefObject<Render | null>;

  constructor(props: DesignRenderProp) {
    super(props);
    this.renderRef = React.createRef<Render>();
  }
  getPageModel() {
    return this.renderRef.current?.state.pageModel;
  }

  onGetComponent = (comp: any, node: CSchema | CNode) => {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const self = this;
    class DesignWrap extends React.Component<any> {
      _DESIGN_BOX = true;
      _NODE_MODEL = node;
      _NODE_ID = node.id;
      _UNIQUE_ID = `${node.id}_${getRandomStr()}`;

      componentDidMount(): void {
        self.instanceManager.add(node.id, this);
      }

      componentWillUnmount(): void {
        self.instanceManager.remove(node.id, this);
      }

      render() {
        const { children = [], ...restProps } = this.props;
        let newChildren = children;
        if (!isArray(children)) {
          newChildren = [children];
        }
        return React.createElement(comp, restProps, ...newChildren);
      }
    }
    // ts error, if type is not any: Public property 'onGetComponent' of exported class has or is using private name 'DesignWrap'.
    return DesignWrap as any;
  };

  // onComponentMount: AdapterOptionType['onComponentMount'] = (
  //   instance,
  //   node
  // ) => {
  //   this.instanceManager.add(node.id, instance);
  // };

  // onComponentDestroy: AdapterOptionType['onComponentDestroy'] = (_, node) => {
  //   this.instanceManager.remove(node.id, node);
  // };

  rerender(newPage: CPageDataType) {
    return this.renderRef.current?.rerender(newPage);
  }

  getInstancesById(id: string): DesignRenderInstance[] {
    return this.instanceManager.get(id) || [];
  }
  getInstanceByDom(el: HTMLHtmlElement | Element): DesignRenderInstance | null {
    const fiberNode = findClosetFiberNode(el);
    if (!fiberNode) {
      return null;
    }
    const containerFiber = findClosetContainerFiberNode(fiberNode);
    return containerFiber?.stateNode || null;
  }
  getDomsById(id: string, selector?: string) {
    const instances = this.getInstancesById(id);
    const doms: HTMLElement[] = [];
    instances?.forEach((el) => {
      const dom = ReactDOM.findDOMNode(el);

      if (dom && !(dom instanceof Text)) {
        if (selector) {
          // 判断是不是数组
          const list: HTMLElement[] = Array.from(
            dom.querySelectorAll(selector)
          );
          doms.push(...list);
        } else {
          doms.push(dom as unknown as HTMLElement);
        }
      }
    });

    return doms;
  }
  getDomRectById(id: string, selector?: string) {
    const domList = this.getDomsById(id, selector) as HTMLElement[];
    // 判断是不是数组
    const rectList = domList
      .map((el) => {
        return el?.getBoundingClientRect();
      })
      .filter(Boolean);
    return rectList;
  }

  render() {
    const { props, onGetComponent } = this;
    const { render, ...renderProps } = props;
    if (render) {
      render.ref.current = this;
    }
    return React.createElement(Render, {
      onGetComponent,
      ...renderProps,
      ref: this.renderRef,
    });
  }
}

export type DesignRenderInstance =
  | (React.ReactInstance & DesignWrapType)
  | null
  | undefined;

export type UseDesignRenderReturnType = Pick<
  UseRenderReturnType,
  'rerender'
> & {
  ref: React.MutableRefObject<DesignRender | null>;
  getInstancesById: (id: string) => DesignRenderInstance[];
  getInstanceByDom: (dom: HTMLHtmlElement | Element) => DesignRenderInstance;
  getDomsById: (id: string, selector?: string) => HTMLElement[];
  getDomRectById: (id: string, selector?: string) => DOMRect | DOMRect[];
};

const findClosetFiberNode = (
  el: Element | null
): SimpleFiberNodeType | null => {
  if (!el) {
    return null;
  }
  const REACT_KEY =
    Object.keys(el).find(
      (key) =>
        key.startsWith('__reactInternalInstance$') ||
        key.startsWith('__reactFiber$')
    ) || '';

  if (REACT_KEY) {
    return (el as any)[REACT_KEY];
  } else {
    return findClosetFiberNode(el.parentElement);
  }
};

type SimpleFiberNodeType = {
  return: SimpleFiberNodeType;
  stateNode: (Element | HTMLElement) & DesignRenderInstance;
};

const findClosetContainerFiberNode = (
  fiberNode: SimpleFiberNodeType
): SimpleFiberNodeType | null => {
  if (!fiberNode) {
    return null;
  }
  if (fiberNode?.stateNode?._DESIGN_BOX) {
    return fiberNode;
  } else {
    return findClosetContainerFiberNode(fiberNode.return);
  }
};

export const useDesignRender = (): UseDesignRenderReturnType => {
  const ref = useRef<DesignRender>(null);
  return {
    ref: ref,
    rerender: function (...args) {
      if (ref.current) {
        ref.current.rerender(...args);
      }
    },
    getInstancesById(id) {
      return ref.current?.getInstancesById(id) || [];
    },
    getInstanceByDom(el) {
      return ref.current?.getInstanceByDom(el);
    },
    getDomsById(id: string, selector?: string) {
      return ref.current?.getDomsById(id, selector) || [];
    },
    getDomRectById(id: string, selector?: string) {
      return ref.current?.getDomRectById(id, selector) || [];
    },
  };
};
