import { Controller, Get, Post, Put, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClinicalRecordsService } from './clinical-records.service';
import { CreateClinicalRecordDto } from './dto/create-clinical-record.dto';
import { UpdateClinicalRecordDto } from './dto/update-clinical-record.dto';

@Controller('clinical-records')
export class ClinicalRecordsController {
  patientsService: any;
  constructor(private readonly clinicalRecordsService: ClinicalRecordsService) {}

  @Post()
  create(@Body() createClinicalRecordDto: CreateClinicalRecordDto) {
    return this.clinicalRecordsService.create(createClinicalRecordDto);
  }

  @Get() // Define the HTTP GET method for fetching clinical records
  async findAll() {
    return await this.clinicalRecordsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clinicalRecordsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClinicalRecordDto: UpdateClinicalRecordDto) {
    return this.clinicalRecordsService.update(+id, updateClinicalRecordDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clinicalRecordsService.remove(+id);
  }
  @Put(':id')
  async updateClinicalRecord(
    @Param('id') id: string,
    @Body() updateClinicalRecordDto: UpdateClinicalRecordDto,
  ) {
    try {
      const updatedClinicalRecord = await this.clinicalRecordsService.update(+id, updateClinicalRecordDto);
      return updatedClinicalRecord;
    } catch (error) {
      // Handle error and return an appropriate response
    }
  }
}

