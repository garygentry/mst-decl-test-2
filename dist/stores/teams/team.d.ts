import { IModelType, Instance, IComplexType, IMSTArray, IStateTreeNode, IType, ModelSnapshotType, OptionalProperty, ISimpleType, ModelPropertiesDeclarationToProperties } from 'mobx-state-tree';
export declare type TeamStoreType = Instance<typeof TeamStore>;
export interface ITeamStore extends TeamStoreType {
}
export declare const TeamStore: IModelType<ModelPropertiesDeclarationToProperties<{
    id: IType<string, string, string> & OptionalProperty;
    loadState: IType<"init" | "summary" | "full", "init" | "summary" | "full", "init" | "summary" | "full"> & OptionalProperty;
    gameType: IType<string, string, string> & OptionalProperty;
    briefTitle: IType<string, string, string> & OptionalProperty;
    briefSummary: IType<string, string, string> & OptionalProperty;
    overallStatus: IType<string, string, string> & OptionalProperty;
    sponsor: IType<string, string, string> & OptionalProperty;
    phase: IType<string, string, string> & OptionalProperty;
    submissionUpdatedDate: IType<string, string, string> & OptionalProperty;
    gameFirstPostedDate: IType<string, string, string> & OptionalProperty;
    startDate: IType<string, string, string> & OptionalProperty;
    locationGeopoints: IComplexType<({
        lat: number;
        lon: number;
    } & {})[], ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
        lat: ISimpleType<number>;
        lon: ISimpleType<number>;
    }>>[], IMSTArray<{
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
    }>>>>> & OptionalProperty;
    hasRecruitingOverallStatus: IType<boolean, boolean, boolean> & OptionalProperty;
    scoring: IComplexType<{
        remedy: any & {};
        observation: any & {};
        patientFriendly: any & {};
        entryEligibility: any & {};
    } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
        remedy: IModelType<ModelPropertiesDeclarationToProperties<{
            score: ISimpleType<number>;
            interventionArmCount: ISimpleType<number>;
            placeboArmCount: ISimpleType<number>;
        }>, {}, {
            score: number;
            interventionArmCount: number;
            placeboArmCount: number;
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            score: ISimpleType<number>;
            interventionArmCount: ISimpleType<number>;
            placeboArmCount: ISimpleType<number>;
        }>>, {
            score: number;
            interventionArmCount: number;
            placeboArmCount: number;
        } & IStateTreeNode<{
            score: number;
            interventionArmCount: number;
            placeboArmCount: number;
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            score: ISimpleType<number>;
            interventionArmCount: ISimpleType<number>;
            placeboArmCount: ISimpleType<number>;
        }>>>>;
        observation: IModelType<ModelPropertiesDeclarationToProperties<{
            score: ISimpleType<number>;
        }>, {}, {
            score: number;
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            score: ISimpleType<number>;
        }>>, {
            score: number;
        } & IStateTreeNode<{
            score: number;
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            score: ISimpleType<number>;
        }>>>>;
        patientFriendly: IModelType<ModelPropertiesDeclarationToProperties<{
            score: ISimpleType<number>;
        }>, {}, {
            score: number;
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            score: ISimpleType<number>;
        }>>, {
            score: number;
        } & IStateTreeNode<{
            score: number;
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            score: ISimpleType<number>;
        }>>>>;
        entryEligibility: IModelType<ModelPropertiesDeclarationToProperties<{
            score: ISimpleType<number>;
        }>, {}, {
            score: number;
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            score: ISimpleType<number>;
        }>>, {
            score: number;
        } & IStateTreeNode<{
            score: number;
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            score: ISimpleType<number>;
        }>>>>;
    }>>, {
        remedy: any & IStateTreeNode<{
            score: number;
            interventionArmCount: number;
            placeboArmCount: number;
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            score: ISimpleType<number>;
            interventionArmCount: ISimpleType<number>;
            placeboArmCount: ISimpleType<number>;
        }>>>;
        observation: any & IStateTreeNode<{
            score: number;
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            score: ISimpleType<number>;
        }>>>;
        patientFriendly: any & IStateTreeNode<{
            score: number;
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            score: ISimpleType<number>;
        }>>>;
        entryEligibility: any & IStateTreeNode<{
            score: number;
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            score: ISimpleType<number>;
        }>>>;
    } & IStateTreeNode<{
        remedy: any & {};
        observation: any & {};
        patientFriendly: any & {};
        entryEligibility: any & {};
    } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
        remedy: IModelType<ModelPropertiesDeclarationToProperties<{
            score: ISimpleType<number>;
            interventionArmCount: ISimpleType<number>;
            placeboArmCount: ISimpleType<number>;
        }>, {}, {
            score: number;
            interventionArmCount: number;
            placeboArmCount: number;
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            score: ISimpleType<number>;
            interventionArmCount: ISimpleType<number>;
            placeboArmCount: ISimpleType<number>;
        }>>, {
            score: number;
            interventionArmCount: number;
            placeboArmCount: number;
        } & IStateTreeNode<{
            score: number;
            interventionArmCount: number;
            placeboArmCount: number;
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            score: ISimpleType<number>;
            interventionArmCount: ISimpleType<number>;
            placeboArmCount: ISimpleType<number>;
        }>>>>;
        observation: IModelType<ModelPropertiesDeclarationToProperties<{
            score: ISimpleType<number>;
        }>, {}, {
            score: number;
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            score: ISimpleType<number>;
        }>>, {
            score: number;
        } & IStateTreeNode<{
            score: number;
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            score: ISimpleType<number>;
        }>>>>;
        patientFriendly: IModelType<ModelPropertiesDeclarationToProperties<{
            score: ISimpleType<number>;
        }>, {}, {
            score: number;
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            score: ISimpleType<number>;
        }>>, {
            score: number;
        } & IStateTreeNode<{
            score: number;
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            score: ISimpleType<number>;
        }>>>>;
        entryEligibility: IModelType<ModelPropertiesDeclarationToProperties<{
            score: ISimpleType<number>;
        }>, {}, {
            score: number;
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            score: ISimpleType<number>;
        }>>, {
            score: number;
        } & IStateTreeNode<{
            score: number;
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            score: ISimpleType<number>;
        }>>>>;
    }>>>> & OptionalProperty;
    conditions: IComplexType<string[], string[], IMSTArray<string, string, string>> & OptionalProperty;
    locations: IComplexType<({} & {
        address?: {} & any;
        facilityName?: string;
        contact?: {} & any;
        contactBackup?: {} & any;
        recruitmentStatus?: string;
        officials?: ({} & any)[];
    })[], ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
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
    }>>[], IMSTArray<{} & {
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
    }>>>>> & OptionalProperty;
}>, {
    readonly isSummary: boolean;
}, {} & {
    id?: string;
    loadState?: "init" | "summary" | "full";
    gameType?: string;
    briefTitle?: string;
    briefSummary?: string;
    overallStatus?: string;
    sponsor?: string;
    phase?: string;
    submissionUpdatedDate?: string;
    gameFirstPostedDate?: string;
    startDate?: string;
    locationGeopoints?: ({
        lat: number;
        lon: number;
    } & any)[];
    hasRecruitingOverallStatus?: boolean;
    scoring?: {
        remedy: any & any;
        observation: any & any;
        patientFriendly: any & any;
        entryEligibility: any & any;
    } & any;
    conditions?: string[];
    locations?: ({} & any)[];
}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
    id: IType<string, string, string> & OptionalProperty;
    loadState: IType<"init" | "summary" | "full", "init" | "summary" | "full", "init" | "summary" | "full"> & OptionalProperty;
    gameType: IType<string, string, string> & OptionalProperty;
    briefTitle: IType<string, string, string> & OptionalProperty;
    briefSummary: IType<string, string, string> & OptionalProperty;
    overallStatus: IType<string, string, string> & OptionalProperty;
    sponsor: IType<string, string, string> & OptionalProperty;
    phase: IType<string, string, string> & OptionalProperty;
    submissionUpdatedDate: IType<string, string, string> & OptionalProperty;
    gameFirstPostedDate: IType<string, string, string> & OptionalProperty;
    startDate: IType<string, string, string> & OptionalProperty;
    locationGeopoints: IComplexType<({
        lat: number;
        lon: number;
    } & {})[], ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
        lat: ISimpleType<number>;
        lon: ISimpleType<number>;
    }>>[], IMSTArray<{
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
    }>>>>> & OptionalProperty;
    hasRecruitingOverallStatus: IType<boolean, boolean, boolean> & OptionalProperty;
    scoring: IComplexType<{
        remedy: any & {};
        observation: any & {};
        patientFriendly: any & {};
        entryEligibility: any & {};
    } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
        remedy: IModelType<ModelPropertiesDeclarationToProperties<{
            score: ISimpleType<number>;
            interventionArmCount: ISimpleType<number>;
            placeboArmCount: ISimpleType<number>;
        }>, {}, {
            score: number;
            interventionArmCount: number;
            placeboArmCount: number;
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            score: ISimpleType<number>;
            interventionArmCount: ISimpleType<number>;
            placeboArmCount: ISimpleType<number>;
        }>>, {
            score: number;
            interventionArmCount: number;
            placeboArmCount: number;
        } & IStateTreeNode<{
            score: number;
            interventionArmCount: number;
            placeboArmCount: number;
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            score: ISimpleType<number>;
            interventionArmCount: ISimpleType<number>;
            placeboArmCount: ISimpleType<number>;
        }>>>>;
        observation: IModelType<ModelPropertiesDeclarationToProperties<{
            score: ISimpleType<number>;
        }>, {}, {
            score: number;
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            score: ISimpleType<number>;
        }>>, {
            score: number;
        } & IStateTreeNode<{
            score: number;
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            score: ISimpleType<number>;
        }>>>>;
        patientFriendly: IModelType<ModelPropertiesDeclarationToProperties<{
            score: ISimpleType<number>;
        }>, {}, {
            score: number;
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            score: ISimpleType<number>;
        }>>, {
            score: number;
        } & IStateTreeNode<{
            score: number;
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            score: ISimpleType<number>;
        }>>>>;
        entryEligibility: IModelType<ModelPropertiesDeclarationToProperties<{
            score: ISimpleType<number>;
        }>, {}, {
            score: number;
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            score: ISimpleType<number>;
        }>>, {
            score: number;
        } & IStateTreeNode<{
            score: number;
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            score: ISimpleType<number>;
        }>>>>;
    }>>, {
        remedy: any & IStateTreeNode<{
            score: number;
            interventionArmCount: number;
            placeboArmCount: number;
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            score: ISimpleType<number>;
            interventionArmCount: ISimpleType<number>;
            placeboArmCount: ISimpleType<number>;
        }>>>;
        observation: any & IStateTreeNode<{
            score: number;
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            score: ISimpleType<number>;
        }>>>;
        patientFriendly: any & IStateTreeNode<{
            score: number;
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            score: ISimpleType<number>;
        }>>>;
        entryEligibility: any & IStateTreeNode<{
            score: number;
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            score: ISimpleType<number>;
        }>>>;
    } & IStateTreeNode<{
        remedy: any & {};
        observation: any & {};
        patientFriendly: any & {};
        entryEligibility: any & {};
    } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
        remedy: IModelType<ModelPropertiesDeclarationToProperties<{
            score: ISimpleType<number>;
            interventionArmCount: ISimpleType<number>;
            placeboArmCount: ISimpleType<number>;
        }>, {}, {
            score: number;
            interventionArmCount: number;
            placeboArmCount: number;
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            score: ISimpleType<number>;
            interventionArmCount: ISimpleType<number>;
            placeboArmCount: ISimpleType<number>;
        }>>, {
            score: number;
            interventionArmCount: number;
            placeboArmCount: number;
        } & IStateTreeNode<{
            score: number;
            interventionArmCount: number;
            placeboArmCount: number;
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            score: ISimpleType<number>;
            interventionArmCount: ISimpleType<number>;
            placeboArmCount: ISimpleType<number>;
        }>>>>;
        observation: IModelType<ModelPropertiesDeclarationToProperties<{
            score: ISimpleType<number>;
        }>, {}, {
            score: number;
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            score: ISimpleType<number>;
        }>>, {
            score: number;
        } & IStateTreeNode<{
            score: number;
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            score: ISimpleType<number>;
        }>>>>;
        patientFriendly: IModelType<ModelPropertiesDeclarationToProperties<{
            score: ISimpleType<number>;
        }>, {}, {
            score: number;
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            score: ISimpleType<number>;
        }>>, {
            score: number;
        } & IStateTreeNode<{
            score: number;
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            score: ISimpleType<number>;
        }>>>>;
        entryEligibility: IModelType<ModelPropertiesDeclarationToProperties<{
            score: ISimpleType<number>;
        }>, {}, {
            score: number;
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            score: ISimpleType<number>;
        }>>, {
            score: number;
        } & IStateTreeNode<{
            score: number;
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            score: ISimpleType<number>;
        }>>>>;
    }>>>> & OptionalProperty;
    conditions: IComplexType<string[], string[], IMSTArray<string, string, string>> & OptionalProperty;
    locations: IComplexType<({} & {
        address?: {} & any;
        facilityName?: string;
        contact?: {} & any;
        contactBackup?: {} & any;
        recruitmentStatus?: string;
        officials?: ({} & any)[];
    })[], ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
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
    }>>[], IMSTArray<{} & {
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
    }>>>>> & OptionalProperty;
}>>, {
    id: string;
    loadState: "init" | "summary" | "full";
    gameType: string;
    briefTitle: string;
    briefSummary: string;
    overallStatus: string;
    sponsor: string;
    phase: string;
    submissionUpdatedDate: string;
    gameFirstPostedDate: string;
    startDate: string;
    locationGeopoints: IMSTArray<{
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
    }>>>> & IStateTreeNode<({
        lat: number;
        lon: number;
    } & {})[], ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
        lat: ISimpleType<number>;
        lon: ISimpleType<number>;
    }>>[]>;
    hasRecruitingOverallStatus: boolean;
    scoring: any & IStateTreeNode<{
        remedy: any & {};
        observation: any & {};
        patientFriendly: any & {};
        entryEligibility: any & {};
    } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
        remedy: IModelType<ModelPropertiesDeclarationToProperties<{
            score: ISimpleType<number>;
            interventionArmCount: ISimpleType<number>;
            placeboArmCount: ISimpleType<number>;
        }>, {}, {
            score: number;
            interventionArmCount: number;
            placeboArmCount: number;
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            score: ISimpleType<number>;
            interventionArmCount: ISimpleType<number>;
            placeboArmCount: ISimpleType<number>;
        }>>, any & IStateTreeNode<{
            score: number;
            interventionArmCount: number;
            placeboArmCount: number;
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            score: ISimpleType<number>;
            interventionArmCount: ISimpleType<number>;
            placeboArmCount: ISimpleType<number>;
        }>>>>;
        observation: IModelType<ModelPropertiesDeclarationToProperties<{
            score: ISimpleType<number>;
        }>, {}, {
            score: number;
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            score: ISimpleType<number>;
        }>>, any & IStateTreeNode<{
            score: number;
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            score: ISimpleType<number>;
        }>>>>;
        patientFriendly: IModelType<ModelPropertiesDeclarationToProperties<{
            score: ISimpleType<number>;
        }>, {}, {
            score: number;
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            score: ISimpleType<number>;
        }>>, any & IStateTreeNode<{
            score: number;
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            score: ISimpleType<number>;
        }>>>>;
        entryEligibility: IModelType<ModelPropertiesDeclarationToProperties<{
            score: ISimpleType<number>;
        }>, {}, {
            score: number;
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            score: ISimpleType<number>;
        }>>, any & IStateTreeNode<{
            score: number;
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            score: ISimpleType<number>;
        }>>>>;
    }>>>;
    conditions: IMSTArray<string, string, string> & IStateTreeNode<string[], string[]>;
    locations: IMSTArray<{} & {
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
        }>>, any & IStateTreeNode<{} & {
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
        }>>, any & IStateTreeNode<{} & {
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
        }>>, any & IStateTreeNode<{} & {
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
        }>>>>> & OptionalProperty;
    }>>, any & IStateTreeNode<{} & {
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
        }>>, any & IStateTreeNode<{} & {
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
        }>>, any & IStateTreeNode<{} & {
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
        }>>, any & IStateTreeNode<{} & {
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
        }>>>>> & OptionalProperty;
    }>>>> & IStateTreeNode<({} & {
        address?: {} & any;
        facilityName?: string;
        contact?: {} & any;
        contactBackup?: {} & any;
        recruitmentStatus?: string;
        officials?: ({} & any)[];
    })[], ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
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
        }>>, any & IStateTreeNode<{} & {
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
        }>>, any & IStateTreeNode<{} & {
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
        }>>, any & IStateTreeNode<{} & {
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
        }>>>>> & OptionalProperty;
    }>>[]>;
} & {
    readonly isSummary: boolean;
} & IStateTreeNode<{} & {
    id?: string;
    loadState?: "init" | "summary" | "full";
    gameType?: string;
    briefTitle?: string;
    briefSummary?: string;
    overallStatus?: string;
    sponsor?: string;
    phase?: string;
    submissionUpdatedDate?: string;
    gameFirstPostedDate?: string;
    startDate?: string;
    locationGeopoints?: ({
        lat: number;
        lon: number;
    } & any)[];
    hasRecruitingOverallStatus?: boolean;
    scoring?: {
        remedy: any & any;
        observation: any & any;
        patientFriendly: any & any;
        entryEligibility: any & any;
    } & any;
    conditions?: string[];
    locations?: ({} & any)[];
}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
    id: IType<string, string, string> & OptionalProperty;
    loadState: IType<"init" | "summary" | "full", "init" | "summary" | "full", "init" | "summary" | "full"> & OptionalProperty;
    gameType: IType<string, string, string> & OptionalProperty;
    briefTitle: IType<string, string, string> & OptionalProperty;
    briefSummary: IType<string, string, string> & OptionalProperty;
    overallStatus: IType<string, string, string> & OptionalProperty;
    sponsor: IType<string, string, string> & OptionalProperty;
    phase: IType<string, string, string> & OptionalProperty;
    submissionUpdatedDate: IType<string, string, string> & OptionalProperty;
    gameFirstPostedDate: IType<string, string, string> & OptionalProperty;
    startDate: IType<string, string, string> & OptionalProperty;
    locationGeopoints: IComplexType<({
        lat: number;
        lon: number;
    } & {})[], ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
        lat: ISimpleType<number>;
        lon: ISimpleType<number>;
    }>>[], IMSTArray<{
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
    }>>>>> & OptionalProperty;
    hasRecruitingOverallStatus: IType<boolean, boolean, boolean> & OptionalProperty;
    scoring: IComplexType<{
        remedy: any & {};
        observation: any & {};
        patientFriendly: any & {};
        entryEligibility: any & {};
    } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
        remedy: IModelType<ModelPropertiesDeclarationToProperties<{
            score: ISimpleType<number>;
            interventionArmCount: ISimpleType<number>;
            placeboArmCount: ISimpleType<number>;
        }>, {}, {
            score: number;
            interventionArmCount: number;
            placeboArmCount: number;
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            score: ISimpleType<number>;
            interventionArmCount: ISimpleType<number>;
            placeboArmCount: ISimpleType<number>;
        }>>, {
            score: number;
            interventionArmCount: number;
            placeboArmCount: number;
        } & IStateTreeNode<{
            score: number;
            interventionArmCount: number;
            placeboArmCount: number;
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            score: ISimpleType<number>;
            interventionArmCount: ISimpleType<number>;
            placeboArmCount: ISimpleType<number>;
        }>>>>;
        observation: IModelType<ModelPropertiesDeclarationToProperties<{
            score: ISimpleType<number>;
        }>, {}, {
            score: number;
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            score: ISimpleType<number>;
        }>>, {
            score: number;
        } & IStateTreeNode<{
            score: number;
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            score: ISimpleType<number>;
        }>>>>;
        patientFriendly: IModelType<ModelPropertiesDeclarationToProperties<{
            score: ISimpleType<number>;
        }>, {}, {
            score: number;
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            score: ISimpleType<number>;
        }>>, {
            score: number;
        } & IStateTreeNode<{
            score: number;
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            score: ISimpleType<number>;
        }>>>>;
        entryEligibility: IModelType<ModelPropertiesDeclarationToProperties<{
            score: ISimpleType<number>;
        }>, {}, {
            score: number;
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            score: ISimpleType<number>;
        }>>, {
            score: number;
        } & IStateTreeNode<{
            score: number;
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            score: ISimpleType<number>;
        }>>>>;
    }>>, {
        remedy: any & IStateTreeNode<{
            score: number;
            interventionArmCount: number;
            placeboArmCount: number;
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            score: ISimpleType<number>;
            interventionArmCount: ISimpleType<number>;
            placeboArmCount: ISimpleType<number>;
        }>>>;
        observation: any & IStateTreeNode<{
            score: number;
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            score: ISimpleType<number>;
        }>>>;
        patientFriendly: any & IStateTreeNode<{
            score: number;
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            score: ISimpleType<number>;
        }>>>;
        entryEligibility: any & IStateTreeNode<{
            score: number;
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            score: ISimpleType<number>;
        }>>>;
    } & IStateTreeNode<{
        remedy: any & {};
        observation: any & {};
        patientFriendly: any & {};
        entryEligibility: any & {};
    } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
        remedy: IModelType<ModelPropertiesDeclarationToProperties<{
            score: ISimpleType<number>;
            interventionArmCount: ISimpleType<number>;
            placeboArmCount: ISimpleType<number>;
        }>, {}, {
            score: number;
            interventionArmCount: number;
            placeboArmCount: number;
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            score: ISimpleType<number>;
            interventionArmCount: ISimpleType<number>;
            placeboArmCount: ISimpleType<number>;
        }>>, {
            score: number;
            interventionArmCount: number;
            placeboArmCount: number;
        } & IStateTreeNode<{
            score: number;
            interventionArmCount: number;
            placeboArmCount: number;
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            score: ISimpleType<number>;
            interventionArmCount: ISimpleType<number>;
            placeboArmCount: ISimpleType<number>;
        }>>>>;
        observation: IModelType<ModelPropertiesDeclarationToProperties<{
            score: ISimpleType<number>;
        }>, {}, {
            score: number;
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            score: ISimpleType<number>;
        }>>, {
            score: number;
        } & IStateTreeNode<{
            score: number;
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            score: ISimpleType<number>;
        }>>>>;
        patientFriendly: IModelType<ModelPropertiesDeclarationToProperties<{
            score: ISimpleType<number>;
        }>, {}, {
            score: number;
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            score: ISimpleType<number>;
        }>>, {
            score: number;
        } & IStateTreeNode<{
            score: number;
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            score: ISimpleType<number>;
        }>>>>;
        entryEligibility: IModelType<ModelPropertiesDeclarationToProperties<{
            score: ISimpleType<number>;
        }>, {}, {
            score: number;
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            score: ISimpleType<number>;
        }>>, {
            score: number;
        } & IStateTreeNode<{
            score: number;
        } & {}, ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
            score: ISimpleType<number>;
        }>>>>;
    }>>>> & OptionalProperty;
    conditions: IComplexType<string[], string[], IMSTArray<string, string, string>> & OptionalProperty;
    locations: IComplexType<({} & {
        address?: {} & any;
        facilityName?: string;
        contact?: {} & any;
        contactBackup?: {} & any;
        recruitmentStatus?: string;
        officials?: ({} & any)[];
    })[], ModelSnapshotType<ModelPropertiesDeclarationToProperties<{
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
    }>>[], IMSTArray<{} & {
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
    }>>>>> & OptionalProperty;
}>>>>;
