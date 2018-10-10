import { IModelType, Instance, IComplexType, IMSTArray, IStateTreeNode, IType, ModelSnapshotType, OptionalProperty, ModelPropertiesDeclarationToProperties, ISimpleType } from 'mobx-state-tree';
export declare type TeamLocationStoreType = Instance<typeof TeamLocationStore>;
export interface ITeamLocationStore extends TeamLocationStoreType {
}
export declare const TeamLocationStore: IModelType<ModelPropertiesDeclarationToProperties<{
    facilityName: IType<string, string, string> & OptionalProperty;
    address: IComplexType<{} & {
        postalCode?: string;
        country?: string;
        city?: string;
        state?: string;
        geoPoint?: {
            lat: number;
            lon: number;
        } & any;
        timezone?: {
            name: string;
            gmtOffset: number;
            dstOffset: number;
            rawOffset: number;
        } & any;
    }, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
        city: IType<string, string, string> & OptionalProperty;
        state: IType<string, string, string> & OptionalProperty;
        postalCode: IType<string, string, string> & OptionalProperty;
        country: IType<string, string, string> & OptionalProperty;
        geoPoint: IComplexType<{
            lat: number;
            lon: number;
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            lat: ISimpleType<number>;
            lon: ISimpleType<number>;
        }>>, {
            lat: number;
            lon: number;
        } & IStateTreeNode<{
            lat: number;
            lon: number;
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            lat: ISimpleType<number>;
            lon: ISimpleType<number>;
        }>>>> & OptionalProperty;
        timezone: IComplexType<{
            name: string;
            gmtOffset: number;
            dstOffset: number;
            rawOffset: number;
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            name: ISimpleType<string>;
            gmtOffset: ISimpleType<number>;
            dstOffset: ISimpleType<number>;
            rawOffset: ISimpleType<number>;
        }>>, {
            name: string;
            gmtOffset: number;
            dstOffset: number;
            rawOffset: number;
        } & IStateTreeNode<{
            name: string;
            gmtOffset: number;
            dstOffset: number;
            rawOffset: number;
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            name: ISimpleType<string>;
            gmtOffset: ISimpleType<number>;
            dstOffset: ISimpleType<number>;
            rawOffset: ISimpleType<number>;
        }>>>> & OptionalProperty;
    }>>, {
        city: string;
        state: string;
        postalCode: string;
        country: string;
        geoPoint: any & IStateTreeNode<{
            lat: number;
            lon: number;
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            lat: ISimpleType<number>;
            lon: ISimpleType<number>;
        }>>>;
        timezone: any & IStateTreeNode<{
            name: string;
            gmtOffset: number;
            dstOffset: number;
            rawOffset: number;
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            name: ISimpleType<string>;
            gmtOffset: ISimpleType<number>;
            dstOffset: ISimpleType<number>;
            rawOffset: ISimpleType<number>;
        }>>>;
    } & IStateTreeNode<{} & {
        postalCode?: string;
        country?: string;
        city?: string;
        state?: string;
        geoPoint?: {
            lat: number;
            lon: number;
        } & any;
        timezone?: {
            name: string;
            gmtOffset: number;
            dstOffset: number;
            rawOffset: number;
        } & any;
    }, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
        city: IType<string, string, string> & OptionalProperty;
        state: IType<string, string, string> & OptionalProperty;
        postalCode: IType<string, string, string> & OptionalProperty;
        country: IType<string, string, string> & OptionalProperty;
        geoPoint: IComplexType<{
            lat: number;
            lon: number;
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            lat: ISimpleType<number>;
            lon: ISimpleType<number>;
        }>>, {
            lat: number;
            lon: number;
        } & IStateTreeNode<{
            lat: number;
            lon: number;
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            lat: ISimpleType<number>;
            lon: ISimpleType<number>;
        }>>>> & OptionalProperty;
        timezone: IComplexType<{
            name: string;
            gmtOffset: number;
            dstOffset: number;
            rawOffset: number;
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            name: ISimpleType<string>;
            gmtOffset: ISimpleType<number>;
            dstOffset: ISimpleType<number>;
            rawOffset: ISimpleType<number>;
        }>>, {
            name: string;
            gmtOffset: number;
            dstOffset: number;
            rawOffset: number;
        } & IStateTreeNode<{
            name: string;
            gmtOffset: number;
            dstOffset: number;
            rawOffset: number;
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            name: ISimpleType<string>;
            gmtOffset: ISimpleType<number>;
            dstOffset: ISimpleType<number>;
            rawOffset: ISimpleType<number>;
        }>>>> & OptionalProperty;
    }>>>> & OptionalProperty;
    contact: IComplexType<{} & {
        firstName?: string;
        lastName?: string;
        degrees?: string;
        middleName?: string;
    }, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
        degrees: IType<string, string, string> & OptionalProperty;
        firstName: IType<string, string, string> & OptionalProperty;
        lastName: IType<string, string, string> & OptionalProperty;
        middleName: IType<string, string, string> & OptionalProperty;
    }>>, {
        degrees: string;
        firstName: string;
        lastName: string;
        middleName: string;
    } & IStateTreeNode<{} & {
        firstName?: string;
        lastName?: string;
        degrees?: string;
        middleName?: string;
    }, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
        degrees: IType<string, string, string> & OptionalProperty;
        firstName: IType<string, string, string> & OptionalProperty;
        lastName: IType<string, string, string> & OptionalProperty;
        middleName: IType<string, string, string> & OptionalProperty;
    }>>>> & OptionalProperty;
    contactBackup: IComplexType<{} & {
        firstName?: string;
        lastName?: string;
        degrees?: string;
        middleName?: string;
    }, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
        degrees: IType<string, string, string> & OptionalProperty;
        firstName: IType<string, string, string> & OptionalProperty;
        lastName: IType<string, string, string> & OptionalProperty;
        middleName: IType<string, string, string> & OptionalProperty;
    }>>, {
        degrees: string;
        firstName: string;
        lastName: string;
        middleName: string;
    } & IStateTreeNode<{} & {
        firstName?: string;
        lastName?: string;
        degrees?: string;
        middleName?: string;
    }, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
        degrees: IType<string, string, string> & OptionalProperty;
        firstName: IType<string, string, string> & OptionalProperty;
        lastName: IType<string, string, string> & OptionalProperty;
        middleName: IType<string, string, string> & OptionalProperty;
    }>>>> & OptionalProperty;
    recruitmentStatus: IType<string, string, string> & OptionalProperty;
    officials: IComplexType<({} & {
        firstName?: string;
        lastName?: string;
        degrees?: string;
        middleName?: string;
        affiliation?: string;
        role?: string;
    })[], ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
        affiliation: IType<string, string, string> & OptionalProperty;
        degrees: IType<string, string, string> & OptionalProperty;
        firstName: IType<string, string, string> & OptionalProperty;
        lastName: IType<string, string, string> & OptionalProperty;
        middleName: IType<string, string, string> & OptionalProperty;
        role: IType<string, string, string> & OptionalProperty;
    }>>[], IMSTArray<{} & {
        firstName?: string;
        lastName?: string;
        degrees?: string;
        middleName?: string;
        affiliation?: string;
        role?: string;
    }, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
        affiliation: IType<string, string, string> & OptionalProperty;
        degrees: IType<string, string, string> & OptionalProperty;
        firstName: IType<string, string, string> & OptionalProperty;
        lastName: IType<string, string, string> & OptionalProperty;
        middleName: IType<string, string, string> & OptionalProperty;
        role: IType<string, string, string> & OptionalProperty;
    }>>, {
        affiliation: string;
        degrees: string;
        firstName: string;
        lastName: string;
        middleName: string;
        role: string;
    } & IStateTreeNode<{} & {
        firstName?: string;
        lastName?: string;
        degrees?: string;
        middleName?: string;
        affiliation?: string;
        role?: string;
    }, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
        affiliation: IType<string, string, string> & OptionalProperty;
        degrees: IType<string, string, string> & OptionalProperty;
        firstName: IType<string, string, string> & OptionalProperty;
        lastName: IType<string, string, string> & OptionalProperty;
        middleName: IType<string, string, string> & OptionalProperty;
        role: IType<string, string, string> & OptionalProperty;
    }>>>>> & OptionalProperty;
}>, {}, {} & {
    address?: {} & any;
    facilityName?: string;
    contact?: {} & any;
    contactBackup?: {} & any;
    recruitmentStatus?: string;
    officials?: ({} & any)[];
}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
    facilityName: IType<string, string, string> & OptionalProperty;
    address: IComplexType<{} & {
        postalCode?: string;
        country?: string;
        city?: string;
        state?: string;
        geoPoint?: {
            lat: number;
            lon: number;
        } & any;
        timezone?: {
            name: string;
            gmtOffset: number;
            dstOffset: number;
            rawOffset: number;
        } & any;
    }, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
        city: IType<string, string, string> & OptionalProperty;
        state: IType<string, string, string> & OptionalProperty;
        postalCode: IType<string, string, string> & OptionalProperty;
        country: IType<string, string, string> & OptionalProperty;
        geoPoint: IComplexType<{
            lat: number;
            lon: number;
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            lat: ISimpleType<number>;
            lon: ISimpleType<number>;
        }>>, {
            lat: number;
            lon: number;
        } & IStateTreeNode<{
            lat: number;
            lon: number;
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            lat: ISimpleType<number>;
            lon: ISimpleType<number>;
        }>>>> & OptionalProperty;
        timezone: IComplexType<{
            name: string;
            gmtOffset: number;
            dstOffset: number;
            rawOffset: number;
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            name: ISimpleType<string>;
            gmtOffset: ISimpleType<number>;
            dstOffset: ISimpleType<number>;
            rawOffset: ISimpleType<number>;
        }>>, {
            name: string;
            gmtOffset: number;
            dstOffset: number;
            rawOffset: number;
        } & IStateTreeNode<{
            name: string;
            gmtOffset: number;
            dstOffset: number;
            rawOffset: number;
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            name: ISimpleType<string>;
            gmtOffset: ISimpleType<number>;
            dstOffset: ISimpleType<number>;
            rawOffset: ISimpleType<number>;
        }>>>> & OptionalProperty;
    }>>, {
        city: string;
        state: string;
        postalCode: string;
        country: string;
        geoPoint: any & IStateTreeNode<{
            lat: number;
            lon: number;
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            lat: ISimpleType<number>;
            lon: ISimpleType<number>;
        }>>>;
        timezone: any & IStateTreeNode<{
            name: string;
            gmtOffset: number;
            dstOffset: number;
            rawOffset: number;
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            name: ISimpleType<string>;
            gmtOffset: ISimpleType<number>;
            dstOffset: ISimpleType<number>;
            rawOffset: ISimpleType<number>;
        }>>>;
    } & IStateTreeNode<{} & {
        postalCode?: string;
        country?: string;
        city?: string;
        state?: string;
        geoPoint?: {
            lat: number;
            lon: number;
        } & any;
        timezone?: {
            name: string;
            gmtOffset: number;
            dstOffset: number;
            rawOffset: number;
        } & any;
    }, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
        city: IType<string, string, string> & OptionalProperty;
        state: IType<string, string, string> & OptionalProperty;
        postalCode: IType<string, string, string> & OptionalProperty;
        country: IType<string, string, string> & OptionalProperty;
        geoPoint: IComplexType<{
            lat: number;
            lon: number;
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            lat: ISimpleType<number>;
            lon: ISimpleType<number>;
        }>>, {
            lat: number;
            lon: number;
        } & IStateTreeNode<{
            lat: number;
            lon: number;
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            lat: ISimpleType<number>;
            lon: ISimpleType<number>;
        }>>>> & OptionalProperty;
        timezone: IComplexType<{
            name: string;
            gmtOffset: number;
            dstOffset: number;
            rawOffset: number;
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            name: ISimpleType<string>;
            gmtOffset: ISimpleType<number>;
            dstOffset: ISimpleType<number>;
            rawOffset: ISimpleType<number>;
        }>>, {
            name: string;
            gmtOffset: number;
            dstOffset: number;
            rawOffset: number;
        } & IStateTreeNode<{
            name: string;
            gmtOffset: number;
            dstOffset: number;
            rawOffset: number;
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            name: ISimpleType<string>;
            gmtOffset: ISimpleType<number>;
            dstOffset: ISimpleType<number>;
            rawOffset: ISimpleType<number>;
        }>>>> & OptionalProperty;
    }>>>> & OptionalProperty;
    contact: IComplexType<{} & {
        firstName?: string;
        lastName?: string;
        degrees?: string;
        middleName?: string;
    }, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
        degrees: IType<string, string, string> & OptionalProperty;
        firstName: IType<string, string, string> & OptionalProperty;
        lastName: IType<string, string, string> & OptionalProperty;
        middleName: IType<string, string, string> & OptionalProperty;
    }>>, {
        degrees: string;
        firstName: string;
        lastName: string;
        middleName: string;
    } & IStateTreeNode<{} & {
        firstName?: string;
        lastName?: string;
        degrees?: string;
        middleName?: string;
    }, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
        degrees: IType<string, string, string> & OptionalProperty;
        firstName: IType<string, string, string> & OptionalProperty;
        lastName: IType<string, string, string> & OptionalProperty;
        middleName: IType<string, string, string> & OptionalProperty;
    }>>>> & OptionalProperty;
    contactBackup: IComplexType<{} & {
        firstName?: string;
        lastName?: string;
        degrees?: string;
        middleName?: string;
    }, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
        degrees: IType<string, string, string> & OptionalProperty;
        firstName: IType<string, string, string> & OptionalProperty;
        lastName: IType<string, string, string> & OptionalProperty;
        middleName: IType<string, string, string> & OptionalProperty;
    }>>, {
        degrees: string;
        firstName: string;
        lastName: string;
        middleName: string;
    } & IStateTreeNode<{} & {
        firstName?: string;
        lastName?: string;
        degrees?: string;
        middleName?: string;
    }, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
        degrees: IType<string, string, string> & OptionalProperty;
        firstName: IType<string, string, string> & OptionalProperty;
        lastName: IType<string, string, string> & OptionalProperty;
        middleName: IType<string, string, string> & OptionalProperty;
    }>>>> & OptionalProperty;
    recruitmentStatus: IType<string, string, string> & OptionalProperty;
    officials: IComplexType<({} & {
        firstName?: string;
        lastName?: string;
        degrees?: string;
        middleName?: string;
        affiliation?: string;
        role?: string;
    })[], ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
        affiliation: IType<string, string, string> & OptionalProperty;
        degrees: IType<string, string, string> & OptionalProperty;
        firstName: IType<string, string, string> & OptionalProperty;
        lastName: IType<string, string, string> & OptionalProperty;
        middleName: IType<string, string, string> & OptionalProperty;
        role: IType<string, string, string> & OptionalProperty;
    }>>[], IMSTArray<{} & {
        firstName?: string;
        lastName?: string;
        degrees?: string;
        middleName?: string;
        affiliation?: string;
        role?: string;
    }, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
        affiliation: IType<string, string, string> & OptionalProperty;
        degrees: IType<string, string, string> & OptionalProperty;
        firstName: IType<string, string, string> & OptionalProperty;
        lastName: IType<string, string, string> & OptionalProperty;
        middleName: IType<string, string, string> & OptionalProperty;
        role: IType<string, string, string> & OptionalProperty;
    }>>, {
        affiliation: string;
        degrees: string;
        firstName: string;
        lastName: string;
        middleName: string;
        role: string;
    } & IStateTreeNode<{} & {
        firstName?: string;
        lastName?: string;
        degrees?: string;
        middleName?: string;
        affiliation?: string;
        role?: string;
    }, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
        affiliation: IType<string, string, string> & OptionalProperty;
        degrees: IType<string, string, string> & OptionalProperty;
        firstName: IType<string, string, string> & OptionalProperty;
        lastName: IType<string, string, string> & OptionalProperty;
        middleName: IType<string, string, string> & OptionalProperty;
        role: IType<string, string, string> & OptionalProperty;
    }>>>>> & OptionalProperty;
}>>, {
    facilityName: string;
    address: any & IStateTreeNode<{} & {
        postalCode?: string;
        country?: string;
        city?: string;
        state?: string;
        geoPoint?: {
            lat: number;
            lon: number;
        } & any;
        timezone?: {
            name: string;
            gmtOffset: number;
            dstOffset: number;
            rawOffset: number;
        } & any;
    }, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
        city: IType<string, string, string> & OptionalProperty;
        state: IType<string, string, string> & OptionalProperty;
        postalCode: IType<string, string, string> & OptionalProperty;
        country: IType<string, string, string> & OptionalProperty;
        geoPoint: IComplexType<{
            lat: number;
            lon: number;
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            lat: ISimpleType<number>;
            lon: ISimpleType<number>;
        }>>, any & IStateTreeNode<{
            lat: number;
            lon: number;
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            lat: ISimpleType<number>;
            lon: ISimpleType<number>;
        }>>>> & OptionalProperty;
        timezone: IComplexType<{
            name: string;
            gmtOffset: number;
            dstOffset: number;
            rawOffset: number;
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            name: ISimpleType<string>;
            gmtOffset: ISimpleType<number>;
            dstOffset: ISimpleType<number>;
            rawOffset: ISimpleType<number>;
        }>>, any & IStateTreeNode<{
            name: string;
            gmtOffset: number;
            dstOffset: number;
            rawOffset: number;
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            name: ISimpleType<string>;
            gmtOffset: ISimpleType<number>;
            dstOffset: ISimpleType<number>;
            rawOffset: ISimpleType<number>;
        }>>>> & OptionalProperty;
    }>>>;
    contact: any & IStateTreeNode<{} & {
        firstName?: string;
        lastName?: string;
        degrees?: string;
        middleName?: string;
    }, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
        degrees: IType<string, string, string> & OptionalProperty;
        firstName: IType<string, string, string> & OptionalProperty;
        lastName: IType<string, string, string> & OptionalProperty;
        middleName: IType<string, string, string> & OptionalProperty;
    }>>>;
    contactBackup: any & IStateTreeNode<{} & {
        firstName?: string;
        lastName?: string;
        degrees?: string;
        middleName?: string;
    }, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
        degrees: IType<string, string, string> & OptionalProperty;
        firstName: IType<string, string, string> & OptionalProperty;
        lastName: IType<string, string, string> & OptionalProperty;
        middleName: IType<string, string, string> & OptionalProperty;
    }>>>;
    recruitmentStatus: string;
    officials: IMSTArray<{} & {
        firstName?: string;
        lastName?: string;
        degrees?: string;
        middleName?: string;
        affiliation?: string;
        role?: string;
    }, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
        affiliation: IType<string, string, string> & OptionalProperty;
        degrees: IType<string, string, string> & OptionalProperty;
        firstName: IType<string, string, string> & OptionalProperty;
        lastName: IType<string, string, string> & OptionalProperty;
        middleName: IType<string, string, string> & OptionalProperty;
        role: IType<string, string, string> & OptionalProperty;
    }>>, any & IStateTreeNode<{} & {
        firstName?: string;
        lastName?: string;
        degrees?: string;
        middleName?: string;
        affiliation?: string;
        role?: string;
    }, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
        affiliation: IType<string, string, string> & OptionalProperty;
        degrees: IType<string, string, string> & OptionalProperty;
        firstName: IType<string, string, string> & OptionalProperty;
        lastName: IType<string, string, string> & OptionalProperty;
        middleName: IType<string, string, string> & OptionalProperty;
        role: IType<string, string, string> & OptionalProperty;
    }>>>> & IStateTreeNode<({} & {
        firstName?: string;
        lastName?: string;
        degrees?: string;
        middleName?: string;
        affiliation?: string;
        role?: string;
    })[], ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
        affiliation: IType<string, string, string> & OptionalProperty;
        degrees: IType<string, string, string> & OptionalProperty;
        firstName: IType<string, string, string> & OptionalProperty;
        lastName: IType<string, string, string> & OptionalProperty;
        middleName: IType<string, string, string> & OptionalProperty;
        role: IType<string, string, string> & OptionalProperty;
    }>>[]>;
} & IStateTreeNode<{} & {
    address?: {} & any;
    facilityName?: string;
    contact?: {} & any;
    contactBackup?: {} & any;
    recruitmentStatus?: string;
    officials?: ({} & any)[];
}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
    facilityName: IType<string, string, string> & OptionalProperty;
    address: IComplexType<{} & {
        postalCode?: string;
        country?: string;
        city?: string;
        state?: string;
        geoPoint?: {
            lat: number;
            lon: number;
        } & any;
        timezone?: {
            name: string;
            gmtOffset: number;
            dstOffset: number;
            rawOffset: number;
        } & any;
    }, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
        city: IType<string, string, string> & OptionalProperty;
        state: IType<string, string, string> & OptionalProperty;
        postalCode: IType<string, string, string> & OptionalProperty;
        country: IType<string, string, string> & OptionalProperty;
        geoPoint: IComplexType<{
            lat: number;
            lon: number;
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            lat: ISimpleType<number>;
            lon: ISimpleType<number>;
        }>>, {
            lat: number;
            lon: number;
        } & IStateTreeNode<{
            lat: number;
            lon: number;
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            lat: ISimpleType<number>;
            lon: ISimpleType<number>;
        }>>>> & OptionalProperty;
        timezone: IComplexType<{
            name: string;
            gmtOffset: number;
            dstOffset: number;
            rawOffset: number;
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            name: ISimpleType<string>;
            gmtOffset: ISimpleType<number>;
            dstOffset: ISimpleType<number>;
            rawOffset: ISimpleType<number>;
        }>>, {
            name: string;
            gmtOffset: number;
            dstOffset: number;
            rawOffset: number;
        } & IStateTreeNode<{
            name: string;
            gmtOffset: number;
            dstOffset: number;
            rawOffset: number;
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            name: ISimpleType<string>;
            gmtOffset: ISimpleType<number>;
            dstOffset: ISimpleType<number>;
            rawOffset: ISimpleType<number>;
        }>>>> & OptionalProperty;
    }>>, {
        city: string;
        state: string;
        postalCode: string;
        country: string;
        geoPoint: any & IStateTreeNode<{
            lat: number;
            lon: number;
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            lat: ISimpleType<number>;
            lon: ISimpleType<number>;
        }>>>;
        timezone: any & IStateTreeNode<{
            name: string;
            gmtOffset: number;
            dstOffset: number;
            rawOffset: number;
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            name: ISimpleType<string>;
            gmtOffset: ISimpleType<number>;
            dstOffset: ISimpleType<number>;
            rawOffset: ISimpleType<number>;
        }>>>;
    } & IStateTreeNode<{} & {
        postalCode?: string;
        country?: string;
        city?: string;
        state?: string;
        geoPoint?: {
            lat: number;
            lon: number;
        } & any;
        timezone?: {
            name: string;
            gmtOffset: number;
            dstOffset: number;
            rawOffset: number;
        } & any;
    }, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
        city: IType<string, string, string> & OptionalProperty;
        state: IType<string, string, string> & OptionalProperty;
        postalCode: IType<string, string, string> & OptionalProperty;
        country: IType<string, string, string> & OptionalProperty;
        geoPoint: IComplexType<{
            lat: number;
            lon: number;
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            lat: ISimpleType<number>;
            lon: ISimpleType<number>;
        }>>, {
            lat: number;
            lon: number;
        } & IStateTreeNode<{
            lat: number;
            lon: number;
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            lat: ISimpleType<number>;
            lon: ISimpleType<number>;
        }>>>> & OptionalProperty;
        timezone: IComplexType<{
            name: string;
            gmtOffset: number;
            dstOffset: number;
            rawOffset: number;
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            name: ISimpleType<string>;
            gmtOffset: ISimpleType<number>;
            dstOffset: ISimpleType<number>;
            rawOffset: ISimpleType<number>;
        }>>, {
            name: string;
            gmtOffset: number;
            dstOffset: number;
            rawOffset: number;
        } & IStateTreeNode<{
            name: string;
            gmtOffset: number;
            dstOffset: number;
            rawOffset: number;
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            name: ISimpleType<string>;
            gmtOffset: ISimpleType<number>;
            dstOffset: ISimpleType<number>;
            rawOffset: ISimpleType<number>;
        }>>>> & OptionalProperty;
    }>>>> & OptionalProperty;
    contact: IComplexType<{} & {
        firstName?: string;
        lastName?: string;
        degrees?: string;
        middleName?: string;
    }, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
        degrees: IType<string, string, string> & OptionalProperty;
        firstName: IType<string, string, string> & OptionalProperty;
        lastName: IType<string, string, string> & OptionalProperty;
        middleName: IType<string, string, string> & OptionalProperty;
    }>>, {
        degrees: string;
        firstName: string;
        lastName: string;
        middleName: string;
    } & IStateTreeNode<{} & {
        firstName?: string;
        lastName?: string;
        degrees?: string;
        middleName?: string;
    }, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
        degrees: IType<string, string, string> & OptionalProperty;
        firstName: IType<string, string, string> & OptionalProperty;
        lastName: IType<string, string, string> & OptionalProperty;
        middleName: IType<string, string, string> & OptionalProperty;
    }>>>> & OptionalProperty;
    contactBackup: IComplexType<{} & {
        firstName?: string;
        lastName?: string;
        degrees?: string;
        middleName?: string;
    }, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
        degrees: IType<string, string, string> & OptionalProperty;
        firstName: IType<string, string, string> & OptionalProperty;
        lastName: IType<string, string, string> & OptionalProperty;
        middleName: IType<string, string, string> & OptionalProperty;
    }>>, {
        degrees: string;
        firstName: string;
        lastName: string;
        middleName: string;
    } & IStateTreeNode<{} & {
        firstName?: string;
        lastName?: string;
        degrees?: string;
        middleName?: string;
    }, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
        degrees: IType<string, string, string> & OptionalProperty;
        firstName: IType<string, string, string> & OptionalProperty;
        lastName: IType<string, string, string> & OptionalProperty;
        middleName: IType<string, string, string> & OptionalProperty;
    }>>>> & OptionalProperty;
    recruitmentStatus: IType<string, string, string> & OptionalProperty;
    officials: IComplexType<({} & {
        firstName?: string;
        lastName?: string;
        degrees?: string;
        middleName?: string;
        affiliation?: string;
        role?: string;
    })[], ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
        affiliation: IType<string, string, string> & OptionalProperty;
        degrees: IType<string, string, string> & OptionalProperty;
        firstName: IType<string, string, string> & OptionalProperty;
        lastName: IType<string, string, string> & OptionalProperty;
        middleName: IType<string, string, string> & OptionalProperty;
        role: IType<string, string, string> & OptionalProperty;
    }>>[], IMSTArray<{} & {
        firstName?: string;
        lastName?: string;
        degrees?: string;
        middleName?: string;
        affiliation?: string;
        role?: string;
    }, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
        affiliation: IType<string, string, string> & OptionalProperty;
        degrees: IType<string, string, string> & OptionalProperty;
        firstName: IType<string, string, string> & OptionalProperty;
        lastName: IType<string, string, string> & OptionalProperty;
        middleName: IType<string, string, string> & OptionalProperty;
        role: IType<string, string, string> & OptionalProperty;
    }>>, {
        affiliation: string;
        degrees: string;
        firstName: string;
        lastName: string;
        middleName: string;
        role: string;
    } & IStateTreeNode<{} & {
        firstName?: string;
        lastName?: string;
        degrees?: string;
        middleName?: string;
        affiliation?: string;
        role?: string;
    }, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
        affiliation: IType<string, string, string> & OptionalProperty;
        degrees: IType<string, string, string> & OptionalProperty;
        firstName: IType<string, string, string> & OptionalProperty;
        lastName: IType<string, string, string> & OptionalProperty;
        middleName: IType<string, string, string> & OptionalProperty;
        role: IType<string, string, string> & OptionalProperty;
    }>>>>> & OptionalProperty;
}>>>>;
