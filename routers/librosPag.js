import mysql from "mysql2";
import { Router } from "express";

const storageLibrosPag = Router();
let con = undefined;

storageLibrosPag.use((req, res, next) => {
  let myConfig = JSON.parse(process.env.MY_CONNECT);
  con = mysql.createPool(myConfig);
  next();
});

storageLibrosPag.get("/pag", (req, res) => {
  con.query(
    `SELECT l.id_libro, l.titulo, a.nombre, l.num_paginas WHERE l.num_paginas >= 500
        FROM libro l
        INNER JOIN autor a
        ON l.id_libro = a.id_autor,
        
        ON l.id_libro = l.num_paginas WHERE l.num_paginas >= '500'
        `,
    (err, data, fil) => {
      res.send(JSON.stringify(data));
    }
  );
});

export default storageLibrosPag;
