import { AutoMap } from "@automapper/classes";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'users' })
export class UserEntity {
    @PrimaryGeneratedColumn()
    @AutoMap()
    id: number;

    @Column()
    @AutoMap()
    login: string;
    
    @Column()
    @AutoMap()
    password: string;
}