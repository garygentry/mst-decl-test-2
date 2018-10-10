import { IModelType, Instance, IComplexType, IMSTArray, IMSTMap, IStateTreeNode, ModelPropertiesDeclarationToProperties, ModelSnapshotType, OptionalProperty, ISimpleType, IType } from 'mobx-state-tree';
import { IKeyValueMap } from 'mobx';
import { IAuthenticationResponseStore } from '../api';
export declare type AppStoreType = Instance<typeof AppStore>;
export interface IAppStore extends AppStoreType {
}
export declare const AppStore: IModelType<ModelPropertiesDeclarationToProperties<{
    user: IComplexType<{} & {
        id?: string;
        username?: string;
        firstName?: string;
        lastName?: string;
        email?: string;
    }, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
        id: IType<string, string, string> & OptionalProperty;
        username: IType<string, string, string> & OptionalProperty;
        firstName: IType<string, string, string> & OptionalProperty;
        lastName: IType<string, string, string> & OptionalProperty;
        email: IType<string, string, string> & OptionalProperty;
    }>>, {
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
    }, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
        id: IType<string, string, string> & OptionalProperty;
        username: IType<string, string, string> & OptionalProperty;
        firstName: IType<string, string, string> & OptionalProperty;
        lastName: IType<string, string, string> & OptionalProperty;
        email: IType<string, string, string> & OptionalProperty;
    }>>>> & OptionalProperty;
    teams: IType<any, any, any> & OptionalProperty;
    Api: IModelType<ModelPropertiesDeclarationToProperties<{
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
}>, {
    _syncUserName: () => void;
} & {
    readonly mainNavigation: any;
    readonly routes: any[];
    readonly isLoginRouteActive: boolean;
    readonly loginErrorMessage: string;
    readonly currentRoute: any;
    getNamedRoute(route: string): string;
} & {
    afterCreate: () => void;
    createApiClient: () => any;
    navigate(routeName: string, routeParams?: any, options?: any, done?: any): any;
    submitLogin: (credentials: any) => void;
    logout: () => void;
} & {
    authenticate: () => void;
} & {
    readonly isAuthenticated: boolean;
}, {
    Api: any & {
        authenticationResponse?: any & any;
        loginErrorMessage?: string;
        pendingRequests?: IKeyValueMap<any & any>;
    };
} & {
    user?: {} & any;
    teams?: any;
}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
    user: IComplexType<{} & {
        id?: string;
        username?: string;
        firstName?: string;
        lastName?: string;
        email?: string;
    }, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
        id: IType<string, string, string> & OptionalProperty;
        username: IType<string, string, string> & OptionalProperty;
        firstName: IType<string, string, string> & OptionalProperty;
        lastName: IType<string, string, string> & OptionalProperty;
        email: IType<string, string, string> & OptionalProperty;
    }>>, {
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
    }, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
        id: IType<string, string, string> & OptionalProperty;
        username: IType<string, string, string> & OptionalProperty;
        firstName: IType<string, string, string> & OptionalProperty;
        lastName: IType<string, string, string> & OptionalProperty;
        email: IType<string, string, string> & OptionalProperty;
    }>>>> & OptionalProperty;
    teams: IType<any, any, any> & OptionalProperty;
    Api: IModelType<ModelPropertiesDeclarationToProperties<{
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
}>>, {
    user: any & {
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
    }, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
        id: IType<string, string, string> & OptionalProperty;
        username: IType<string, string, string> & OptionalProperty;
        firstName: IType<string, string, string> & OptionalProperty;
        lastName: IType<string, string, string> & OptionalProperty;
        email: IType<string, string, string> & OptionalProperty;
    }>>>;
    teams: any;
    Api: any & {
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
        }>>, any & IStateTreeNode<{
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
        }>>>>> & OptionalProperty;
    }>>>;
} & {
    _syncUserName: () => void;
} & {
    readonly mainNavigation: any;
    readonly routes: any[];
    readonly isLoginRouteActive: boolean;
    readonly loginErrorMessage: string;
    readonly currentRoute: any;
    getNamedRoute(route: string): string;
} & {
    afterCreate: () => void;
    createApiClient: () => any;
    navigate(routeName: string, routeParams?: any, options?: any, done?: any): any;
    submitLogin: (credentials: any) => void;
    logout: () => void;
} & {
    authenticate: () => void;
} & {
    readonly isAuthenticated: boolean;
} & IStateTreeNode<{
    Api: any & {
        authenticationResponse?: any & any;
        loginErrorMessage?: string;
        pendingRequests?: IKeyValueMap<any & any>;
    };
} & {
    user?: {} & any;
    teams?: any;
}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
    user: IComplexType<{} & {
        id?: string;
        username?: string;
        firstName?: string;
        lastName?: string;
        email?: string;
    }, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
        id: IType<string, string, string> & OptionalProperty;
        username: IType<string, string, string> & OptionalProperty;
        firstName: IType<string, string, string> & OptionalProperty;
        lastName: IType<string, string, string> & OptionalProperty;
        email: IType<string, string, string> & OptionalProperty;
    }>>, {
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
    }, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
        id: IType<string, string, string> & OptionalProperty;
        username: IType<string, string, string> & OptionalProperty;
        firstName: IType<string, string, string> & OptionalProperty;
        lastName: IType<string, string, string> & OptionalProperty;
        email: IType<string, string, string> & OptionalProperty;
    }>>>> & OptionalProperty;
    teams: IType<any, any, any> & OptionalProperty;
    Api: IModelType<ModelPropertiesDeclarationToProperties<{
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
}>>>>;
