import { DynamicModule, Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { jwtConstants } from "common/constants/jwt.constants";
import { DalModule } from "modules/dal.module/dal.module";
import { AuthService } from "./services/auth.service";
import { JwtStrategy } from "./strategies/jwt.strategy";

@Module({
    imports: [
        DalModule,
        PassportModule,
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '60s' },
        }),
    ],
    providers: [
        AuthService,
        JwtStrategy
    ],
    exports: [
        AuthService
    ]
})

export class AuthModule {}