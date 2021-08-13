import { Injectable } from '@nestjs/common';
import { CreateHomeInput } from './dto/create-home.input';
import { UpdateHomeInput } from './dto/update-home.input';
import { HomeRepository } from './home.repository';

@Injectable()
export class HomeService {
  constructor(private homeRepository:HomeRepository){}

  create(createHomeInput: CreateHomeInput) {
    return this.homeRepository.create(createHomeInput);
  }

  findAll() {
    return this.homeRepository.getAll();
  }

  findOne(id: string) {
    return this.homeRepository.getById(id);
  }

  update(id: string, updateHomeInput: CreateHomeInput) {
    return this.homeRepository.update(id,updateHomeInput);
  }

  remove(id: string) {
    return this.homeRepository.delete(id);
  }
}
