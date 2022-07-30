import { ICommand } from "@nestjs/cqrs";
import { AboutModel } from "modules/bll.module/models/about.model";
export declare class AddAboutCommand implements ICommand {
    about: AboutModel;
}
