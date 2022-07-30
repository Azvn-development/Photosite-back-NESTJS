import { DynamicModule, Module } from "@nestjs/common";
import { DalModule } from "modules/dal.module/dal.module";
import { AddAboutHandler } from "./handlers/abouts/add-about.handler";
import { DeleteAboutHandler } from "./handlers/abouts/delete-about.handler";
import { EditAboutHandler } from "./handlers/abouts/edit-about.handler";
import { GetAboutsHandler } from "./handlers/abouts/get-abouts.handler";
import { AddServiceHandler } from "./handlers/services/add-service.handler";
import { DeleteServiceHandler } from "./handlers/services/delete-service.handler";
import { EditServiceHandler } from "./handlers/services/edit-service.handler";
import { GetServicesHandler } from "./handlers/services/get-services.handler";
import { AboutProfile } from "./mapping/about.profile";
import { ServiceProfile } from "./mapping/service.profilte";
import { AuthModule } from "modules/auth.module/auth.module";
import { LoginHandler } from "./handlers/auth/login.handler";
import { GetPublicationsHandler } from "./handlers/publications/get-publications.handler";
import { AddPublicationHandler } from "./handlers/publications/add-publication.handler";
import { PublicationProfile } from "./mapping/publication.profilte";
import { ImagesHelper } from "./helpers/images.helper";
import { PublicationImageProfile } from "./mapping/publication-image.profile";

const QueryHandlers = [
    GetAboutsHandler,
    GetServicesHandler,
    GetPublicationsHandler
]

const CommandHandlers = [
    AddAboutHandler,
    EditAboutHandler,
    DeleteAboutHandler,
    AddServiceHandler,
    EditServiceHandler,
    DeleteServiceHandler,
    LoginHandler,
    AddPublicationHandler
]

const Helpers = [
    ImagesHelper,
]

const MappingProfiles = [
    AboutProfile,
    ServiceProfile,
    PublicationProfile,
    PublicationImageProfile
]

@Module({
    imports: [
        DalModule,
        AuthModule
    ],
    providers: [
        ...QueryHandlers,
        ...CommandHandlers,
        ...MappingProfiles,
        ...Helpers
    ],
    exports: [
        ...QueryHandlers,
        ...CommandHandlers,
        ...MappingProfiles
    ]
})

export class BllModule {}