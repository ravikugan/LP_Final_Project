import { Directive ,ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type EntertainmentDocument = Entertainment & Document

@ObjectType()
@Directive('@key(fields: "_id")')
@Schema()
export class Entertainment {
    @Field((type)=>ID)
    _id:string
    @Field()
    @Prop()
    userName:string
    @Field()
    @Prop()
    date:Date
    @Field()
    @Prop()
    type:string
    @Field()
    @Prop()
    with:string //Solo or Friend or Lover
    @Field()
    @Prop()
    taskName:string
    @Field()
    @Prop()
    toDo:string
}

export const EntertainmentSchema = SchemaFactory.createForClass(Entertainment)