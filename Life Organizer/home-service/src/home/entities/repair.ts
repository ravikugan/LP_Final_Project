import { Field, ObjectType } from "@nestjs/graphql"

@ObjectType()
export class Repair{
    @Field()
    name:string // Room or place, such as room,kitchen, bathroom
    @Field()
    task:string // Renovation, Cleaning, Preparation
}