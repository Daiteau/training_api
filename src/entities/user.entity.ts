
import { IsEmail, IsNumber, IsString } from 'class-validator';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Common } from './common.entity';
import { Program } from './program.entity'

@Entity('users') 
export class User extends Common{

    @Column()
    @IsEmail()
    email: string;

    @Column()
    @IsString()
    password: string

    @OneToMany(() => Program, (program) => program.user)
    programs: Program[];
}