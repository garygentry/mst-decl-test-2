import {
    types as t,
    flow,
    IModelType,
    getEnv,
    getRoot,
    getSnapshot,
    onSnapshot,
    applySnapshot,
    onPatch,
    IComplexType,
    IMSTArray,
    IStateTreeNode,
    IType,
    ModelSnapshotType,
    OptionalProperty,
    IArrayType,
    ISimpleType,
    ModelPropertiesDeclarationToProperties,
    Instance,
    IMSTMap,
    IReferenceType
} from 'mobx-state-tree';
import { reaction, toJS, IObservableArray, IKeyValueMap } from 'mobx';
import { StoreEnvConfig } from '../../../';

import { PatientProfileStore, IPatientProfileStore, GeoCodeResultStore } from '../../storeTypes';
import {
    SearchResponseStore,
    SearchResponseHitStore,
    ISearchResponseStore,
    ISearchResponseHitStore,
} from './searchResponse';
import { SearchRequestStore, ISearchRequestStore } from './searchRequest';
import { IAppStore } from '../../app';
import { TeamStore, ITeamStore } from '../team';

export type TeamSearchStoreType = Instance<typeof TeamSearchStore>;
export interface ITeamSearchStore extends TeamSearchStoreType {}

export const TeamSearchStore = t
    .model('TeamSearch', {
        request: t.optional(SearchRequestStore, {}),
        response: t.maybe(SearchResponseStore),
        isSearching: t.maybe(t.boolean),
        currentPageNumber: t.maybe(t.number),
        pageCount: t.optional(t.number, 0),
        compareList: t.optional(t.map(t.reference(TeamStore)), {}),
        homeGeocode: t.maybe(GeoCodeResultStore),
        isLoading: t.optional(t.boolean, false),
    })
    .views(self => ({
        get patientProfile(): any {
            return self.request ? self.request.patientProfile as any : undefined;
        },

        get requestSnapshot(): any {
            return getSnapshot(self.request) as any;
        },

        get hasNextPage(): boolean {
            return self.currentPageNumber && (self.currentPageNumber && self.currentPageNumber < self.pageCount)
                ? true
                : false;
        },

        get hasPreviousPage(): boolean {
            return self.currentPageNumber && self.currentPageNumber > 1 ? true : false;
        },

        get hitCount(): number {
            return self.response ? self.response.hitCount : 0;
        },

        get compareListArray(): ITeamStore[] {
            const list: ITeamStore[] = [];
            if (self.compareList && self.compareList.size > 0) {
                self.compareList.forEach(cli => {
                    list.push(cli);
                });
            }
            return list;
        },
    }))
    .extend(self => {
        const env = getEnv<StoreEnvConfig>(self);

        const setResponse = (response: any) => {
            const appStore = getRoot<IAppStore>(self);
            response.hits = response.hits.map(h => {
                appStore.teams.cacheTeam(h.source);
                const team = h.id;
                return {
                    ...h,
                    team,
                };
            });
            self.response = response as ISearchResponseStore;
            self.pageCount = Math.ceil(response.hitCount / self.request.resultsPerPage);
            self.currentPageNumber = response.hitCount > 0 ? (self.request.page as number) : undefined;
        };

        const requestSnapshot = () => {
            return getSnapshot(self.request) as any;
        };

        const performSearch = flow(function* performSearchgen() {
            const appStore = getRoot<IAppStore>(self);
            if (appStore.isAuthenticated) {
                try {
                    self.isLoading = true;
                    const client = env.apiClientFactory.create();
                    const response = yield client.api.search(self.requestSnapshot);
                    setResponse(response.data);
                } catch (e) {
                    throw new Error(`PerformSearch failed: ${e.message}`);
                } finally {
                    self.isLoading = false;
                }
            }
        });

        return {
            views: {},

            actions: {
                performSearch,
            },
        };
    })
    .extend(self => {
        const _appStore = getRoot<IAppStore>(self);

        return {
            views: {},

            actions: {
                afterAttach: () => {
                    self.performSearch();
                    onSnapshot(self.request, s => {
                        self.performSearch();
                    });
                },

                navigate: () => {
                    const params = {
                        q: JSON.stringify(getSnapshot(self.request)),
                    };
                    //_appStore.router.navigate('search', params);
                },

                setRequest: (request: ISearchRequestStore) => {
                    applySnapshot(self.request, request);
                },
            },
        };
    })
    .views(self => ({
        get currentPageHits(): ISearchResponseHitStore[] {
            if (self.response) {
                return self.response.hits;
            } else {
                return [];
            }
        },
    }));
