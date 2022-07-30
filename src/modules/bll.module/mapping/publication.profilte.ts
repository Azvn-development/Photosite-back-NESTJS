import { createMap, Mapper, MappingProfile } from "@automapper/core";
import { AutomapperProfile, InjectMapper } from "@automapper/nestjs";
import { Injectable } from "@nestjs/common";
import { PublicationEntity } from "modules/dal.module/entities/publication.entity";
import { PublicationModel } from "../models/publication.model";

@Injectable()
export class PublicationProfile extends AutomapperProfile {
    constructor(@InjectMapper() mapper: Mapper) {
        super(mapper);
    }

    override get profile():MappingProfile {
        return (mapper) => {
            createMap(mapper, PublicationEntity, PublicationModel);
            createMap(mapper, PublicationModel, PublicationEntity);
        }
    }
}