import { IsDefined } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


@Entity('Commons')
export class Common {

    @PrimaryGeneratedColumn()
    @IsDefined()
    id: number;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updated_at: Date;

    @Column({ type: 'timestamp', default: null })
    deleted_at: Date; 
}