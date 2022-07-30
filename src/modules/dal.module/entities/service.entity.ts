import { AutoMap } from "@automapper/classes";
import { ServiceTypeEnum } from "common/enums/ServiceTypeEnum";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'services' })
export class ServiceEntity {
    @PrimaryGeneratedColumn()
    @AutoMap()
    id: number;

    @Column()
    @AutoMap()
    name: string;

    @Column()
    @AutoMap()
    type: ServiceTypeEnum;
}