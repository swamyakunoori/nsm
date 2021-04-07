import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Purchase {
    @PrimaryGeneratedColumn()
    pId: number;

    @Column()
    sId: number;

    @Column({ type: 'timestamp' })
    pDate: Date;

    @Column()
    pAmount: number;

    @Column()
    pTax: number;

    @Column()
    pDisccountType: string;

    @Column()
    pDiscount: number;

    @Column()
    pTotal: number;

    @Column()
    pNote: string;

    @Column()
    eId: number;

    @Column({ type: 'timestamp' })
    pCreatedAt: Date;

    @Column({ default: 1 })
    pStatus: number
}