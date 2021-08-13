import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { type } from 'os';
import { Bill } from './bill';
import { Grocery } from './grocery';
import { Repair } from './repair';
import { Vehicle } from './vehicle';

export type HomeDocument = Home & Document

@ObjectType()
@Schema()
export class Home {
    @Field()
    @Prop()  
    username:string
    @Field()
    @Prop()
    id:string
    @Field()
    @Prop()
    date:Date //Includes time as well
    @Field()
    @Prop()
    task:string
    @Field(()=>[Grocery],{nullable:true})
    @Prop()
    groceries:Grocery[]
    @Field(()=>[Bill],{nullable:true})
    @Prop()  
    bills:Bill[]
    @Field(()=>[Vehicle],{nullable:true})
    @Prop()  
    vehicles:Vehicle[]
    @Field(()=>[Repair],{nullable:true})
    @Prop()  
    repairs:Repair[]
}

export const HomeSchema = SchemaFactory.createForClass(Home)
