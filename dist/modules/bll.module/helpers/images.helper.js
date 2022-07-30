"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImagesHelper = void 0;
const common_1 = require("@nestjs/common");
const fs = require("fs");
const path = require("path");
const buffer_1 = require("buffer");
const ImageDirectoryEnum_1 = require("../../../common/enums/ImageDirectoryEnum");
const ImageSizeEnum_1 = require("../../../common/enums/ImageSizeEnum");
const sharp_1 = require("sharp");
let ImagesHelper = class ImagesHelper {
    constructor() {
        this.availableExtension = 'jpg';
    }
    saveImages(imageType, parentId, images) {
        const imagePath = path.resolve('dist', 'assets', 'images', imageType, parentId.toString());
        this.checkDirectory(imagePath);
        try {
            images.forEach(async (image) => {
                const extension = path.extname(image.name);
                if (extension !== this.availableExtension) {
                    throw new Error('Incorrect image extension');
                }
                const buffer = buffer_1.Buffer.from(image.body, 'base64');
                const pcBuffer = await this.resizeImage(buffer, ImageSizeEnum_1.ImageSizeEnum.PcSize);
                const tabletBuffer = await this.resizeImage(buffer, ImageSizeEnum_1.ImageSizeEnum.TabletSize);
                const mobileBuffer = await this.resizeImage(buffer, ImageSizeEnum_1.ImageSizeEnum.MobileSize);
                const previewBuffer = await this.resizeImage(buffer, ImageSizeEnum_1.ImageSizeEnum.PreviewSize);
                this.writeFile(path.resolve(imagePath, ImageDirectoryEnum_1.ImageDirectoryEnum.PC), image.name, pcBuffer);
                this.writeFile(path.resolve(imagePath, ImageDirectoryEnum_1.ImageDirectoryEnum.TABLET), image.name, tabletBuffer);
                this.writeFile(path.resolve(imagePath, ImageDirectoryEnum_1.ImageDirectoryEnum.MOBILE), image.name, mobileBuffer);
                this.writeFile(path.resolve(imagePath, ImageDirectoryEnum_1.ImageDirectoryEnum.PREVIEW), image.name, previewBuffer);
            });
        }
        catch (err) {
            this.deleteImages(imageType, parentId);
            throw err;
        }
    }
    deleteImage(imageType, parentId, imageName) {
        const imagePath = path.resolve('dist', 'assets', 'images', imageType, parentId.toString());
        const pcImagePath = path.resolve(imagePath, ImageDirectoryEnum_1.ImageDirectoryEnum.PC, imageName);
        const tabletImagePath = path.resolve(imagePath, ImageDirectoryEnum_1.ImageDirectoryEnum.TABLET, imageName);
        const mobileImagePath = path.resolve(imagePath, ImageDirectoryEnum_1.ImageDirectoryEnum.MOBILE, imageName);
        const previewImagePath = path.resolve(imagePath, ImageDirectoryEnum_1.ImageDirectoryEnum.PREVIEW, imageName);
        if (fs.existsSync(pcImagePath))
            fs.rmSync(pcImagePath);
        if (fs.existsSync(tabletImagePath))
            fs.rmSync(tabletImagePath);
        if (fs.existsSync(mobileImagePath))
            fs.rmSync(mobileImagePath);
        if (fs.existsSync(previewImagePath))
            fs.rmSync(previewImagePath);
    }
    deleteImages(imageType, parentId) {
        const imagePath = path.resolve('dist', 'assets', 'images', imageType, parentId.toString());
        if (fs.existsSync(imagePath))
            fs.rmSync(imagePath, { recursive: true, force: true });
    }
    checkDirectory(imagePath) {
        const pcImagePath = path.resolve(imagePath, ImageDirectoryEnum_1.ImageDirectoryEnum.PC);
        const tabletImagePath = path.resolve(imagePath, ImageDirectoryEnum_1.ImageDirectoryEnum.TABLET);
        const mobileImagePath = path.resolve(imagePath, ImageDirectoryEnum_1.ImageDirectoryEnum.MOBILE);
        const previewImagePath = path.resolve(imagePath, ImageDirectoryEnum_1.ImageDirectoryEnum.PREVIEW);
        if (!fs.existsSync(pcImagePath))
            fs.mkdirSync(pcImagePath, { recursive: true });
        if (!fs.existsSync(tabletImagePath))
            fs.mkdirSync(tabletImagePath, { recursive: true });
        if (!fs.existsSync(mobileImagePath))
            fs.mkdirSync(mobileImagePath, { recursive: true });
        if (!fs.existsSync(previewImagePath))
            fs.mkdirSync(previewImagePath, { recursive: true });
    }
    writeFile(imagePath, imageName, file) {
        try {
            fs.writeFileSync(path.resolve(imagePath, imageName), file);
        }
        catch (err) {
            console.error(err);
            throw err;
        }
    }
    resizeImage(image, size) {
        return (0, sharp_1.default)(image)
            .resize(size)
            .toBuffer();
    }
};
ImagesHelper = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], ImagesHelper);
exports.ImagesHelper = ImagesHelper;
//# sourceMappingURL=images.helper.js.map