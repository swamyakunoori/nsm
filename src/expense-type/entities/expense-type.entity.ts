import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ExpenseType {
    @PrimaryGeneratedColumn()
    etId: number;

    @Column()
    etName: string;

    @Column()
    etDescription: string;

    @Column({ type: 'timestamp' })
    etCreatedAt: Date;

    @Column({ default: 1 })
    etStatus: number
}