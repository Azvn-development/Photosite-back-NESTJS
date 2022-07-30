/// <reference types="node" />
import { ImageSizeEnum } from "common/enums/ImageSizeEnum";
import sharp from 'sharp';
export declare class ImageResizer {
    constructor();
    resizeImage(image: Buffer, name: string, size: ImageSizeEnum): Promise<sharp.OutputInfo>;
}
