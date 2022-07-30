import { Mapper } from "@automapper/core";
import { EditPublicationCommand } from "modules/bll.module/dto/publications/edit-publication-command.dto";
import { PublicationRepository } from "modules/dal.module/repositories/publication.repository";
import { ICommandHandler } from "../command.interface";
export declare class EditPublicationHandler implements ICommandHandler<EditPublicationCommand> {
    private _publicationRepository;
    private _mapper;
    constructor(_publicationRepository: PublicationRepository, _mapper: Mapper);
    execute(command: EditPublicationCommand): Promise<number>;
}
