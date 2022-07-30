import { CommandHandler } from "@nestjs/cqrs";
import { ImageTypeEnum } from "common/enums/ImageTypeEnum";
import { DeletePublicationCommand } from "modules/bll.module/dto/publications/delete-publication-command.dto";
import { ImagesHelper } from "modules/bll.module/helpers/images.helper";
import { PublicationRepository } from "modules/dal.module/repositories/publication.repository";
import { ICommandHandler } from "../command.interface";

@CommandHandler(DeletePublicationCommand)
export class DeletePublicationHandler implements ICommandHandler<DeletePublicationCommand> {
    constructor(
        private _publicationRepository: PublicationRepository,
        private _imagesHelper: ImagesHelper
    ) {}
    
    async execute(command: DeletePublicationCommand): Promise<number> {
        let id = command.id;

        this._publicationRepository.transactional(manager => {
            this._imagesHelper.deleteImages(ImageTypeEnum.Publication, id);
            return this._publicationRepository.delete(id, manager);
        })
        .then(result => {
            id = result;
        })
        .catch(err => {
            console.error(err);
            id = -1;
        })
        
        return id;
    }
}