import { Mapper } from "@automapper/core";
import { InjectMapper } from "@automapper/nestjs";
import { CommandHandler } from "@nestjs/cqrs";
import { EditPublicationCommand } from "modules/bll.module/dto/publications/edit-publication-command.dto";
import { PublicationModel } from "modules/bll.module/models/publication.model";
import { PublicationEntity } from "modules/dal.module/entities/publication.entity";
import { PublicationRepository } from "modules/dal.module/repositories/publication.repository";
import { ICommandHandler } from "../command.interface";

@CommandHandler(EditPublicationCommand)
export class EditPublicationHandler implements ICommandHandler<EditPublicationCommand> {
    constructor(
        private _publicationRepository: PublicationRepository,
        @InjectMapper() private _mapper: Mapper
    ) {}

    async execute(command: EditPublicationCommand): Promise<number> {
        let entity = this._mapper.map(command.publication, PublicationModel, PublicationEntity)

        this._publicationRepository.transactional(manager => {
            return this._publicationRepository.edit(entity, manager); 
            // TODO: Images
        })
        .then(result => {
            entity = result;
        })
        .catch(err => {
            console.error(err);
            entity = undefined;
        })
        
        return entity?.id ?? -1;
    }
}