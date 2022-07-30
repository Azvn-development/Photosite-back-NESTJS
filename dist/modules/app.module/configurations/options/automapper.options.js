"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.automapperOptions = void 0;
const classes_1 = require("@automapper/classes");
const core_1 = require("@automapper/core");
exports.automapperOptions = {
    strategyInitializer: (0, classes_1.classes)(),
    namingConventions: new core_1.CamelCaseNamingConvention(),
};
//# sourceMappingURL=automapper.options.js.map