const mongoose=require('mongoose');
const mongoURI='mongodb+srv://Collapmp3:collab123@cluster0.owjvkr5.mongodb.net/test';
mongoose.set('strictQuery', true);
mongoose.connect(mongoURI).then(()=>{ // this is connection syntax for mongoose 2 
    console.log("Mongoose connection successful"); //if connection established then print this 3
}).catch((error)=>{
    console.log('Error encountered in mongoose connection'); // if error encountered then print this 4
});