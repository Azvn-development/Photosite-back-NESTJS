import { Mapper } from "@automapper/core";
import { EditServiceCommand } from "modules/bll.module/dto/services/edit-service-command.dto";
import { ServiceRepository } from "modules/dal.module/repositories/service.repository";
import { ICommandHandler } from "../command.interface";
export declare class EditServiceHandler implements ICommandHandler<EditServiceCommand> {
    private _serviceRepository;
    private _mapper;
    constructor(_serviceRepository: ServiceRepository, _mapper: Mapper);
    execute(command: EditServiceCommand): Promise<number>;
}
