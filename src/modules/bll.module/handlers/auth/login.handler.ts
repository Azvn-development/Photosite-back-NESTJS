import { CommandHandler } from "@nestjs/cqrs";
import { AuthService } from "modules/auth.module/services/auth.service";
import { LoginCommand } from "modules/bll.module/dto/auth/login-command.dto";
import { ICommandHandler } from "../command.interface";

@CommandHandler(LoginCommand)
export class LoginHandler implements ICommandHandler<LoginCommand> {
    constructor(
        private _authService: AuthService
    ) {}

    async execute(command: LoginCommand): Promise<string | undefined> {
        return await this._authService.login(command.login, command.password);
    }
}