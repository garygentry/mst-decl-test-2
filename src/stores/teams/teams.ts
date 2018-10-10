import {
    types as t,
    flow,
    IModelType,
    getEnv,
    applySnapshot,
    isStateTreeNode,
    Instance,
    IComplexType,
    IMSTArray,
    IMSTMap,
    IStateTreeNode,
    IType,
    ModelSnapshotType,
    OptionalProperty,
    ISimpleType,
    ModelPropertiesDeclarationToProperties,
    IArrayType,
    IReferenceType
} from 'mobx-state-tree';
import { reaction, IObservableArray, IKeyValueMap } from 'mobx';
import { StoreEnvConfig } from '../../';

import { TeamSearchStore, ITeamSearchStore, ISearchRequestStore, ISearchResponseHitStore } from './search';
import { TeamStore, ITeamStore } from './team';
import { IPatientProfileStore } from '../storeTypes';

export type TeamsStoreType = Instance<typeof TeamsStore>;
export interface ITeamsStore extends TeamsStoreType {}

export const TeamsStore = t

    .model('Teams', {
        activeTeam: t.maybe(t.reference(TeamStore)),
        search: t.optional(TeamSearchStore, {}),
        cache: t.optional(t.map(TeamStore), {}),
        isLoading: t.optional(t.boolean, false),
    })

    .extend(self => {
        const cacheTeam = (team: any | ITeamStore, isActive = false) => {
            //const teamStore = toTeamStore(team);
            // self.cache.put(teamStore);
            // if (isActive) {
            //     self.activeTeam = teamStore.id as any; //tslint:disable-line no-any
            // }
        };

        return {
            actions: {
                cacheTeam,
            },
        };
    })

    .extend(self => {
        const env = getEnv<StoreEnvConfig>(self);

        const fetchTeam: ((id: string, isActive: boolean) => any) = flow(function* fetchTeamg( //tslint:disable-line no-any
            id: string,
            isActive = false
        ) {
            try {
                self.isLoading = true;
                const client = env.apiClientFactory.create();
                const response = yield client.api.team(id);
                self.cacheTeam(response.data as any, isActive);
            } catch (e) {
                throw new Error(`fetchTeam failed: ${e.message}`);
            } finally {
                self.isLoading = false;
            }
        });

        return {
            actions: {
                fetchTeam,
            },
        };
    })

    .actions(self => ({
        load: (nctOrTeam: string | any | ITeamStore | undefined | null, isActive = false) => {
            debugger;
            if (nctOrTeam) {
                //const id = typeof nctOrTeam === 'string' ? nctOrTeam : get(nctOrTeam, 'id');
                const id = '';

                if (!id) {
                    throw new Error('Invalid argument to setActiveTeam.  No Id');
                }

                let cached = self.cache.get(id);
                if (!cached) {
                    //self.cacheTeam({ id } as ITeamStore);
                    cached = self.cache.get(id);
                }
                if (cached!.loadState !== 'full') {
                    self.fetchTeam(nctOrTeam as string, isActive);
                } else if (isActive) {
                    self.activeTeam = id;
                }
            } else if (isActive) {
                self.activeTeam = undefined;
            }
        },
    }))

    .actions(self => ({
        setActiveTeam: (nctOrTeam: string | any | ITeamStore | undefined | null) => {
            self.load(nctOrTeam, true);
        },
    }))

    .views(self => ({}));
