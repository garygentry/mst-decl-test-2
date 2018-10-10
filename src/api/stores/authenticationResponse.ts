import {
    types as t,
    IModelType,
    Instance,
    IComplexType,
    IMSTArray,
    ISimpleType,
    IStateTreeNode,
    IType,
    OptionalProperty,
} from 'mobx-state-tree';
import { IObservableArray } from 'mobx';

export type AuthenticationResponseStoreType = Instance<typeof AuthenticationResponseStore>;
export interface IAuthenticationResponseStore extends AuthenticationResponseStoreType {}

export const AuthenticationResponseStore = t.model('AuthenticationResponse', {
    userId: t.string,
    token: t.string,
    refreshToken: t.string,
    scopes: t.maybe(t.array(t.string)),
    decodedToken: t.frozen(),
});
