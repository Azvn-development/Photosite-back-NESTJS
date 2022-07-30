import { Mapper } from "@automapper/core";
import { GetPublicationsQuery, GetPublicationsQueryResponse } from "modules/bll.module/dto/publications/get-publications-query.dto";
import { PublicationRepository } from "modules/dal.module/repositories/publication.repository";
import { IQueryHandler } from "../query.interface";
export declare class GetPublicationsHandler implements IQueryHandler<GetPublicationsQuery, GetPublicationsQueryResponse> {
    private _publicationRepository;
    private _mapper;
    constructor(_publicationRepository: PublicationRepository, _mapper: Mapper);
    execute(query: GetPublicationsQuery): Promise<GetPublicationsQueryResponse>;
}
