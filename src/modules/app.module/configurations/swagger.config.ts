import { NestExpressApplication } from "@nestjs/platform-express";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

export const useSwaggerConfig = (app: NestExpressApplication) => {
    const config = new DocumentBuilder()
        .setVersion('1.0')
        .addBearerAuth({
            name: 'Authorization',
            type: 'http'
        })
        .build();
    
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);
}
