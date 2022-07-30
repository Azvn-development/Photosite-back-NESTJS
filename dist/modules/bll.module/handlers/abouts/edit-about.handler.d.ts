import { Mapper } from "@automapper/core";
import { EditAboutCommand } from "modules/bll.module/dto/abouts/edit-about-command.dto";
import { AboutRepository } from "modules/dal.module/repositories/about.repository";
import { ICommandHandler } from "../command.interface";
export declare class EditAboutHandler implements ICommandHandler<EditAboutCommand> {
    private _aboutRepository;
    private _mapper;
    constructor(_aboutRepository: AboutRepository, _mapper: Mapper);
    execute(command: EditAboutCommand): Promise<number>;
}
