"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mobx_state_tree_1 = require("mobx-state-tree");
var user_1 = require("./user");
var api_1 = require("../api");
exports.AppStore = mobx_state_tree_1.types
    .model('App', {
    user: mobx_state_tree_1.types.maybe(user_1.UserStore),
    teams: mobx_state_tree_1.types.optional(mobx_state_tree_1.types.frozen(), {}),
    Api: api_1.ApiStore
})
    .extend(function (self) {
    var env = mobx_state_tree_1.getEnv(self);
    return {
        actions: {
            _syncUserName: function () {
            },
        },
        views: {
            get mainNavigation() {
                return undefined;
            },
            get routes() {
                return [];
            },
            get isLoginRouteActive() {
                return true;
            },
            get loginErrorMessage() {
                return undefined;
            },
            get currentRoute() {
                return undefined;
            },
            getNamedRoute: function (route) {
                return undefined;
            },
        },
    };
})
    .actions(function (self) {
    var env = mobx_state_tree_1.getEnv(self);
    return {
        afterCreate: function () {
            mobx_state_tree_1.onPatch(self.Api, function (p) {
                if (p.path === '/authenticationResponse') {
                    self._syncUserName();
                }
            });
            self._syncUserName();
        },
        createApiClient: function () {
            return undefined;
        },
        navigate: function (routeName, routeParams, options, done) {
            if (routeParams === void 0) { routeParams = {}; }
            if (options === void 0) { options = {}; }
            return (function () { return null; });
        },
        submitLogin: function (credentials) {
        },
        logout: function () {
        },
    };
})
    .actions(function (self) {
    var env = mobx_state_tree_1.getEnv(self);
    return {
        authenticate: function () {
            //self.navigate(env.namedRoutes.login as string, env.routerOptions.defaultParams || {});
        },
    };
})
    .views(function (self) { return ({
    get isAuthenticated() {
        //return self.api.isAuthenticated;
        return true;
    },
}); });
//# sourceMappingURL=app.js.map