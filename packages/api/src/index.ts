export enum CollectionId {
    /** Public surgery information */
    Surgeries = "surgeries",
    /** Private surgery information */
    SurgeriesPrivate = "surgeries-private",
    /** Request tracker */
    Requests = "requests",
    Requests_Ips = "ips",
}

export interface IFirestoreSurgery {
    name: string;
    description: string;
}

export interface IFirestoreSurgeryPrivate {
    /** A list of hashes of tajszám, where tajszám is a string of 9 digits, e.g. 123456789 */
    tajHashes: string[];
}

export interface IFirestoreRequestIp {
    /** The number of requests made from a given IP on a given day */
    numberOfSearchRequests: number;
}

export interface IFunctionsSearchRequest {
    /** Hash of tajszám, where tajszám is a string of 9 digits, e.g. 123456789 */
    tajHash: string;
}

export interface IFunctionsSearchResponse {
    /** Surgeries which contain a patient with the requested tajszám */
    surgeryIds: string[];
}
