import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type EducationDocument = Education & Document

@ObjectType()
@Schema()
export class Education {
  @Field()
  _id:string
  @Field()
  @Prop()
  userName:string
  @Field()
  @Prop()
  date:string
  @Field()
  @Prop()
  type:string
  @Field()
  @Prop()
  taskName:string
  @Field()
  @Prop()
  notes:string
}

export const EducationSchema = SchemaFactory.createForClass(Education)