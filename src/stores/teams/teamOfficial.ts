import { types as t, IModelType, Instance, IStateTreeNode, IType, OptionalProperty } from 'mobx-state-tree';

export type TeamOfficialStoreType = Instance<typeof TeamOfficialStore>;
export interface ITeamOfficialStore extends TeamOfficialStoreType {}

export const TeamOfficialStore = t.model('TeamOfficial', {
    affiliation: t.maybe(t.string),
    degrees: t.maybe(t.string),
    firstName: t.maybe(t.string),
    lastName: t.maybe(t.string),
    middleName: t.maybe(t.string),
    role: t.maybe(t.string),
});
