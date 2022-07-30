import { DeletePublicationCommand } from "modules/bll.module/dto/publications/delete-publication-command.dto";
import { ImagesHelper } from "modules/bll.module/helpers/images.helper";
import { PublicationRepository } from "modules/dal.module/repositories/publication.repository";
import { ICommandHandler } from "../command.interface";
export declare class DeletePublicationHandler implements ICommandHandler<DeletePublicationCommand> {
    private _publicationRepository;
    private _imagesHelper;
    constructor(_publicationRepository: PublicationRepository, _imagesHelper: ImagesHelper);
    execute(command: DeletePublicationCommand): Promise<number>;
}
