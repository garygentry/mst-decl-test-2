import { types as t, IModelType, Instance, ISimpleType, IStateTreeNode } from 'mobx-state-tree';

export type ApiRequestConfigStoreType = Instance<typeof ApiRequestConfigStore>;
export interface IApiRequestConfigStore extends ApiRequestConfigStoreType {}

export const ApiRequestConfigStore = t.model('ApiRequestConfig', {
    id: t.number,
    url: t.string,
    baseURL: t.string,
    method: t.string,
});
