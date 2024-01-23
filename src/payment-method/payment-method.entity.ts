// src/payment-method/payment-method.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { UserEntity } from '../user/user.entity';

@Entity()
export class PaymentMethodEntity {
  @PrimaryGeneratedColumn()
  id: number;

  

  @ManyToOne(type => UserEntity, user => user.paymentMethods)
  user: UserEntity;
}

