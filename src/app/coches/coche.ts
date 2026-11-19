export type EstadoReparacion = 'en_revision' | 'esperando_presupuesto' |
'piezas_en_camino' |'en_reparacion' | 'listo';

export interface Coche{
  id: number;
  marca: string;
  modelo: string;
  matricula: string;
  cliente: string;
  trabajo: string;
  estado: EstadoReparacion;
  fechaEntrada: Date;
}

export const ESTADOS_REPARACION: Record<EstadoReparacion, {texto: string;
badge: string}> = {
  en_revision: {texto: 'En revisión', badge: 'badge-azul'},
  esperando_presupuesto: {texto: 'Esperando presupuesto', badge: 'badge-naranja'},
  piezas_en_camino: {texto: 'Piezas en camino', badge: 'badge-naranja'},
  en_reparacion: {texto: 'En reparación', badge: 'badge-naranja'},
  listo: {texto: 'Listo', badge: 'badge-verde'},

}

