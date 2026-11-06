import { DireccionesService } from './direcciones.service';
import { Direccion } from './direcciones.schema';
export declare class DireccionesController {
    private readonly direccionesService;
    constructor(direccionesService: DireccionesService);
    create(body: any): Promise<Direccion>;
    findAll(): Promise<Direccion[]>;
    search(query: any): Promise<Direccion[]>;
    remove(id: string): Promise<void>;
}
