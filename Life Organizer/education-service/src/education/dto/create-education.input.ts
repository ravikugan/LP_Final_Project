import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateEducationInput {
  @Field()
  userName:string
  @Field()
  date:string
  @Field()
  type:string
  @Field()
  taskName:string
  @Field({nullable:true})
  notes:string
}
