import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Taxes {
    @PrimaryGeneratedColumn()
    tId: number;

    @Column()
    tName: string;

    @Column()
    tRate: number;

    @Column()
    tDescription: string;

    @Column({ type: 'timestamp' })
    tCreatedAt: Date;

    @Column({ default: 1 })
    tStatus: number
}