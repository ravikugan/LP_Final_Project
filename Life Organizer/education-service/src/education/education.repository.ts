import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateEducationInput } from "./dto/create-education.input";
import { UpdateEducationInput } from "./dto/update-education.input";
import { Education, EducationDocument } from "./entities/education.entity";

@Injectable()
export class EducationRepository{
    constructor(@InjectModel(Education.name) private eduModel:Model<EducationDocument>){}

    async create(eduCreateDto:CreateEducationInput):Promise<CreateEducationInput>{
        let newHome = new this.eduModel(eduCreateDto)
        return await newHome.save()
    }

    async getAll():Promise<Education[]>{
        return await this.eduModel.find()
    }

    async getById(id:string):Promise<Education>{
        let home =  await this.eduModel.findById(id)
        return home
    }

    async update(id:string,homeUpdateDto:UpdateEducationInput):Promise<Education>{
        await this.eduModel.findByIdAndUpdate(id,homeUpdateDto)
        return await this.getById(id) 
    }

    async delete(id:string){
        return await this.eduModel.findByIdAndDelete(id)
    }

}