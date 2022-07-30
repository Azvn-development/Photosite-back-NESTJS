import { AutoMap } from "@automapper/classes";
import { ApiProperty } from "@nestjs/swagger";

export class UserModel {
    @ApiProperty()
    @AutoMap()
    login: string;

    @ApiProperty()
    @AutoMap()
    password: string;
}