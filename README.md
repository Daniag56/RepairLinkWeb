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
    ├── guia-estilos/             Página de prueba de los criterios visuales (/estilos)
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

## Criterios visuales

Los colores, la letra y los tamaños se definen una sola vez, en el bloque `@theme` de `src/styles.css`. Lo que se maquete a partir de ahora los usa por su nombre (`bg-marino`, `text-cuerpo`), no con valores sueltos como `text-[#33444d]` o `text-[15px]`. Si hace falta un color o un tamaño nuevo, primero se añade al `@theme`.

La página <http://localhost:4200/estilos> enseña todos los colores, tamaños, espaciados y clases comunes.

### Paleta

| Nombre | Hex | Uso |
|---|---|---|
| `marino` | `#17394a` | Principal: títulos, botones y menú lateral |
| `petroleo` | `#2c6475` | Secundario: enlaces y opción activa |
| `naranja` | `#e8792b` | Solo para destacar |
| `fondo` | `#f3f5f4` | Fondo de la página |
| `texto` | `#1c2b33` | Texto normal |
| `texto-suave` | `#5b6870` | Texto secundario |
| `verde-medio` | `#2e8a5a` | Estados correctos |

El resto (bordes, fondos suaves y colores de estado) está en `src/styles.css`. El nombre vale para cualquier clase de color: `bg-marino`, `text-marino`, `border-marino`.

### Tipografía

Inter, cargada desde Google Fonts en `src/index.html`, con los pesos `font-medium`, `font-semibold` y `font-bold`.

| Clase | Tamaño | Uso |
|---|---|---|
| `text-portada` | 40 px | Titular del acceso |
| `text-cifra` | 34 px | Cifras del panel |
| `text-titulo-marca` | 32 px | Titular de registro y recuperar contraseña |
| `text-titulo` | 30 px | Título de cada página |
| `text-titulo-acceso` | 28 px | Título de un formulario de acceso |
| `text-subtitulo` | 26 px | Título de un paso y totales |
| `text-2xl` | 24 px | Importes |
| `text-xl` | 20 px | Nombre de la marca |
| `text-lg` | 18 px | Título de una tarjeta |
| `text-destacado` | 17 px | Título de una promoción |
| `text-base` | 16 px | Nombres y botones |
| `text-cuerpo` | 15 px | Texto de campos y listas |
| `text-sm` | 14 px | Texto normal |
| `text-nota` | 13 px | Texto secundario |
| `text-xs` | 12 px | Etiquetas de estado |
| `text-mini` | 11 px | Citas de la agenda |

### Espaciado

Se usa la escala de Tailwind: cada paso son 4 px (`gap-4` son 16 px).

| Dónde | Clases |
|---|---|
| Página | `flex flex-col gap-6 px-10 pt-8 pb-10` |
| Tarjeta | `tarjeta p-6` |
| Entre los campos de un formulario | `gap-4` |
| Entre los elementos de una lista | `gap-3` |
| Entre un título y su subtítulo | `gap-1` |

### Botones, campos y otras clases comunes

Están en `src/styles.css`, dentro de `@layer components`.

| Clase | Para qué |
|---|---|
| `btn-primario` | Acción principal |
| `btn-naranja` | Acción que se quiere destacar (una por pantalla) |
| `btn-secundario` | Acción secundaria: cancelar, volver |
| `campo` | Cuadro de texto de un formulario |
| `etiqueta` | Texto encima de un campo |
| `tarjeta` | Caja blanca con borde |
| `badge-verde` · `badge-naranja` · `badge-azul` | Estado correcto, pendiente o informativo |
| `chip-activo` · `chip-inactivo` | Filtros |
| `pestana` · `pestana activa` | Pestañas |
| `avatar` | Círculo con las iniciales |
| `interruptor-on` · `interruptor-off` | Interruptor |

## Equipo

| Nombre | Rol |
|---|---|
| Daniel Arias García | Desarrollo |
| Ana Isabel Sánchez Fernández | Desarrollo |
| Sergio Rodríguez Espinosa | Desarrollo · Scrum Master |
