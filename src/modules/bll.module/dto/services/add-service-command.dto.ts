import { ICommand } from "@nestjs/cqrs";
import { ApiProperty } from "@nestjs/swagger";
import { ServiceModel } from "modules/bll.module/models/service.model";

export class AddServiceCommand implements ICommand {
    @ApiProperty()
    service: ServiceModel;
}