"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const yaml = require("js-yaml");
const path_1 = require("path");
exports.default = () => {
    return yaml.load((0, fs_1.readFileSync)((0, path_1.join)(__dirname, `.${process.env.NODE_ENV}.config.yaml`), 'utf-8'));
};
//# sourceMappingURL=configuration.js.map