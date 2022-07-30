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
exports.GetServicesHandler = void 0;
const nestjs_1 = require("@automapper/nestjs");
const cqrs_1 = require("@nestjs/cqrs");
const get_services_query_dto_1 = require("../../dto/services/get-services.query.dto");
const service_model_1 = require("../../models/service.model");
const service_entity_1 = require("../../../dal.module/entities/service.entity");
const service_repository_1 = require("../../../dal.module/repositories/service.repository");
let GetServicesHandler = class GetServicesHandler {
    constructor(_serviceRepository, _mapper) {
        this._serviceRepository = _serviceRepository;
        this._mapper = _mapper;
    }
    async execute(query) {
        let entities = [];
        this._serviceRepository.transactional(manager => {
            return this._serviceRepository.findAll(manager);
        })
            .then(result => {
            entities = result;
        })
            .catch(err => {
            console.error(err);
        });
        return this._mapper.mapArray(entities, service_model_1.ServiceModel, service_entity_1.ServiceEntity);
    }
};
GetServicesHandler = __decorate([
    (0, cqrs_1.QueryHandler)(get_services_query_dto_1.GetServicesQuery),
    __param(1, (0, nestjs_1.InjectMapper)()),
    __metadata("design:paramtypes", [service_repository_1.ServiceRepository, Object])
], GetServicesHandler);
exports.GetServicesHandler = GetServicesHandler;
//# sourceMappingURL=get-services.handler.js.map