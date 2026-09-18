# Gimnasio - Clases y Membresias

Sistema de gestion de clases y membresias para un gimnasio.
Proyecto de la asignatura Programacion V - Backend (UNIAJC).

## Integrantes del grupo

| Nombre | Usuario de GitHub | Rol |
|---|---|---|
| Juan Esteban Aguilar | [@JuanAguilar0129](https://github.com/JuanAguilar0129) | Backend |
| Juan (Cali) | [@JuanEstudiante-Cali](https://github.com/JuanEstudiante-Cali) | Backend |

## Requisitos

- Node.js 18 o superior
- npm

## Instalacion

```bash
npm install
```

Copia `.env.example` a `.env` si necesitas cambiar el puerto.

## Ejecucion

```bash
npm run dev     # desarrollo con recarga automatica (ts-node-dev)
npm run build   # compila TypeScript a dist/
npm start       # ejecuta la version compilada
```

El servidor queda en `http://localhost:3000` (configurable con `PORT`).

## Endpoints

| Metodo | Ruta | Respuesta | Codigo |
|---|---|---|---|
| GET | `/health` | `{ "status": "ok" }` | 200 |
| GET | `/courses` | Arreglo de clases | 200 |
| GET | `/courses/:id` | Clase solicitada | 200 |
| GET | `/courses/:id` | `{ "error": "Clase no encontrada" }` | 404 |

### Ejemplo

```bash
curl http://localhost:3000/courses/2
```

```json
{ "id": 2, "title": "CrossFit", "instructor": "Andres Ramirez", "schedule": "18:00", "capacity": 15 }
```

## Datos

`data/gimnasio.json` contiene el catalogo de clases y los planes de membresia del gimnasio.

## Estructura

```
Gimnasio-Clases-y-Membresias/
|-- README.md
|-- .gitignore
|-- .env.example
|-- package.json
|-- package-lock.json
|-- tsconfig.json
|-- data/
|   `-- gimnasio.json
`-- src/
    `-- index.ts
```

## Flujo de trabajo

1. Crear una rama `feature/<nombre>` desde `main` actualizado.
2. Hacer commits pequenos y descriptivos.
3. Abrir un Pull Request hacia `main`.
4. Un companero revisa y aprueba antes de mergear.
