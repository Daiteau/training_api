import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/create.dto'

@Controller('users')
export class UsersController {
    constructor(private usersService :UsersService){}

    @Post("create")
    async createUser(@Body() body: CreateUserDto){
        console.log(body)
        return await this.usersService.createUser(body)
    }
}
