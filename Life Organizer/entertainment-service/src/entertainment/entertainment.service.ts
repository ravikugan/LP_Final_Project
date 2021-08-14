import { Injectable } from '@nestjs/common';
import { CreateEntertainmentInput } from './dto/create-entertainment.input';
import { UpdateEntertainmentInput } from './dto/update-entertainment.input';
import { EntertainmentRepository } from './entertainment.repository';

@Injectable()
export class EntertainmentService {

  constructor(private entRepository:EntertainmentRepository){}

  create(createEntertainmentInput: CreateEntertainmentInput) {
    return this.entRepository.create(createEntertainmentInput);
  }

  findAll() {
    return this.entRepository.getAll();
  }

  findOne(id: string) {
    return this.entRepository.getById(id);
  }

  update(id: string, updateEntertainmentInput: UpdateEntertainmentInput) {
    return this.entRepository.update(id,updateEntertainmentInput);
  }

  remove(id: string) {
    return this.entRepository.delete(id);
  }
}
