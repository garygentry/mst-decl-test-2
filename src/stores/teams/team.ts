import {
    types as t,
    IModelType,
    Instance,
    IComplexType,
    IMSTArray,
    IStateTreeNode,
    IType,
    ModelSnapshotType,
    OptionalProperty,
    ISimpleType,
    ModelPropertiesDeclarationToProperties,
} from 'mobx-state-tree';
import { IObservableArray } from 'mobx';

import { TeamLocationStore } from './teamLocation';
import { LatLonStore } from '../storeTypes';
import { TeamScoringStore } from './teamScoring';

export type TeamStoreType = Instance<typeof TeamStore>;
export interface ITeamStore extends TeamStoreType {}

export const TeamStore = t
    .model('Team', {
        id: t.maybe(t.identifier),
        loadState: t.optional(t.enumeration('LoadState', ['init', 'summary', 'full']), 'init'),
        gameType: t.optional(t.string, ''),
        briefTitle: t.optional(t.string, ''),
        briefSummary: t.optional(t.string, ''),
        overallStatus: t.optional(t.string, ''),
        sponsor: t.optional(t.string, ''),
        phase: t.optional(t.string, ''),
        submissionUpdatedDate: t.optional(t.string, ''),
        gameFirstPostedDate: t.optional(t.string, ''),
        startDate: t.optional(t.string, ''),
        locationGeopoints: t.optional(t.array(LatLonStore), []),
        hasRecruitingOverallStatus: t.optional(t.boolean, false),
        scoring: t.maybe(TeamScoringStore),
        conditions: t.optional(t.array(t.string), []),
        locations: t.optional(t.array(TeamLocationStore), []),
    })

    .views(self => ({
        get isSummary(): boolean {
            return self.loadState === 'summary';
        },
    }));
