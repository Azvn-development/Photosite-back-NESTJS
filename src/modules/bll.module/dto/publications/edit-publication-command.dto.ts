import { ICommand } from "@nestjs/cqrs";
import { ApiProperty } from "@nestjs/swagger";
import { PublicationModel } from "modules/bll.module/models/publication.model";

export class EditPublicationCommand implements ICommand {
    @ApiProperty()
    publication: PublicationModel;

    @ApiProperty()
    images: any[]
}