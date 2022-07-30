import { createMap, Mapper, MappingProfile } from "@automapper/core";
import { AutomapperProfile, InjectMapper } from "@automapper/nestjs";
import { Injectable } from "@nestjs/common";
import { PublicationImageEntity } from "modules/dal.module/entities/publication-image.entity";
import { PublicationImageModel } from "../models/publication-image.model";

@Injectable()
export class PublicationImageProfile extends AutomapperProfile {
    constructor(@InjectMapper() mapper: Mapper) {
        super(mapper);
    }

    override get profile():MappingProfile {
        return (mapper) => {
            createMap(mapper, PublicationImageEntity, PublicationImageModel);
            createMap(mapper, PublicationImageModel, PublicationImageEntity);
        }
    }
}