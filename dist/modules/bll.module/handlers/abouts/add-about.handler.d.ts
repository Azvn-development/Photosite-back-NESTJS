import { Mapper } from "@automapper/core";
import { AddAboutCommand } from "modules/bll.module/dto/abouts/add-about-command.dto";
import { AboutRepository } from "modules/dal.module/repositories/about.repository";
import { ICommandHandler } from "../command.interface";
export declare class AddAboutHandler implements ICommandHandler<AddAboutCommand> {
    private _aboutRepository;
    private _mapper;
    constructor(_aboutRepository: AboutRepository, _mapper: Mapper);
    execute(command: AddAboutCommand): Promise<number>;
}
