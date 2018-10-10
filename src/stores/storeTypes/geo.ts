import {
    types as t,
    IModelType,
    IType,
    flow,
    getRoot,
    getEnv,
    Instance,
    ISimpleType,
    IStateTreeNode,
    ModelPropertiesDeclarationToProperties,
    ModelSnapshotType,
    OptionalProperty,
    IComplexType,
} from 'mobx-state-tree';
import { reaction } from 'mobx';
import { StoreEnvConfig } from '../../';

export type LatLonStoreType = Instance<typeof LatLonStore>;
export interface ILatLonStore extends LatLonStoreType {}

export const LatLonStore = t.model('LatLon', {
    lat: t.number,
    lon: t.number,
});

export type GeoCodeResultStoreType = Instance<typeof GeoCodeResultStore>;
export interface IGeoCodeResultStore extends GeoCodeResultStoreType {}

export const GeoCodeResultStore = t.model('GeoCodeResult', {
    latLon: LatLonStore,
});

export type GeoLocationStoreType = Instance<typeof GeoLocationStore>;
export interface IGeoLocationStore extends GeoLocationStoreType {}

export const GeoLocationStore = t
    .model('GeoLocation', {
        postalCode: t.maybe(t.string),
        country: t.maybe(t.string),
        geoCodeResults: t.maybe(GeoCodeResultStore),
        isLoading: t.optional(t.boolean, false),
    })
    .extend(self => {
        const env = getEnv<StoreEnvConfig>(self);

        const fetchGeoCode = flow(function* performSearch() {
            try {
                if (self.postalCode && self.country) {
                    self.isLoading = true;
                    const client = env.apiClientFactory.create();
                    const response = yield client.api.geocode(self.postalCode as string, self.country as string);
                    self.geoCodeResults = response.data;
                    console.log('fetched geocode:');
                    console.log(response.data);
                }
            } catch (e) {
                console.error('Search API call failed', e);
            } finally {
                self.isLoading = false;
            }
        });

        return {
            actions: {
                fetchGeoCode,
            },
        };
    })
    .actions(self => {
        const setPostalCode = (postalCode?: string) => {
            self.postalCode = postalCode;
        };

        const setCountry = (country?: string) => {
            self.country = country;
        };

        return {
            setPostalCode,
            setCountry,
        };
    })
    .actions(self => ({
        afterCreate() {
            reaction(
                () => self.country && self.postalCode,
                () => {
                    self.fetchGeoCode();
                }
            );
        },
    }))
    .extend(self => {
        return {};
    })
    .views(self => ({}));
