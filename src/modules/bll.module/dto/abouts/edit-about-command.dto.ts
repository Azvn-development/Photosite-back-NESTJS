import { ICommand } from "@nestjs/cqrs";
import { ApiProperty } from "@nestjs/swagger";
import { AboutModel } from "modules/bll.module/models/about.model";

export class EditAboutCommand implements ICommand {
    @ApiProperty()
    about: AboutModel;
}