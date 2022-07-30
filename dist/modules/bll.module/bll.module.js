"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BllModule = void 0;
const common_1 = require("@nestjs/common");
const dal_module_1 = require("../dal.module/dal.module");
const add_about_handler_1 = require("./handlers/abouts/add-about.handler");
const delete_about_handler_1 = require("./handlers/abouts/delete-about.handler");
const edit_about_handler_1 = require("./handlers/abouts/edit-about.handler");
const get_abouts_handler_1 = require("./handlers/abouts/get-abouts.handler");
const add_service_handler_1 = require("./handlers/services/add-service.handler");
const delete_service_handler_1 = require("./handlers/services/delete-service.handler");
const edit_service_handler_1 = require("./handlers/services/edit-service.handler");
const get_services_handler_1 = require("./handlers/services/get-services.handler");
const about_profile_1 = require("./mapping/about.profile");
const service_profilte_1 = require("./mapping/service.profilte");
const auth_module_1 = require("../auth.module/auth.module");
const login_handler_1 = require("./handlers/auth/login.handler");
const get_publications_handler_1 = require("./handlers/publications/get-publications.handler");
const add_publication_handler_1 = require("./handlers/publications/add-publication.handler");
const publication_profilte_1 = require("./mapping/publication.profilte");
const images_helper_1 = require("./helpers/images.helper");
const publication_image_profile_1 = require("./mapping/publication-image.profile");
const QueryHandlers = [
    get_abouts_handler_1.GetAboutsHandler,
    get_services_handler_1.GetServicesHandler,
    get_publications_handler_1.GetPublicationsHandler
];
const CommandHandlers = [
    add_about_handler_1.AddAboutHandler,
    edit_about_handler_1.EditAboutHandler,
    delete_about_handler_1.DeleteAboutHandler,
    add_service_handler_1.AddServiceHandler,
    edit_service_handler_1.EditServiceHandler,
    delete_service_handler_1.DeleteServiceHandler,
    login_handler_1.LoginHandler,
    add_publication_handler_1.AddPublicationHandler
];
const Helpers = [
    images_helper_1.ImagesHelper,
];
const MappingProfiles = [
    about_profile_1.AboutProfile,
    service_profilte_1.ServiceProfile,
    publication_profilte_1.PublicationProfile,
    publication_image_profile_1.PublicationImageProfile
];
let BllModule = class BllModule {
};
BllModule = __decorate([
    (0, common_1.Module)({
        imports: [
            dal_module_1.DalModule,
            auth_module_1.AuthModule
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
], BllModule);
exports.BllModule = BllModule;
//# sourceMappingURL=bll.module.js.map