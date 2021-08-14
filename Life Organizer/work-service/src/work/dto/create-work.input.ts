import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateWorkInput {
  @Field()
  userName:string
  @Field()
  date:Date
  @Field()
  type:string
  @Field()
  taskName:string
  @Field()
  toDo:string
  @Field({nullable:true})
  notes:string
}
