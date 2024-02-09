const express=require("express");
const dbs=require("./config/db");

const app=express();



app.use(express.json());

dbs();
const port = 8000;

app.use("/main/signup",require("./routes/signup"))

app.use("/main/login",require("./routes/login"))

app.listen(port,()=>{
    console.log("server listening on port");
})