import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Role {
    @PrimaryGeneratedColumn()
    rId: number;

    @Column()
    role: string;

    @Column()
    description: string;

    @Column({ type: 'timestamp' })
    createdAt: Date;

    @Column({ default: 1 })
    rStatus: number
}