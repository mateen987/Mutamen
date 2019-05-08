const mongoose =require('mongoose');
const validator=require('validator');
const _=require('lodash');
mongoose.Promise=global.Promise;
mongoose.connect(process.env.MONGODB_URI,{
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
