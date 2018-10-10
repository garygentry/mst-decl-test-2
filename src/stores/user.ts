import {
    types as t,
    flow,
    IModelType,
    getEnv,
    IType,
    getRoot,
    Instance,
    IStateTreeNode,
    OptionalProperty,
} from 'mobx-state-tree';
import { reaction, IReactionDisposer } from 'mobx';
import { StoreEnvConfig } from '../';
import { IAppStore } from './app';

export type UserStoreType = Instance<typeof UserStore>;
export interface IUserStore extends UserStoreType {}

export const UserStore = t.model('User', {
    id: t.maybe(t.string),
    username: t.maybe(t.string),
    firstName: t.maybe(t.string),
    lastName: t.maybe(t.string),
    email: t.maybe(t.string),
})
.actions(self => ({
    setUser: (user: any) => {
        self.firstName = user.firstName || undefined;
        self.lastName = user.lastName || undefined;
        self.email = user.email || undefined;
    },

    logout: () => {
        //getRoot<IAppStore>(self).logout;
    },
}))
.views(self => ({
    get identity(): any {
        return {
            id: self.id,
            username: self.username || undefined,
            email: self.email || undefined,
        };
    },
}))
.actions(self => {
    const env = getEnv<StoreEnvConfig>(self);
    const appStore = getRoot<IAppStore>(self);

    return {
        fetch: flow(function* fetch() {
            if (appStore.isAuthenticated) {
                try {
                    // const ApiClient = env.ApiClientFactory.create();
                    // const user = yield ApiClient.api.user(self.identity);
                    // self.setUser(user.data);
                } catch (e) {
                    console.error('Could not Fetch user', e);
                }
            }
        }),
    };
})
.actions(self => {
    const env = getEnv<StoreEnvConfig>(self);
    const appStore = getRoot<IAppStore>(self);
    let disposeFetchReaction: IReactionDisposer;

    return {
        afterCreate: () => {
            disposeFetchReaction = reaction(
                () => appStore.isAuthenticated,
                () => {
                    self.fetch();
                }
            );
            self.fetch();
        },

        beforeDestroy: () => {
            disposeFetchReaction();
        },
    };
})
.views(self => ({}));
