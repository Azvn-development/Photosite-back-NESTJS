import { IQuery } from "@nestjs/cqrs";
import { PublicationModel } from "modules/bll.module/models/publication.model";

export class GetPublicationsQuery implements IQuery {}

export class GetPublicationsQueryResponse {
    constructor(
        public publications: PublicationModel[]
    ) {}
}