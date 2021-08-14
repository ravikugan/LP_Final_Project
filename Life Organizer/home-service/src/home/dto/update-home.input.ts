import { CreateHomeInput } from './create-home.input';
import { InputType, Field, Int, PartialType, Float } from '@nestjs/graphql';

@InputType()
export class UpdateHomeInput  {
  @Field({nullable:true})
  date:Date //Includes time as well
  @Field({nullable:true})
  type:string
  @Field({nullable:true})
  taskName:string
  @Field(()=>Float,{nullable:true})
  payment:number
  @Field({nullable:true})
  toDo:string
}
