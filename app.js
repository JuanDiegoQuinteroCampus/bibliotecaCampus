import dotenv from 'dotenv';
import express from 'express';

import storageAutoNaci from './routers/autoresNaci.js';
import storageCategorias from './routers/categorias.js';
import storageEditoriales from './routers/editoriales.js';
import storageEstadoL from './routers/estadoLibro.js';
import storageLibros from './routers/libros.js';
import storagePrestamos from './routers/prestamos.js';
import storageReservas from './routers/reservas.js';
import storageLibroDisponible from './routers/librosDisponibles.js';
import storageLibroDPrestado from './routers/librosPrestados.js';
import storageUsuarios from './routers/usuarios.js';
import storageLibrosEscritos from './routers/librosEscritos.js';
import storageLibrosCategoria from './routers/libroCategoria.js';

dotenv.config();
const appExpress = express();

appExpress.use(express.json());
appExpress.use("/autores", storageAutoNaci);
appExpress.use("/categorias", storageCategorias);
appExpress.use("/editoriales", storageEditoriales);
appExpress.use("/estado", storageEstadoL);
appExpress.use("/libros", storageLibros);
appExpress.use("/prestamos", storagePrestamos);
appExpress.use("/reservas", storageReservas);
appExpress.use("/libros", storageLibroDisponible);
appExpress.use("/libros", storageLibroDPrestado);
appExpress.use("/usuarios", storageUsuarios);
appExpress.use("/libros", storageLibrosEscritos);
appExpress.use("/libros", storageLibrosCategoria);

const config = JSON.parse(process.env.MY_CONFIG);
appExpress.listen(config, ()=>{console.log(`http://${config.hostname}:${config.port}`);});