"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var mobx_state_tree_1 = require("mobx-state-tree");
var authenticationResponse_1 = require("./authenticationResponse");
var apiRequestConfig_1 = require("./apiRequestConfig");
exports.ApiStore = mobx_state_tree_1.types
    .model('Api', {
    authenticationResponse: mobx_state_tree_1.types.maybe(authenticationResponse_1.AuthenticationResponseStore),
    loginErrorMessage: mobx_state_tree_1.types.maybe(mobx_state_tree_1.types.string),
    pendingRequests: mobx_state_tree_1.types.optional(mobx_state_tree_1.types.map(apiRequestConfig_1.ApiRequestConfigStore), {}),
})
    .views(function (self) { return ({
    get loginUserId() {
        return self.authenticationResponse ? self.authenticationResponse.userId : undefined;
    },
    get isAuthenticated() {
        return self.authenticationResponse ? true : false;
    },
}); })
    .actions(function (self) {
    var env = mobx_state_tree_1.getEnv(self);
    return {
        afterCreate: function () {
            // set a reference into an object already in Env to provide access to the Api
            // client without needing to pass in auth data
            var factory = env.apiClientFactory;
            factory.setApiStore(self);
        },
        setAuthenticationResponse: function (authData) {
            self.authenticationResponse = authData;
        },
    };
})
    .actions(function (self) { return ({
    logout: function () {
        self.setAuthenticationResponse(undefined);
        self.loginErrorMessage = undefined;
    },
    setPendingRequest: function (request) {
        self.pendingRequests.put({
            id: request.id,
            url: request.url,
            baseURL: request.baseURL,
            method: request.method,
        });
    },
    resolvePendingRequest: function (response) {
        self.pendingRequests.delete(response.config['id']);
    },
}); })
    .actions(function (self) {
    var env = mobx_state_tree_1.getEnv(self);
    var requestInterceptor = {
        onFulfilled: function (config) {
            self.setPendingRequest(config);
            return config;
        },
    };
    var responseInterceptor = {
        onFulfilled: function (response) {
            //debugger
            //debug(`---------RESPONSE--${response.config['id']}----------`)
            self.resolvePendingRequest(response);
            return response;
        },
        onError: function (error) {
            // tslint:disable-line no-any
            //debug('---------RESPONSE ERROR------------')
        },
    };
    return {
        createClient: function () {
            // return createApiClient(
            //     self.authenticationResponse,
            //     env.ApiConfig,
            //     requestInterceptor,
            //     responseInterceptor
            // );
            return {};
        },
        login: mobx_state_tree_1.flow(function loging(credentials) {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/];
            });
        }),
    };
});
//# sourceMappingURL=api.js.map