const mongoose=require('mongoose');
const Schema=mongoose.Schema
const userSchema= new mongoose.Schema({
    //here names of all fields will be same as html file's name tag 3
    username:{
        type:'String',
        required: true,
        lowercase:true, //converts all usernames to lowercase before sending to db 4
        unique:true //username should be unique 5
    },
    email:{
        type:'String',
        required: true,
        unique:true

    },
    password:{
        type:'String',
        required: true
    }
})


const userCollection=new mongoose.model('userCollection',userSchema);

module.exports=userCollection;