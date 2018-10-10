import {
    types as t,
    IModelType,
    IType,
    getSnapshot,
    clone,
    Instance,
    IComplexType,
    IStateTreeNode,
    ModelSnapshotType,
    OptionalProperty,
    ModelPropertiesDeclarationToProperties,
    ISimpleType,
} from 'mobx-state-tree';
import { GeoLocationStore } from './geo';

export type PatientProfileStoreType = Instance<typeof PatientProfileStore>;
export interface IPatientProfileStore extends PatientProfileStoreType {}

export const PatientProfileStore = t
    .model('PatientProfile', {
        condition: t.maybe(t.string),
        postalCode: t.maybe(t.string),
        countryCode: t.maybe(t.string),
        isHealthyVolunteer: t.maybe(t.boolean),
        age: t.maybe(t.number),
        gender: t.maybe(t.enumeration('Gender', ['Male', 'Female'])),
        geoLocation: t.optional(GeoLocationStore, {}),
    })
    .actions(self => ({
        getSnapshot: (): IPatientProfileStore => {
            return clone(self) as IPatientProfileStore;
        },

        setCondition: (condition?: string) => {
            console.log('setcondition');
            self.condition = condition;
        },
        setPostalCode: (postalCode?: string) => {
            self.postalCode = postalCode;
            self.geoLocation.setPostalCode(postalCode);
        },
        setCountryCode: (country?: string) => {
            self.countryCode = country;
            self.geoLocation.setCountry(country);
        },
        setIsHealthyVolunteer: (value: boolean) => {
            self.isHealthyVolunteer = value;
        },
        setAge: (age?: number) => {
            self.age = age;
        },
        setGender: (gender?: 'Male' | 'Female') => {
            self.gender = gender;
        },
    }))

    .views(self => ({
        distanceFrom: (from: any, units: any): number | null => {
            if (self.geoLocation.geoCodeResults && self.geoLocation.geoCodeResults.latLon) {
                //return distance(from, self.geoLocation.geoCodeResults.latLon, units);
            } else {
                return null;
            }
        },
    }));
