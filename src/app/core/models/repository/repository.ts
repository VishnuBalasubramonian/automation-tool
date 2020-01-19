// export class Repository {
//     "logicalName": string;
//     "findMethod": string;
//     "xpathQuery_PropertyName": string;
//     "propertyValue": string;
//     "tagName": string;
//     "featureName": string;
//     "statusID": number;
//     "cudStatusID": number;
//     "isLocked": boolean;
//     "lockedByUser": number;
//     "addedDate": string;
//     "updateDate": string;
//     "id": number;
// };
export class Repository {
    id: number;
    logicalName: string;
    findMethod: string;
    xpathQuery_PropertyName: string;
    propertyValue: string;
    tagName: string;
    featureName: string;
    module: string;
    statusID: number;
    cudStatusID: number;
    isLocked: boolean;
    lockedByUser: number;
    createdOn: Date;
    updatedOn: Date;
    userId: number;
}