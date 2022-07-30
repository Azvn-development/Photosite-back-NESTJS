import { CommandBus, QueryBus } from "@nestjs/cqrs";
import { AddServiceCommand } from "modules/bll.module/dto/services/add-service-command.dto";
import { EditServiceCommand } from "modules/bll.module/dto/services/edit-service-command.dto";
import { GetServicesQueryResponse } from "modules/bll.module/dto/services/get-services.query.dto";
export declare class ServicesController {
    private _queryBus;
    private _commandBus;
    constructor(_queryBus: QueryBus, _commandBus: CommandBus);
    getAll(): Promise<GetServicesQueryResponse>;
    add(request: AddServiceCommand): Promise<number>;
    edit(request: EditServiceCommand): Promise<number>;
    delete(id: number): Promise<number>;
}
