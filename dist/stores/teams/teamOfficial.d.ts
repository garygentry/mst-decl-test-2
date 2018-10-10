import { IModelType, Instance, IStateTreeNode, IType, OptionalProperty } from 'mobx-state-tree';
export declare type TeamOfficialStoreType = Instance<typeof TeamOfficialStore>;
export interface ITeamOfficialStore extends TeamOfficialStoreType {
}
export declare const TeamOfficialStore: IModelType<{
    affiliation: IType<string, string, string> & OptionalProperty;
    degrees: IType<string, string, string> & OptionalProperty;
    firstName: IType<string, string, string> & OptionalProperty;
    lastName: IType<string, string, string> & OptionalProperty;
    middleName: IType<string, string, string> & OptionalProperty;
    role: IType<string, string, string> & OptionalProperty;
}, {}, {} & {
    firstName?: string;
    lastName?: string;
    degrees?: string;
    middleName?: string;
    affiliation?: string;
    role?: string;
}, {
    affiliation: string;
    degrees: string;
    firstName: string;
    lastName: string;
    middleName: string;
    role: string;
}, {
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
}, {
    affiliation: string;
    degrees: string;
    firstName: string;
    lastName: string;
    middleName: string;
    role: string;
}>>;
