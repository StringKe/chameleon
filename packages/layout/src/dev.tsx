import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';
import ReactDOMAll from 'react-dom';
import { BasePage, EmptyPage, Material } from '@chameleon/demo-page';
import { Layout, LayoutDragAndDropExtraDataType } from '.';
import * as antD from 'antd';
import './dev.css';
import { Sensor, SensorEventObjType } from './core/dragAndDrop/sensor';
import { CNode, CPage } from '@chameleon/model';
import { CAssetPackage } from './types/common';

(window as any).React = React;
(window as any).ReactDOM = ReactDOMAll;
(window as any).ReactDOMClient = ReactDOM;

const assets: CAssetPackage[] = [
  {
    name: 'antd',
    resourceType: 'Component',
    assets: [
      {
        src: 'https://cdn.bootcdn.net/ajax/libs/antd/5.1.2/reset.css',
      },
      {
        src: 'https://cdn.bootcdn.net/ajax/libs/dayjs/1.11.7/dayjs.min.js',
      },
      {
        src: 'https://cdn.bootcdn.net/ajax/libs/antd/5.1.2/antd.js',
      },
    ],
  },
];

const components = {
  ...antD,
};

const App = () => {
  const [page] = useState<any>(BasePage);
  const [ghostView, setGhostView] = useState(<div>213</div>);
  const [pageModel] = useState<any>(
    new CPage(BasePage, {
      materials: Material,
    })
  );

  const leftBoxRef = useRef<HTMLDivElement>(null);
  const layoutRef = useRef<Layout>(null);
  useEffect(() => {
    layoutRef.current?.ready(() => {
      console.log('layoutRef', layoutRef);
      const boxSensor = new Sensor({
        name: 'widgetListBox',
        container: leftBoxRef.current!,
      });
      boxSensor.setCanDrag((eventObj: SensorEventObjType) => {
        const pageModel = layoutRef.current?.getPageModel();

        const newNode = pageModel?.createNode({
          id: '111',
          componentName: 'Button',
          children: ['insertData'],
        });
        return {
          ...eventObj,
          extraData: {
            type: 'NEW_ADD',
            startNode: newNode,
          } as LayoutDragAndDropExtraDataType,
        };
      });

      layoutRef.current?.dnd.registerSensor(boxSensor);

      boxSensor.setCanDrop((eventObj) => {
        const newNode = new CNode({
          id: 'newAdd',
          componentName: 'Button',
          children: ['new add'],
        });
        return {
          ...eventObj,
          extraData: {
            dropPosInfo: {
              // pos: 'before',
            },
            dropNode: newNode,
          } as LayoutDragAndDropExtraDataType,
        };
      });

      boxSensor.emitter.on('dragStart', (eventObj) => {
        console.log(
          '🚀 ~ file: dev.tsx:92 ~ boxSensor.emitter.on ~ eventObj',
          eventObj.extraData?.startNode.value.componentName
        );
        setGhostView(
          <div>{eventObj.extraData?.startNode.value.componentName}</div>
        );
        if (eventObj.currentSensor === boxSensor) {
          layoutRef.current?.clearSelectNode();
        }
      });
      boxSensor.emitter.on('dragging', (eventObj) => {
        // console.log('box dragging', eventObj);
      });
      boxSensor.emitter.on('dragEnd', (eventObj) => {
        // console.log('box dragEnd', eventObj);
      });
      boxSensor.emitter.on('drop', (eventObj) => {
        const pageModel = layoutRef.current?.getPageModel();
        const extraData = eventObj.extraData as LayoutDragAndDropExtraDataType;
        if (!extraData.dropNode) {
          console.warn('cancel drop, because drop node is null');
          return;
        }
        if (extraData.type === 'NEW_ADD') {
          pageModel?.addNode(
            extraData.startNode as CNode,
            extraData.dropNode,
            'BEFORE'
          );
        } else {
          if (extraData.dropNode?.id === extraData.startNode?.id) {
            return;
          }
          if (extraData.dropPosInfo?.pos === 'before') {
            pageModel?.moveNodeById(
              extraData.startNode?.id || '',
              extraData?.dropNode?.id || '',
              'BEFORE'
            );
          } else {
            pageModel?.moveNodeById(
              extraData.startNode?.id || '',
              extraData?.dropNode?.id || '',
              'AFTER'
            );
          }
        }
        console.log(
          '选中元素',
          extraData.startNode?.id || '',
          extraData?.dropNode?.id,
          extraData
        );
        layoutRef.current?.selectNode(extraData.startNode?.id || '');

        console.log(pageModel?.export());
      });
      const pageModel = layoutRef.current?.getPageModel();
      console.log('pageModel?.export()', pageModel?.export());
    });
  }, []);
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        padding: '50px',
        display: 'flex',
      }}
    >
      <div
        ref={leftBoxRef}
        style={{ border: '1px solid red', width: '300px' }}
        onClick={() => {
          layoutRef.current?.selectNode('32');
        }}
      >
        left
      </div>
      <div
        style={{
          width: '800px',
          height: '100%',
          margin: '0 auto',
          overflow: 'hidden',
          padding: '10px',
        }}
      >
        <Layout
          ref={layoutRef}
          // page={page}
          pageModel={pageModel}
          components={components}
          selectToolBar={<div>123</div>}
          assets={assets}
          ghostView={ghostView}
        />
      </div>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <App />
);
