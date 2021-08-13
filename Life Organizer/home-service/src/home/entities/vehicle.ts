import { Field, ObjectType } from "@nestjs/graphql"

@ObjectType()
export class Vehicle{
    @Field()
    name:string // name of the vehicle bike/car/van
    @Field()
    task:string // cleaning, oiling, service
}