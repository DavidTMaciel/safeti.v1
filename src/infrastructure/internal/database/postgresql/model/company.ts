import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CollaboratorModel } from "./collaborator";

@Entity()
class CompanyModel {
    @PrimaryGeneratedColumn()
    public companyID: number | null;

    @Column({ type: 'varchar', length: '255' })
    public name: string;

    @Column({ type: 'varchar', length: '255' })
    public cnpj: string;

    @OneToMany(() => CollaboratorModel, collaborator => collaborator.company)
    public collaborators: CollaboratorModel[];

    @Column({ type: 'timestamp', nullable: true, update: false, name: 'created_at' })
    public createdAt: Date;

    @Column({ type: 'timestamp', nullable: true, name: 'updated_at' })
    public updatedAt: Date;

    constructor(
        companyID: number | null,
        name: string,
        cnpj: string,
        collaborators: CollaboratorModel[],
        createdAt: Date,
        updatedAt: Date
    ) {
        this.companyID = companyID;
        this.name = name;
        this.cnpj = cnpj
        this.collaborators = collaborators;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}

export {
    CompanyModel
}