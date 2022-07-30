"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const nestjs_1 = require("@automapper/nestjs");
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const bll_module_1 = require("../bll.module/bll.module");
const automapper_options_1 = require("./configurations/options/automapper.options");
const logger_middleware_1 = require("./configurations/middleware/logger.middleware");
const abouts_controller_1 = require("./controllers/abouts.controller");
const auth_controller_1 = require("./controllers/auth.controller");
const services_controller_1 = require("./controllers/services.controller");
const publications_controller_1 = require("./controllers/publications.controller");
let AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply(logger_middleware_1.LoggerMiddleware)
            .forRoutes({ path: '*', method: common_1.RequestMethod.ALL });
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            cqrs_1.CqrsModule,
            nestjs_1.AutomapperModule.forRoot(automapper_options_1.automapperOptions),
            bll_module_1.BllModule
        ],
        controllers: [
            abouts_controller_1.AboutsController,
            services_controller_1.ServicesController,
            auth_controller_1.AuthController,
            publications_controller_1.PublicationsController
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map