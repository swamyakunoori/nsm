import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Employees {
    @PrimaryGeneratedColumn()
    eId: number;

    @Column()
    rId: number;

    @Column()
    eUserName: string;

    @Column()
    ePassword: string;

    @Column()
    eFirstName: string;

    @Column()
    eLastName: string;

    @Column()
    eMail: string;

    @Column()
    eMobile: string;

    @Column()
    eImage: string;

    @Column()
    eGender: string;

    @Column()
    eAddress: string;

    @Column()
    eCountry: string;

    @Column()
    eBlood: string;

    @Column({ type: 'timestamp' })
    eDofB: Date;

    @Column({ type: 'timestamp' })
    eCreatedAt: Date;

    @Column({ default: 1 })
    eStatus: number
}