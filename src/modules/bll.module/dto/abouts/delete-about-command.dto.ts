import { ICommand } from "@nestjs/cqrs";
import { ApiProperty } from "@nestjs/swagger";

export class DeleteAboutCommand implements ICommand {
    @ApiProperty()
    id: number;

    constructor(id: number) {
        this.id = id;
    }
}