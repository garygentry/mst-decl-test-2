import { IModelType, IType, Instance, IStateTreeNode, OptionalProperty } from 'mobx-state-tree';
export declare type UserStoreType = Instance<typeof UserStore>;
export interface IUserStore extends UserStoreType {
}
export declare const UserStore: IModelType<{
    id: IType<string, string, string> & OptionalProperty;
    username: IType<string, string, string> & OptionalProperty;
    firstName: IType<string, string, string> & OptionalProperty;
    lastName: IType<string, string, string> & OptionalProperty;
    email: IType<string, string, string> & OptionalProperty;
}, {
    setUser: (user: any) => void;
    logout: () => void;
} & {
    readonly identity: any;
} & {
    fetch: () => Promise<{}>;
} & {
    afterCreate: () => void;
    beforeDestroy: () => void;
}, {} & {
    id?: string;
    username?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
}, {
    id: string;
    username: string;
    firstName: string;
    lastName: string;
    email: string;
}, {
    id: string;
    username: string;
    firstName: string;
    lastName: string;
    email: string;
} & {
    setUser: (user: any) => void;
    logout: () => void;
} & {
    readonly identity: any;
} & {
    fetch: () => Promise<{}>;
} & {
    afterCreate: () => void;
    beforeDestroy: () => void;
} & IStateTreeNode<{} & {
    id?: string;
    username?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
}, {
    id: string;
    username: string;
    firstName: string;
    lastName: string;
    email: string;
}>>;
