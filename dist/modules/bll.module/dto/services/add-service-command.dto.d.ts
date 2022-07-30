import { ICommand } from "@nestjs/cqrs";
import { ServiceModel } from "modules/bll.module/models/service.model";
export declare class AddServiceCommand implements ICommand {
    service: ServiceModel;
}
