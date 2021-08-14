import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateEntertainmentInput {
  @Field()
  userName:string
  @Field()
  date:Date
  @Field()
  type:string
  @Field()
  with:string //Solo or Friend or Lover
  @Field()
  taskName:string
  @Field()
  toDo:string
}
