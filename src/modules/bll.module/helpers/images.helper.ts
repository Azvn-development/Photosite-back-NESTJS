import { Injectable } from "@nestjs/common";
import { ImageTypeEnum } from "common/enums/ImageTypeEnum";
import { ImageModel } from "../models/image.mode";
import * as fs from 'fs';
import * as path from 'path';
import { Buffer } from 'buffer';
import { ImageDirectoryEnum } from "common/enums/ImageDirectoryEnum";
import { ImageSizeEnum } from "common/enums/ImageSizeEnum";
import sharp from "sharp";

@Injectable()
export class ImagesHelper {
    private readonly availableExtension = 'jpg';

    constructor() {}

    public saveImages(imageType: ImageTypeEnum, parentId: number, images: ImageModel[]): void {
        const imagePath = path.resolve('dist', 'assets', 'images', imageType, parentId.toString());
        
        this.checkDirectory(imagePath);

        try {
            images.forEach(async (image) => {
                const extension = path.extname(image.name);

                if(extension !== this.availableExtension) {
                    throw new Error('Incorrect image extension');
                } // if

                const buffer = Buffer.from(image.body, 'base64');
                const pcBuffer = await this.resizeImage(buffer, ImageSizeEnum.PcSize);
                const tabletBuffer = await this.resizeImage(buffer, ImageSizeEnum.TabletSize);
                const mobileBuffer = await this.resizeImage(buffer, ImageSizeEnum.MobileSize);
                const previewBuffer = await this.resizeImage(buffer, ImageSizeEnum.PreviewSize);
    
                this.writeFile(path.resolve(imagePath, ImageDirectoryEnum.PC), image.name, pcBuffer);
                this.writeFile(path.resolve(imagePath, ImageDirectoryEnum.TABLET), image.name, tabletBuffer);
                this.writeFile(path.resolve(imagePath, ImageDirectoryEnum.MOBILE), image.name, mobileBuffer);
                this.writeFile(path.resolve(imagePath, ImageDirectoryEnum.PREVIEW), image.name, previewBuffer);
            })
        } catch(err) {
            this.deleteImages(imageType, parentId);
            throw err;
        }
    } // saveImages

    public deleteImage(imageType: ImageTypeEnum, parentId: number, imageName: string) {
        const imagePath = path.resolve('dist', 'assets', 'images', imageType, parentId.toString());
        const pcImagePath = path.resolve(imagePath, ImageDirectoryEnum.PC, imageName);
        const tabletImagePath = path.resolve(imagePath, ImageDirectoryEnum.TABLET, imageName);
        const mobileImagePath = path.resolve(imagePath, ImageDirectoryEnum.MOBILE, imageName);
        const previewImagePath = path.resolve(imagePath, ImageDirectoryEnum.PREVIEW, imageName);

        if(fs.existsSync(pcImagePath)) fs.rmSync(pcImagePath);
        if(fs.existsSync(tabletImagePath)) fs.rmSync(tabletImagePath);
        if(fs.existsSync(mobileImagePath)) fs.rmSync(mobileImagePath);
        if(fs.existsSync(previewImagePath)) fs.rmSync(previewImagePath);
    } // deleteImage

    public deleteImages(imageType: ImageTypeEnum, parentId: number) {
        const imagePath = path.resolve('dist', 'assets', 'images', imageType, parentId.toString());
        if(fs.existsSync(imagePath)) fs.rmSync(imagePath, { recursive: true, force: true });
    } // deleteImages

    //#region Private methods

    private checkDirectory(imagePath: string): void {
        const pcImagePath = path.resolve(imagePath, ImageDirectoryEnum.PC);
        const tabletImagePath = path.resolve(imagePath, ImageDirectoryEnum.TABLET);
        const mobileImagePath = path.resolve(imagePath, ImageDirectoryEnum.MOBILE);
        const previewImagePath = path.resolve(imagePath, ImageDirectoryEnum.PREVIEW);

        if(!fs.existsSync(pcImagePath)) fs.mkdirSync(pcImagePath, { recursive: true });
        if(!fs.existsSync(tabletImagePath)) fs.mkdirSync(tabletImagePath, { recursive: true });
        if(!fs.existsSync(mobileImagePath)) fs.mkdirSync(mobileImagePath, { recursive: true });
        if(!fs.existsSync(previewImagePath)) fs.mkdirSync(previewImagePath, { recursive: true });
    } // checkDirectory

    private writeFile(imagePath:string, imageName: string, file: Buffer) {
        try {
            fs.writeFileSync(path.resolve(imagePath, imageName), file);
        } catch(err) {
            console.error(err);
            throw err;
        }
    } // writeFile

    private resizeImage(image: Buffer, size: ImageSizeEnum) {
        return sharp(image)
            .resize(size)
            .toBuffer();
    } // resizeImage

    //#endregion
}