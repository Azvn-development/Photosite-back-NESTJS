import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { QueryHandler } from '@nestjs/cqrs';
import { GetAboutsQuery, GetAboutsQueryResponse } from 'modules/bll.module/dto/abouts/get-abouts-query.dto';
import { AboutModel } from 'modules/bll.module/models/about.model';
import { AboutEntity } from 'modules/dal.module/entities/about.entity';
import { AboutRepository } from 'modules/dal.module/repositories/about.repository';
import { IQueryHandler } from '../query.interface';

@QueryHandler(GetAboutsQuery)
export class GetAboutsHandler implements IQueryHandler<GetAboutsQuery, GetAboutsQueryResponse> {
    constructor(
        private _aboutRepository: AboutRepository,
        @InjectMapper() private _mapper: Mapper
    ) {}

    async execute(request: GetAboutsQuery): Promise<GetAboutsQueryResponse> {
        let entities: AboutEntity[] = [];

        this._aboutRepository.transactional(manager => {
            return this._aboutRepository.findAll(manager);
        })
        .then(result => {
            entities = result;
        })
        .catch(err => {
            console.error(err);
        })

        return new GetAboutsQueryResponse(this._mapper.mapArray(entities, AboutEntity, AboutModel));
    }
}
