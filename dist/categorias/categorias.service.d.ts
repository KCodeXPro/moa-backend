import { Model } from 'mongoose';
import { Categoria, CategoriaDocument } from './categorias.schema';
export declare class CategoriasService {
    private categoriaModel;
    constructor(categoriaModel: Model<CategoriaDocument>);
    create(createCategoriaDto: any): Promise<Categoria>;
    findAll(): Promise<Categoria[]>;
    findByTipo(tipo: string): Promise<Categoria[]>;
    findOne(id: string): Promise<Categoria>;
    update(id: string, updateCategoriaDto: any): Promise<Categoria>;
    remove(id: string): Promise<void>;
}
