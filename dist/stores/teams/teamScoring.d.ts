import { IModelType, Instance, IStateTreeNode, ISimpleType, ModelPropertiesDeclarationToProperties, ModelSnapshotType } from 'mobx-state-tree';
export declare type TeamScoringRemedyStoreType = Instance<typeof TeamScoringRemedyStore>;
export interface ITeamScoringRemedyStore extends TeamScoringRemedyStoreType {
}
export declare const TeamScoringRemedyStore: IModelType<ModelPropertiesDeclarationToProperties<{
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
export declare type TeamScoringObservationStoreType = Instance<typeof TeamScoringObservationStore>;
export interface ITeamScoringObservationStore extends TeamScoringObservationStoreType {
}
export declare const TeamScoringObservationStore: IModelType<ModelPropertiesDeclarationToProperties<{
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
export declare type TeamScoringPatientFriendlyStoreType = Instance<typeof TeamScoringPatientFriendlyStore>;
export interface ITeamScoringPatientFriendlyStore extends TeamScoringPatientFriendlyStoreType {
}
export declare const TeamScoringPatientFriendlyStore: IModelType<ModelPropertiesDeclarationToProperties<{
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
export declare type TeamScoringEligibilityStoreType = Instance<typeof TeamScoringEntryEligibilityStore>;
export interface ITeamScoringEligibilityStore extends TeamScoringEligibilityStoreType {
}
export declare const TeamScoringEntryEligibilityStore: IModelType<ModelPropertiesDeclarationToProperties<{
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
export declare type TeamScoringStoreType = Instance<typeof TeamScoringStore>;
export interface ITeamScoringStore extends TeamScoringStoreType {
}
export declare const TeamScoringStore: IModelType<ModelPropertiesDeclarationToProperties<{
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
}>, {}, {
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
}>>>>;
