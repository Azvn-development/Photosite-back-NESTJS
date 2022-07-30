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
exports.DeletePublicationHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const ImageTypeEnum_1 = require("../../../../common/enums/ImageTypeEnum");
const delete_publication_command_dto_1 = require("../../dto/publications/delete-publication-command.dto");
const images_helper_1 = require("../../helpers/images.helper");
const publication_repository_1 = require("../../../dal.module/repositories/publication.repository");
let DeletePublicationHandler = class DeletePublicationHandler {
    constructor(_publicationRepository, _imagesHelper) {
        this._publicationRepository = _publicationRepository;
        this._imagesHelper = _imagesHelper;
    }
    async execute(command) {
        let id = command.id;
        this._publicationRepository.transactional(manager => {
            this._imagesHelper.deleteImages(ImageTypeEnum_1.ImageTypeEnum.Publication, id);
            return this._publicationRepository.delete(id, manager);
        })
            .then(result => {
            id = result;
        })
            .catch(err => {
            console.error(err);
            id = -1;
        });
        return id;
    }
};
DeletePublicationHandler = __decorate([
    (0, cqrs_1.CommandHandler)(delete_publication_command_dto_1.DeletePublicationCommand),
    __metadata("design:paramtypes", [publication_repository_1.PublicationRepository,
        images_helper_1.ImagesHelper])
], DeletePublicationHandler);
exports.DeletePublicationHandler = DeletePublicationHandler;
//# sourceMappingURL=delete-publication.handler.js.map