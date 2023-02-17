const express =require("express");
const cors=require("cors");
const port=8000;
const app=express();
require('./database/connection');
app.use(cors());


app.post('/login',async(req,res)=>{
    try{
        const {username,password}=req.body;
        console.log(username,password);

    }
    catch(error)
    {
        console.log(error)
    }
})

app.get('/login',(req,res)=>{
    res.send("sfsdf");
})

app.listen(port,()=>{
    console.log(`Listening on port ${port}`)
}
)
