import { PublicationImageModel } from "./publication-image.model";
export declare class PublicationModel {
    id: number;
    title: string;
    release: Date;
    images: PublicationImageModel[];
}
