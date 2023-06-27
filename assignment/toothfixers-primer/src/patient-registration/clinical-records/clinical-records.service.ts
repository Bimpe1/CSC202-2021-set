import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateClinicalRecordDto } from './dto/create-clinical-record.dto';
import { UpdateClinicalRecordDto } from './dto/update-clinical-record.dto';
import { ClinicalRecord } from './entities/clinical-record.entity';

@Injectable()
export class ClinicalRecordsService {
  constructor(
    //inject user repository for use here in UsersService as if it is part of the class
    @InjectRepository(ClinicalRecord)
    private clinicalrecordsRepository: Repository<ClinicalRecord>
  ) { }

  async create(createClinicalRecordDto: CreateClinicalRecordDto) {
    const newClinicalRecord: ClinicalRecord = this.clinicalrecordsRepository.create(createClinicalRecordDto)
    return this.clinicalrecordsRepository.save(newClinicalRecord);
    //return 'This action adds a new user';
  }

  async findAll() {
    //return `This action returns all users`;
    return await this.clinicalrecordsRepository.find();
  }

  async findOne(id: number) {
    //return `This action returns a #${id} user`;
    return await this.clinicalrecordsRepository.findOne({
      where: {
        id // same as id:id
      }
    });
  }

  async update(id: number, updateClinicalRecordDto: UpdateClinicalRecordDto) {
    //return `This action updates a #${id} user`;
    return await this.clinicalrecordsRepository.update(id, updateClinicalRecordDto);
  }

  async remove(id: number) {
    //return `This action removes a #${id} user`;
    return await this.clinicalrecordsRepository.delete(id);
  }
}