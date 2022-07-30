import { ICommand } from "@nestjs/cqrs";
import { ServiceModel } from "modules/bll.module/models/service.model";
export declare class EditServiceCommand implements ICommand {
    service: ServiceModel;
}
