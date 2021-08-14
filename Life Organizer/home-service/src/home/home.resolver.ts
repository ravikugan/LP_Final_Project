import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { HomeService } from './home.service';
import { Home } from './entities/home.entity';
import { CreateHomeInput } from './dto/create-home.input';
import { UpdateHomeInput } from './dto/update-home.input';

@Resolver(() => Home)
export class HomeResolver {
  constructor(private readonly homeService: HomeService) {}

  @Mutation(() => Home)
  createHome(@Args('createHomeInput') createHomeInput: CreateHomeInput) {
    return this.homeService.create(createHomeInput);
  }

  @Query(() => [Home], { name: 'getAllHome' })
  findAll() {
    return this.homeService.findAll();
  }

  @Query(() => Home, { name: 'findHome' })
  findOne(@Args('id') id: string) {
    return this.homeService.findOne(id);
  }

  @Mutation(() => Home)
  updateHome(@Args('id') id:string,@Args('updateHomeInput') updateHomeInput: CreateHomeInput) {
    return this.homeService.update(id, updateHomeInput);
  }

  @Mutation(() => Home)
  removeHome(@Args('id') id: string) {
    return this.homeService.remove(id);
  }
}
