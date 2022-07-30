import { EntityManager, Repository } from "typeorm";
export declare class BaseRepositoty<TEntity> {
    private _repository;
    constructor(repository: Repository<TEntity>);
    transactional<TResult>(action: (manager: EntityManager) => Promise<TResult>): Promise<TResult>;
}
