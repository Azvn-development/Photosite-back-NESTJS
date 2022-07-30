import { DeleteServiceCommand } from "modules/bll.module/dto/services/delete-service-command.dto";
import { ServiceRepository } from "modules/dal.module/repositories/service.repository";
import { ICommandHandler } from "../command.interface";
export declare class DeleteServiceHandler implements ICommandHandler<DeleteServiceCommand> {
    private _serviceRepository;
    constructor(_serviceRepository: ServiceRepository);
    execute(command: DeleteServiceCommand): Promise<number>;
}
