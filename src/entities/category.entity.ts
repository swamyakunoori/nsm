import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    cId: number;

    @Column()
    cName: string;

    @Column({ type: 'timestamp' })
    cCreatedAt: Date;

    @Column({ default: 1 })
    cStatus: number
}