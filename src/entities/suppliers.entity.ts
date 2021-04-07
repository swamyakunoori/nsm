import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Suppliers {
    @PrimaryGeneratedColumn()
    sId: number;

    @Column()
    sName: string;

    @Column()
    sMail: string;

    @Column()
    sMobile: string;

    @Column()
    sAddress: string;

    @Column()
    eId: number;

    @Column({ type: 'timestamp' })
    sCreatedAt: Date;

    @Column({ default: 1 })
    sStatus: number
}