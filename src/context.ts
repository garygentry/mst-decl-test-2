import { onSnapshot, onPatch, IJsonPatch, addMiddleware, getSnapshot, ModelSnapshotType } from 'mobx-state-tree';
import { IObservableArray, toJS } from 'mobx';
import { StoreEnvConfig, StateContext, StateContextOptions } from './types';

import { AppStore, IAppStore, IUserStore } from './stores';
import { ApiStore, IApiStore, IApiClientFactory, createApiClientFactory } from './api';

const createStoreEnvConfig = (
    options: StateContextOptions,
    apiClientFactory: IApiClientFactory
): StoreEnvConfig => {

    // router store config
    const routerStoreConfig: any = {
        routerOptions: options.routerOptions,
        routes: options.routes,
        useBrowserPlugin: options.isBrowser,
    };

    // construct run-time environment passed into root store
    return {
        apiClientFactory,
        mainNavigation: options.mainNavigation,
        routerStoreConfig,
        namedRoutes: options.namedRoutes,
        routerOptions: options.routerOptions,
        apiConfig: options.ApiConfig,
    };
};

// initialize stores and return objects exposed to (can be injected into) components
export const createContext = async (options: StateContextOptions, appStoreSnapshot?: any): Promise<StateContext | any> => { //tslint:disable-line no-any

    const ApiFactory = createApiClientFactory(options.ApiConfig);
    const storeEnvConf = createStoreEnvConfig(options, ApiFactory);

    const apiStore = ApiStore.create({}, storeEnvConf);

    const initialSnapshot = Object.assign({}, { Api: getSnapshot(apiStore) });

    const appStore = AppStore.create(initialSnapshot, storeEnvConf);

    return {
        appStore,
        teamsStore: appStore.teams,
        searchStore: appStore.teams.search,
    };

};
