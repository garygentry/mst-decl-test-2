import { IModelType, Instance, IComplexType, IMSTArray, ISimpleType, IStateTreeNode, IType, OptionalProperty } from 'mobx-state-tree';
export declare type AuthenticationResponseStoreType = Instance<typeof AuthenticationResponseStore>;
export interface IAuthenticationResponseStore extends AuthenticationResponseStoreType {
}
export declare const AuthenticationResponseStore: IModelType<{
    userId: ISimpleType<string>;
    token: ISimpleType<string>;
    refreshToken: ISimpleType<string>;
    scopes: IComplexType<string[], string[], IMSTArray<string, string, string>> & OptionalProperty;
    decodedToken: IType<any, any, any>;
}, {}, {
    userId: string;
    token: string;
    refreshToken: string;
    decodedToken: any;
} & {
    scopes?: string[];
}, {
    userId: string;
    token: string;
    refreshToken: string;
    scopes: string[];
    decodedToken: any;
}, {
    userId: string;
    token: string;
    refreshToken: string;
    scopes: IMSTArray<string, string, string> & IStateTreeNode<string[], string[]>;
    decodedToken: any;
} & IStateTreeNode<{
    userId: string;
    token: string;
    refreshToken: string;
    decodedToken: any;
} & {
    scopes?: string[];
}, {
    userId: string;
    token: string;
    refreshToken: string;
    scopes: string[];
    decodedToken: any;
}>>;
