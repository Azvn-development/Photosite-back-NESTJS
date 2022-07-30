import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import configuration from "./configuration";

const ormconfig: TypeOrmModuleOptions ={
    type: 'postgres',
    ...configuration().db,
    migrationsRun: true,
    migrations: [ 'dist/modules/dal.module/migrations/*{.ts,.js}' ],
    migrationsTableName: 'migrations',
    entities: ['dist/modules/dal.module/**/*.entity{.ts,.js}'],
    cli: {
        'migrationsDir': 'src/modules/dal.module/migrations'
    }
}

export default ormconfig;