"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mobx_state_tree_1 = require("mobx-state-tree");
var storeTypes_1 = require("../storeTypes");
exports.TeamAddressStore = mobx_state_tree_1.types.model('TeamAddress', {
    city: mobx_state_tree_1.types.optional(mobx_state_tree_1.types.maybe(mobx_state_tree_1.types.string), ''),
    state: mobx_state_tree_1.types.optional(mobx_state_tree_1.types.maybe(mobx_state_tree_1.types.string), ''),
    postalCode: mobx_state_tree_1.types.optional(mobx_state_tree_1.types.maybe(mobx_state_tree_1.types.string), ''),
    country: mobx_state_tree_1.types.optional(mobx_state_tree_1.types.maybe(mobx_state_tree_1.types.string), ''),
    geoPoint: mobx_state_tree_1.types.maybe(storeTypes_1.LatLonStore),
    timezone: mobx_state_tree_1.types.maybe(storeTypes_1.TimezoneStore),
});
//# sourceMappingURL=teamAddress.js.map