"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSwaggerConfig = void 0;
const swagger_1 = require("@nestjs/swagger");
const useSwaggerConfig = (app) => {
    const config = new swagger_1.DocumentBuilder()
        .setVersion('1.0')
        .addBearerAuth({
        name: 'Authorization',
        type: 'http'
    })
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
};
exports.useSwaggerConfig = useSwaggerConfig;
//# sourceMappingURL=swagger.config.js.map