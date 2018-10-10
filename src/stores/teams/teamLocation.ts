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
    ModelPropertiesDeclarationToProperties,
    ISimpleType
} from 'mobx-state-tree';
import { IObservableArray } from 'mobx';

import { TeamAddressStore } from './teamAddress';
import { TeamContactStore } from './teamContact';
import { TeamOfficialStore } from './teamOfficial';

export type TeamLocationStoreType = Instance<typeof TeamLocationStore>;
export interface ITeamLocationStore extends TeamLocationStoreType {}

export const TeamLocationStore = t.model('TeamLocation', {
    facilityName: t.maybe(t.string),
    address: t.maybe(TeamAddressStore),
    contact: t.maybe(TeamContactStore),
    contactBackup: t.maybe(TeamContactStore),
    recruitmentStatus: t.optional(t.string, ''),
    officials: t.optional(t.array(TeamOfficialStore), []),
});
