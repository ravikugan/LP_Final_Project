import { CreateWorkInput } from './create-work.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateWorkInput extends PartialType(CreateWorkInput) {
  @Field({nullable:true})
  date:Date
  @Field({nullable:true})
  type:string
  @Field({nullable:true})
  taskName:string
  @Field({nullable:true})
  toDo:string
  @Field({nullable:true})
  notes:string
}
