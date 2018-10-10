"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mobx_state_tree_1 = require("mobx-state-tree");
exports.UserIdentityStore = mobx_state_tree_1.types.model('UserIdentity', {
    id: mobx_state_tree_1.types.maybe(mobx_state_tree_1.types.string),
    username: mobx_state_tree_1.types.maybe(mobx_state_tree_1.types.string),
    email: mobx_state_tree_1.types.maybe(mobx_state_tree_1.types.string),
});
//# sourceMappingURL=userIdentity.js.map