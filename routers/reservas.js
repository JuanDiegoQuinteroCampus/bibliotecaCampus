import mysql from "mysql2";
import { Router } from "express";

const storageReservas = Router();
let con = undefined;

storageReservas.use((req, res, next) => {
  let myConfig = JSON.parse(process.env.MY_CONNECT);
  con = mysql.createPool(myConfig);
  next();
});

storageReservas.get("/", (req, res) => {
  con.query(
    `SELECT id_reserva, id_libro, fecha_reserva, fecha_reserva_fin, estado FROM reserva`,
    (err, data, fil) => {
      res.send(JSON.stringify(data));
    }
  );
});

export default storageReservas;
