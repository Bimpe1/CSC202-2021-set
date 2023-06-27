export class CreatePatientDto {
    readonly firstName: string;
    readonly surName: string;
    readonly middleName: string;
    readonly dateOfBirth: Date;
    readonly homeAddress: string;
    readonly dateOfRegistration: Date;
    readonly matriculationNumber: string;
}
