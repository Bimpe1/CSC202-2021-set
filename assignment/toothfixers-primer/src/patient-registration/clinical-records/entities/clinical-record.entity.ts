import { Patient } from "src/patient-registration/patients/entities/patient.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class ClinicalRecord {
@PrimaryGeneratedColumn()
id: number;
@Column()
clinicDate: Date;
@Column()
natureOfAilment: string;
@Column({nullable: true})
medicinePrescribed: string;
@Column({nullable: true})
procedureUndertaken: string;
@Column()
dateOfNextAppointment: Date;
@ManyToOne(type => Patient, patient => patient.clinicalrecord) 
patient: Patient;
}


