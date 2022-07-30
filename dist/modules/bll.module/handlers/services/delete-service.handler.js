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
exports.DeleteServiceHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const delete_service_command_dto_1 = require("../../dto/services/delete-service-command.dto");
const service_repository_1 = require("../../../dal.module/repositories/service.repository");
let DeleteServiceHandler = class DeleteServiceHandler {
    constructor(_serviceRepository) {
        this._serviceRepository = _serviceRepository;
    }
    async execute(command) {
        let id = command.id;
        this._serviceRepository.transactional(manager => {
            return this._serviceRepository.delete(id, manager);
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
DeleteServiceHandler = __decorate([
    (0, cqrs_1.CommandHandler)(delete_service_command_dto_1.DeleteServiceCommand),
    __metadata("design:paramtypes", [service_repository_1.ServiceRepository])
], DeleteServiceHandler);
exports.DeleteServiceHandler = DeleteServiceHandler;
//# sourceMappingURL=delete-service.handler.js.map