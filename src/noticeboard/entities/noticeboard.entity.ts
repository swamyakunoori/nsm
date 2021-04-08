import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Noticeboard {
    @PrimaryGeneratedColumn()
    nId: number;

    @Column()
    nTitle: string;

    @Column()
    nDescription: string;

    @Column({ type: 'timestamp' })
    nStartDate: Date;

    @Column({ type: 'timestamp' })
    nEndDate: Date;

    @Column()
    eId: number;

    @Column({ type: 'timestamp' })
    nCreatedAt: Date;

    @Column({ default: 1 })
    nStatus: number
}