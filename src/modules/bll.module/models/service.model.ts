import { AutoMap } from "@automapper/classes";
import { ApiProperty } from "@nestjs/swagger";
import { ServiceTypeEnum } from "common/enums/ServiceTypeEnum";

export class ServiceModel {
    @ApiProperty()
    @AutoMap()
    id: number;

    @ApiProperty()
    @AutoMap()
    name: string;

    @ApiProperty()
    @AutoMap()
    type: ServiceTypeEnum;
}