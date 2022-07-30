import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { PublicationImageEntity } from "../entities/publication-image.entity";
import { BaseRepositoty } from "./base.repository";

@Injectable()
export class PublicationImageRepository extends BaseRepositoty<PublicationImageEntity> {
    constructor(@InjectRepository(PublicationImageEntity) repository: Repository<PublicationImageEntity>) {
        super(repository);
    } // constructor

    
}