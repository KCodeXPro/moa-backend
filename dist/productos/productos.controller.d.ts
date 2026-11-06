import { ProductosService } from './productos.service';
import { Producto } from './productos.schema';
export declare class ProductosController {
    private readonly productosService;
    constructor(productosService: ProductosService);
    create(createProductoDto: any): Promise<Producto>;
    findAll(vendedorId?: string): Promise<Producto[]>;
    findOne(id: string): Promise<Producto>;
    update(id: string, updateProductoDto: any): Promise<Producto>;
    remove(id: string): Promise<void>;
}
