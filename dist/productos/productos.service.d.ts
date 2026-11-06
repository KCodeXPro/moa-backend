import { Model } from 'mongoose';
import { Producto, ProductoDocument } from './productos.schema';
export declare class ProductosService {
    private productoModel;
    constructor(productoModel: Model<ProductoDocument>);
    create(createProductoDto: any): Promise<Producto>;
    findAll(vendedorId?: string): Promise<Producto[]>;
    findOne(id: string): Promise<Producto>;
    update(id: string, updateProductoDto: any): Promise<Producto>;
    remove(id: string): Promise<void>;
}
