import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from 'typeorm';
import { UserEntity } from '../user/user.entity';

@Entity()
export class PaymentEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    amount: number;

    @Column()
    currency: string;

    @ManyToOne( type => UserEntity, user => user.payments)
    user: UserEntity;
}
