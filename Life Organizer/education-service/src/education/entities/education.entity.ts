import { ObjectType, Field, Int ,Directive, ID} from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type EducationDocument = Education & Document

@ObjectType()
@Directive('@key(fields: "_id")')
@Schema()
export class Education {
  @Field((type)=>ID)
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