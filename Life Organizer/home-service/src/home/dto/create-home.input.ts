import { InputType, Int, Field, Float } from '@nestjs/graphql';
import { Bill } from '../entities/bill';
import { Grocery } from '../entities/grocery';
import { Home } from '../entities/home.entity';
import { Repair } from '../entities/repair';
import { Vehicle } from '../entities/vehicle';

@InputType()
export class CreateHomeInput implements Partial<Home>{
  @Field()
  username:string
  @Field()
  id:string
  @Field()
  date:Date //Includes time as well
  @Field()
  task:string
  @Field()
  taskName:string
  @Field(()=>Float)
  amount:number
  @Field()
  place:string
}
