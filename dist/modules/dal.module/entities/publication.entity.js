"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublicationEntity = void 0;
const classes_1 = require("@automapper/classes");
const typeorm_1 = require("typeorm");
const publication_image_entity_1 = require("./publication-image.entity");
let PublicationEntity = class PublicationEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    (0, classes_1.AutoMap)(),
    __metadata("design:type", Number)
], PublicationEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, classes_1.AutoMap)(),
    __metadata("design:type", String)
], PublicationEntity.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, classes_1.AutoMap)(),
    __metadata("design:type", Date)
], PublicationEntity.prototype, "release", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => publication_image_entity_1.PublicationImageEntity, image => image.publication, { cascade: true }),
    (0, classes_1.AutoMap)(() => [publication_image_entity_1.PublicationImageEntity]),
    __metadata("design:type", Array)
], PublicationEntity.prototype, "images", void 0);
PublicationEntity = __decorate([
    (0, typeorm_1.Entity)('publications')
], PublicationEntity);
exports.PublicationEntity = PublicationEntity;
//# sourceMappingURL=publication.entity.js.map