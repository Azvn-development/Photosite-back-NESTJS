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
exports.GetPublicationsHandler = void 0;
const nestjs_1 = require("@automapper/nestjs");
const cqrs_1 = require("@nestjs/cqrs");
const get_publications_query_dto_1 = require("../../dto/publications/get-publications-query.dto");
const publication_model_1 = require("../../models/publication.model");
const publication_entity_1 = require("../../../dal.module/entities/publication.entity");
const publication_repository_1 = require("../../../dal.module/repositories/publication.repository");
let GetPublicationsHandler = class GetPublicationsHandler {
    constructor(_publicationRepository, _mapper) {
        this._publicationRepository = _publicationRepository;
        this._mapper = _mapper;
    }
    async execute(query) {
        let entities = [];
        this._publicationRepository.transactional(manager => {
            return this._publicationRepository.findAll(manager);
        })
            .then(result => {
            entities = result;
            entities
                .sort((a, b) => a.id - b.id)
                .forEach(e => {
                e.images.sort((a, b) => a.creationDate.getTime() - b.creationDate.getTime());
            });
        })
            .catch(err => {
            console.error(err);
        });
        return new get_publications_query_dto_1.GetPublicationsQueryResponse(this._mapper.mapArray(entities, publication_entity_1.PublicationEntity, publication_model_1.PublicationModel));
    }
};
GetPublicationsHandler = __decorate([
    (0, cqrs_1.QueryHandler)(get_publications_query_dto_1.GetPublicationsQuery),
    __param(1, (0, nestjs_1.InjectMapper)()),
    __metadata("design:paramtypes", [publication_repository_1.PublicationRepository, Object])
], GetPublicationsHandler);
exports.GetPublicationsHandler = GetPublicationsHandler;
//# sourceMappingURL=get-publications.handler.js.map