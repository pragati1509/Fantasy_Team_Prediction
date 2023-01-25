const express = require("express");

const app = express();

app.get("/",function(req,res){
    res.send("Hey, Hii");
})
// app.set('port', process.env.PORT || 3000);

// var server = app.listen(app.get('port'), function() {
//   console.log("successfully started the server");
// });

app.listen(process.env.PORT || 3000,function(err,res){
    if(err) 
       throw err;

    console.log("successfully started the server");
})