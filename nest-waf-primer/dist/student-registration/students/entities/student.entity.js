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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
const studentRegistration_types_1 = require("../../../student-registration/studentRegistration.types");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../../../student-registration/users/entities/user.entity");
let Student = class Student {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Student.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Student.prototype, "department", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Student.prototype, "matriculationNumbe", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: studentRegistration_types_1.ModeOfEntry, default: studentRegistration_types_1.ModeOfEntry.UTME }),
    __metadata("design:type", String)
], Student.prototype, "modeOfEntry", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Student.prototype, "programOfStudy", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: new Date().getFullYear() }),
    __metadata("design:type", Number)
], Student.prototype, "yearOfEntry", void 0);
__decorate([
    (0, typeorm_1.JoinColumn)(),
    (0, typeorm_1.OneToOne)(type => user_entity_1.User, user => user.student, { cascade: true }),
    __metadata("design:type", user_entity_1.User)
], Student.prototype, "user", void 0);
Student = __decorate([
    (0, typeorm_1.Entity)()
], Student);
exports.Student = Student;
//# sourceMappingURL=student.entity.js.map