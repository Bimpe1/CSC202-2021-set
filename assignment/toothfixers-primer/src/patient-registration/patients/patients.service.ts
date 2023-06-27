import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { Patient } from './entities/patient.entity';

@Injectable()
export class PatientsService {
  constructor(
    //inject user repository for use here in UsersService as if it is part of the class
    @InjectRepository(Patient)
    private patientsRepository: Repository<Patient>
  ) { }

  async create(createPatientDto: CreatePatientDto) {
    const newPatient: Patient = this.patientsRepository.create(createPatientDto)
    return this.patientsRepository.save(newPatient);
    //return 'This action adds a new user';
  }

  async findAll() {
    //return `This action returns all users`;
    return await this.patientsRepository.find();
  }

  async findOne(id: number) {
    //return `This action returns a #${id} user`;
    return await this.patientsRepository.findOne({
      where: {
        id // same as id:id
      }
    });
  }

  async update(id: number, updatePatientDto: UpdatePatientDto) {
    //return `This action updates a #${id} user`;
    return await this.patientsRepository.update(id, updatePatientDto);
  }

  async remove(id: number) {
    //return `This action removes a #${id} user`;
    return await this.patientsRepository.delete(id);
  }

}