import { ConflictException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '../../entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dtos/create.dto'

@Injectable()
export class UsersService{
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>
    ){}

    async createUser(body: CreateUserDto){
        const existingUser = await this.usersRepository.findOne({where: {email: body.email}});
        console.log(existingUser)

        if(!existingUser){
            return await this.usersRepository.save(this.usersRepository.create(body));
        }
        throw new ConflictException();
    }
    
    async findOneByEmail(email :string): Promise<User> {
        return await this.usersRepository.findOneOrFail({ 
            where: {email: email}
        })
    }
}
