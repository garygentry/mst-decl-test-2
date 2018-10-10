import { IAppStore, ITeamSearchStore, IUserStore, ITeamsStore } from '.';

import { IApiClientFactory } from './api';

// run time data passed into stores
export interface StoreEnvConfig {
    namedRoutes: any;
    apiClientFactory: IApiClientFactory;
    mainNavigation: any;
    routerStoreConfig: any;
    routerOptions: any;
    apiConfig: any;
}

// State context passed through Provider
export interface StateContext {
    appStore: IAppStore;
    teamsStore: ITeamsStore;
    searchStore: ITeamSearchStore;
}

export interface StateContextOptions {
    namedRoutes: any;
    routes: any;
    mainNavigation: any;
    isBrowser: boolean;
    ApiConfig: any;
    routerOptions: any;
    devConfig?: any;
}
