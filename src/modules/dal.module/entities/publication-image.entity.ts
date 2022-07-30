import { AutoMap } from "@automapper/classes";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { PublicationEntity } from "./publication.entity";

@Entity('publication_images')
export class PublicationImageEntity {
    @PrimaryGeneratedColumn()
    @AutoMap()
    id: number;

    @Column()
    @AutoMap()
    name: string;

    @Column()
    @AutoMap()
    creationDate: Date;

    @ManyToOne(() => PublicationEntity, publication => publication.images, { onDelete: 'CASCADE' })
    publication: PublicationEntity
}