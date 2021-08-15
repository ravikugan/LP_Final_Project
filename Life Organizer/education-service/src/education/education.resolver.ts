import { Resolver, Query, Mutation, Args, Int, ResolveReference } from '@nestjs/graphql';
import { EducationService } from './education.service';
import { Education } from './entities/education.entity';
import { CreateEducationInput } from './dto/create-education.input';
import { UpdateEducationInput } from './dto/update-education.input';

@Resolver(() => Education)
export class EducationResolver {
  constructor(private readonly educationService: EducationService) {}

  @Mutation(() => Education)
  createEducation(@Args('createEducationInput') createEducationInput: CreateEducationInput) {
    return this.educationService.create(createEducationInput);
  }

  @Query(() => [Education], { name: 'Alleducation' })
  findAll() {
    return this.educationService.findAll();
  }

  @Query(() => Education, { name: 'getEducation' })
  findOne(@Args('id') id: string) {
    return this.educationService.findOne(id);
  }

  @Mutation(() => Education)
  updateEducation(@Args('id') id:string,@Args('updateEducationInput') updateEducationInput: UpdateEducationInput) {
    return this.educationService.update(id, updateEducationInput);
  }

  @Mutation(() => Education)
  removeEducation(@Args('id') id: string) {
    return this.educationService.remove(id);
  }

  @ResolveReference()
  resolveReference(ref:{__typename:string,id:string}){
    return this.educationService.findOne(ref.id)
  }
}
