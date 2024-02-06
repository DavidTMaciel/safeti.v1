import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
class CollaboratorModel {
    @PrimaryGeneratedColumn()
    public ID: number | null;

    @Column({ type: 'varchar', length: '255' })
    public name: string;

    @Column({ type: 'varchar', length: '255' })
    public office: string;

    @Column({ type: 'varchar', length: '255' })
    public constructions: string;

    @Column({ type: 'varchar', length: '255' })
    public company: string;

    @Column({ type: 'timestamp', nullable: true, update: false, name: 'created_at' })
    public createdAt: Date;

    @Column({ type: 'timestamp', nullable: true, name: 'updated_at' })
    public updatedAt: Date;

    constructor(
        ID: number | null,
        name: string,
        office: string,
        constructions: string,
        company: string,
        createdAt: Date,
        updatedAt: Date
    ) {
        this.ID = ID;
        this.name = name;
        this.office = office;
        this.constructions = constructions;
        this.company = company;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}

export { CollaboratorModel };
