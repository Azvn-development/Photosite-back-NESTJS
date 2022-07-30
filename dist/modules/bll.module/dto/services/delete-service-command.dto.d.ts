import { ICommand } from "@nestjs/cqrs";
export declare class DeleteServiceCommand implements ICommand {
    id: number;
    constructor(id: number);
}
