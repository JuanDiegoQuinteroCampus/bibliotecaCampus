import mysql from "mysql2";
import { Router } from "express";

const storageLibrosEscritos = Router();
let con = undefined;

storageLibrosEscritos.use((req, res, next) => {
  let myConfig = JSON.parse(process.env.MY_CONNECT);
  con = mysql.createPool(myConfig);
  next();
});

storageLibrosEscritos.get("/escritos", (req, res) => {
  con.query(
    `SELECT l.id_libro, l.titulo, a.nombre
        FROM libro l
        INNER JOIN autor a
        ON l.id_libro = a.id_autor WHERE a.nombre = 'Gabriel'
        `,
    (err, data, fil) => {
      res.send(JSON.stringify(data));
    }
  );
});

export default storageLibrosEscritos;
