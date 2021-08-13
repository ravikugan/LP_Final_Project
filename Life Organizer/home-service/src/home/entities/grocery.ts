import { Field, Float, ObjectType } from "@nestjs/graphql"

@ObjectType()
export class Grocery{
    @Field()
    name:string
    @Field(()=>Float)
    count:number
}