import { ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Bill } from './bill';
import { Grocery } from './groceriy';

export type HomeDocument = Home & Document

@ObjectType()
@Schema()
export class Home {
    @Prop()
    id:string
    @Prop()
    date:Date //Includes time as well
    @Prop()
    task:string
    @Prop()
    groceries:Grocery[]
    @Prop()  
    bill:Bill[]
}

export const HomeSchema = SchemaFactory.createForClass(Home)
