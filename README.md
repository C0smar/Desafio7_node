# Prueba - Cafetería Nanacao

Este proyecto es una prueba técnica que consiste en desarrollar tests unitarios para una API REST utilizando JEST y el paquete `supertest`. La API simula un sistema de administración para una cafetería llamada "Cafetería Nanacao".

## Descripción

La Cafetería Nanacao está abriendo una nueva sucursal en el centro de la ciudad después de tener un gran éxito en su local principal. Para asegurar que el sistema de administración funcione correctamente, se han desarrollado tests para comprobar que todas las funcionalidades de la API REST funcionen como se espera.

## Requerimientos

1. **Testear la ruta GET /cafes**: Debe devolver un status code 200 y el tipo de dato recibido debe ser un arreglo con por lo menos 1 objeto. (3 Puntos)
2. **Comprobar que se obtiene un código 404 al intentar eliminar un café con un id que no existe**. (2 Puntos)
3. **Probar que la ruta POST /cafes agrega un nuevo café y devuelve un código 201**. (2 Puntos)
4. **Probar que la ruta PUT /cafes devuelve un status code 400 si intentas actualizar un café enviando un id en los parámetros que sea diferente al id dentro del payload**. (3 Puntos)

## Estructura del Proyecto

- **index.js**: Punto de entrada del servidor.
- **controller.js**: Contiene la lógica de negocio para manejar las solicitudes a la API.
- **routes.js**: Define las rutas de la API y las asocia con los controladores correspondientes.
- **server.js**: Configura el servidor Express y define el middleware.
- **tests/**: Directorio que contiene los tests unitarios.

## Configuración

1. **Clonar el repositorio**:

   git clone https://github.com/tu-usuario/cafeteria-nanacao.git
   cd cafeteria-nanacao

2.Instalar dependencias:

en consola:

npm install

3. Ejecutar el servidor:

en consola:

npm start

El servidor estará disponible en http://localhost:3000.

Ejecución de Tests

Para ejecutar los tests, utiliza el siguiente comando:

npm test

Pruebas con Thunder Client

Para probar la API, sigue estos pasos:

Abre VS Code y asegúrate de tener instalada la extensión Thunder Client.

Importa la colección de pruebas desde el archivo thunder-tests/cafeteria-nanacao.json.

Ejecuta las pruebas desde la interfaz de Thunder Client.
