"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("../users/entities/user.entity");
const student_entity_1 = require("./entities/student.entity");
let StudentsService = class StudentsService {
    constructor(studentRepository, userRepository) {
        this.studentRepository = studentRepository;
        this.userRepository = userRepository;
    }
    async create(createStudentDto) {
        const newStudent = this.studentRepository.create(createStudentDto);
        if (createStudentDto.user) {
            const newUser = this.userRepository.create(createStudentDto.user);
            const user = await this.userRepository.save(newUser);
            newStudent.user = user;
        }
        return this.studentRepository.save(newStudent);
    }
    async findAll() {
        return await this.studentRepository.find({ relations: ['user'] });
    }
    async findOne(id) {
        return await this.studentRepository.findOne({
            where: {
                id
            }
        });
    }
    async update(id, updateStudentDto) {
        return await this.studentRepository.update(id, updateStudentDto);
    }
    async remove(id) {
        return await this.studentRepository.delete(id);
    }
    async setUserById(studentId, userId) {
        try {
            return await this.studentRepository.createQueryBuilder()
                .relation(student_entity_1.Student, "user")
                .of(studentId)
                .set(userId);
        }
        catch (error) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                error: `There was a problem setting user for student: ${error.message}`,
            }, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async unsetUserById(studentId) {
        try {
            return await this.studentRepository.createQueryBuilder()
                .relation(student_entity_1.Student, "user")
                .of(studentId)
                .set(null);
        }
        catch (error) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                error: `There was a problem unsetting user for student: ${error.message}`,
            }, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
StudentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(student_entity_1.Student)),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], StudentsService);
exports.StudentsService = StudentsService;
//# sourceMappingURL=students.service.js.map