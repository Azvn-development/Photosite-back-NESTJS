import { Repository } from "typeorm";
import { PublicationImageEntity } from "../entities/publication-image.entity";
import { BaseRepositoty } from "./base.repository";
export declare class PublicationImageRepository extends BaseRepositoty<PublicationImageEntity> {
    constructor(repository: Repository<PublicationImageEntity>);
}
