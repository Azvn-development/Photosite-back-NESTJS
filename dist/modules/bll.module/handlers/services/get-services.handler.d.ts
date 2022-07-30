import { Mapper } from "@automapper/core";
import { GetServicesQuery, GetServicesQueryResponse } from "modules/bll.module/dto/services/get-services.query.dto";
import { ServiceRepository } from "modules/dal.module/repositories/service.repository";
import { IQueryHandler } from "../query.interface";
export declare class GetServicesHandler implements IQueryHandler<GetServicesQuery, GetServicesQueryResponse> {
    private _serviceRepository;
    private _mapper;
    constructor(_serviceRepository: ServiceRepository, _mapper: Mapper);
    execute(query: GetServicesQuery): Promise<GetServicesQueryResponse>;
}
