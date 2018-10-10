import { types as t, IModelType, Instance, IType, OptionalProperty, IStateTreeNode } from 'mobx-state-tree';

export type UserIdentityStoreType = Instance<typeof UserIdentityStore>;
export interface IUserIdentityStore extends UserIdentityStoreType {}

export const UserIdentityStore = t.model('UserIdentity', {
    id: t.maybe(t.string),
    username: t.maybe(t.string),
    email: t.maybe(t.string),
});
