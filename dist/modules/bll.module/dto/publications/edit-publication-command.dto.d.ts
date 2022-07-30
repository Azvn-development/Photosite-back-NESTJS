import { ICommand } from "@nestjs/cqrs";
import { PublicationModel } from "modules/bll.module/models/publication.model";
export declare class EditPublicationCommand implements ICommand {
    publication: PublicationModel;
    images: any[];
}
