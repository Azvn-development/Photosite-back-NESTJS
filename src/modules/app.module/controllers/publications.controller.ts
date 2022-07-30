import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards, UsePipes, ValidationPipe } from "@nestjs/common";
import { CommandBus, QueryBus } from "@nestjs/cqrs";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "modules/auth.module/guards/jwt-auth.guard";
import { AddPublicationCommand } from "modules/bll.module/dto/publications/add-publication-command.dto";
import { DeletePublicationCommand } from "modules/bll.module/dto/publications/delete-publication-command.dto";
import { EditPublicationCommand } from "modules/bll.module/dto/publications/edit-publication-command.dto";
import { GetPublicationsQuery, GetPublicationsQueryResponse } from "modules/bll.module/dto/publications/get-publications-query.dto";

@ApiTags('publications')
@Controller('publications')
export class PublicationsController {
    constructor(
        private _queryBus: QueryBus,
        private _commandBus: CommandBus
    ) {}

    /** Get all data */
    @Get()
    async getAll():Promise<GetPublicationsQueryResponse> {
        return await this._queryBus.execute(new GetPublicationsQuery());
    } // getAll

    /** Add data */
    @Post()
    @ApiBearerAuth()
    @UsePipes(new ValidationPipe({ transform: true }))
    async add(@Body() request: AddPublicationCommand):Promise<number> {
        return await this._commandBus.execute(request);
    } // add

    /** Edit data */
    @Put()
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({ transform: true }))
    async edit(@Body() request: EditPublicationCommand):Promise<number> {
        return await this._commandBus.execute(request);
    } // edit

    /** Delete data */
    @Delete(':id')
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    async delete(@Param('id', ParseIntPipe) id: number):Promise<number> {
        return await this._commandBus.execute(new DeletePublicationCommand(id));
    } // delete
}