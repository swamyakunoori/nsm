import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Batch {
    @PrimaryGeneratedColumn()
    mbId: number;

    @Column()
    baName: string;

    @Column()
    mbBatch: number;

    @Column()
    mbExpiry: string;

    @Column()
    mbQuantity: number;

    @Column()
    mbSalePrice: number;

    @Column()
    mbPurchasePrice: number;

    @Column()
    mbDisccountType: string;

    @Column()
    mbDiscount: number;

    @Column()
    mbTax: string;

    @Column()
    mbTaxPrice: number;

    @Column()
    mbPrice: number;

    @Column()
    mbSold: number;

    @Column()
    mId: number;

    @Column()
    pId: number;

    @Column()
    eId: number;

    @Column({ type: 'timestamp' })
    mbCreatedAt: Date;

    @Column({ default: 1 })
    mbStatus: number
}