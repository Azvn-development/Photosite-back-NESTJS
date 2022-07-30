import { ICommand } from "@nestjs/cqrs";
import { ApiProperty } from "@nestjs/swagger";

export class DeleteServiceCommand implements ICommand {
    @ApiProperty()
    id: number;

    constructor(id: number) {
        this.id = id;
    }
}