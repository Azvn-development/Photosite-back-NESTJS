import { AutoMap } from "@automapper/classes";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { PublicationImageEntity } from "./publication-image.entity";

@Entity('publications')
export class PublicationEntity {
    @PrimaryGeneratedColumn()
    @AutoMap()
    id: number;

    @Column()
    @AutoMap()
    title: string;

    @Column()
    @AutoMap()
    release: Date;

    @OneToMany(() => PublicationImageEntity, image => image.publication, { cascade: true })
    @AutoMap(() => [PublicationImageEntity])
    images: PublicationImageEntity[]
}