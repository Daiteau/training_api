import { Body, Controller, Get, HttpCode, HttpStatus, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportAuthGuard } from './guards/passport-auth.guard';
import { PassportJwtAuthGuard } from './guards/passport-jwt.guard';

@Controller('auth')
export class AuthController{
    constructor(private readonly authService: AuthService){}

    @HttpCode(HttpStatus.OK)
    @Post('login')
    @UseGuards(PassportAuthGuard)
    async login(@Request() request){
        return this.authService.signIn(request.user)
    }

    @Get()
    @UseGuards(PassportJwtAuthGuard)
    getUserInfo(@Request() request){
        return request.user;
    }
}
