import { ICommand } from "@nestjs/cqrs";
import { ApiProperty } from "@nestjs/swagger";

export class LoginCommand implements ICommand {
    @ApiProperty()
    login: string;

    @ApiProperty()
    password: string;
}