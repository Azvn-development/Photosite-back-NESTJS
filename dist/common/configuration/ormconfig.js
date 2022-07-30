"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const configuration_1 = require("./configuration");
const ormconfig = Object.assign(Object.assign({ type: 'postgres' }, (0, configuration_1.default)().db), { migrationsRun: true, migrations: ['dist/modules/dal.module/migrations/*{.ts,.js}'], migrationsTableName: 'migrations', entities: ['dist/modules/dal.module/**/*.entity{.ts,.js}'], cli: {
        'migrationsDir': 'src/modules/dal.module/migrations'
    } });
exports.default = ormconfig;
//# sourceMappingURL=ormconfig.js.map