import { Mapper } from "@automapper/core";
import { InjectMapper } from "@automapper/nestjs";
import { CommandHandler } from "@nestjs/cqrs";
import { EditServiceCommand } from "modules/bll.module/dto/services/edit-service-command.dto";
import { ServiceModel } from "modules/bll.module/models/service.model";
import { ServiceEntity } from "modules/dal.module/entities/service.entity";
import { ServiceRepository } from "modules/dal.module/repositories/service.repository";
import { ICommandHandler } from "../command.interface";

@CommandHandler(EditServiceCommand)
export class EditServiceHandler implements ICommandHandler<EditServiceCommand> {
    constructor(
        private _serviceRepository: ServiceRepository,
        @InjectMapper() private _mapper: Mapper
    ) {}

    async execute(command: EditServiceCommand): Promise<number> {
        let entity = this._mapper.map(command.service, ServiceModel, ServiceEntity);

        this._serviceRepository.transactional(manager => {
            return this._serviceRepository.edit(entity, manager);
        })
        .then(result => {
            entity = result;
        })
        .catch(err => {
            console.error(err);
        })

        return entity?.id;
    }
}