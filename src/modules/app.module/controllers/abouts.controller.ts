import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'modules/auth.module/guards/jwt-auth.guard';
import { AddAboutCommand } from 'modules/bll.module/dto/abouts/add-about-command.dto';
import { DeleteAboutCommand } from 'modules/bll.module/dto/abouts/delete-about-command.dto';
import { EditAboutCommand } from 'modules/bll.module/dto/abouts/edit-about-command.dto';
import { GetAboutsQuery, GetAboutsQueryResponse } from 'modules/bll.module/dto/abouts/get-abouts-query.dto';

@ApiTags('abouts')
@Controller('abouts')
export class AboutsController {
    constructor(
        private _queryBus: QueryBus,
        private _commandBus: CommandBus
    ){}

    /** Get all data */
    @Get()
    async getAll(): Promise<GetAboutsQueryResponse> {
        return await this._queryBus.execute(new GetAboutsQuery());
    } // getAll

    /** Add data */
    @Post()
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({ transform: true }))
    async add(@Body() request: AddAboutCommand): Promise<number> {
        return await this._commandBus.execute(request);
    } // add

    /** Edit data */
    @Put()
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({ transform: true }))
    async edit(@Body() request: EditAboutCommand):Promise<number> {
        return await this._commandBus.execute(request);
    } // edit

    /** Delete data */
    @Delete(':id')
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    async delete(@Param('id', ParseIntPipe) id: number):Promise<number> {
        return await this._commandBus.execute(new DeleteAboutCommand(id));
    } // delete
}
