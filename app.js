import dotenv from 'dotenv';
import express from 'express';

import storageAutoNaci from './routers/autoresNaci.js';
import storageCategorias from './routers/categorias.js';
import storageEditoriales from './routers/editoriales.js';



dotenv.config();
const appExpress = express();

appExpress.use(express.json());
appExpress.use("/autores", storageAutoNaci);
appExpress.use("/categorias", storageCategorias);
appExpress.use("/editoriales", storageEditoriales);


const config = JSON.parse(process.env.MY_CONFIG);
appExpress.listen(config, ()=>{console.log(`http://${config.hostname}:${config.port}`);});