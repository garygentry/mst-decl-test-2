import {
    types as t,
    IModelType,
    Instance,
    IStateTreeNode,
    ISimpleType,
    ModelPropertiesDeclarationToProperties,
    ModelSnapshotType
} from 'mobx-state-tree';

export type TeamScoringRemedyStoreType = Instance<typeof TeamScoringRemedyStore>;
export interface ITeamScoringRemedyStore extends TeamScoringRemedyStoreType {}

export const TeamScoringRemedyStore = t.model('TeamScoringRemedy', {
    score: t.number,
    interventionArmCount: t.number,
    placeboArmCount: t.number,
});

export type TeamScoringObservationStoreType = Instance<typeof TeamScoringObservationStore>;
export interface ITeamScoringObservationStore extends TeamScoringObservationStoreType {}

export const TeamScoringObservationStore = t.model('TeamScoringObservation', {
    score: t.number,
});

export type TeamScoringPatientFriendlyStoreType = Instance<typeof TeamScoringPatientFriendlyStore>;
export interface ITeamScoringPatientFriendlyStore extends TeamScoringPatientFriendlyStoreType {}

export const TeamScoringPatientFriendlyStore = t.model('TeamScoringPatientFriendly', {
    score: t.number,
});

export type TeamScoringEligibilityStoreType = Instance<typeof TeamScoringEntryEligibilityStore>;
export interface ITeamScoringEligibilityStore extends TeamScoringEligibilityStoreType {}

export const TeamScoringEntryEligibilityStore = t.model('TeamScoringEligibility', {
    score: t.number,
});

export type TeamScoringStoreType = Instance<typeof TeamScoringStore>;
export interface ITeamScoringStore extends TeamScoringStoreType {}

export const TeamScoringStore = t.model('TeamScoring', {
    remedy: TeamScoringRemedyStore,
    observation: TeamScoringObservationStore,
    patientFriendly: TeamScoringPatientFriendlyStore,
    entryEligibility: TeamScoringEntryEligibilityStore,
});
