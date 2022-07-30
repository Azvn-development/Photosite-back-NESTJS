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
exports.EditAboutHandler = void 0;
const nestjs_1 = require("@automapper/nestjs");
const cqrs_1 = require("@nestjs/cqrs");
const edit_about_command_dto_1 = require("../../dto/abouts/edit-about-command.dto");
const about_model_1 = require("../../models/about.model");
const about_entity_1 = require("../../../dal.module/entities/about.entity");
const about_repository_1 = require("../../../dal.module/repositories/about.repository");
let EditAboutHandler = class EditAboutHandler {
    constructor(_aboutRepository, _mapper) {
        this._aboutRepository = _aboutRepository;
        this._mapper = _mapper;
    }
    async execute(command) {
        var _a;
        let entity = this._mapper.map(command.about, about_model_1.AboutModel, about_entity_1.AboutEntity);
        this._aboutRepository.transactional(manager => {
            return this._aboutRepository.edit(entity, manager);
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
EditAboutHandler = __decorate([
    (0, cqrs_1.CommandHandler)(edit_about_command_dto_1.EditAboutCommand),
    __param(1, (0, nestjs_1.InjectMapper)()),
    __metadata("design:paramtypes", [about_repository_1.AboutRepository, Object])
], EditAboutHandler);
exports.EditAboutHandler = EditAboutHandler;
//# sourceMappingURL=edit-about.handler.js.map