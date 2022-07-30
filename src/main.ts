import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { useSwaggerConfig } from './modules/app.module/configurations/swagger.config';
import { AppModule } from './modules/app.module/app.module';
import configuration from 'common/configuration/configuration';

declare const module: any;

async function node() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);

    useSwaggerConfig(app);

    const config = configuration();
    app.listen(config.http.port);

    if (module.hot) {
        module.hot.accept();
        module.hot.dispose(() => app.close());
    }
}

node();