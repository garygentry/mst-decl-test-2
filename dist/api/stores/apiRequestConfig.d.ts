import { IModelType, Instance, ISimpleType, IStateTreeNode } from 'mobx-state-tree';
export declare type ApiRequestConfigStoreType = Instance<typeof ApiRequestConfigStore>;
export interface IApiRequestConfigStore extends ApiRequestConfigStoreType {
}
export declare const ApiRequestConfigStore: IModelType<{
    id: ISimpleType<number>;
    url: ISimpleType<string>;
    baseURL: ISimpleType<string>;
    method: ISimpleType<string>;
}, {}, {
    id: number;
    url: string;
    baseURL: string;
    method: string;
} & {}, {
    id: number;
    url: string;
    baseURL: string;
    method: string;
}, {
    id: number;
    url: string;
    baseURL: string;
    method: string;
} & IStateTreeNode<{
    id: number;
    url: string;
    baseURL: string;
    method: string;
} & {}, {
    id: number;
    url: string;
    baseURL: string;
    method: string;
}>>;
