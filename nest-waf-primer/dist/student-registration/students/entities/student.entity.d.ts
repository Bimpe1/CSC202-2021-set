import { ModeOfEntry } from "../../../student-registration/studentRegistration.types";
import { User } from "../../../student-registration/users/entities/user.entity";
export declare class Student {
    id: number;
    department: string;
    matriculationNumbe: string;
    modeOfEntry: ModeOfEntry;
    programOfStudy: string;
    yearOfEntry: number;
    user: User;
}
