import { Model } from 'mongoose';
import { SolicitudDomicilio, SolicitudDomicilioDocument } from './domicilio.schema';
import { UsuarioDocument } from '../usuarios/usuarios.schema';
import { ProductoDocument } from '../productos/productos.schema';
import { MensajeDocument } from '../mensajes/mensajes.schema';
export declare class DomicilioService {
    private solicitudModel;
    private usuarioModel;
    private productoModel;
    private mensajeModel;
    constructor(solicitudModel: Model<SolicitudDomicilioDocument>, usuarioModel: Model<UsuarioDocument>, productoModel: Model<ProductoDocument>, mensajeModel: Model<MensajeDocument>);
    private validarWhatsapp;
    create(dto: {
        prestadorId: string;
        productoId: string;
        whatsappComprador: string;
    }): Promise<SolicitudDomicilio>;
    findByPrestador(prestadorId: string): Promise<SolicitudDomicilio[]>;
    findAll(): Promise<SolicitudDomicilio[]>;
}
