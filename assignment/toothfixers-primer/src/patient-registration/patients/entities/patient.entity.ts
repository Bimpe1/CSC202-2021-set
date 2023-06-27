import { ClinicalRecord } from "src/patient-registration/clinical-records/entities/clinical-record.entity";
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Patient {
    
@PrimaryGeneratedColumn()
id: number;

@Column()
firstName: string;

@Column({ nullable: true })
surname: string;

@Column()
middleName: string;

@Column({ nullable: true })
dateOfBirth: Date;

@Column({ nullable: true })
homeAddress: string;

@Column({ nullable: true })
dateOfRegistration: Date;

@Column({ nullable: true })
matriculationNumber: string;

@JoinColumn()
@OneToMany(type => ClinicalRecord, clinicalrecord => clinicalrecord.patient, {cascade:true})
clinicalrecord: ClinicalRecord;
}