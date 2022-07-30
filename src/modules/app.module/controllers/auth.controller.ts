import { Body, Controller, Post, UnauthorizedException, UsePipes, ValidationPipe } from "@nestjs/common";
import { CommandBus } from "@nestjs/cqrs";
import { ApiTags } from "@nestjs/swagger";
import { LoginCommand } from "modules/bll.module/dto/auth/login-command.dto";

@ApiTags('auth')
@Controller('auth')
export class AuthController {
    constructor(
        private _commandBus: CommandBus
    ) {}

    /** Login */
    @Post('login')
    @UsePipes(new ValidationPipe({ transform: true }))
    async login(@Body() request: LoginCommand): Promise<any> {
        const accessToken = await this._commandBus.execute(request);

        if(accessToken) {
            return accessToken;
        } // if

        return new UnauthorizedException();
    } // login
}