import { IModelType, IType, Instance, ISimpleType, IStateTreeNode, ModelPropertiesDeclarationToProperties, ModelSnapshotType, OptionalProperty, IComplexType } from 'mobx-state-tree';
export declare type LatLonStoreType = Instance<typeof LatLonStore>;
export interface ILatLonStore extends LatLonStoreType {
}
export declare const LatLonStore: IModelType<ModelPropertiesDeclarationToProperties<{
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
export declare type GeoCodeResultStoreType = Instance<typeof GeoCodeResultStore>;
export interface IGeoCodeResultStore extends GeoCodeResultStoreType {
}
export declare const GeoCodeResultStore: IModelType<ModelPropertiesDeclarationToProperties<{
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
}>, {}, {
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
}>>>>;
export declare type GeoLocationStoreType = Instance<typeof GeoLocationStore>;
export interface IGeoLocationStore extends GeoLocationStoreType {
}
export declare const GeoLocationStore: IModelType<ModelPropertiesDeclarationToProperties<{
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
}>, {
    fetchGeoCode: () => Promise<{}>;
} & {
    setPostalCode: (postalCode?: string) => void;
    setCountry: (country?: string) => void;
} & {
    afterCreate(): void;
}, {} & {
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
}>>>>;
