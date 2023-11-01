import express from "express";

const app = express();
const port = 3000;


app.get("/",(req,res)=>{
res.send("Alkan consulting index page 2 ")
})


app.listen(port,()=>{
    console.log(`application  running port: ${port}`)
});

