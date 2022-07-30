import { AuthService } from "modules/auth.module/services/auth.service";
import { LoginCommand } from "modules/bll.module/dto/auth/login-command.dto";
import { ICommandHandler } from "../command.interface";
export declare class LoginHandler implements ICommandHandler<LoginCommand> {
    private _authService;
    constructor(_authService: AuthService);
    execute(command: LoginCommand): Promise<string | undefined>;
}
