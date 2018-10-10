import {
    types as t,
    IModelType,
    IType,
    Instance,
    OptionalProperty,
    IArrayType,
    IMSTArray,
    ISimpleType,
    IStateTreeNode,
    IComplexType,
    ModelSnapshotType,
    ModelPropertiesDeclarationToProperties,
} from 'mobx-state-tree';

import { PatientProfileStore, IPatientProfileStore } from '../../storeTypes';

export type SearchRequestStoreType = Instance<typeof SearchRequestStore>;
export interface ISearchRequestStore extends SearchRequestStoreType {}

export const SearchRequestStore = t
    .model('SearchRequest', {
        patientProfile: t.maybe(PatientProfileStore),
        distanceToLocation: t.maybe(t.string),
        includeNonRecruitingStatus: t.maybe(t.boolean),
        page: t.optional(t.number, 1),
        resultsPerPage: t.optional(t.number, 10),
    })
    .actions(self => ({
        setDistanceToLocation: (distance?: string) => {
            self.distanceToLocation = distance;
        },
        setIncludeNonRecruitingStatus: (include?: boolean) => {
            self.includeNonRecruitingStatus = include;
        },
        setPage: (page: number) => {
            self.page = page;
        },
        setResultsPerPage: (value: number) => {
            self.resultsPerPage = value;
        },

        setPatientProfile: (profile: any) => {
            self.patientProfile = profile || ({} as any);
        },
    }));
