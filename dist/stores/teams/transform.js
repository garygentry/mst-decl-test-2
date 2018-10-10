// import { isStateTreeNode } from 'mobx-state-tree';
// import { TeamStore, ITeamStore } from './team';
// import { ITeamLocationStore } from './teamLocation';
// import { ITeamAddressStore } from './teamAddress';
// import { ITeamOfficialStore } from './teamOfficial';
// import { ITeamContactStore } from './teamContact';
// import { ITeamScoringStore } from './teamScoring';
// const transform = <T>(o: object | null): T => {
//     if (o) {
//         const transformed = {};
//         for (const propName of Object.getOwnPropertyNames(o)) {
//             //transformed[camelCase(propName)] = o[propName] || '';
//         }
//         return transformed as T;
//     } else {
//         return {} as T;
//     }
// };
// const transformAr = <T>(o: object | object[] | null): T[] => {
//     if (o) {
//         const a = Array.isArray(o) ? o : [o];
//         return a.map(oa => {
//             return transform(oa) as T;
//         }) as T[];
//     } else {
//         return [];
//     }
// };
// const transformLocations = (team: any): ITeamLocationStore[] => {
//     return [];
// };
// const transformScoring = (scoring: any): ITeamScoringStore => {
//     // brute force for now
//     return {
//         remedy: {
//             interventionArmCount: 0,
//             placeboArmCount: 0,
//             score: 0,
//         },
//         observation: {
//             score: 0,
//         },
//         patientFriendly: {
//             score: 0,
//         },
//         entryEligibility: {
//             score: 0,
//         },
//     };
// };
// export const toTeamStore = (team: any | ITeamStore): ITeamStore => {
//     if (isStateTreeNode(team)) {
//         return team as ITeamStore;
//     } else {
//         //const id: string = get(team, 'id', get(team, '_id', get(team, 'extended.summary.id')));
//         const id = ';'
//         let transformed: ITeamStore;
//         if (team.extended) {
//             const { summary } = team.extended;
//             transformed = {
//                 id,
//                 loadState: team.id_info ? 'full' : ('summary' as any), // tslint:disable-line no-any
//                 gameType: summary.game_type,
//                 briefTitle: summary.brief_title,
//                 briefSummary: summary.brief_summary,
//                 overallStatus: summary.overall_status,
//                 sponsor: summary.sponsor,
//                 phase: summary.phase,
//                 submissionUpdatedDate: '',// formatUtcString(summary.submission_updated_date),
//                 gameFirstPostedDate: '', //formatUtcString(summary.game_first_posted_date),
//                 startDate: '', // formatUtcString(summary.start_date),
//                 locationGeopoints: summary.location_geopoints as any, // tslint:disable-line no-any
//                 hasRecruitingOverallStatus: summary.has_recruiting_overall_status,
//                 scoring: transformScoring(summary.scoring) as any, // tslint:disable-line no-any
//                 conditions: summary.conditions as any, // tslint:disable-line no-any
//                 locations: transformLocations(team) as any, // tslint:disable-line no-any
//             } as ITeamStore;
//         } else {
//             transformed = {
//                 id,
//                 loadState: 'init',
//             } as ITeamStore;
//         }
//         return transformed;
//     }
// };
//# sourceMappingURL=transform.js.map