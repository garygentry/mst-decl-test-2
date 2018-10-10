"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var mobx_state_tree_1 = require("mobx-state-tree");
var mobx_1 = require("mobx");
exports.UserStore = mobx_state_tree_1.types.model('User', {
    id: mobx_state_tree_1.types.maybe(mobx_state_tree_1.types.string),
    username: mobx_state_tree_1.types.maybe(mobx_state_tree_1.types.string),
    firstName: mobx_state_tree_1.types.maybe(mobx_state_tree_1.types.string),
    lastName: mobx_state_tree_1.types.maybe(mobx_state_tree_1.types.string),
    email: mobx_state_tree_1.types.maybe(mobx_state_tree_1.types.string),
})
    .actions(function (self) { return ({
    setUser: function (user) {
        self.firstName = user.firstName || undefined;
        self.lastName = user.lastName || undefined;
        self.email = user.email || undefined;
    },
    logout: function () {
        //getRoot<IAppStore>(self).logout;
    },
}); })
    .views(function (self) { return ({
    get identity() {
        return {
            id: self.id,
            username: self.username || undefined,
            email: self.email || undefined,
        };
    },
}); })
    .actions(function (self) {
    var env = mobx_state_tree_1.getEnv(self);
    var appStore = mobx_state_tree_1.getRoot(self);
    return {
        fetch: mobx_state_tree_1.flow(function fetch() {
            return tslib_1.__generator(this, function (_a) {
                if (appStore.isAuthenticated) {
                    try {
                        // const ApiClient = env.ApiClientFactory.create();
                        // const user = yield ApiClient.api.user(self.identity);
                        // self.setUser(user.data);
                    }
                    catch (e) {
                        console.error('Could not Fetch user', e);
                    }
                }
                return [2 /*return*/];
            });
        }),
    };
})
    .actions(function (self) {
    var env = mobx_state_tree_1.getEnv(self);
    var appStore = mobx_state_tree_1.getRoot(self);
    var disposeFetchReaction;
    return {
        afterCreate: function () {
            disposeFetchReaction = mobx_1.reaction(function () { return appStore.isAuthenticated; }, function () {
                self.fetch();
            });
            self.fetch();
        },
        beforeDestroy: function () {
            disposeFetchReaction();
        },
    };
})
    .views(function (self) { return ({}); });
//# sourceMappingURL=user.js.map