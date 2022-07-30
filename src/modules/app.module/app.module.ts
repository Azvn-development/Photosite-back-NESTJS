import { AutomapperModule } from '@automapper/nestjs';
import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { BllModule } from 'modules/bll.module/bll.module';
import { automapperOptions } from './configurations/options/automapper.options';
import { LoggerMiddleware } from './configurations/middleware/logger.middleware';
import { AboutsController } from './controllers/abouts.controller';
import { AuthController } from './controllers/auth.controller';
import { ServicesController } from './controllers/services.controller';
import { PublicationsController } from './controllers/publications.controller';

@Module({
    imports: [
        CqrsModule,
        AutomapperModule.forRoot(automapperOptions),
        BllModule
    ],
    controllers: [
        AboutsController,
        ServicesController,
        AuthController,
        PublicationsController
    ],
})

export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(LoggerMiddleware)
            .forRoutes({ path: '*', method: RequestMethod.ALL });
    }
}