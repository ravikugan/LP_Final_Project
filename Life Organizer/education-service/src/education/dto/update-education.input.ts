import { CreateEducationInput } from './create-education.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateEducationInput{
  @Field({nullable:true})
  date:string
  @Field({nullable:true})
  type:string
  @Field({nullable:true})
  taskName:string
  @Field({nullable:true})
  notes:string
}
