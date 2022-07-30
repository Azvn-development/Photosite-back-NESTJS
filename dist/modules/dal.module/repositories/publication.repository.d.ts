import { EntityManager, Repository } from "typeorm";
import { PublicationEntity } from "../entities/publication.entity";
import { BaseRepositoty } from "./base.repository";
export declare class PublicationRepository extends BaseRepositoty<PublicationEntity> {
    constructor(repository: Repository<PublicationEntity>);
    findAll(manager: EntityManager): Promise<PublicationEntity[]>;
    add(entity: PublicationEntity, manager: EntityManager): Promise<PublicationEntity>;
    edit(entity: PublicationEntity, manager: EntityManager): Promise<PublicationEntity>;
    delete(id: number, manager: EntityManager): Promise<number>;
}
