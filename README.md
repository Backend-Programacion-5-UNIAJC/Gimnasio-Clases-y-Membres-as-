# Gimnasio - Clases y Membresias

Sistema de gestion de clases y membresias para un gimnasio.

Dominio: API REST para administrar las clases (courses), los instructores y los planes de membresia de un gimnasio.
Proyecto de la asignatura Programacion V - Backend (UNIAJC).

## Integrantes del grupo

| Nombre | Usuario de GitHub | Rol |
|---|---|---|
| Juan Esteban Aguilar | [@JuanAguilar0129](https://github.com/JuanAguilar0129) | Backend |
| Juan (Cali) | [@JuanEstudiante-Cali](https://github.com/JuanEstudiante-Cali) | Backend |

## Requisitos

- Node.js 20 o superior
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

El servidor queda en `http://localhost:3000` (configurable con `PORT`). Para comprobarlo abre `http://localhost:3000/health`.

## Endpoints

| Metodo | Ruta | Descripcion | Exito | Errores |
|---|---|---|---|---|
| GET | `/health` | Estado del servidor | 200 | - |
| GET | `/courses` | Listar clases | 200 | - |
| GET | `/courses/:id` | Obtener una clase | 200 | 404 |
| POST | `/courses` | Crear clase (`title`, `instructor`, `schedule`, `capacity`) | 201 | 400 |
| PUT | `/courses/:id` | Actualizar clase | 200 | 404 |
| DELETE | `/courses/:id` | Eliminar clase | 204 | 404 |
| GET | `/instructors` | Listar instructores | 200 | - |
| GET | `/instructors/:id` | Obtener un instructor | 200 | 404 |
| POST | `/instructors` | Crear instructor (`name`, `email`) | 201 | 400 |
| PUT | `/instructors/:id` | Actualizar instructor | 200 | 404 |
| DELETE | `/instructors/:id` | Eliminar instructor | 204 | 404 |
| GET | `/memberships` | Listar membresias | 200 | - |
| GET | `/memberships/:id` | Obtener una membresia | 200 | 404 |

Los datos de clases e instructores viven en memoria: se reinician al reiniciar el servidor.

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
|-- data/gimnasio.json
|-- docs/
|   |-- contratos/
|   `-- postman/Gimnasio.postman_collection.json
`-- src/
    |-- index.ts
    |-- data/         datos semilla en memoria
    |-- services/     logica de negocio
    |-- controllers/  traduccion HTTP
    `-- routes/       verbo + ruta -> controller
```

## Postman

Importa `docs/postman/Gimnasio.postman_collection.json` (variable `baseUrl = http://localhost:3000`).

## Flujo de trabajo

1. Crear una rama `feature/<nombre>` desde `main` actualizado.
2. Hacer commits pequenos y descriptivos.
3. Abrir un Pull Request hacia `main`.
4. Un companero revisa y aprueba antes de mergear.
