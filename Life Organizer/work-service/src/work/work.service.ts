import { Injectable } from '@nestjs/common';
import { CreateWorkInput } from './dto/create-work.input';
import { UpdateWorkInput } from './dto/update-work.input';
import { WorkRepository } from './work.repository';

@Injectable()
export class WorkService {
  constructor(private workRepository:WorkRepository){}

  create(createWorkInput: CreateWorkInput) {
    return this.workRepository.create(createWorkInput);
  }

  findAll() {
    return this.workRepository.getAll();
  }

  findOne(id: string) {
    return this.workRepository.getById(id);
  }

  update(id: string, updateWorkInput: UpdateWorkInput) {
    return this.workRepository.update(id,updateWorkInput);
  }

  remove(id: string) {
    return this.workRepository.delete(id);
  }
}
