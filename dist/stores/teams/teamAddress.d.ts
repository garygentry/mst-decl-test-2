import { IModelType, Instance, IComplexType, IStateTreeNode, IType, ModelSnapshotType, OptionalProperty, ISimpleType, ModelPropertiesDeclarationToProperties } from 'mobx-state-tree';
export declare type TeamAddressStoreType = Instance<typeof TeamAddressStore>;
export interface ITeamAddressStore extends TeamAddressStoreType {
}
export declare const TeamAddressStore: IModelType<ModelPropertiesDeclarationToProperties<{
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
}>, {}, {} & {
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
}>>>>;
