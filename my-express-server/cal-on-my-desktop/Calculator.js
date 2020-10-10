const express       = require('express');
const app           = express();
const bodyParser    = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});


app.post("/", function(req, res){
    var num1 = Number(req.body.n1);
    var num2 = Number(req.body.n2);
    
    var s = num1 + num2

    console.log(req.body);
    res.send("OK! You sum is " + s);
});

app.get("/bmiCalculator", function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});


app.post("/bmiCalculator", function(req, res){
    var wt = parseFloat(req.body.w);
    var ht = parseFloat(req.body.h);
    console.log(req.body);
    var s = (wt/(ht*ht)) * 703
    parseFloat(s);
    
    res.send("OK! You sum is " + s);
});

app.listen(3000, function(){
    console.log("go");
});
