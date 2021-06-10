import { Injectable } from '@nestjs/common';
import { Task } from './task';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TaskService {
    constructor(@InjectModel('Task') private readonly taskModel: Model<Task>) { }
    
    //Pegar tudo que está no BD
    async getAll() {
        return await this.taskModel.find().exec();
    }

    //Buscar uma tarefa específica pelo ID no BD
    async getById(id: string) {
        return await this.taskModel.findById(id).exec();
    }

    //Salvar tarefa no BD
    async create(task: Task) {
        const createdTask = new this.taskModel(task);
        return await createdTask.save();
    }

    //Atualizar tarefa pelo ID no BD
    async update(id: string, task: Task) {
        await this.taskModel.updateOne({ _id: id}, task).exec()
        return this.getById(id);
    }

    //Deletar tarefa pelo ID no BD
    async delete(id: string) {
        return await this.taskModel.deleteOne({ _id: id}).exec();
    }
}