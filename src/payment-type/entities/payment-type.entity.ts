import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PaymentType {
    @PrimaryGeneratedColumn()
    ptId: number;

    @Column()
    ptName: string;

    @Column()
    ptDescription: string;

    @Column({ type: 'timestamp' })
    ptCreatedAt: Date;

    @Column({ default: 1 })
    ptStatus: number
}