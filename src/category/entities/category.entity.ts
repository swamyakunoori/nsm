import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    mcId: number;

    @Column()
    mcName: string;

    @Column({ type: 'timestamp' })
    mcCreatedAt: Date;

    @Column({ default: 1 })
    mcStatus: number
}