import { IQuery } from "@nestjs/cqrs";
import { AboutModel } from "modules/bll.module/models/about.model";
export declare class GetAboutsQuery implements IQuery {
}
export declare class GetAboutsQueryResponse {
    abouts: AboutModel[];
    constructor(abouts: AboutModel[]);
}
