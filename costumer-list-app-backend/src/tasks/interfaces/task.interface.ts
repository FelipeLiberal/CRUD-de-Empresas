import { Document } from 'mongoose';

export interface Task extends Document {
    nomeempresa: String,
    telefone: String,
    status: String
}