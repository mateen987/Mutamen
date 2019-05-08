const mongoose =require('mongoose');
const validator=require('validator');
const _=require('lodash');
mongoose.connect('mongodb://127.0.0.1:27017/Mutaman',{
useNewUrlParser:true,
useCreateIndex:true

})
const userschema= mongoose.Schema({
    UserName:{
        type:String
    },
    favCarName:{
        type:String
    },
     CarModel:{
         type:String,
     }
})
const User=mongoose.model('user',userschema);
module.exports= {User};
