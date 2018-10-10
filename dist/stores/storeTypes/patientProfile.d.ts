import { IModelType, IType, Instance, IComplexType, IStateTreeNode, ModelSnapshotType, OptionalProperty, ModelPropertiesDeclarationToProperties, ISimpleType } from 'mobx-state-tree';
export declare type PatientProfileStoreType = Instance<typeof PatientProfileStore>;
export interface IPatientProfileStore extends PatientProfileStoreType {
}
export declare const PatientProfileStore: IModelType<ModelPropertiesDeclarationToProperties<{
    condition: IType<string, string, string> & OptionalProperty;
    postalCode: IType<string, string, string> & OptionalProperty;
    countryCode: IType<string, string, string> & OptionalProperty;
    isHealthyVolunteer: IType<boolean, boolean, boolean> & OptionalProperty;
    age: IType<number, number, number> & OptionalProperty;
    gender: IType<"Male" | "Female", "Male" | "Female", "Male" | "Female"> & OptionalProperty;
    geoLocation: IComplexType<{} & {
        postalCode?: string;
        country?: string;
        geoCodeResults?: {
            latLon: any & any;
        } & any;
        isLoading?: boolean;
    }, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
        postalCode: IType<string, string, string> & OptionalProperty;
        country: IType<string, string, string> & OptionalProperty;
        geoCodeResults: IComplexType<{
            latLon: any & {};
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            latLon: IModelType<ModelPropertiesDeclarationToProperties<{
                lat: ISimpleType<number>;
                lon: ISimpleType<number>;
            }>, {}, {
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
            }>>>>;
        }>>, {
            latLon: any & IStateTreeNode<{
                lat: number;
                lon: number;
            } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
                lat: ISimpleType<number>;
                lon: ISimpleType<number>;
            }>>>;
        } & IStateTreeNode<{
            latLon: any & {};
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            latLon: IModelType<ModelPropertiesDeclarationToProperties<{
                lat: ISimpleType<number>;
                lon: ISimpleType<number>;
            }>, {}, {
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
            }>>>>;
        }>>>> & OptionalProperty;
        isLoading: IType<boolean, boolean, boolean> & OptionalProperty;
    }>>, {
        postalCode: string;
        country: string;
        geoCodeResults: any & IStateTreeNode<{
            latLon: any & {};
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            latLon: IModelType<ModelPropertiesDeclarationToProperties<{
                lat: ISimpleType<number>;
                lon: ISimpleType<number>;
            }>, {}, {
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
            }>>>>;
        }>>>;
        isLoading: boolean;
    } & {
        fetchGeoCode: () => Promise<{}>;
    } & {
        setPostalCode: (postalCode?: string) => void;
        setCountry: (country?: string) => void;
    } & {
        afterCreate(): void;
    } & IStateTreeNode<{} & {
        postalCode?: string;
        country?: string;
        geoCodeResults?: {
            latLon: any & any;
        } & any;
        isLoading?: boolean;
    }, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
        postalCode: IType<string, string, string> & OptionalProperty;
        country: IType<string, string, string> & OptionalProperty;
        geoCodeResults: IComplexType<{
            latLon: any & {};
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            latLon: IModelType<ModelPropertiesDeclarationToProperties<{
                lat: ISimpleType<number>;
                lon: ISimpleType<number>;
            }>, {}, {
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
            }>>>>;
        }>>, {
            latLon: any & IStateTreeNode<{
                lat: number;
                lon: number;
            } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
                lat: ISimpleType<number>;
                lon: ISimpleType<number>;
            }>>>;
        } & IStateTreeNode<{
            latLon: any & {};
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            latLon: IModelType<ModelPropertiesDeclarationToProperties<{
                lat: ISimpleType<number>;
                lon: ISimpleType<number>;
            }>, {}, {
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
            }>>>>;
        }>>>> & OptionalProperty;
        isLoading: IType<boolean, boolean, boolean> & OptionalProperty;
    }>>>> & OptionalProperty;
}>, {
    getSnapshot: () => IPatientProfileStore;
    setCondition: (condition?: string) => void;
    setPostalCode: (postalCode?: string) => void;
    setCountryCode: (country?: string) => void;
    setIsHealthyVolunteer: (value: boolean) => void;
    setAge: (age?: number) => void;
    setGender: (gender?: "Male" | "Female") => void;
} & {
    distanceFrom: (from: any, units: any) => number;
}, {} & {
    postalCode?: string;
    condition?: string;
    countryCode?: string;
    isHealthyVolunteer?: boolean;
    age?: number;
    gender?: "Male" | "Female";
    geoLocation?: {} & any;
}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
    condition: IType<string, string, string> & OptionalProperty;
    postalCode: IType<string, string, string> & OptionalProperty;
    countryCode: IType<string, string, string> & OptionalProperty;
    isHealthyVolunteer: IType<boolean, boolean, boolean> & OptionalProperty;
    age: IType<number, number, number> & OptionalProperty;
    gender: IType<"Male" | "Female", "Male" | "Female", "Male" | "Female"> & OptionalProperty;
    geoLocation: IComplexType<{} & {
        postalCode?: string;
        country?: string;
        geoCodeResults?: {
            latLon: any & any;
        } & any;
        isLoading?: boolean;
    }, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
        postalCode: IType<string, string, string> & OptionalProperty;
        country: IType<string, string, string> & OptionalProperty;
        geoCodeResults: IComplexType<{
            latLon: any & {};
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            latLon: IModelType<ModelPropertiesDeclarationToProperties<{
                lat: ISimpleType<number>;
                lon: ISimpleType<number>;
            }>, {}, {
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
            }>>>>;
        }>>, {
            latLon: any & IStateTreeNode<{
                lat: number;
                lon: number;
            } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
                lat: ISimpleType<number>;
                lon: ISimpleType<number>;
            }>>>;
        } & IStateTreeNode<{
            latLon: any & {};
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            latLon: IModelType<ModelPropertiesDeclarationToProperties<{
                lat: ISimpleType<number>;
                lon: ISimpleType<number>;
            }>, {}, {
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
            }>>>>;
        }>>>> & OptionalProperty;
        isLoading: IType<boolean, boolean, boolean> & OptionalProperty;
    }>>, {
        postalCode: string;
        country: string;
        geoCodeResults: any & IStateTreeNode<{
            latLon: any & {};
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            latLon: IModelType<ModelPropertiesDeclarationToProperties<{
                lat: ISimpleType<number>;
                lon: ISimpleType<number>;
            }>, {}, {
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
            }>>>>;
        }>>>;
        isLoading: boolean;
    } & {
        fetchGeoCode: () => Promise<{}>;
    } & {
        setPostalCode: (postalCode?: string) => void;
        setCountry: (country?: string) => void;
    } & {
        afterCreate(): void;
    } & IStateTreeNode<{} & {
        postalCode?: string;
        country?: string;
        geoCodeResults?: {
            latLon: any & any;
        } & any;
        isLoading?: boolean;
    }, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
        postalCode: IType<string, string, string> & OptionalProperty;
        country: IType<string, string, string> & OptionalProperty;
        geoCodeResults: IComplexType<{
            latLon: any & {};
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            latLon: IModelType<ModelPropertiesDeclarationToProperties<{
                lat: ISimpleType<number>;
                lon: ISimpleType<number>;
            }>, {}, {
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
            }>>>>;
        }>>, {
            latLon: any & IStateTreeNode<{
                lat: number;
                lon: number;
            } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
                lat: ISimpleType<number>;
                lon: ISimpleType<number>;
            }>>>;
        } & IStateTreeNode<{
            latLon: any & {};
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            latLon: IModelType<ModelPropertiesDeclarationToProperties<{
                lat: ISimpleType<number>;
                lon: ISimpleType<number>;
            }>, {}, {
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
            }>>>>;
        }>>>> & OptionalProperty;
        isLoading: IType<boolean, boolean, boolean> & OptionalProperty;
    }>>>> & OptionalProperty;
}>>, {
    condition: string;
    postalCode: string;
    countryCode: string;
    isHealthyVolunteer: boolean;
    age: number;
    gender: "Male" | "Female";
    geoLocation: any & {
        fetchGeoCode: () => Promise<{}>;
    } & {
        setPostalCode: (postalCode?: string) => void;
        setCountry: (country?: string) => void;
    } & {
        afterCreate(): void;
    } & IStateTreeNode<{} & {
        postalCode?: string;
        country?: string;
        geoCodeResults?: {
            latLon: any & any;
        } & any;
        isLoading?: boolean;
    }, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
        postalCode: IType<string, string, string> & OptionalProperty;
        country: IType<string, string, string> & OptionalProperty;
        geoCodeResults: IComplexType<{
            latLon: any & {};
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            latLon: IModelType<ModelPropertiesDeclarationToProperties<{
                lat: ISimpleType<number>;
                lon: ISimpleType<number>;
            }>, {}, {
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
            }>>>>;
        }>>, any & IStateTreeNode<{
            latLon: any & {};
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            latLon: IModelType<ModelPropertiesDeclarationToProperties<{
                lat: ISimpleType<number>;
                lon: ISimpleType<number>;
            }>, {}, {
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
            }>>>>;
        }>>>> & OptionalProperty;
        isLoading: IType<boolean, boolean, boolean> & OptionalProperty;
    }>>>;
} & {
    getSnapshot: () => IPatientProfileStore;
    setCondition: (condition?: string) => void;
    setPostalCode: (postalCode?: string) => void;
    setCountryCode: (country?: string) => void;
    setIsHealthyVolunteer: (value: boolean) => void;
    setAge: (age?: number) => void;
    setGender: (gender?: "Male" | "Female") => void;
} & {
    distanceFrom: (from: any, units: any) => number;
} & IStateTreeNode<{} & {
    postalCode?: string;
    condition?: string;
    countryCode?: string;
    isHealthyVolunteer?: boolean;
    age?: number;
    gender?: "Male" | "Female";
    geoLocation?: {} & any;
}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
    condition: IType<string, string, string> & OptionalProperty;
    postalCode: IType<string, string, string> & OptionalProperty;
    countryCode: IType<string, string, string> & OptionalProperty;
    isHealthyVolunteer: IType<boolean, boolean, boolean> & OptionalProperty;
    age: IType<number, number, number> & OptionalProperty;
    gender: IType<"Male" | "Female", "Male" | "Female", "Male" | "Female"> & OptionalProperty;
    geoLocation: IComplexType<{} & {
        postalCode?: string;
        country?: string;
        geoCodeResults?: {
            latLon: any & any;
        } & any;
        isLoading?: boolean;
    }, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
        postalCode: IType<string, string, string> & OptionalProperty;
        country: IType<string, string, string> & OptionalProperty;
        geoCodeResults: IComplexType<{
            latLon: any & {};
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            latLon: IModelType<ModelPropertiesDeclarationToProperties<{
                lat: ISimpleType<number>;
                lon: ISimpleType<number>;
            }>, {}, {
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
            }>>>>;
        }>>, {
            latLon: any & IStateTreeNode<{
                lat: number;
                lon: number;
            } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
                lat: ISimpleType<number>;
                lon: ISimpleType<number>;
            }>>>;
        } & IStateTreeNode<{
            latLon: any & {};
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            latLon: IModelType<ModelPropertiesDeclarationToProperties<{
                lat: ISimpleType<number>;
                lon: ISimpleType<number>;
            }>, {}, {
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
            }>>>>;
        }>>>> & OptionalProperty;
        isLoading: IType<boolean, boolean, boolean> & OptionalProperty;
    }>>, {
        postalCode: string;
        country: string;
        geoCodeResults: any & IStateTreeNode<{
            latLon: any & {};
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            latLon: IModelType<ModelPropertiesDeclarationToProperties<{
                lat: ISimpleType<number>;
                lon: ISimpleType<number>;
            }>, {}, {
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
            }>>>>;
        }>>>;
        isLoading: boolean;
    } & {
        fetchGeoCode: () => Promise<{}>;
    } & {
        setPostalCode: (postalCode?: string) => void;
        setCountry: (country?: string) => void;
    } & {
        afterCreate(): void;
    } & IStateTreeNode<{} & {
        postalCode?: string;
        country?: string;
        geoCodeResults?: {
            latLon: any & any;
        } & any;
        isLoading?: boolean;
    }, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
        postalCode: IType<string, string, string> & OptionalProperty;
        country: IType<string, string, string> & OptionalProperty;
        geoCodeResults: IComplexType<{
            latLon: any & {};
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            latLon: IModelType<ModelPropertiesDeclarationToProperties<{
                lat: ISimpleType<number>;
                lon: ISimpleType<number>;
            }>, {}, {
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
            }>>>>;
        }>>, {
            latLon: any & IStateTreeNode<{
                lat: number;
                lon: number;
            } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
                lat: ISimpleType<number>;
                lon: ISimpleType<number>;
            }>>>;
        } & IStateTreeNode<{
            latLon: any & {};
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            latLon: IModelType<ModelPropertiesDeclarationToProperties<{
                lat: ISimpleType<number>;
                lon: ISimpleType<number>;
            }>, {}, {
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
            }>>>>;
        }>>>> & OptionalProperty;
        isLoading: IType<boolean, boolean, boolean> & OptionalProperty;
    }>>>> & OptionalProperty;
}>>>>;