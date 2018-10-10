"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mobx_state_tree_1 = require("mobx-state-tree");
exports.TeamOfficialStore = mobx_state_tree_1.types.model('TeamOfficial', {
    affiliation: mobx_state_tree_1.types.maybe(mobx_state_tree_1.types.string),
    degrees: mobx_state_tree_1.types.maybe(mobx_state_tree_1.types.string),
    firstName: mobx_state_tree_1.types.maybe(mobx_state_tree_1.types.string),
    lastName: mobx_state_tree_1.types.maybe(mobx_state_tree_1.types.string),
    middleName: mobx_state_tree_1.types.maybe(mobx_state_tree_1.types.string),
    role: mobx_state_tree_1.types.maybe(mobx_state_tree_1.types.string),
});
//# sourceMappingURL=teamOfficial.js.map