const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
var itemList=[];

app.set("view engine", "ejs");
app.get("/", function(req,res){
    var today = new Date();
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    var day = today.toLocaleDateString("en-US", options);
    res.render("list",{kindOfDay:day, newItems:itemList});
});

app.post("/", function(req,res){
    var listItemName= req.body.newItems;
    itemList.push(listItemName);
    res.redirect("/");
})
app.listen(3000, function(){
    console.log("Server started");
});