import React from 'react';
import { Layout } from '@chameleon/layout';
import { CNode, CPage, CSchema } from '@chameleon/model';
import { PluginCtx } from '../../core/pluginManager';
import { CAssetPackage } from '@chameleon/layout/dist/types/common';
export declare type DesignerPropsType = {
    pluginCtx: PluginCtx;
};
declare type DesignerStateType = {
    pageModel: CPage;
    hoverToolBar: React.ReactNode;
    selectToolBar: React.ReactNode;
    ghostView: React.ReactNode;
    assets: CAssetPackage[];
};
export declare class Designer extends React.Component<DesignerPropsType, DesignerStateType> {
    layoutRef: React.RefObject<Layout>;
    ready: boolean;
    constructor(props: DesignerPropsType);
    componentDidMount(): void;
    init(): Promise<void>;
    onSelectNode: (node: CNode | CSchema | null) => void;
    onHoverNode: (node: CNode | CSchema | null, startNode: any) => void;
    render(): JSX.Element;
}
export {};
