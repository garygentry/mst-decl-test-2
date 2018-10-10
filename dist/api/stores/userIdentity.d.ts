import { IModelType, Instance, IType, OptionalProperty, IStateTreeNode } from 'mobx-state-tree';
export declare type UserIdentityStoreType = Instance<typeof UserIdentityStore>;
export interface IUserIdentityStore extends UserIdentityStoreType {
}
export declare const UserIdentityStore: IModelType<{
    id: IType<string, string, string> & OptionalProperty;
    username: IType<string, string, string> & OptionalProperty;
    email: IType<string, string, string> & OptionalProperty;
}, {}, {} & {
    id?: string;
    username?: string;
    email?: string;
}, {
    id: string;
    username: string;
    email: string;
}, {
    id: string;
    username: string;
    email: string;
} & IStateTreeNode<{} & {
    id?: string;
    username?: string;
    email?: string;
}, {
    id: string;
    username: string;
    email: string;
}>>;
