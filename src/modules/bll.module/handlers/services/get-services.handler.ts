import { Mapper } from "@automapper/core";
import { InjectMapper } from "@automapper/nestjs";
import { QueryHandler } from "@nestjs/cqrs";
import { GetServicesQuery, GetServicesQueryResponse } from "modules/bll.module/dto/services/get-services.query.dto";
import { ServiceModel } from "modules/bll.module/models/service.model";
import { ServiceEntity } from "modules/dal.module/entities/service.entity";
import { ServiceRepository } from "modules/dal.module/repositories/service.repository";
import { IQueryHandler } from "../query.interface";

@QueryHandler(GetServicesQuery)
export class GetServicesHandler implements IQueryHandler<GetServicesQuery, GetServicesQueryResponse> {
    constructor(
        private _serviceRepository: ServiceRepository,
        @InjectMapper() private _mapper: Mapper
    ) {}

    async execute(query: GetServicesQuery): Promise<GetServicesQueryResponse> {
        let entities: ServiceEntity[] = [];

        this._serviceRepository.transactional(manager => {
            return this._serviceRepository.findAll(manager);
        })
        .then(result => {
            entities = result;
        })
        .catch(err => {
            console.error(err);
        })

        return this._mapper.mapArray(entities, ServiceModel, ServiceEntity);
    }
}