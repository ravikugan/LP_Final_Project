import { Directive,Field, Float, ID, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type HomeDocument = Home & Document

@ObjectType()
@Directive('@key(fields: "_id")')
@Schema()
export class Home {
    @Field((type)=>ID)
    _id:string
    @Field()
    @Prop()  
    username:string
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
