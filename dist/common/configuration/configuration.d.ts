interface IConfig {
    http: {
        port: number;
    };
    db: {
        host: string;
        port: number;
        database: string;
        username: string;
        password: string;
    };
}
declare const _default: () => IConfig;
export default _default;
