import express from 'express';

const app=express();
const port=5000;
app.get('/',(req,res)=>{
    res.send("samples!!")
});
app.listen(port,err=>{
    if(err){
        return console.error(err);
    }
    else
    {
        return console.log("Server started on port "+port);
    }
});
