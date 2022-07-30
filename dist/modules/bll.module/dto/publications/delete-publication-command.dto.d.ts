import { ICommand } from "@nestjs/cqrs";
export declare class DeletePublicationCommand implements ICommand {
    id: number;
    constructor(id: number);
}
