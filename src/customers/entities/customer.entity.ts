import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Customers {
    @PrimaryGeneratedColumn()
    cId: number;

    @Column()
    cFirstName: string;

    @Column()
    cLastName: string;

    @Column()
    cMail: string;

    @Column()
    cMobile: string;

    @Column()
    cGender: string;

    @Column()
    cAddress: string;

    @Column()
    cBlood: string;

    @Column({ type: 'timestamp' })
    cDofB: Date;

    @Column()
    eId: number;

    @Column({ type: 'timestamp' })
    cCreatedAt: Date;

    @Column({ default: 1 })
    cStatus: number
}