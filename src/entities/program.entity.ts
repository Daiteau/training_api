import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Common } from './common.entity';
import { User } from './user.entity';

@Entity('programs')
export class Program extends Common{

    @ManyToOne(() => User, (user) => user.programs)
    @JoinColumn({ name: 'user_id' })
    user: User;
}