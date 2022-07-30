import { AutoMap } from "@automapper/classes";
import { ApiProperty } from "@nestjs/swagger";

export class PublicationImageModel {
    @ApiProperty()
    @AutoMap()
    id: number;

    @ApiProperty()
    @AutoMap()
    name: string;

    @ApiProperty()
    @AutoMap()
    creationDate: Date;
}