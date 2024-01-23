import { Entity, Column, PrimaryGeneratedColumn, Unique, OneToMany } from 'typeorm';
import { PaymentEntity } from '../payment/payment.entity'
import { PaymentMethodEntity } from 'src/payment-method/payment-method.entity';


@Entity()
@Unique(['username'])
export class UserEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    username: string;

    @Column()
    password: string;

    @Column({ default: 'user' })
    role: string;

    //Multiple payment methods associated with the user
    @OneToMany(type => PaymentMethodEntity, method => method.user)
    paymentMethods: PaymentMethodEntity[];

    //user payment history
    @OneToMany(type => PaymentEntity, payment => payment.user)
    payments: PaymentEntity[]

    //Billing information

    @Column({ nullable: true })
    address: string;

    @Column({ nullable: true })
    city: string;

    @Column({ nullable: true })
    state: string;

    @Column({ nullable: true })
    postalCode: string;

    // Subscription Information
    @Column({ nullable: true })
    subscriptionPlan: string;

    @Column({ default: false })
    isSubscribed: boolean;

    // Verification Status
    @Column({ default: false })
    isIdentityVerified: boolean;

    @Column({ default: false })
    isPaymentInfoVerified: boolean;

    // Two-Factor Authentication
    @Column({ default: false })
    hasTwoFactorAuth: boolean;
}
