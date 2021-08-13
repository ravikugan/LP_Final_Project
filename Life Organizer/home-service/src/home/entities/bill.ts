import { Field, Float, ObjectType } from "@nestjs/graphql"

@ObjectType()
export class Bill{
    @Field()
    name:string
    @Field(()=>Float)
    payment:number
}