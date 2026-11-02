# RepairLink · Web del taller

![Angular](https://img.shields.io/badge/Angular-22-DD0031?logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![Estado](https://img.shields.io/badge/estado-en_desarrollo-E8752A)

RepairLink conecta talleres mecánicos con sus clientes. El cliente busca taller, pide cita y sigue en todo momento el estado de su coche. El taller gestiona sus citas y los coches que tiene dentro, y va marcando en qué punto está cada reparación.

Este repositorio contiene la **web para el taller**. Los clientes usan una app Android en Kotlin, y las dos aplicaciones trabajan contra la misma API.

```
App cliente (Kotlin) ──┐
                       ├──► API REST/JSON (Node) ──► Prisma ──► PostgreSQL
Web taller (Angular) ──┘
```

Proyecto Intermodular de 2º de DAM.

## Qué puede hacer el taller

| Pantalla | Descripción | Estado |
|---|---|---|
| Login | Acceso del taller al panel con correo y contraseña | 🔜 Pendiente |
| Panel | Citas de hoy, coches en el taller y contadores (citas, en taller, por aceptar) | 🔜 Pendiente |
| Aceptar coche | Registrar la entrada del coche de un cliente: kilómetros y estado a la entrada | 🔜 Pendiente |
| Clientes | Listado de los clientes del taller | 🔜 Pendiente (sin diseño) |
| Mensajes | Chat con cada cliente sobre su coche, con avisos de estado y presupuestos | 🔜 Pendiente |
| Ajustes · Horario | Marcar las horas en las que el taller está abierto | 🔜 Pendiente |
| Ajustes · Festivos | Días de cierre; salen como cerrados en el calendario de reservas de los clientes | 🔜 Pendiente |
| Ajustes · Vacaciones | Periodos de vacaciones, con aviso a los clientes que tienen cita esos días | 🔜 Pendiente |
| Ajustes · Promociones | Promociones que aparecen en la ficha del taller en la app de clientes | 🔜 Pendiente |

## Tecnologías

| Para qué | Qué se usa |
|---|---|
| Framework | Angular 22 (componentes standalone) |
| Lenguaje | TypeScript 6 |
| Estilos | Tailwind CSS 4 |
| Navegación | Angular Router con carga diferida (lazy loading) por funcionalidad (pendiente) |
| Estado | Signals (pendiente) |
| Red | HttpClient contra la API propia (pendiente) |
| Tiempo real | WebSocket para el chat (pendiente) |
| Tests | Vitest |
| Herramientas | Angular CLI 22 · Node.js 24 |

## Estructura

```
src/
├── environments/                 URL de la API en desarrollo y en producción
└── app/
    ├── app.ts / app.config.ts / app.routes.ts
    ├── auth/                     Login, servicio de sesión, guard e interceptor
    ├── layout/                   shell (menú lateral + contenido) y menu-lateral
    ├── panel/                    Panel, citas-hoy, coches-taller, aceptar-coche, citas-api
    ├── clientes/                 Clientes
    ├── mensajes/                 Mensajes, lista-conversaciones, conversacion, mensajes-api
    ├── ajustes/                  Ajustes (pestañas), horario, festivos, vacaciones, promociones, ajustes-api
    └── shared/ui/                logo, chip, badge, avatar
```

Seguimos la [guía de estilo oficial de Angular](https://angular.dev/style-guide):

- El código se organiza por funcionalidad, no por tipo de archivo. Cada funcionalidad tiene su carpeta con sus componentes, servicios y modelos.
- Cada componente tiene sus cuatro archivos (`.ts`, `.html`, `.css`, `.spec.ts`) con el mismo nombre, en su propia carpeta.
- Los nombres van en minúsculas con guiones y sin sufijos (`citas-hoy.ts`, no `citas-hoy.component.ts`). Los componentes se crean con `ng generate component`.
- Solo va a `shared/` lo que usan dos o más funcionalidades. Las funcionalidades no se importan entre sí.

## Cómo ejecutarlo

Necesitas Node.js 24 o superior.

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/Daniag56/RepairLinkWeb.git
   cd RepairLinkWeb
   ```
2. Instalar las dependencias:
   ```bash
   npm install
   ```
3. Arrancar el servidor de desarrollo:
   ```bash
   npx ng serve
   ```
4. Abrir <http://localhost:4200>. La página se recarga sola al guardar cambios.

Otros comandos:

| Comando | Para qué |
|---|---|
| `npx ng test` | Ejecutar los tests |
| `npx ng build` | Generar la versión de producción en `dist/` |

## Cómo trabajamos

```
main  ←  develop  ←  sergio / ana / dani
```

- **main**: lo que se entrega. Solo llega aquí lo que funciona entero en `develop`.
- **develop**: rama de integración.
- **Una rama por persona**: cada uno trabaja en la suya y abre un Pull Request a `develop`.

Para traer lo último de los demás a tu rama:

```bash
git pull origin develop
```

Las tareas se organizan con Scrum en Jira (proyecto EquipoRL, estimación en story points) y el diseño está en Figma (escritorio 1440 × 900, tipografía Inter).

## Paleta

| Color | Hex | Uso |
|---|---|---|
| Azul petróleo | `#173F4F` | Principal |
| Azul verdoso | `#2F6F82` | Secundario |
| Gris azulado | `#B8C9CC` | Textos suaves |
| Naranja | `#E8752A` | Solo para destacar |
| Blanco roto | `#F4F6F5` | Fondo |
| Gris oscuro | `#20282B` | Texto |
| Verde | `#3E8E6B` | Estados correctos |

## Equipo

| Nombre | Rol |
|---|---|
| Daniel Arias García | Desarrollo |
| Ana Isabel Sánchez Fernández | Desarrollo |
| Sergio Rodríguez Espinosa | Desarrollo · Scrum Master |
