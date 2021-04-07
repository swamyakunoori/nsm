import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Medicines {
    @PrimaryGeneratedColumn()
    mId: number;

    @Column()
    mName: string;

    @Column()
    mCompany: string;

    @Column()
    mGeneric: string;

    @Column()
    mGroup: string;

    @Column()
    mcId: number;

    @Column()
    mStoreBox: string;

    @Column()
    mMinLevel: number;

    @Column()
    mReorderLevel: number;

    @Column()
    mUnit: number;

    @Column()
    mUnitPacking: number;

    @Column()
    mTax: number;

    @Column()
    mNote: string;

    @Column()
    eId: number;

    @Column({ type: 'timestamp' })
    mCreatedAt: Date;

    @Column({ default: 1 })
    mStatus: number
}