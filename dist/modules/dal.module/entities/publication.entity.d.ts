import { PublicationImageEntity } from "./publication-image.entity";
export declare class PublicationEntity {
    id: number;
    title: string;
    release: Date;
    images: PublicationImageEntity[];
}
