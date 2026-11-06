export declare class CreateProductoDto {
    vendedorId: string;
    nombre: string;
    descripcion?: string;
    imagenes?: string[];
    color?: string;
    talla?: string;
    tamaño?: string;
    tipoVenta: string;
    precio?: number;
    precioMayorista?: number;
    categoriaId: string;
    tieneDomicilio?: boolean;
    etiquetas?: string[];
}
