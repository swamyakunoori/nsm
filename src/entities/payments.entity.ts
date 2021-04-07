import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Payments {
    @PrimaryGeneratedColumn()
    pId: number;

    @Column()
    pMail: string;

    @Column()
    pAmount: number;

    @Column({ type: 'timestamp' })
    pDate: Date;

    @Column()
    pInvoice: number;

    @Column()
    ptId: number;

    @Column({ type: 'timestamp' })
    pCreatedAt: Date;

    @Column({ default: 1 })
    pStatus: number
}