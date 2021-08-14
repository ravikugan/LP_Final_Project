import { InputType, Int, Field, Float } from '@nestjs/graphql';
import { Home } from '../entities/home.entity';


@InputType()
export class CreateHomeInput implements Partial<Home>{
  @Field() 
  username:string
  @Field()
  date:Date //Includes time as well
  @Field()
  type:string
  @Field()
  taskName:string
  @Field(()=>Float,{nullable:true})
  payment:number
  @Field({nullable:true})
  toDo:string
}
