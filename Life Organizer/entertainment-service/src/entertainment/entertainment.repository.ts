import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateEntertainmentInput } from "./dto/create-entertainment.input";
import { UpdateEntertainmentInput } from "./dto/update-entertainment.input";
import { Entertainment, EntertainmentDocument } from "./entities/entertainment.entity";

@Injectable()
export class EntertainmentRepository{
    constructor(@InjectModel(Entertainment.name) private entertainmentModel:Model<EntertainmentDocument>){}

    async create(entCreateDto:CreateEntertainmentInput):Promise<Entertainment>{
        let newEnt = new this.entertainmentModel(entCreateDto)
        return await newEnt.save()
    }

    async getAll():Promise<Entertainment[]>{

        return await this.entertainmentModel.find()
    }

    async getById(id:string):Promise<Entertainment>{
        let home =  await this.entertainmentModel.findById(id)
        return home
    }

    async update(id:string,homeUpdateDto:UpdateEntertainmentInput):Promise<Entertainment>{
        await this.entertainmentModel.findByIdAndUpdate(id,homeUpdateDto)
        return await this.getById(id) 
    }

    async delete(id:string){
        return await this.entertainmentModel.findByIdAndDelete(id)
    }
}