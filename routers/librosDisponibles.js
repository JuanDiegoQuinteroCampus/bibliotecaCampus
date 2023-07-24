import mysql from "mysql2";
import { Router } from "express";

const storageReservas = Router();
let con = undefined;

storageReservas.use((req, res, next) => {
  let myConfig = JSON.parse(process.env.MY_CONNECT);
  con = mysql.createPool(myConfig);
  next();
});

storageReservas.get("/disponibles", (req, res) => {
  con.query(
    `SELECT l.id_libro, l.titulo, e.nombre, a.nombre
        FROM libro l
            INNER JOIN autor a
        ON l.id_libro = a.id_autor
        INNER JOIN estado_libro e
        ON l.id_libro = e.id_estado WHERE e.nombre = 'Disponible'
        `,
    (err, data, fil) => {
      res.send(JSON.stringify(data));
    }
  );
});

export default storageReservas;
