import { ApiProperty } from "@nestjs/swagger";

export class ImageModel {
    @ApiProperty()
    name: string;

    @ApiProperty()
    body: string;
}