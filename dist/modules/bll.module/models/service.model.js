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
exports.ServiceModel = void 0;
const classes_1 = require("@automapper/classes");
const swagger_1 = require("@nestjs/swagger");
const ServiceTypeEnum_1 = require("../../../common/enums/ServiceTypeEnum");
class ServiceModel {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, classes_1.AutoMap)(),
    __metadata("design:type", Number)
], ServiceModel.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, classes_1.AutoMap)(),
    __metadata("design:type", String)
], ServiceModel.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, classes_1.AutoMap)(),
    __metadata("design:type", Number)
], ServiceModel.prototype, "type", void 0);
exports.ServiceModel = ServiceModel;
//# sourceMappingURL=service.model.js.map