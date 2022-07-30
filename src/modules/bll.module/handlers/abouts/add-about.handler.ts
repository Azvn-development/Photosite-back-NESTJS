import { Mapper } from "@automapper/core";
import { InjectMapper } from "@automapper/nestjs";
import { CommandHandler } from "@nestjs/cqrs";
import { AddAboutCommand } from "modules/bll.module/dto/abouts/add-about-command.dto";
import { AboutModel } from "modules/bll.module/models/about.model";
import { AboutEntity } from "modules/dal.module/entities/about.entity";
import { AboutRepository } from "modules/dal.module/repositories/about.repository";
import { ICommandHandler } from "../command.interface";

@CommandHandler(AddAboutCommand)
export class AddAboutHandler implements ICommandHandler<AddAboutCommand> {
    constructor(
        private _aboutRepository: AboutRepository,
        @InjectMapper() private _mapper: Mapper
    ) {}

    async execute(command: AddAboutCommand): Promise<number> {
        let entity = this._mapper.map(command.about, AboutModel, AboutEntity);

        await this._aboutRepository.transactional(manager => {
            return this._aboutRepository.add(entity, manager);
        })
        .then(result => {
            entity = result;
        })
        .catch((err) => {
            console.error(err);
            entity = undefined;
        })

        return entity?.id ?? -1;
    }
}