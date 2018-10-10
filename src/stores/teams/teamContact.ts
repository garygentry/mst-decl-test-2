import { types as t, IModelType, Instance, IStateTreeNode, IType, OptionalProperty } from 'mobx-state-tree';

export type TeamContactStoreType = Instance<typeof TeamContactStore>;
export interface ITeamContactStore extends TeamContactStoreType {}

export const TeamContactStore = t.model('TeamContact', {
    degrees: t.maybe(t.string),
    firstName: t.maybe(t.string),
    lastName: t.maybe(t.string),
    middleName: t.maybe(t.string),
});
