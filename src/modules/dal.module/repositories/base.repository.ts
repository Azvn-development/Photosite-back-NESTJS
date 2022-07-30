import { EntityManager, Repository } from "typeorm";

export class BaseRepositoty<TEntity> {
    private _repository: Repository<TEntity>;

    constructor(repository: Repository<TEntity>) {
        this._repository = repository;
    }

    public async transactional<TResult>(
        action: (manager: EntityManager) => Promise<TResult>
    ): Promise<TResult> {
        return await this._repository.manager.transaction(action);
    } // transactional
}