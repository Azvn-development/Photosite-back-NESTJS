import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { AddAboutCommand } from 'modules/bll.module/dto/abouts/add-about-command.dto';
import { EditAboutCommand } from 'modules/bll.module/dto/abouts/edit-about-command.dto';
import { GetAboutsQueryResponse } from 'modules/bll.module/dto/abouts/get-abouts-query.dto';
export declare class AboutsController {
    private _queryBus;
    private _commandBus;
    constructor(_queryBus: QueryBus, _commandBus: CommandBus);
    getAll(): Promise<GetAboutsQueryResponse>;
    add(request: AddAboutCommand): Promise<number>;
    edit(request: EditAboutCommand): Promise<number>;
    delete(id: number): Promise<number>;
}
