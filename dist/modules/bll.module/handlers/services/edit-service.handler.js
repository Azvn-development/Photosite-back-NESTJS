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
exports.EditServiceHandler = void 0;
const nestjs_1 = require("@automapper/nestjs");
const cqrs_1 = require("@nestjs/cqrs");
const edit_service_command_dto_1 = require("../../dto/services/edit-service-command.dto");
const service_model_1 = require("../../models/service.model");
const service_entity_1 = require("../../../dal.module/entities/service.entity");
const service_repository_1 = require("../../../dal.module/repositories/service.repository");
let EditServiceHandler = class EditServiceHandler {
    constructor(_serviceRepository, _mapper) {
        this._serviceRepository = _serviceRepository;
        this._mapper = _mapper;
    }
    async execute(command) {
        let entity = this._mapper.map(command.service, service_model_1.ServiceModel, service_entity_1.ServiceEntity);
        this._serviceRepository.transactional(manager => {
            return this._serviceRepository.edit(entity, manager);
        })
            .then(result => {
            entity = result;
        })
            .catch(err => {
            console.error(err);
        });
        return entity === null || entity === void 0 ? void 0 : entity.id;
    }
};
EditServiceHandler = __decorate([
    (0, cqrs_1.CommandHandler)(edit_service_command_dto_1.EditServiceCommand),
    __param(1, (0, nestjs_1.InjectMapper)()),
    __metadata("design:paramtypes", [service_repository_1.ServiceRepository, Object])
], EditServiceHandler);
exports.EditServiceHandler = EditServiceHandler;
//# sourceMappingURL=edit-service.handler.js.map