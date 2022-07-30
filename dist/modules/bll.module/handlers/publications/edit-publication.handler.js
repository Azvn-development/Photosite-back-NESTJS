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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditPublicationHandler = void 0;
const nestjs_1 = require("@automapper/nestjs");
const cqrs_1 = require("@nestjs/cqrs");
const edit_publication_command_dto_1 = require("../../dto/publications/edit-publication-command.dto");
const publication_model_1 = require("../../models/publication.model");
const publication_entity_1 = require("../../../dal.module/entities/publication.entity");
const publication_repository_1 = require("../../../dal.module/repositories/publication.repository");
let EditPublicationHandler = class EditPublicationHandler {
    constructor(_publicationRepository, _mapper) {
        this._publicationRepository = _publicationRepository;
        this._mapper = _mapper;
    }
    async execute(command) {
        var _a;
        let entity = this._mapper.map(command.publication, publication_model_1.PublicationModel, publication_entity_1.PublicationEntity);
        this._publicationRepository.transactional(manager => {
            return this._publicationRepository.edit(entity, manager);
        })
            .then(result => {
            entity = result;
        })
            .catch(err => {
            console.error(err);
            entity = undefined;
        });
        return (_a = entity === null || entity === void 0 ? void 0 : entity.id) !== null && _a !== void 0 ? _a : -1;
    }
};
EditPublicationHandler = __decorate([
    (0, cqrs_1.CommandHandler)(edit_publication_command_dto_1.EditPublicationCommand),
    __param(1, (0, nestjs_1.InjectMapper)()),
    __metadata("design:paramtypes", [publication_repository_1.PublicationRepository, Object])
], EditPublicationHandler);
exports.EditPublicationHandler = EditPublicationHandler;
//# sourceMappingURL=edit-publication.handler.js.map