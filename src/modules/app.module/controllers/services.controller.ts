import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards, UsePipes, ValidationPipe } from "@nestjs/common";
import { CommandBus, QueryBus } from "@nestjs/cqrs";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "modules/auth.module/guards/jwt-auth.guard";
import { AddServiceCommand } from "modules/bll.module/dto/services/add-service-command.dto";
import { DeleteServiceCommand } from "modules/bll.module/dto/services/delete-service-command.dto";
import { EditServiceCommand } from "modules/bll.module/dto/services/edit-service-command.dto";
import { GetServicesQuery, GetServicesQueryResponse } from "modules/bll.module/dto/services/get-services.query.dto";

@ApiTags('services')
@Controller('services')
export class ServicesController {
    constructor(
        private _queryBus: QueryBus,
        private _commandBus: CommandBus
    ) {}

    /** Get all data */
    @Get()
    async getAll(): Promise<GetServicesQueryResponse> {
        return await this._queryBus.execute(new GetServicesQuery());
    } // getAll

    /** Add data */
    @Post()
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({ transform: true }))
    async add(@Body() request: AddServiceCommand): Promise<number> {
        return await this._commandBus.execute(request);
    } // add

    /** Edit data */
    @Put()
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({ transform: true }))
    async edit(@Body() request: EditServiceCommand):Promise<number> {
        return await this._commandBus.execute(request);
    } // edit

    /** Delete data */
    @Delete(':id')
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    async delete(@Param('id', ParseIntPipe) id: number):Promise<number> {
        return await this._commandBus.execute(new DeleteServiceCommand(id));
    } // delete
}