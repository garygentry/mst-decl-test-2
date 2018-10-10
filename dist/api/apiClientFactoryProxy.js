"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// a proxy object to allow consumers to get access to the api (via the api store)
// without needing to get a reference to it (and having to find and pass user auth data in)
// allows for being injected into stores, and accessible to stores that might get detached from root (but still have access to env)
var ApiClientFactoryProxy = /** @class */ (function () {
    function ApiClientFactoryProxy(config) {
        this.config = config;
    }
    ApiClientFactoryProxy.prototype.create = function () {
        if (!this._apiStore) {
            throw new Error('Cannot create client.  ApiStore is not initialized.');
        }
        return this._apiStore.createClient();
    };
    ApiClientFactoryProxy.prototype.setApiStore = function (store) {
        this._apiStore = store;
    };
    return ApiClientFactoryProxy;
}());
exports.ApiClientFactoryProxy = ApiClientFactoryProxy;
exports.createApiClientFactory = function (config) {
    return new ApiClientFactoryProxy(config);
};
//# sourceMappingURL=apiClientFactoryProxy.js.map