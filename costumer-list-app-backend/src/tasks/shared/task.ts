import { Document } from 'mongoose';

export class Task extends Document {
    nomeempresa: string;
    telefone: string;
    status: string;
}