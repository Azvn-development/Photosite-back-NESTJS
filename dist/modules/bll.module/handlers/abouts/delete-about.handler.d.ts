import { DeleteAboutCommand } from "modules/bll.module/dto/abouts/delete-about-command.dto";
import { AboutRepository } from "modules/dal.module/repositories/about.repository";
import { ICommandHandler } from "../command.interface";
export declare class DeleteAboutHandler implements ICommandHandler<DeleteAboutCommand> {
    private _aboutRepository;
    constructor(_aboutRepository: AboutRepository);
    execute(command: DeleteAboutCommand): Promise<number>;
}
