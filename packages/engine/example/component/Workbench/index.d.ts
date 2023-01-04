import React from 'react';
import { ResizeCallback } from 're-resizable';
import { Emitter } from 'mitt';
export interface PluginContext {
    openPanel: () => void;
    closePanel: () => void;
    getPlugin: (pluginName: string) => any;
    emitter: Emitter<any>;
}
declare type PanelItem = {
    name: string;
    title: string | React.ReactNode;
    icon: React.ReactNode;
    render: React.ReactNode;
};
declare type WorkBenchStateType = {
    leftBoxVisible: boolean;
    leftBoxSize: {
        width: number;
        height: number | string;
    };
    leftBoxFixed: boolean;
    rightBoxSize: {
        width: number;
        height: number | string;
    };
    rightBoxVisible: boolean;
    currentActiveLeftPanel: string;
    leftPanels: PanelItem[];
    bodyView: React.ReactNode | null;
};
export declare type WorkBenchPropsType = {
    emitter: Emitter<any>;
};
export declare class WorkBench extends React.Component<WorkBenchPropsType, WorkBenchStateType> {
    emitter: Emitter<any>;
    constructor(props: WorkBenchPropsType);
    addLeftPanel: (panel: PanelItem) => void;
    openLeftPanel: () => void;
    closeLeftPanel: () => void;
    toggleLeftPanel: () => void;
    onPluginIconClick: (panel: PanelItem) => void;
    openRightPanel: () => void;
    closeRightPanel: () => void;
    replaceBodyView: (newView: React.ReactNode) => void;
    toggleRightPanel: () => void;
    onLeftBoxResizeStop: ResizeCallback;
    render(): JSX.Element;
}
export {};
