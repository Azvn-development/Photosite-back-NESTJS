import { Mapper, MappingProfile } from "@automapper/core";
import { AutomapperProfile } from "@automapper/nestjs";
export declare class PublicationProfile extends AutomapperProfile {
    constructor(mapper: Mapper);
    get profile(): MappingProfile;
}
