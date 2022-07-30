import { ICommand } from "@nestjs/cqrs";
export declare class DeleteAboutCommand implements ICommand {
    id: number;
    constructor(id: number);
}
