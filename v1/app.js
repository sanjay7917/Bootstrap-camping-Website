var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
    { name: "Magnolia", image: "https://pixabay.com/get/e136b80728f31c22d2524518b7444795ea76e5d004b0144495f7c671a7e4b3_340.jpg" },
    { name:  "Levithon", image: "https://pixabay.com/get/e834b5062cf4033ed1584d05fb1d4e97e07ee3d21cac104490f0c67eafedbcbe_340.jpg" },
    { name: "Magnolia", image: "https://pixabay.com/get/e136b80728f31c22d2524518b7444795ea76e5d004b0144495f7c671a7e4b3_340.jpg" },
    { name: "Alvarz", image: "https://pixabay.com/get/e83db40e28fd033ed1584d05fb1d4e97e07ee3d21cac104490f0c67eafedbcbe_340.jpg" },
    { name:  "Levithon", image: "https://pixabay.com/get/e834b5062cf4033ed1584d05fb1d4e97e07ee3d21cac104490f0c67eafedbcbe_340.jpg" },
    { name: "Magnolia", image: "https://pixabay.com/get/e136b80728f31c22d2524518b7444795ea76e5d004b0144495f7c671a7e4b3_340.jpg" },
    { name:  "Levithon", image: "https://pixabay.com/get/e834b5062cf4033ed1584d05fb1d4e97e07ee3d21cac104490f0c67eafedbcbe_340.jpg" },
    { name: "Alvarz", image: "https://pixabay.com/get/e83db40e28fd033ed1584d05fb1d4e97e07ee3d21cac104490f0c67eafedbcbe_340.jpg" }
]

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", function(req, res){
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image};
    campgrounds.push(newCampground);
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res){
    res.render("new");
});

app.listen(3000, function(){
    console.log("Server Has Started !!");
});