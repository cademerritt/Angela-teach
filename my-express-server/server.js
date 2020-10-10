const express   = require('express');
const app       = express();

app.get("/", function(req, res){
    res.send("<h1>Hello World</h1>")
});

app.get("/about", function(req, res){
    res.send(molly.png)
});
app.get("/hobies", function(req, res){
    res.send(" <h1> ok dogs</h1>")
});

app.listen(3000, function(){
    console.log("host started");
});
