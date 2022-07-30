"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DalModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const ormconfig_1 = require("../../common/configuration/ormconfig");
const about_entity_1 = require("./entities/about.entity");
const publication_image_entity_1 = require("./entities/publication-image.entity");
const publication_entity_1 = require("./entities/publication.entity");
const service_entity_1 = require("./entities/service.entity");
const user_entity_1 = require("./entities/user.entity");
const about_repository_1 = require("./repositories/about.repository");
const publication_image_repository_1 = require("./repositories/publication-image.repository");
const publication_repository_1 = require("./repositories/publication.repository");
const service_repository_1 = require("./repositories/service.repository");
const user_repository_1 = require("./repositories/user.repository");
const Repositories = [
    about_repository_1.AboutRepository,
    service_repository_1.ServiceRepository,
    user_repository_1.UserRepository,
    publication_repository_1.PublicationRepository,
    publication_image_repository_1.PublicationImageRepository
];
let DalModule = class DalModule {
};
DalModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot(ormconfig_1.default),
            typeorm_1.TypeOrmModule.forFeature([
                about_entity_1.AboutEntity,
                publication_image_entity_1.PublicationImageEntity,
                publication_entity_1.PublicationEntity,
                service_entity_1.ServiceEntity,
                user_entity_1.UserEntity
            ])
        ],
        providers: [
            ...Repositories
        ],
        exports: [
            ...Repositories
        ]
    })
], DalModule);
exports.DalModule = DalModule;
//# sourceMappingURL=dal.module.js.map