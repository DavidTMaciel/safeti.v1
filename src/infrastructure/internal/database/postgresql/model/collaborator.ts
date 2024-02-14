import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { CompanyModel } from "./company";

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

    @ManyToOne(() => CompanyModel, company => company.collaborators)
    @JoinColumn({ name: 'companyID', referencedColumnName: 'companyID' })
    public company: CompanyModel;

    @Column({ type: 'timestamp', nullable: true, update: false, name: 'created_at' })
    public createdAt: Date;

    @Column({ type: 'timestamp', nullable: true, name: 'updated_at' })
    public updatedAt: Date;

    constructor(
        ID: number | null,
        name: string,
        office: string,
        constructions: string,
        company: CompanyModel,
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