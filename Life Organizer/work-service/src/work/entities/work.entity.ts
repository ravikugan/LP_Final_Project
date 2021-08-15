import { Directive,ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type WorkDocument = Work & Document

@ObjectType()
@Directive('@key(fields: "_id")')
@Schema()
export class Work {
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
  taskName:string
  @Field()
  @Prop()
  toDo:string
  @Field({nullable:true})
  @Prop()
  notes:string
}

export const WorkSchema = SchemaFactory.createForClass(Work)