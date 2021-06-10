import * as mongoose from 'mongoose';

export const TaskSchema = new mongoose.Schema({
    nomeempresa: String,
    telefone: String,
    status: String
})