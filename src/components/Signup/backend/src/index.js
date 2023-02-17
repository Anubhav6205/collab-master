const express =require("express");
const bodyParser = require("body-parser");
const cors=require("cors");
const port=8000;
const app=express();
const userSchema=require('./database/userSchema')
const { body, validationResult } = require('express-validator');
require('./database/connection');
app.use(bodyParser.json());
app.use(cors());



app.post('/signup',[
  body('username').not().isEmpty().withMessage('Username is required'),
  body('username').isLength({min:4 }).withMessage('Password must be at least 4 characters'),
  body('email').not().isEmpty().withMessage('Email is required').isEmail().withMessage('Invalid email'),
  body('password').not().isEmpty().withMessage('Password is required'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters.'),
], async(req,res)=>{
    try{
        const errors=validationResult(req);
        if(!errors.isEmpty())
        {
            return res.status(400).json({error:errors.array() });
        }
    const {username,email,password}=req.body;
    const checkUsername=await userSchema.findOne({username:req.body.username});
    const checkEmail=await userSchema.findOne({email:req.body.email});
    if(checkUsername)
    {
        return res.status(400).json([{error:"Username already exists ",solution:"Please try with another one"}]); //value of error set to username alreayd exists 
    }
    if(checkEmail)
    {
        return res.status(400).json([{error:"Email already exists ",solution:"Please try with another one"}]); //value of error set to username alreayd exists 
    }

    console.log(username,email,password);
    const userData=new userSchema(req.body);
    userData.save();
    res.send("Data submitted successfully");
    }
    catch(error)
    {
        console.log(error);
    }
});

app.listen(port,()=>{
    console.log(`Listening on port ${port}`)
}
)
