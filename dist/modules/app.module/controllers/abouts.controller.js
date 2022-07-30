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
exports.AboutsController = void 0;
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../../auth.module/guards/jwt-auth.guard");
const add_about_command_dto_1 = require("../../bll.module/dto/abouts/add-about-command.dto");
const delete_about_command_dto_1 = require("../../bll.module/dto/abouts/delete-about-command.dto");
const edit_about_command_dto_1 = require("../../bll.module/dto/abouts/edit-about-command.dto");
const get_abouts_query_dto_1 = require("../../bll.module/dto/abouts/get-abouts-query.dto");
let AboutsController = class AboutsController {
    constructor(_queryBus, _commandBus) {
        this._queryBus = _queryBus;
        this._commandBus = _commandBus;
    }
    async getAll() {
        return await this._queryBus.execute(new get_abouts_query_dto_1.GetAboutsQuery());
    }
    async add(request) {
        return await this._commandBus.execute(request);
    }
    async edit(request) {
        return await this._commandBus.execute(request);
    }
    async delete(id) {
        return await this._commandBus.execute(new delete_about_command_dto_1.DeleteAboutCommand(id));
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AboutsController.prototype, "getAll", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [add_about_command_dto_1.AddAboutCommand]),
    __metadata("design:returntype", Promise)
], AboutsController.prototype, "add", null);
__decorate([
    (0, common_1.Put)(),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [edit_about_command_dto_1.EditAboutCommand]),
    __metadata("design:returntype", Promise)
], AboutsController.prototype, "edit", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AboutsController.prototype, "delete", null);
AboutsController = __decorate([
    (0, swagger_1.ApiTags)('abouts'),
    (0, common_1.Controller)('abouts'),
    __metadata("design:paramtypes", [cqrs_1.QueryBus,
        cqrs_1.CommandBus])
], AboutsController);
exports.AboutsController = AboutsController;
//# sourceMappingURL=abouts.controller.js.map