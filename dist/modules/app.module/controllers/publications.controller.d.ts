import { CommandBus, QueryBus } from "@nestjs/cqrs";
import { AddPublicationCommand } from "modules/bll.module/dto/publications/add-publication-command.dto";
import { EditPublicationCommand } from "modules/bll.module/dto/publications/edit-publication-command.dto";
import { GetPublicationsQueryResponse } from "modules/bll.module/dto/publications/get-publications-query.dto";
export declare class PublicationsController {
    private _queryBus;
    private _commandBus;
    constructor(_queryBus: QueryBus, _commandBus: CommandBus);
    getAll(): Promise<GetPublicationsQueryResponse>;
    add(request: AddPublicationCommand): Promise<number>;
    edit(request: EditPublicationCommand): Promise<number>;
    delete(id: number): Promise<number>;
}
