const express = require('express');
var app=express();
const bodyparser=require('body-parser');
const _=require('lodash');
var {User}=require('./User');
app.use(bodyparser.json());
app.use(express.json());



app.post('/data',(req,res)=>{
   var body = _.pick(req.body,['UserName','favCarName','CarModel'])
   var user = new User(body);
   user.save().then(()=>{
res.status(200).send(user);

   }).catch((e)=>{
 res.status(400).send;
   })
});
   app.get('/getdata',(req,res)=>{
User.find({}).then((user)=>{
    res.send({user});
}).catch((e)=>{
    res.status(500).send(e);
      
});
})
const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log('app is run on port 3000');
})
