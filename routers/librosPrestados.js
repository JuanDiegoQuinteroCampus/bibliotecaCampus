import mysql from "mysql2";
import { Router } from "express";

const storageLibroDPrestado = Router();
let con = undefined;

storageLibroDPrestado.use((req, res, next) => {
  let myConfig = JSON.parse(process.env.MY_CONNECT);
  con = mysql.createPool(myConfig);
  next();
});

storageLibroDPrestado.get("/prestados", (req, res) => {
  con.query(
    `SELECT l.id_libro, l.titulo, e.nombre, f.fecha_devolucion
        FROM libro l
            INNER JOIN prestamo f
        ON l.id_libro = f.id_prestamo
        INNER JOIN estado_libro e
        ON l.id_libro = e.id_estado WHERE e.nombre = 'Prestado'
        `,
    (err, data, fil) => {
      res.send(JSON.stringify(data));
    }
  );
});

export default storageLibroDPrestado;
