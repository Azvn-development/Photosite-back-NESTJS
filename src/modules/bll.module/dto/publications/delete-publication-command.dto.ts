import { ICommand } from "@nestjs/cqrs";

export class DeletePublicationCommand implements ICommand {
    constructor(
        public id: number
    ) {}
}