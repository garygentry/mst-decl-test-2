import {
    types as t,
    IModelType,
    Instance,
    IComplexType,
    IStateTreeNode,
    IType,
    ModelSnapshotType,
    OptionalProperty,
    ISimpleType,
    ModelPropertiesDeclarationToProperties
} from 'mobx-state-tree';

import { TimezoneStore, LatLonStore } from '../storeTypes';

export type TeamAddressStoreType = Instance<typeof TeamAddressStore>;
export interface ITeamAddressStore extends TeamAddressStoreType {}

export const TeamAddressStore = t.model('TeamAddress', {
    city: t.optional(t.maybe(t.string), ''),
    state: t.optional(t.maybe(t.string), ''),
    postalCode: t.optional(t.maybe(t.string), ''),
    country: t.optional(t.maybe(t.string), ''),
    geoPoint: t.maybe(LatLonStore),
    timezone: t.maybe(TimezoneStore),
});
