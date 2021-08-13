import { CreateHomeInput } from './create-home.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { Grocery } from '../entities/grocery';
import { Bill } from '../entities/bill';
import { Vehicle } from '../entities/vehicle';
import { Repair } from '../entities/repair';

@InputType()
export class UpdateHomeInput  {
  @Field()
  username:string
  @Field()
  id:string
  @Field()
  date:Date //Includes time as well
  @Field()
  task:string
  // @Field(()=>[Grocery],{nullable:true})
  // groceries:Grocery[]
  // @Field(()=>[Bill],{nullable:true})
  // bills:Bill[]
  // @Field(()=>[Vehicle],{nullable:true})
  // vehicles:Vehicle[]
  // @Field(()=>[Repair],{nullable:true})
  // repairs:Repair[]
}
