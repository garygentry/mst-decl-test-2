"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mobx_state_tree_1 = require("mobx-state-tree");
exports.AuthenticationResponseStore = mobx_state_tree_1.types.model('AuthenticationResponse', {
    userId: mobx_state_tree_1.types.string,
    token: mobx_state_tree_1.types.string,
    refreshToken: mobx_state_tree_1.types.string,
    scopes: mobx_state_tree_1.types.maybe(mobx_state_tree_1.types.array(mobx_state_tree_1.types.string)),
    decodedToken: mobx_state_tree_1.types.frozen(),
});
//# sourceMappingURL=authenticationResponse.js.map