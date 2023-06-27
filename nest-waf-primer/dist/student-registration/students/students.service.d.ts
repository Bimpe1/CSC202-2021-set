import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student } from './entities/student.entity';
export declare class StudentsService {
    private studentRepository;
    private userRepository;
    constructor(studentRepository: Repository<Student>, userRepository: Repository<User>);
    create(createStudentDto: CreateStudentDto): Promise<Student>;
    findAll(): Promise<Student[]>;
    findOne(id: number): Promise<Student>;
    update(id: number, updateStudentDto: UpdateStudentDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
    setUserById(studentId: number, userId: number): Promise<void>;
    unsetUserById(studentId: number): Promise<void>;
}
