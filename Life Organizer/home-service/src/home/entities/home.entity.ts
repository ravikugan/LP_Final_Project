import { Field, Float, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type HomeDocument = Home & Document

@ObjectType()
@Schema()
export class Home {
    @Field()
    @Prop()  
    username:string
    @Field()
    _id:string
    @Field()
    @Prop()
    date:Date //Includes time as well
    @Field()
    @Prop()
    type:string
    @Field()
    @Prop()
    taskName:string
    @Field(()=>Float)
    @Prop()
    payment:number
    @Field()
    @Prop()
    toDo:string
}

export const HomeSchema = SchemaFactory.createForClass(Home)
