import { Mapper } from "@automapper/core";
import { AddPublicationCommand } from "modules/bll.module/dto/publications/add-publication-command.dto";
import { ImagesHelper } from "modules/bll.module/helpers/images.helper";
import { PublicationRepository } from "modules/dal.module/repositories/publication.repository";
import { ICommandHandler } from "../command.interface";
export declare class AddPublicationHandler implements ICommandHandler<AddPublicationCommand> {
    private _publicationRepository;
    private _imagesHelper;
    private _mapper;
    constructor(_publicationRepository: PublicationRepository, _imagesHelper: ImagesHelper, _mapper: Mapper);
    execute(command: AddPublicationCommand): Promise<number>;
}
