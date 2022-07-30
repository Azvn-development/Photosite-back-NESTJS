import { Mapper } from "@automapper/core";
import { AddServiceCommand } from "modules/bll.module/dto/services/add-service-command.dto";
import { ServiceRepository } from "modules/dal.module/repositories/service.repository";
import { ICommandHandler } from "../command.interface";
export declare class AddServiceHandler implements ICommandHandler<AddServiceCommand> {
    private _serviceRepository;
    private _mapper;
    constructor(_serviceRepository: ServiceRepository, _mapper: Mapper);
    execute(command: AddServiceCommand): Promise<number>;
}
