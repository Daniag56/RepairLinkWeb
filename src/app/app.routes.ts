import { Routes } from '@angular/router';
import { Agenda } from './agenda/agenda';
import { Ajustes } from './ajustes/ajustes';
import { Festivos } from './ajustes/festivos/festivos';
import { Horario } from './ajustes/horario/horario';
import { NuevaPromocion } from './ajustes/nueva-promocion/nueva-promocion';
import { Promociones } from './ajustes/promociones/promociones';
import { Vacaciones } from './ajustes/vacaciones/vacaciones';
import { Login } from './auth/login/login';
import { NuevaContrasena } from './auth/nueva-contrasena/nueva-contrasena';
import { RecuperarContrasena } from './auth/recuperar-contrasena/recuperar-contrasena';
import { RegistroAcceso } from './auth/registro-acceso/registro-acceso';
import { RegistroCompletado } from './auth/registro-completado/registro-completado';
import { RegistroTaller } from './auth/registro-taller/registro-taller';
import { RevisaCorreo } from './auth/revisa-correo/revisa-correo';
import { Clientes } from './clientes/clientes';
import { FichaCliente } from './clientes/ficha-cliente/ficha-cliente';
import { Coches } from './coches/coches';
import { DetalleReparacion } from './coches/detalle-reparacion/detalle-reparacion';
import { NuevoPresupuesto } from './coches/nuevo-presupuesto/nuevo-presupuesto';
import { Shell } from './layout/shell/shell';
import { Mensajes } from './mensajes/mensajes';
import { AceptarCoche } from './panel/aceptar-coche/aceptar-coche';
import { Panel } from './panel/panel';
import { Solicitudes } from './panel/solicitudes/solicitudes';
import { Perfil } from './perfil/perfil';

export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'registro', component: RegistroAcceso },
  { path: 'registro/taller', component: RegistroTaller },
  { path: 'registro/completado', component: RegistroCompletado },
  { path: 'recuperar', component: RecuperarContrasena },
  { path: 'recuperar/correo', component: RevisaCorreo },
  { path: 'recuperar/nueva', component: NuevaContrasena },
  {
    path: '',
    component: Shell,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'panel' },
      { path: 'panel', component: Panel },
      { path: 'agenda', component: Agenda },
      { path: 'agenda/solicitudes', component: Solicitudes },
      { path: 'coches', component: Coches },
      { path: 'coches/aceptar', component: AceptarCoche },
      { path: 'coches/reparacion', component: DetalleReparacion },
      { path: 'coches/presupuesto', component: NuevoPresupuesto },
      { path: 'clientes', component: Clientes },
      { path: 'clientes/ficha', component: FichaCliente },
      { path: 'mensajes', component: Mensajes },
      { path: 'perfil', component: Perfil },
      { path: 'ajustes/promociones/nueva', component: NuevaPromocion },
      {
        path: 'ajustes',
        component: Ajustes,
        children: [
          { path: '', pathMatch: 'full', redirectTo: 'horario' },
          { path: 'horario', component: Horario },
          { path: 'festivos', component: Festivos },
          { path: 'vacaciones', component: Vacaciones },
          { path: 'promociones', component: Promociones },
        ],
      },
    ],
  },
  { path: '**', redirectTo: 'panel' },
];
