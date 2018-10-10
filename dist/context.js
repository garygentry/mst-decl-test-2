"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var mobx_state_tree_1 = require("mobx-state-tree");
var stores_1 = require("./stores");
var api_1 = require("./api");
var createStoreEnvConfig = function (options, apiClientFactory) {
    // router store config
    var routerStoreConfig = {
        routerOptions: options.routerOptions,
        routes: options.routes,
        useBrowserPlugin: options.isBrowser,
    };
    // construct run-time environment passed into root store
    return {
        apiClientFactory: apiClientFactory,
        mainNavigation: options.mainNavigation,
        routerStoreConfig: routerStoreConfig,
        namedRoutes: options.namedRoutes,
        routerOptions: options.routerOptions,
        apiConfig: options.ApiConfig,
    };
};
// initialize stores and return objects exposed to (can be injected into) components
exports.createContext = function (options, appStoreSnapshot) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
    var ApiFactory, storeEnvConf, apiStore, initialSnapshot, appStore;
    return tslib_1.__generator(this, function (_a) {
        ApiFactory = api_1.createApiClientFactory(options.ApiConfig);
        storeEnvConf = createStoreEnvConfig(options, ApiFactory);
        apiStore = api_1.ApiStore.create({}, storeEnvConf);
        initialSnapshot = Object.assign({}, { Api: mobx_state_tree_1.getSnapshot(apiStore) });
        appStore = stores_1.AppStore.create(initialSnapshot, storeEnvConf);
        return [2 /*return*/, {
                appStore: appStore,
                teamsStore: appStore.teams,
                searchStore: appStore.teams.search,
            }];
    });
}); };
//# sourceMappingURL=context.js.map