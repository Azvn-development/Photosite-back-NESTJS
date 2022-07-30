import { ICommand } from "@nestjs/cqrs";
import { ApiProperty } from "@nestjs/swagger";
import { AboutModel } from "modules/bll.module/models/about.model";

export class AddAboutCommand implements ICommand {
    @ApiProperty()
    public about: AboutModel;
}