import { IAppStore, ITeamSearchStore, ITeamsStore } from '.';
import { IApiClientFactory } from './api';
export interface StoreEnvConfig {
    namedRoutes: any;
    apiClientFactory: IApiClientFactory;
    mainNavigation: any;
    routerStoreConfig: any;
    routerOptions: any;
    apiConfig: any;
}
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
