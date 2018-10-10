import { IModelType, Instance, IComplexType, IMSTMap, IStateTreeNode, IType, ModelSnapshotType, OptionalProperty, ISimpleType, ModelPropertiesDeclarationToProperties, IMSTArray } from 'mobx-state-tree';
import { IKeyValueMap } from 'mobx';
import { IAuthenticationResponseStore } from './authenticationResponse';
export declare type ApiStoreType = Instance<typeof ApiStore>;
export interface IApiStore extends ApiStoreType {
}
export declare const ApiStore: IModelType<ModelPropertiesDeclarationToProperties<{
    authenticationResponse: IComplexType<{
        userId: string;
        token: string;
        refreshToken: string;
        decodedToken: any;
    } & {
        scopes?: string[];
    }, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
        userId: ISimpleType<string>;
        token: ISimpleType<string>;
        refreshToken: ISimpleType<string>;
        scopes: IComplexType<string[], string[], IMSTArray<string, string, string>> & OptionalProperty;
        decodedToken: IType<any, any, any>;
    }>>, {
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
    }, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
        userId: ISimpleType<string>;
        token: ISimpleType<string>;
        refreshToken: ISimpleType<string>;
        scopes: IComplexType<string[], string[], IMSTArray<string, string, string>> & OptionalProperty;
        decodedToken: IType<any, any, any>;
    }>>>> & OptionalProperty;
    loginErrorMessage: IType<string, string, string> & OptionalProperty;
    pendingRequests: IComplexType<IKeyValueMap<{
        id: number;
        url: string;
        baseURL: string;
        method: string;
    } & {}>, IKeyValueMap<ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
        id: ISimpleType<number>;
        url: ISimpleType<string>;
        baseURL: ISimpleType<string>;
        method: ISimpleType<string>;
    }>>>, IMSTMap<{
        id: number;
        url: string;
        baseURL: string;
        method: string;
    } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
        id: ISimpleType<number>;
        url: ISimpleType<string>;
        baseURL: ISimpleType<string>;
        method: ISimpleType<string>;
    }>>, {
        id: number;
        url: string;
        baseURL: string;
        method: string;
    } & IStateTreeNode<{
        id: number;
        url: string;
        baseURL: string;
        method: string;
    } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
        id: ISimpleType<number>;
        url: ISimpleType<string>;
        baseURL: ISimpleType<string>;
        method: ISimpleType<string>;
    }>>>>> & OptionalProperty;
}>, {
    readonly loginUserId: string;
    readonly isAuthenticated: boolean;
} & {
    afterCreate: () => void;
    setAuthenticationResponse: (authData?: IAuthenticationResponseStore) => void;
} & {
    logout: () => void;
    setPendingRequest: (request: any) => void;
    resolvePendingRequest: (response: any) => void;
} & {
    createClient: () => any;
    login: (a1: any) => Promise<any>;
}, {} & {
    authenticationResponse?: {
        userId: string;
        token: string;
        refreshToken: string;
        decodedToken: any;
    } & any;
    loginErrorMessage?: string;
    pendingRequests?: IKeyValueMap<{
        id: number;
        url: string;
        baseURL: string;
        method: string;
    } & any>;
}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
    authenticationResponse: IComplexType<{
        userId: string;
        token: string;
        refreshToken: string;
        decodedToken: any;
    } & {
        scopes?: string[];
    }, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
        userId: ISimpleType<string>;
        token: ISimpleType<string>;
        refreshToken: ISimpleType<string>;
        scopes: IComplexType<string[], string[], IMSTArray<string, string, string>> & OptionalProperty;
        decodedToken: IType<any, any, any>;
    }>>, {
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
    }, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
        userId: ISimpleType<string>;
        token: ISimpleType<string>;
        refreshToken: ISimpleType<string>;
        scopes: IComplexType<string[], string[], IMSTArray<string, string, string>> & OptionalProperty;
        decodedToken: IType<any, any, any>;
    }>>>> & OptionalProperty;
    loginErrorMessage: IType<string, string, string> & OptionalProperty;
    pendingRequests: IComplexType<IKeyValueMap<{
        id: number;
        url: string;
        baseURL: string;
        method: string;
    } & {}>, IKeyValueMap<ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
        id: ISimpleType<number>;
        url: ISimpleType<string>;
        baseURL: ISimpleType<string>;
        method: ISimpleType<string>;
    }>>>, IMSTMap<{
        id: number;
        url: string;
        baseURL: string;
        method: string;
    } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
        id: ISimpleType<number>;
        url: ISimpleType<string>;
        baseURL: ISimpleType<string>;
        method: ISimpleType<string>;
    }>>, {
        id: number;
        url: string;
        baseURL: string;
        method: string;
    } & IStateTreeNode<{
        id: number;
        url: string;
        baseURL: string;
        method: string;
    } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
        id: ISimpleType<number>;
        url: ISimpleType<string>;
        baseURL: ISimpleType<string>;
        method: ISimpleType<string>;
    }>>>>> & OptionalProperty;
}>>, {
    authenticationResponse: any & IStateTreeNode<{
        userId: string;
        token: string;
        refreshToken: string;
        decodedToken: any;
    } & {
        scopes?: string[];
    }, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
        userId: ISimpleType<string>;
        token: ISimpleType<string>;
        refreshToken: ISimpleType<string>;
        scopes: IComplexType<string[], string[], IMSTArray<string, string, string>> & OptionalProperty;
        decodedToken: IType<any, any, any>;
    }>>>;
    loginErrorMessage: string;
    pendingRequests: IMSTMap<{
        id: number;
        url: string;
        baseURL: string;
        method: string;
    } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
        id: ISimpleType<number>;
        url: ISimpleType<string>;
        baseURL: ISimpleType<string>;
        method: ISimpleType<string>;
    }>>, any & IStateTreeNode<{
        id: number;
        url: string;
        baseURL: string;
        method: string;
    } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
        id: ISimpleType<number>;
        url: ISimpleType<string>;
        baseURL: ISimpleType<string>;
        method: ISimpleType<string>;
    }>>>> & IStateTreeNode<IKeyValueMap<{
        id: number;
        url: string;
        baseURL: string;
        method: string;
    } & {}>, IKeyValueMap<ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
        id: ISimpleType<number>;
        url: ISimpleType<string>;
        baseURL: ISimpleType<string>;
        method: ISimpleType<string>;
    }>>>>;
} & {
    readonly loginUserId: string;
    readonly isAuthenticated: boolean;
} & {
    afterCreate: () => void;
    setAuthenticationResponse: (authData?: IAuthenticationResponseStore) => void;
} & {
    logout: () => void;
    setPendingRequest: (request: any) => void;
    resolvePendingRequest: (response: any) => void;
} & {
    createClient: () => any;
    login: (a1: any) => Promise<any>;
} & IStateTreeNode<{} & {
    authenticationResponse?: {
        userId: string;
        token: string;
        refreshToken: string;
        decodedToken: any;
    } & any;
    loginErrorMessage?: string;
    pendingRequests?: IKeyValueMap<{
        id: number;
        url: string;
        baseURL: string;
        method: string;
    } & any>;
}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
    authenticationResponse: IComplexType<{
        userId: string;
        token: string;
        refreshToken: string;
        decodedToken: any;
    } & {
        scopes?: string[];
    }, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
        userId: ISimpleType<string>;
        token: ISimpleType<string>;
        refreshToken: ISimpleType<string>;
        scopes: IComplexType<string[], string[], IMSTArray<string, string, string>> & OptionalProperty;
        decodedToken: IType<any, any, any>;
    }>>, {
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
    }, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
        userId: ISimpleType<string>;
        token: ISimpleType<string>;
        refreshToken: ISimpleType<string>;
        scopes: IComplexType<string[], string[], IMSTArray<string, string, string>> & OptionalProperty;
        decodedToken: IType<any, any, any>;
    }>>>> & OptionalProperty;
    loginErrorMessage: IType<string, string, string> & OptionalProperty;
    pendingRequests: IComplexType<IKeyValueMap<{
        id: number;
        url: string;
        baseURL: string;
        method: string;
    } & {}>, IKeyValueMap<ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
        id: ISimpleType<number>;
        url: ISimpleType<string>;
        baseURL: ISimpleType<string>;
        method: ISimpleType<string>;
    }>>>, IMSTMap<{
        id: number;
        url: string;
        baseURL: string;
        method: string;
    } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
        id: ISimpleType<number>;
        url: ISimpleType<string>;
        baseURL: ISimpleType<string>;
        method: ISimpleType<string>;
    }>>, {
        id: number;
        url: string;
        baseURL: string;
        method: string;
    } & IStateTreeNode<{
        id: number;
        url: string;
        baseURL: string;
        method: string;
    } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
        id: ISimpleType<number>;
        url: ISimpleType<string>;
        baseURL: ISimpleType<string>;
        method: ISimpleType<string>;
    }>>>>> & OptionalProperty;
}>>>>;
