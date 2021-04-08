import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Doctors {
    @PrimaryGeneratedColumn()
    dId: number;

    @Column()
    dFirstName: string;

    @Column()
    dLastName: string;

    @Column()
    dMail: string;

    @Column()
    dMobile: string;

    @Column()
    dImage: string;

    @Column()
    dGender: string;

    @Column()
    dAddress: string;

    @Column()
    eId: number;

    @Column({ type: 'timestamp' })
    dCreatedAt: Date;

    @Column({ default: 1 })
    dStatus: number
}