import mysql from "mysql2";
import { Router } from "express";


const storageEstadoL = Router();
let con = undefined;

storageEstadoL.use((req, res, next) =>{
    let myConfig = JSON.parse(process.env.MY_CONNECT)
    con = mysql.createPool(myConfig);
    next();
});

storageEstadoL.get('/libro', (req, res)=>{
    con.query(
        `SELECT * FROM estado_libro`,
        (err,data,fil) => {
            res.send(JSON.stringify(data));
        }
    )
});



export default storageEstadoL;