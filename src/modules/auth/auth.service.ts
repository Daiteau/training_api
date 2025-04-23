import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

type AuthInput = {email:string, password:string}
type SignInData = {userId:number, email:string}
type AuthResult = {accessToken:string, userId:number, email:string}

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService
    ){}

    async authenticate(input: AuthInput): Promise<AuthResult> {
        const user = await this.validateUser(input);

        if (!user) {
            throw new Error('Invalid credentials');
        }

        return this.signIn(user);
    }
    
    async validateUser(input: AuthInput): Promise<SignInData | null> {
        const user = await this.usersService.findOneByEmail(input.email);

        if (user && user.password === input.password){
            return {
                userId: user.id,
                email: user.email
            }
        }

        return null
    }

    async signIn(user: SignInData): Promise<AuthResult> {
        const tokenPayload = {
            sub: user.userId,
            email: user.email
        }

        const accessToken = await this.jwtService.signAsync(tokenPayload)
        return {accessToken: accessToken, userId: user.userId, email: user.email}
    }
}
