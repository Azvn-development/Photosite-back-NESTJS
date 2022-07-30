import { createMap, Mapper, MappingProfile } from "@automapper/core";
import { AutomapperProfile, InjectMapper } from "@automapper/nestjs";
import { Injectable } from "@nestjs/common";
import { ServiceEntity } from "modules/dal.module/entities/service.entity";
import { ServiceModel } from "../models/service.model";

@Injectable()
export class ServiceProfile extends AutomapperProfile {
    constructor(@InjectMapper() mapper: Mapper) {
        super(mapper);
    }

    override get profile():MappingProfile {
        return (mapper) => {
            createMap(mapper, ServiceEntity, ServiceModel);
            createMap(mapper, ServiceModel, ServiceEntity);
        }
    }
}