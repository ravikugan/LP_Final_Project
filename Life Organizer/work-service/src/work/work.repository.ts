import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateWorkInput } from "./dto/create-work.input";
import { UpdateWorkInput } from "./dto/update-work.input";
import { Work, WorkDocument } from "./entities/work.entity";

@Injectable()
export class WorkRepository{
    constructor(@InjectModel(Work.name) private workModel:Model<WorkDocument>){}

    async create(homeCreateDto:CreateWorkInput):Promise<Work>{
        let newWork = new this.workModel(homeCreateDto)
        return await newWork.save()
    }

    async getAll():Promise<Work[]>{
        return await this.workModel.find()
    }

    async getById(id:string):Promise<Work>{
        let work =  await this.workModel.findById(id)
        return work
    }

    async update(id:string,homeUpdateDto:UpdateWorkInput):Promise<Work>{
        await this.workModel.findByIdAndUpdate(id,homeUpdateDto)
        return await this.getById(id) 
    }

    async delete(id:string){
        return await this.workModel.findByIdAndDelete(id)
    }

}