import { Mapper } from "@automapper/core";
import { InjectMapper } from "@automapper/nestjs";
import { CommandHandler } from "@nestjs/cqrs";
import { ImageTypeEnum } from "common/enums/ImageTypeEnum";
import { AddPublicationCommand } from "modules/bll.module/dto/publications/add-publication-command.dto";
import { ImagesHelper } from "modules/bll.module/helpers/images.helper";
import { PublicationModel } from "modules/bll.module/models/publication.model";
import { PublicationEntity } from "modules/dal.module/entities/publication.entity";
import { PublicationRepository } from "modules/dal.module/repositories/publication.repository";
import { ICommandHandler } from "../command.interface";

@CommandHandler(AddPublicationCommand)
export class AddPublicationHandler implements ICommandHandler<AddPublicationCommand> {
    constructor(
        private _publicationRepository: PublicationRepository,
        private _imagesHelper: ImagesHelper,
        @InjectMapper() private _mapper: Mapper
    ) {}

    async execute(command: AddPublicationCommand): Promise<number> {
        let entity = this._mapper.map(command.publication, PublicationModel, PublicationEntity);

        await this._publicationRepository.transactional(async (manager) => {
            const result = await this._publicationRepository.add(entity, manager);

            this._imagesHelper.saveImages(ImageTypeEnum.Publication, result.id, command.images);
            
            return result;
        })
        .then(result => {
            entity = result
        })
        .catch(err => {
            console.error(err);
            entity = undefined;
        });

        return entity?.id ?? -1;
    }
}