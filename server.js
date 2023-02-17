const express= require('express');

const app=express();

app.get('/', (req,res)=>{
    res.send("Express app");
})
app.listen(3001,()=>{
    console.log("express server is running at 3001");
}) 