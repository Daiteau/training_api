
import { IsEmail, IsNumber, IsString } from 'class-validator';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('user') 
export class User {

    @PrimaryColumn()
    @IsNumber()
    id: number;

    @Column()
    @IsEmail()
    email: string;

    @Column()
    @IsString()
    password: string


}