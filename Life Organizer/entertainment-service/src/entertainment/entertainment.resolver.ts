import { Resolver, Query, Mutation, Args, Int, ResolveReference } from '@nestjs/graphql';
import { EntertainmentService } from './entertainment.service';
import { Entertainment } from './entities/entertainment.entity';
import { CreateEntertainmentInput } from './dto/create-entertainment.input';
import { UpdateEntertainmentInput } from './dto/update-entertainment.input';

@Resolver(() => Entertainment)
export class EntertainmentResolver {
  constructor(private readonly entertainmentService: EntertainmentService) {}

  @Mutation(() => Entertainment)
  createEntertainment(@Args('createEntertainmentInput') createEntertainmentInput: CreateEntertainmentInput) {
    return this.entertainmentService.create(createEntertainmentInput);
  }

  @Query(() => [Entertainment], { name: 'allEntertainment' })
  findAll() {
    return this.entertainmentService.findAll();
  }

  @Query(() => Entertainment, { name: 'getEntertainment' })
  findOne(@Args('id') id: string) {
    return this.entertainmentService.findOne(id);
  }

  @Mutation(() => Entertainment)
  updateEntertainment(@Args('updateEntertainmentInput') updateEntertainmentInput: UpdateEntertainmentInput,@Args('id') id:string) {
    return this.entertainmentService.update(id, updateEntertainmentInput);
  }

  @Mutation(() => Entertainment)
  removeEntertainment(@Args('id') id: string) {
    return this.entertainmentService.remove(id);
  }

  @ResolveReference()
  resolveReference(ref:{__type:"entertainment",id:string}){
    return this.entertainmentService.findOne(ref.id)
  }
}
