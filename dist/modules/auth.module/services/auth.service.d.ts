import { UserRepository } from "modules/dal.module/repositories/user.repository";
import { JwtService } from "@nestjs/jwt";
export declare class AuthService {
    private _userRepository;
    private _jwtService;
    constructor(_userRepository: UserRepository, _jwtService: JwtService);
    login(login: string, password: string): Promise<string | undefined>;
}
