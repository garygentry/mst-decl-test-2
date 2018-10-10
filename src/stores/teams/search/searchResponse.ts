import {
    types as t,
    IModelType,
    IType,
    Instance,
    IArrayType,
    IMSTArray,
    ISimpleType,
    IStateTreeNode,
    OptionalProperty,
    ModelSnapshotType,
    ModelPropertiesDeclarationToProperties,
    IComplexType,
    IReferenceType
} from 'mobx-state-tree';
import { IObservableArray } from 'mobx';

import { TeamStore } from '../team';

export type SearchResponseHitStoreType = Instance<typeof SearchResponseHitStore>;
export interface ISearchResponseHitStore extends SearchResponseHitStoreType {}

export const SearchResponseHitStore = t.model('SearchResponseHit', {
    id: t.string,
    source: t.frozen(),
    score: t.maybeNull(t.number),
    team: t.reference(TeamStore),
});

export type SearchResponseStoreType = Instance<typeof SearchResponseStore>;
export interface ISearchResponseStore extends SearchResponseStoreType {}

export const SearchResponseStore = t.model('SearchResponse', {
    took: t.number,
    hitCount: t.number,
    maxScore: t.union(t.number, t.null),
    hits: t.array(SearchResponseHitStore),
});
