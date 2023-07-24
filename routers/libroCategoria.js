import mysql from "mysql2";
import { Router } from "express";

const storageLibrosCategoria = Router();
let con = undefined;

storageLibrosCategoria.use((req, res, next) => {
  let myConfig = JSON.parse(process.env.MY_CONNECT);
  con = mysql.createPool(myConfig);
  next();
});

storageLibrosCategoria.get("/categoria", (req, res) => {
  con.query(
    `SELECT l.id_libro, l.titulo, c.nombre
        FROM libro l
        INNER JOIN categoria c
        ON l.id_libro = c.id_categoria WHERE c.nombre = 'Novela'
        `,
    (err, data, fil) => {
      res.send(JSON.stringify(data));
    }
  );
});

export default storageLibrosCategoria;
