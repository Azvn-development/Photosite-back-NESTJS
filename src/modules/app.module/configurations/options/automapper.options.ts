import { classes } from "@automapper/classes";
import { CamelCaseNamingConvention, CreateMapperOptions } from "@automapper/core";

export const automapperOptions: CreateMapperOptions = {
    strategyInitializer: classes(),
    namingConventions: new CamelCaseNamingConvention(),
}