import { AutoMap } from "@automapper/classes";
import { ApiProperty } from "@nestjs/swagger";
import { PublicationImageModel } from "./publication-image.model";

export class PublicationModel {
    @ApiProperty()
    @AutoMap()
    id: number;

    @ApiProperty()
    @AutoMap()
    title: string;

    @ApiProperty()
    @AutoMap()
    release: Date;

    @ApiProperty({ type: [PublicationImageModel] })
    @AutoMap(() => [PublicationImageModel])
    images: PublicationImageModel[];
}