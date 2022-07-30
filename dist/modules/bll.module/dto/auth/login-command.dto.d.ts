import { ICommand } from "@nestjs/cqrs";
export declare class LoginCommand implements ICommand {
    login: string;
    password: string;
}
