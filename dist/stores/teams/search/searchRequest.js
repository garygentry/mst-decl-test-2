"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mobx_state_tree_1 = require("mobx-state-tree");
var storeTypes_1 = require("../../storeTypes");
exports.SearchRequestStore = mobx_state_tree_1.types
    .model('SearchRequest', {
    patientProfile: mobx_state_tree_1.types.maybe(storeTypes_1.PatientProfileStore),
    distanceToLocation: mobx_state_tree_1.types.maybe(mobx_state_tree_1.types.string),
    includeNonRecruitingStatus: mobx_state_tree_1.types.maybe(mobx_state_tree_1.types.boolean),
    page: mobx_state_tree_1.types.optional(mobx_state_tree_1.types.number, 1),
    resultsPerPage: mobx_state_tree_1.types.optional(mobx_state_tree_1.types.number, 10),
})
    .actions(function (self) { return ({
    setDistanceToLocation: function (distance) {
        self.distanceToLocation = distance;
    },
    setIncludeNonRecruitingStatus: function (include) {
        self.includeNonRecruitingStatus = include;
    },
    setPage: function (page) {
        self.page = page;
    },
    setResultsPerPage: function (value) {
        self.resultsPerPage = value;
    },
    setPatientProfile: function (profile) {
        self.patientProfile = profile || {};
    },
}); });
//# sourceMappingURL=searchRequest.js.map