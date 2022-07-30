import { CommandHandler } from "@nestjs/cqrs";
import { DeleteServiceCommand } from "modules/bll.module/dto/services/delete-service-command.dto";
import { ServiceRepository } from "modules/dal.module/repositories/service.repository";
import { ICommandHandler } from "../command.interface";

@CommandHandler(DeleteServiceCommand)
export class DeleteServiceHandler implements ICommandHandler<DeleteServiceCommand> {
    constructor(
        private _serviceRepository: ServiceRepository,
    ) {}

    async execute(command: DeleteServiceCommand): Promise<number> {
        let id = command.id;

        this._serviceRepository.transactional(manager => {
            return this._serviceRepository.delete(id, manager)
        })
        .then(result => {
            id = result;
        })
        .catch(err => {
            console.error(err);
            id = -1;
        })

        return id;
    }
}