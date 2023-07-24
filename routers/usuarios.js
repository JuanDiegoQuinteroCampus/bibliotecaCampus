import mysql from "mysql2";
import { Router } from "express";

const storageUsuarios = Router();
let con = undefined;

storageUsuarios.use((req, res, next) => {
  let myConfig = JSON.parse(process.env.MY_CONNECT);
  con = mysql.createPool(myConfig);
  next();
});

storageUsuarios.get("/data", (req, res) => {
  con.query(
    `SELECT id_usuario, nombre, email FROM usuario`,
    (err, data, fil) => {
      res.send(JSON.stringify(data));
    }
  );
});

export default storageUsuarios;
