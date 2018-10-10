"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mobx_state_tree_1 = require("mobx-state-tree");
exports.TeamScoringRemedyStore = mobx_state_tree_1.types.model('TeamScoringRemedy', {
    score: mobx_state_tree_1.types.number,
    interventionArmCount: mobx_state_tree_1.types.number,
    placeboArmCount: mobx_state_tree_1.types.number,
});
exports.TeamScoringObservationStore = mobx_state_tree_1.types.model('TeamScoringObservation', {
    score: mobx_state_tree_1.types.number,
});
exports.TeamScoringPatientFriendlyStore = mobx_state_tree_1.types.model('TeamScoringPatientFriendly', {
    score: mobx_state_tree_1.types.number,
});
exports.TeamScoringEntryEligibilityStore = mobx_state_tree_1.types.model('TeamScoringEligibility', {
    score: mobx_state_tree_1.types.number,
});
exports.TeamScoringStore = mobx_state_tree_1.types.model('TeamScoring', {
    remedy: exports.TeamScoringRemedyStore,
    observation: exports.TeamScoringObservationStore,
    patientFriendly: exports.TeamScoringPatientFriendlyStore,
    entryEligibility: exports.TeamScoringEntryEligibilityStore,
});
//# sourceMappingURL=teamScoring.js.map