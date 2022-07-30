import { Injectable } from "@nestjs/common";
import { UserRepository } from "modules/dal.module/repositories/user.repository";
import * as bcrypt from 'bcrypt';
import { JwtService } from "@nestjs/jwt";
import { UserEntity } from "modules/dal.module/entities/user.entity";

@Injectable()
export class AuthService {
    constructor(
        private _userRepository: UserRepository,
        private _jwtService: JwtService
    ) {}

    async login(login: string, password: string): Promise<string | undefined> {
        let user: UserEntity;

        this._userRepository.transactional(manager => {
            return this._userRepository.find(login, manager);
        })
        .then(result => {
            user = result;
        })
        .catch(err => {
            console.error(err);
            user = undefined;
        })
        
        if(user) {
            const isMatch = await bcrypt.compare(password, user.password);

            if(isMatch) {
                return this._jwtService.sign({
                    id: user.id,
                    login: user.login,
                })
            }
        } // if
    }
}