import mysql from "mysql2";
import { Router } from "express";


const storageAutoNaci = Router();
let con = undefined;

storageAutoNaci.use((req, res, next) =>{
    let myConfig = JSON.parse(process.env.MY_CONNECT)
    con = mysql.createPool(myConfig);
    next();
});

storageAutoNaci.get('/', (req, res)=>{
    con.query(
        `SELECT * FROM categoria`,
        (err,data,fil) => {
            res.send(JSON.stringify(data));
        }
    )
});



export default storageAutoNaci;