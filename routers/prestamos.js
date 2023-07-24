import mysql from "mysql2";
import { Router } from "express";

const storagePrestamos = Router();
let con = undefined;

storagePrestamos.use((req, res, next) => {
  let myConfig = JSON.parse(process.env.MY_CONNECT);
  con = mysql.createPool(myConfig);
  next();
});

storagePrestamos.get("/fechas", (req, res) => {
  con.query(
    `SELECT fecha_prestamo, fecha_devolucion, estado FROM prestamo`,
    (err, data, fil) => {
      res.send(JSON.stringify(data));
    }
  );
});

export default storagePrestamos;
