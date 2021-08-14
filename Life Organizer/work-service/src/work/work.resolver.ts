import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { WorkService } from './work.service';
import { Work } from './entities/work.entity';
import { CreateWorkInput } from './dto/create-work.input';
import { UpdateWorkInput } from './dto/update-work.input';

@Resolver(() => Work)
export class WorkResolver {
  constructor(private readonly workService: WorkService) {}

  @Mutation(() => Work)
  createWork(@Args('createWorkInput') createWorkInput: CreateWorkInput) {
    return this.workService.create(createWorkInput);
  }

  @Query(() => [Work], { name: 'allWork' })
  findAll() {
    return this.workService.findAll();
  }

  @Query(() => Work, { name: 'findWork' })
  findOne(@Args('id') id: string) {
    return this.workService.findOne(id);
  }

  @Mutation(() => Work)
  updateWork(@Args('id') id:string,@Args('updateWorkInput') updateWorkInput: UpdateWorkInput) {
    return this.workService.update(id, updateWorkInput);
  }

  @Mutation(() => Work)
  removeWork(@Args('id') id: string) {
    return this.workService.remove(id);
  }
}
