"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mobx_state_tree_1 = require("mobx-state-tree");
var team_1 = require("../team");
exports.SearchResponseHitStore = mobx_state_tree_1.types.model('SearchResponseHit', {
    id: mobx_state_tree_1.types.string,
    source: mobx_state_tree_1.types.frozen(),
    score: mobx_state_tree_1.types.maybeNull(mobx_state_tree_1.types.number),
    team: mobx_state_tree_1.types.reference(team_1.TeamStore),
});
exports.SearchResponseStore = mobx_state_tree_1.types.model('SearchResponse', {
    took: mobx_state_tree_1.types.number,
    hitCount: mobx_state_tree_1.types.number,
    maxScore: mobx_state_tree_1.types.union(mobx_state_tree_1.types.number, mobx_state_tree_1.types.null),
    hits: mobx_state_tree_1.types.array(exports.SearchResponseHitStore),
});
//# sourceMappingURL=searchResponse.js.map