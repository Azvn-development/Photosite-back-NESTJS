import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';
import { join } from 'path';

interface IConfig {
    http: {
        port: number
    },
    db: {
        host: string,
        port: number,
        database: string,
        username: string,
        password: string,
    }
}

export default () => {
    return yaml.load(
        readFileSync(join(__dirname, `.${process.env.NODE_ENV}.config.yaml`), 'utf-8')
    ) as IConfig
}