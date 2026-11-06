export type CategoriaDocument = Categoria & Document;
export declare class Categoria {
    tipo: string;
    nombre: string;
    icono: string;
    orden: number;
    esSinCategoria: boolean;
    createdAt: Date;
    updatedAt: Date;
}
export declare const CategoriaSchema: import("mongoose").Schema<Categoria, import("mongoose").Model<Categoria, any, any, any, import("mongoose").Document<unknown, any, Categoria> & Categoria & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Categoria, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Categoria>> & import("mongoose").FlatRecord<Categoria> & {
    _id: import("mongoose").Types.ObjectId;
}>;
