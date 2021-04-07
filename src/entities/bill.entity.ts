import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Bill {
    @PrimaryGeneratedColumn()
    bId: number;

    @Column()
    bName: string;

    @Column()
    bMail: string;

    @Column()
    bMobile: string;

    @Column()
    bDoctor: string;

    @Column()
    bDate: string;

    @Column()
    bItems: string;

    @Column()
    bSubTotal: number;

    @Column()
    bTax: number;

    @Column()
    bDisccountType: string;

    @Column()
    bDiscount: number;

    @Column()
    bTotal: number;

    @Column()
    bNote: string;

    @Column()
    dId: number;

    @Column()
    cId: number;

    @Column()
    eId: number;

    @Column({ type: 'timestamp' })
    bCreatedAt: Date;

    @Column({ default: 1 })
    bStatus: number
}