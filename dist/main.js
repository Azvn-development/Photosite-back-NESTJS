"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_config_1 = require("./modules/app.module/configurations/swagger.config");
const app_module_1 = require("./modules/app.module/app.module");
const configuration_1 = require("./common/configuration/configuration");
async function node() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    (0, swagger_config_1.useSwaggerConfig)(app);
    const config = (0, configuration_1.default)();
    app.listen(config.http.port);
    if (module.hot) {
        module.hot.accept();
        module.hot.dispose(() => app.close());
    }
}
node();
//# sourceMappingURL=main.js.map