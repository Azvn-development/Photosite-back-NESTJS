import { DynamicModule, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import ormconfig from "common/configuration/ormconfig";
import { AboutEntity } from "./entities/about.entity";
import { PublicationImageEntity } from "./entities/publication-image.entity";
import { PublicationEntity } from "./entities/publication.entity";
import { ServiceEntity } from "./entities/service.entity";
import { UserEntity } from "./entities/user.entity";
import { AboutRepository } from "./repositories/about.repository";
import { PublicationImageRepository } from "./repositories/publication-image.repository";
import { PublicationRepository } from "./repositories/publication.repository";
import { ServiceRepository } from "./repositories/service.repository";
import { UserRepository } from "./repositories/user.repository";

const Repositories = [
    AboutRepository,
    ServiceRepository,
    UserRepository,
    PublicationRepository,
    PublicationImageRepository
]

@Module({
    imports: [
        TypeOrmModule.forRoot(ormconfig),
        TypeOrmModule.forFeature([
            AboutEntity,
            PublicationImageEntity,
            PublicationEntity,
            ServiceEntity,
            UserEntity
        ])
    ],
    providers: [
        ...Repositories
    ],
    exports: [
        ...Repositories
    ]
})

export class DalModule {}