import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '../../entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService{
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
    ){}
    
    async findOneByEmail(email :string): Promise<User> {
        return await this.userRepository.findOneOrFail({ 
            where: {email: email}
        })
    }
}
