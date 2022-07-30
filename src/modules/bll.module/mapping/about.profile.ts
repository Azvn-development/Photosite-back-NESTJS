import { createMap, Mapper, MappingProfile } from "@automapper/core";
import { AutomapperProfile, InjectMapper } from "@automapper/nestjs";
import { Injectable } from "@nestjs/common";
import { AboutEntity } from "modules/dal.module/entities/about.entity";
import { AboutModel } from "../models/about.model";

@Injectable()
export class AboutProfile extends AutomapperProfile {
    constructor(@InjectMapper() mapper: Mapper) {
        super(mapper);
    }

    override get profile():MappingProfile {
        return (mapper) => {
            createMap(mapper, AboutEntity, AboutModel);
            createMap(mapper, AboutModel, AboutEntity);
        }
    }
}