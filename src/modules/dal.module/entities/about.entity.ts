import { AutoMap } from "@automapper/classes";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'abouts' })
export class AboutEntity {
    @PrimaryGeneratedColumn()
    @AutoMap()
    public id!: number;

    @Column()
    @AutoMap()
    public image!: string;

    @Column()
    @AutoMap()
    public title!: string;

    @Column()
    @AutoMap()
    public text!: string;
}