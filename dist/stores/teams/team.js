"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mobx_state_tree_1 = require("mobx-state-tree");
var teamLocation_1 = require("./teamLocation");
var storeTypes_1 = require("../storeTypes");
var teamScoring_1 = require("./teamScoring");
exports.TeamStore = mobx_state_tree_1.types
    .model('Team', {
    id: mobx_state_tree_1.types.maybe(mobx_state_tree_1.types.identifier),
    loadState: mobx_state_tree_1.types.optional(mobx_state_tree_1.types.enumeration('LoadState', ['init', 'summary', 'full']), 'init'),
    gameType: mobx_state_tree_1.types.optional(mobx_state_tree_1.types.string, ''),
    briefTitle: mobx_state_tree_1.types.optional(mobx_state_tree_1.types.string, ''),
    briefSummary: mobx_state_tree_1.types.optional(mobx_state_tree_1.types.string, ''),
    overallStatus: mobx_state_tree_1.types.optional(mobx_state_tree_1.types.string, ''),
    sponsor: mobx_state_tree_1.types.optional(mobx_state_tree_1.types.string, ''),
    phase: mobx_state_tree_1.types.optional(mobx_state_tree_1.types.string, ''),
    submissionUpdatedDate: mobx_state_tree_1.types.optional(mobx_state_tree_1.types.string, ''),
    gameFirstPostedDate: mobx_state_tree_1.types.optional(mobx_state_tree_1.types.string, ''),
    startDate: mobx_state_tree_1.types.optional(mobx_state_tree_1.types.string, ''),
    locationGeopoints: mobx_state_tree_1.types.optional(mobx_state_tree_1.types.array(storeTypes_1.LatLonStore), []),
    hasRecruitingOverallStatus: mobx_state_tree_1.types.optional(mobx_state_tree_1.types.boolean, false),
    scoring: mobx_state_tree_1.types.maybe(teamScoring_1.TeamScoringStore),
    conditions: mobx_state_tree_1.types.optional(mobx_state_tree_1.types.array(mobx_state_tree_1.types.string), []),
    locations: mobx_state_tree_1.types.optional(mobx_state_tree_1.types.array(teamLocation_1.TeamLocationStore), []),
})
    .views(function (self) { return ({
    get isSummary() {
        return self.loadState === 'summary';
    },
}); });
//# sourceMappingURL=team.js.map