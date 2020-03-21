const express = require("express");
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

//routes 
app.get("/", function(req, res){
//   res.send("it works!");
   res.render("index.html");
});

//routes 
app.get("/mercury", function(req, res){
   //res.send("This will be the Mercury webpage!");
   res.render("mercury.html");
});

//routes 
app.get("/venus", function(req, res){
   res.send("This will be the Venus webpage!");
});

//server listeners 
app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Express Server is running");
});