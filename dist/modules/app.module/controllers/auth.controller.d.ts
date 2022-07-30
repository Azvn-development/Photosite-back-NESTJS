import { CommandBus } from "@nestjs/cqrs";
import { LoginCommand } from "modules/bll.module/dto/auth/login-command.dto";
export declare class AuthController {
    private _commandBus;
    constructor(_commandBus: CommandBus);
    login(request: LoginCommand): Promise<any>;
}
