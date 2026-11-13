import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-guia-estilos',
  styleUrl: './guia-estilos.css',
  templateUrl: './guia-estilos.html',
})
export class GuiaEstilos {
  colores = [
    { nombre: 'marino', clase: 'bg-marino', uso: 'Principal: títulos, botones y menú' },
    { nombre: 'petroleo', clase: 'bg-petroleo', uso: 'Secundario: enlaces y opción activa' },
    { nombre: 'naranja', clase: 'bg-naranja', uso: 'Solo para destacar' },
    { nombre: 'naranja-claro', clase: 'bg-naranja-claro', uso: 'Detalles sobre fondo oscuro' },
    { nombre: 'texto', clase: 'bg-texto', uso: 'Texto normal' },
    { nombre: 'texto-medio', clase: 'bg-texto-medio', uso: 'Etiquetas de los campos' },
    { nombre: 'texto-suave', clase: 'bg-texto-suave', uso: 'Texto secundario' },
    { nombre: 'texto-inactivo', clase: 'bg-texto-inactivo', uso: 'Pestaña sin seleccionar' },
    { nombre: 'texto-apagado', clase: 'bg-texto-apagado', uso: 'Texto de ejemplo de los campos' },
    { nombre: 'fondo', clase: 'bg-fondo', uso: 'Fondo de la página' },
    { nombre: 'fondo-suave', clase: 'bg-fondo-suave', uso: 'Bloques dentro de una tarjeta' },
    { nombre: 'fondo-gris', clase: 'bg-fondo-gris', uso: 'Fondo de las pestañas' },
    { nombre: 'borde', clase: 'bg-borde', uso: 'Borde de las tarjetas' },
    { nombre: 'borde-campo', clase: 'bg-borde-campo', uso: 'Borde de campos y botones' },
    { nombre: 'separador', clase: 'bg-separador', uso: 'Líneas entre filas' },
    { nombre: 'gris', clase: 'bg-gris', uso: 'Interruptor apagado' },
    { nombre: 'menu', clase: 'bg-menu', uso: 'Texto del menú lateral' },
    { nombre: 'menu-suave', clase: 'bg-menu-suave', uso: 'Texto secundario del menú' },
    { nombre: 'contador', clase: 'bg-contador', uso: 'Texto sobre naranja' },
    { nombre: 'verde-fondo', clase: 'bg-verde-fondo', uso: 'Fondo de estado correcto' },
    { nombre: 'verde', clase: 'bg-verde', uso: 'Texto de estado correcto' },
    { nombre: 'verde-medio', clase: 'bg-verde-medio', uso: 'Interruptor encendido' },
    { nombre: 'verde-oscuro', clase: 'bg-verde-oscuro', uso: 'Cita con el coche en el taller' },
    { nombre: 'naranja-fondo', clase: 'bg-naranja-fondo', uso: 'Fondo de estado pendiente' },
    { nombre: 'naranja-oscuro', clase: 'bg-naranja-oscuro', uso: 'Texto de estado pendiente' },
    { nombre: 'naranja-texto', clase: 'bg-naranja-texto', uso: 'Cita pendiente' },
    { nombre: 'azul-fondo', clase: 'bg-azul-fondo', uso: 'Fondo de estado informativo' },
    { nombre: 'azul', clase: 'bg-azul', uso: 'Texto de estado informativo' },
  ];

  tamanos = [
    { clase: 'text-portada', px: 40, uso: 'Titular del acceso' },
    { clase: 'text-cifra', px: 34, uso: 'Cifras del panel' },
    { clase: 'text-titulo-marca', px: 32, uso: 'Titular de registro y recuperar' },
    { clase: 'text-titulo', px: 30, uso: 'Título de cada página' },
    { clase: 'text-titulo-acceso', px: 28, uso: 'Título de un formulario de acceso' },
    { clase: 'text-subtitulo', px: 26, uso: 'Título de un paso y totales' },
    { clase: 'text-2xl', px: 24, uso: 'Importes' },
    { clase: 'text-xl', px: 20, uso: 'Nombre de la marca' },
    { clase: 'text-lg', px: 18, uso: 'Título de una tarjeta' },
    { clase: 'text-destacado', px: 17, uso: 'Título de una promoción' },
    { clase: 'text-base', px: 16, uso: 'Nombres y botones' },
    { clase: 'text-cuerpo', px: 15, uso: 'Texto de campos y listas' },
    { clase: 'text-sm', px: 14, uso: 'Texto normal' },
    { clase: 'text-nota', px: 13, uso: 'Texto secundario' },
    { clase: 'text-xs', px: 12, uso: 'Etiquetas de estado' },
    { clase: 'text-mini', px: 11, uso: 'Citas de la agenda' },
  ];

  espacios = [
    { paso: '1', clase: 'w-1', px: 4, uso: 'Entre un título y su subtítulo' },
    { paso: '2', clase: 'w-2', px: 8, uso: 'Entre un icono y su texto' },
    { paso: '3', clase: 'w-3', px: 12, uso: 'Entre los elementos de una lista' },
    { paso: '4', clase: 'w-4', px: 16, uso: 'Entre los campos de un formulario' },
    { paso: '6', clase: 'w-6', px: 24, uso: 'Relleno de una tarjeta y entre tarjetas' },
    { paso: '8', clase: 'w-8', px: 32, uso: 'Margen superior de la página' },
    { paso: '10', clase: 'w-10', px: 40, uso: 'Márgenes laterales de la página' },
  ];
}
