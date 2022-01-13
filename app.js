const express = require("express");
const mysql = require("mysql");
require('dotenv').config()

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:process.env.DATABASE_PASSWORD,
    database:'NodeJS'
});

db.connect((error)=>{
    if(error){
        console.log("Error Connecting!");
    }
    else{
        console.log("Connection Successful!");
    }
});

const PORT = 4000;
const app = express();

app.get('/addtest1',(req,res)=>{
    let post = {title:'Post one',body:'This is first post'};
    let sql='INSERT INTO test SET ?';
    let query = db.query(sql,post,(error,result)=>{
        if(error){
            throw(error);
        }
        else{
            console.log(result);
            res.send('Test1 Created')
        }
    })
})

app.listen('4000',()=>{
    console.log(`Server is at port ${PORT}`)
})
