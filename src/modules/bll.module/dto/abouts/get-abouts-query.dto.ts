import { IQuery } from "@nestjs/cqrs";
import { AboutModel } from "modules/bll.module/models/about.model";

export class GetAboutsQuery implements IQuery {}

export class GetAboutsQueryResponse {
    constructor(
        public abouts: AboutModel[]
    ) {}
}