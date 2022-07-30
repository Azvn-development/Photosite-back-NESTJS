import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { EntityManager, Repository } from "typeorm";
import { PublicationEntity } from "../entities/publication.entity";
import { BaseRepositoty } from "./base.repository";

@Injectable()
export class PublicationRepository extends BaseRepositoty<PublicationEntity> {
    constructor(@InjectRepository(PublicationEntity) repository: Repository<PublicationEntity>) {
        super(repository);
    } // constructor

    public findAll(manager: EntityManager):Promise<PublicationEntity[]> {
        return manager.find(PublicationEntity, { 
            relations: ["images"], 
        });
    } // findAll

    public add(entity: PublicationEntity, manager: EntityManager): Promise<PublicationEntity> {
        const newEntity = manager.create(PublicationEntity, entity);
        return manager.save(newEntity);
    } // add

    public async edit(entity: PublicationEntity, manager: EntityManager): Promise<PublicationEntity> {
        await manager.update(PublicationEntity, entity.id, entity);
        return entity;
    } // edit

    public async delete(id: number, manager: EntityManager): Promise<number> {
        await manager.delete(PublicationEntity, id);
        return id;
    } // delete
}