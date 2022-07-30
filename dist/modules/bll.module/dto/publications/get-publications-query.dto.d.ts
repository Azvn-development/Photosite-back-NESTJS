import { IQuery } from "@nestjs/cqrs";
import { PublicationModel } from "modules/bll.module/models/publication.model";
export declare class GetPublicationsQuery implements IQuery {
}
export declare class GetPublicationsQueryResponse {
    publications: PublicationModel[];
    constructor(publications: PublicationModel[]);
}
