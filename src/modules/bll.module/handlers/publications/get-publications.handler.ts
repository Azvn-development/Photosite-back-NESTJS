import { Mapper } from "@automapper/core";
import { InjectMapper } from "@automapper/nestjs";
import { QueryHandler } from "@nestjs/cqrs";
import { GetPublicationsQuery, GetPublicationsQueryResponse } from "modules/bll.module/dto/publications/get-publications-query.dto";
import { PublicationModel } from "modules/bll.module/models/publication.model";
import { PublicationEntity } from "modules/dal.module/entities/publication.entity";
import { PublicationRepository } from "modules/dal.module/repositories/publication.repository";
import { IQueryHandler } from "../query.interface";

@QueryHandler(GetPublicationsQuery)
export class GetPublicationsHandler implements IQueryHandler<GetPublicationsQuery, GetPublicationsQueryResponse> {
    constructor(
        private _publicationRepository: PublicationRepository,
        @InjectMapper() private _mapper: Mapper
    ) {}

    async execute(query: GetPublicationsQuery): Promise<GetPublicationsQueryResponse> {
        let entities: PublicationEntity[] = [];

        this._publicationRepository.transactional(manager => {
            return this._publicationRepository.findAll(manager);
        })
        .then(result => {
            entities = result;

            entities
                .sort((a, b) => a.id - b.id)
                .forEach(e => {
                    e.images.sort((a, b) => a.creationDate.getTime() - b.creationDate.getTime())
                });
        })
        .catch(err => {
            console.error(err);
        })

        return new GetPublicationsQueryResponse(this._mapper.mapArray(entities, PublicationEntity, PublicationModel)) 
    }
}