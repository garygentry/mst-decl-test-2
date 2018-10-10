"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mobx_state_tree_1 = require("mobx-state-tree");
var teamAddress_1 = require("./teamAddress");
var teamContact_1 = require("./teamContact");
var teamOfficial_1 = require("./teamOfficial");
exports.TeamLocationStore = mobx_state_tree_1.types.model('TeamLocation', {
    facilityName: mobx_state_tree_1.types.maybe(mobx_state_tree_1.types.string),
    address: mobx_state_tree_1.types.maybe(teamAddress_1.TeamAddressStore),
    contact: mobx_state_tree_1.types.maybe(teamContact_1.TeamContactStore),
    contactBackup: mobx_state_tree_1.types.maybe(teamContact_1.TeamContactStore),
    recruitmentStatus: mobx_state_tree_1.types.optional(mobx_state_tree_1.types.string, ''),
    officials: mobx_state_tree_1.types.optional(mobx_state_tree_1.types.array(teamOfficial_1.TeamOfficialStore), []),
});
//# sourceMappingURL=teamLocation.js.map