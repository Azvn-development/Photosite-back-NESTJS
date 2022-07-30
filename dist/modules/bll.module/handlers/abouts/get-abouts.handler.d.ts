import { Mapper } from '@automapper/core';
import { GetAboutsQuery, GetAboutsQueryResponse } from 'modules/bll.module/dto/abouts/get-abouts-query.dto';
import { AboutRepository } from 'modules/dal.module/repositories/about.repository';
import { IQueryHandler } from '../query.interface';
export declare class GetAboutsHandler implements IQueryHandler<GetAboutsQuery, GetAboutsQueryResponse> {
    private _aboutRepository;
    private _mapper;
    constructor(_aboutRepository: AboutRepository, _mapper: Mapper);
    execute(request: GetAboutsQuery): Promise<GetAboutsQueryResponse>;
}
