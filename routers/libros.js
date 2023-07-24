import mysql from "mysql2";
import { Router } from "express";

const storageLibros = Router();
let con = undefined;

storageLibros.use((req, res, next) => {
  let myConfig = JSON.parse(process.env.MY_CONNECT);
  con = mysql.createPool(myConfig);
  next();
});

storageLibros.get("/caracteristicas", (req, res) => {
  con.query(
    `SELECT l.id_libro, 
        l.titulo, 
        e.nombre,
        a.nombre
 FROM libro l
      INNER JOIN editorial e 
 ON l.id_libro = e.id_editorial
 INNER JOIN autor a
      ON l.id_libro = a.id_autor
      `,
    (err, data, fil) => {
      res.send(JSON.stringify(data));
    }
  );
});

export default storageLibros;
