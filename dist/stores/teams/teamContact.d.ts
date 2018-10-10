import { IModelType, Instance, IStateTreeNode, IType, OptionalProperty } from 'mobx-state-tree';
export declare type TeamContactStoreType = Instance<typeof TeamContactStore>;
export interface ITeamContactStore extends TeamContactStoreType {
}
export declare const TeamContactStore: IModelType<{
    degrees: IType<string, string, string> & OptionalProperty;
    firstName: IType<string, string, string> & OptionalProperty;
    lastName: IType<string, string, string> & OptionalProperty;
    middleName: IType<string, string, string> & OptionalProperty;
}, {}, {} & {
    firstName?: string;
    lastName?: string;
    degrees?: string;
    middleName?: string;
}, {
    degrees: string;
    firstName: string;
    lastName: string;
    middleName: string;
}, {
    degrees: string;
    firstName: string;
    lastName: string;
    middleName: string;
} & IStateTreeNode<{} & {
    firstName?: string;
    lastName?: string;
    degrees?: string;
    middleName?: string;
}, {
    degrees: string;
    firstName: string;
    lastName: string;
    middleName: string;
}>>;
