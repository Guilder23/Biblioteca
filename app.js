// 1. Importar la librería Express
const express = require('express');

// 2. Crear una instancia de una aplicación Express
const app = express();

// 3. Definir el puerto donde se ejecutará el servidor
const port = 3000;

// 4. Definir una ruta básica
// Cuando alguien visita la URL principal ('/') con el método GET,
// esta función se ejecuta.
app.get('/', (req, res) => {
  // Enviamos una respuesta de texto al cliente
  res.send('¡Hola Mundo desde Express!');
});

// 5. Poner el servidor a "escuchar" en el puerto especificado
app.listen(port, () => {
  // Esta función de callback se ejecuta cuando el servidor inicia correctamente
  console.log(`Servidor ejecutándose en: http://localhost:${port}`);
});