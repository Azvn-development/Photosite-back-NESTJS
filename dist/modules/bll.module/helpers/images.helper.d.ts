import { ImageTypeEnum } from "common/enums/ImageTypeEnum";
import { ImageModel } from "../models/image.mode";
export declare class ImagesHelper {
    private readonly availableExtension;
    constructor();
    saveImages(imageType: ImageTypeEnum, parentId: number, images: ImageModel[]): void;
    deleteImage(imageType: ImageTypeEnum, parentId: number, imageName: string): void;
    deleteImages(imageType: ImageTypeEnum, parentId: number): void;
    private checkDirectory;
    private writeFile;
    private resizeImage;
}
