import { AboutEntity } from "../entities/about.entity";
import { EntityManager, Repository } from "typeorm";
import { BaseRepositoty } from "./base.repository";
export declare class AboutRepository extends BaseRepositoty<AboutEntity> {
    constructor(repository: Repository<AboutEntity>);
    findAll(manager: EntityManager): Promise<AboutEntity[]>;
    add(entity: AboutEntity, manager: EntityManager): Promise<AboutEntity>;
    edit(entity: AboutEntity, manager: EntityManager): Promise<AboutEntity>;
    delete(id: number, manager: EntityManager): Promise<number>;
}
