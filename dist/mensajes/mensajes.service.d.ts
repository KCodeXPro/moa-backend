import { Model } from 'mongoose';
import { Mensaje, MensajeDocument } from './mensajes.schema';
import { UsuarioDocument } from '../usuarios/usuarios.schema';
import { ProductoDocument } from '../productos/productos.schema';
export declare class MensajesService {
    private mensajeModel;
    private usuarioModel;
    private productoModel;
    constructor(mensajeModel: Model<MensajeDocument>, usuarioModel: Model<UsuarioDocument>, productoModel: Model<ProductoDocument>);
    private validarWhatsapp;
    create(dto: {
        vendedorId: string;
        productoId?: string;
        whatsappComprador: string;
        texto?: string;
    }): Promise<Mensaje>;
    findByVendedor(vendedorId: string): Promise<Mensaje[]>;
    markAsRead(id: string): Promise<Mensaje>;
}
