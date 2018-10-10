import {
    types as t,
    getEnv,
    getRoot,
    flow,
    IModelType,
    Instance,
    IComplexType,
    IMSTMap,
    IStateTreeNode,
    IType,
    ModelSnapshotType,
    OptionalProperty,
    ISimpleType,
    ModelPropertiesDeclarationToProperties,
    IMSTArray,
} from 'mobx-state-tree';
import { IKeyValueMap } from 'mobx';
import { IObservableArray } from 'mobx';

import { StoreEnvConfig } from '../../types';
import { ApiClientFactoryProxy } from '../apiClientFactoryProxy';
import { UserIdentityStore, IUserIdentityStore } from './userIdentity';
import { AuthenticationResponseStore, IAuthenticationResponseStore } from './authenticationResponse';

import { ApiRequestConfigStore, IApiRequestConfigStore } from './apiRequestConfig';

export type ApiStoreType = Instance<typeof ApiStore>;
export interface IApiStore extends ApiStoreType {}

export const ApiStore = t
    .model('Api', {
        authenticationResponse: t.maybe(AuthenticationResponseStore),
        loginErrorMessage: t.maybe(t.string),
        pendingRequests: t.optional(t.map(ApiRequestConfigStore), {}),
    })
    .views(self => ({
        get loginUserId(): string | undefined {
            return self.authenticationResponse ? self.authenticationResponse.userId : undefined;
        },

        get isAuthenticated(): boolean {
            return self.authenticationResponse ? true : false;
        },
    }))
    .actions(self => {
        const env = getEnv<StoreEnvConfig>(self);

        return {
            afterCreate: () => {
                // set a reference into an object already in Env to provide access to the Api
                // client without needing to pass in auth data
                const factory = env.apiClientFactory as ApiClientFactoryProxy;
                factory.setApiStore(self as IApiStore);
            },

            setAuthenticationResponse: (authData?: IAuthenticationResponseStore) => {
                self.authenticationResponse = authData;
            },
        };
    })
    .actions(self => ({
        logout: () => {
            self.setAuthenticationResponse(undefined);
            self.loginErrorMessage = undefined;
        },

        setPendingRequest: (request: any) => {
            self.pendingRequests.put({
                id: request.id,
                url: request.url!,
                baseURL: request.baseURL!,
                method: request.method!,
            });
        },

        resolvePendingRequest: (response: any) => {
            self.pendingRequests.delete(response.config['id'] as string);
        },
    }))
    .actions(self => {
        const env = getEnv<StoreEnvConfig>(self);
        const requestInterceptor: any = {
            onFulfilled: (config: any): any => {
                self.setPendingRequest(config);

                return config;
            },

            //onError: (error: any): any => {
            //    debug('---------REQUEST ERROR------------')
            //}
        };

        const responseInterceptor: any = {
            onFulfilled: (response: any): any => {
                //debugger
                //debug(`---------RESPONSE--${response.config['id']}----------`)
                self.resolvePendingRequest(response);
                return response;
            },

            onError: (error: any): any => { //tslint:disable-line no-any
                // tslint:disable-line no-any
                //debug('---------RESPONSE ERROR------------')
            },
        };

        return {
            createClient: (): any => {
                // return createApiClient(
                //     self.authenticationResponse,
                //     env.ApiConfig,
                //     requestInterceptor,
                //     responseInterceptor
                // );
                return {
                    
                }

            },

            login: flow(function* loging(credentials: any) {
                // //const ApiAuthClient = env.AuthenticationClient;
                // self.logout();
                // try {
                //     const authData = yield ApiAuthClient.login(credentials);
                //     self.setAuthenticationResponse(authData as IAuthenticationResponseStore);
                // } catch (e) {
                //     self.loginErrorMessage = e.message;
                // }
            }),
        };
    });
