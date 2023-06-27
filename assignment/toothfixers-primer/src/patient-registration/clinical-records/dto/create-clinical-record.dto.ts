export class CreateClinicalRecordDto {
    readonly clinicDate: Date;
    readonly natureOfAilment: string;
    readonly medicinePrescribed: string;
    readonly procedureUndertaken: string;
    readonly dateOfNextAppointment: Date;

}