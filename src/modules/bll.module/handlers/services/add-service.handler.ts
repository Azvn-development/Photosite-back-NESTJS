import { Mapper } from "@automapper/core";
import { InjectMapper } from "@automapper/nestjs";
import { CommandHandler } from "@nestjs/cqrs";
import { AddServiceCommand } from "modules/bll.module/dto/services/add-service-command.dto";
import { ServiceModel } from "modules/bll.module/models/service.model";
import { ServiceEntity } from "modules/dal.module/entities/service.entity";
import { ServiceRepository } from "modules/dal.module/repositories/service.repository";
import { ICommandHandler } from "../command.interface";

@CommandHandler(AddServiceCommand)
export class AddServiceHandler implements ICommandHandler<AddServiceCommand> {
    constructor(
        private _serviceRepository: ServiceRepository,
        @InjectMapper() private _mapper: Mapper
    ) {}

    async execute(command: AddServiceCommand): Promise<number> {
        let entity = this._mapper.map(command.service, ServiceModel, ServiceEntity);

        this._serviceRepository.transactional(manager => {
            return this._serviceRepository.add(entity, manager);
        })
        .then(result => {
            entity = result;
        })
        .catch(err => {
            console.error(err);
            entity = undefined;
        })

        return entity?.id ?? -1;
    }
}