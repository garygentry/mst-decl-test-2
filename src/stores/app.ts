import {
    types as t,
    flow,
    IModelType,
    getEnv,
    applySnapshot,
    getRoot,
    onPatch,
    Instance,
    IComplexType,
    IMSTArray,
    IMSTMap,
    IStateTreeNode,
    ModelPropertiesDeclarationToProperties,
    ModelSnapshotType,
    OptionalProperty,
    ISimpleType,
    IType,
    IArrayType,
} from 'mobx-state-tree';
import { reaction, IObservableArray, IKeyValueMap } from 'mobx';
import { StoreEnvConfig } from '../';
import { UserStore, IUserStore } from './user';
import { TeamsStore, ISearchResponseHitStore } from './teams';
import { ApiStore, IAuthenticationResponseStore } from '../api';
import { IPatientProfileStore } from '../stores/storeTypes';
import { ISearchRequestStore, ITeamStore } from '../stores/teams';

export type AppStoreType = Instance<typeof AppStore>;
export interface IAppStore extends AppStoreType {}

export const AppStore = t

    .model('App', {
        user: t.maybe(UserStore),
        teams: t.optional(t.frozen(), {}),
        Api: ApiStore
    })

    .extend(self => {
        const env = getEnv<StoreEnvConfig>(self);

        return {
            actions: {
                _syncUserName: () => {
                },
            },

            views: {
                get mainNavigation(): any {
                    return undefined;
                },

                get routes(): any[] {
                    return [];
                },

                get isLoginRouteActive(): boolean {
                    return true;
                },

                get loginErrorMessage(): string | undefined {
                    return undefined;
                },

                get currentRoute(): any | undefined {
                    return undefined;
                },

                getNamedRoute(route: string): string | undefined {
                    return undefined;
                },
            },
        };
    })

    .actions(self => {
        const env = getEnv<StoreEnvConfig>(self);

        return {
            afterCreate: () => {
                onPatch(self.Api, p => {
                    if (p.path === '/authenticationResponse') {
                        self._syncUserName();
                    }
                });

                self._syncUserName();
            },

            createApiClient: (): any => {
                return undefined;
            },

            navigate(
                routeName: string,
                routeParams: any = {},
                options: any = {},
                done?: any
            ): any {
                return (() => null);
            },

            submitLogin: (credentials: any) => {
            },

            logout: () => {
            },
        };
    })

    .actions(self => {
        const env = getEnv<StoreEnvConfig>(self);

        return {
            authenticate: () => {
                //self.navigate(env.namedRoutes.login as string, env.routerOptions.defaultParams || {});
            },
        };
    })

    .views(self => ({
        get isAuthenticated(): boolean {
            //return self.api.isAuthenticated;
            return true;
        },
    }));
