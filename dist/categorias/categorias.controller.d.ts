import { CategoriasService } from './categorias.service';
import { Categoria } from './categorias.schema';
export declare class CategoriasController {
    private readonly categoriasService;
    constructor(categoriasService: CategoriasService);
    findAll(tipo?: string): Promise<Categoria[]>;
    findOne(id: string): Promise<Categoria>;
    create(createCategoriaDto: any): Promise<Categoria>;
    update(id: string, updateCategoriaDto: any): Promise<Categoria>;
    remove(id: string): Promise<void>;
}
