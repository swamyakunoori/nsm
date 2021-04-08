import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Expense {
    @PrimaryGeneratedColumn()
    exId: number;

    @Column()
    exName: string;

    @Column()
    etId: number;

    @Column()
    exAmount: number;

    @Column()
    ptId: number;

    @Column({ type: 'timestamp' })
    exDate: Date;

    @Column()
    exDescription: string;

    @Column()
    eId: number;

    @Column({ type: 'timestamp' })
    exCreatedAt: Date;

    @Column({ default: 1 })
    exStatus: number
}