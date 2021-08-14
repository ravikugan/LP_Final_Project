import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateHomeInput } from "./dto/create-home.input";
import { UpdateHomeInput } from "./dto/update-home.input";
import { Home, HomeDocument } from "./entities/home.entity";

@Injectable()
export class HomeRepository{
    constructor(@InjectModel(Home.name) private homeModel:Model<HomeDocument>){}

    async create(homeCreateDto:CreateHomeInput):Promise<Home>{
        let newHome = new this.homeModel(homeCreateDto)
        return await newHome.save()
    }

    async getAll():Promise<Home[]>{

        let home=  await this.homeModel.find()
        return home
        //return await this.homeModel.find()
    }

    async getById(id:string):Promise<Home>{
        let home =  await this.homeModel.findById(id)
        return home
    }

    async update(id:string,homeUpdateDto:UpdateHomeInput):Promise<Home>{
        await this.homeModel.findByIdAndUpdate(id,homeUpdateDto)
        return await this.getById(id) 
    }

    async delete(id:string){
        return await this.homeModel.findByIdAndDelete(id)
    }

}