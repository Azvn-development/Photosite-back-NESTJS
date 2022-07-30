import { ICommand } from "@nestjs/cqrs";
import { ImageModel } from "modules/bll.module/models/image.mode";
import { PublicationModel } from "modules/bll.module/models/publication.model";
export declare class AddPublicationCommand implements ICommand {
    publication: PublicationModel;
    images: ImageModel[];
}
