import { AutoMap } from "@automapper/classes";
import { ApiProperty } from "@nestjs/swagger";

export class AboutModel {
    @ApiProperty()
    @AutoMap()
    public id: number;

    @ApiProperty()
    @AutoMap()
    public image: string;

    @ApiProperty()
    @AutoMap()
    public title: string;

    @ApiProperty()
    @AutoMap()
    public text: string;

    constructor(
        id: number,
        image: string,
        title: string,
        text: string
    ) {
        this.id = id;
        this.image = image;
        this.title = title;
        this.text = text;
    }
}