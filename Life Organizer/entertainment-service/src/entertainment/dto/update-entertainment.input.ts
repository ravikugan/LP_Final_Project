import { CreateEntertainmentInput } from './create-entertainment.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateEntertainmentInput{
  @Field({nullable:true})
  date:Date
  @Field({nullable:true})
  type:string
  @Field({nullable:true})
  with:string //Solo or Friend or Lover
  @Field({nullable:true})
  taskName:string
  @Field({nullable:true})
  toDo:string
}
