import { IModelType, Instance, ISimpleType, IStateTreeNode } from 'mobx-state-tree';
export declare type TimezoneStoreType = Instance<typeof TimezoneStore>;
export interface ITimezoneStore extends TimezoneStoreType {
}
export declare const TimezoneStore: IModelType<{
    name: ISimpleType<string>;
    gmtOffset: ISimpleType<number>;
    dstOffset: ISimpleType<number>;
    rawOffset: ISimpleType<number>;
}, {}, {
    name: string;
    gmtOffset: number;
    dstOffset: number;
    rawOffset: number;
} & {}, {
    name: string;
    gmtOffset: number;
    dstOffset: number;
    rawOffset: number;
}, {
    name: string;
    gmtOffset: number;
    dstOffset: number;
    rawOffset: number;
} & IStateTreeNode<{
    name: string;
    gmtOffset: number;
    dstOffset: number;
    rawOffset: number;
} & {}, {
    name: string;
    gmtOffset: number;
    dstOffset: number;
    rawOffset: number;
}>>;
