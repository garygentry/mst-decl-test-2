import { types as t, IModelType, Instance, ISimpleType, IStateTreeNode } from 'mobx-state-tree';

export type TimezoneStoreType = Instance<typeof TimezoneStore>;
export interface ITimezoneStore extends TimezoneStoreType {}

export const TimezoneStore = t.model('Timezone', {
    name: t.string,
    gmtOffset: t.number,
    dstOffset: t.number,
    rawOffset: t.number,
});
