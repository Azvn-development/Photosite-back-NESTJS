import { CommandHandler } from "@nestjs/cqrs";
import { DeleteAboutCommand } from "modules/bll.module/dto/abouts/delete-about-command.dto";
import { AboutRepository } from "modules/dal.module/repositories/about.repository";
import { ICommandHandler } from "../command.interface";

@CommandHandler(DeleteAboutCommand)
export class DeleteAboutHandler implements ICommandHandler<DeleteAboutCommand> {
    constructor(
        private _aboutRepository: AboutRepository
    ) {}

    async execute(command: DeleteAboutCommand): Promise<number> {
        let id = command.id;

        this._aboutRepository.transactional(manager => {
            return this._aboutRepository.delete(id, manager)
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