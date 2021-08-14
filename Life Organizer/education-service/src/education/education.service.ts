import { Injectable } from '@nestjs/common';
import { CreateEducationInput } from './dto/create-education.input';
import { UpdateEducationInput } from './dto/update-education.input';
import { EducationRepository } from './education.repository';

@Injectable()
export class EducationService {

  constructor(private eduRepository:EducationRepository){}

  create(createEducationInput: CreateEducationInput) {
    return this.eduRepository.create(createEducationInput);
  }

  findAll() {
    return this.eduRepository.getAll();
  }

  findOne(id: string) {
    return this.eduRepository.getById(id);
  }

  update(id: string, updateEducationInput: UpdateEducationInput) {
    return this.eduRepository.update(id,updateEducationInput);
  }

  remove(id: string) {
    return this.eduRepository.delete(id);
  }
}
