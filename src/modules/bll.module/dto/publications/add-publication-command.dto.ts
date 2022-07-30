import { ICommand } from "@nestjs/cqrs";
import { ApiProperty } from "@nestjs/swagger";
import { ImageModel } from "modules/bll.module/models/image.mode";
import { PublicationModel } from "modules/bll.module/models/publication.model";

export class AddPublicationCommand implements ICommand {
    @ApiProperty()
    publication: PublicationModel;

    @ApiProperty({ type: [ImageModel] })
    images: ImageModel[];
}