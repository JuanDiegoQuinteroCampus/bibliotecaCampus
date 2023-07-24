import mysql from "mysql2";
import { Router } from "express";


const storageEditoriales = Router();
let con = undefined;

storageEditoriales.use((req, res, next) =>{
    let myConfig = JSON.parse(process.env.MY_CONNECT)
    con = mysql.createPool(myConfig);
    next();
});

storageEditoriales.get('/name/dress', (req, res)=>{
    con.query(
        `SELECT nombre, direccion FROM editorial`,
        (err,data,fil) => {
            res.send(JSON.stringify(data));
        }
    )
});



export default storageEditoriales;