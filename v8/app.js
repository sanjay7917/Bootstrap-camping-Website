var express         = require("express");
    app             = express();
    bodyParser      = require("body-parser");
    mongoose        = require("mongoose");
    passport        = require("passport"),
    LocalStrategy   = require("passport-local"),
    Campground      = require("./models/campground.js"),
    Comment         = require("./models/comment"),
    User            = require("./models/user"),
    seedDB          = require("./seeds")

var commentRoute    = require("./routes/comments"),
    campgroundRoute = require("./routes/campgrounds"),
    indexRoute      = require("./routes/index")

mongoose.connect("mongodb://localhost:27017/yelp_camp_v3", {useNewUrlParser: true});
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
// seedDB();

app.use(require("express-session")({
    secret: "Don't TEll Any One.",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    next();
})

// Campground.create({
//     name: "Magnoliya",
//     image: "https://farm4.staticflickr.com/3273/2602356334_20fbb23543.jpg",
//     description: "Home of most powerfull Wizards."
// }, function(err, campground){
//     if(err){
//         console.log(err);
//     } else {
//         console.log("Newly Created Campground.");
//         console.log(campground);
//     }
// });

// var campgrounds = [
//     { name: "Magnolia", image: "https://pixabay.com/get/e136b80728f31c22d2524518b7444795ea76e5d004b0144495f7c671a7e4b3_340.jpg" },
//     { name:  "Levithon", image: "https://pixabay.com/get/e834b5062cf4033ed1584d05fb1d4e97e07ee3d21cac104490f0c67eafedbcbe_340.jpg" },
//     { name: "Magnolia", image: "https://pixabay.com/get/e136b80728f31c22d2524518b7444795ea76e5d004b0144495f7c671a7e4b3_340.jpg" },
//     { name: "Alvarz", image: "https://pixabay.com/get/e83db40e28fd033ed1584d05fb1d4e97e07ee3d21cac104490f0c67eafedbcbe_340.jpg" },
//     { name:  "Levithon", image: "https://pixabay.com/get/e834b5062cf4033ed1584d05fb1d4e97e07ee3d21cac104490f0c67eafedbcbe_340.jpg" },
//     { name: "Magnolia", image: "https://pixabay.com/get/e136b80728f31c22d2524518b7444795ea76e5d004b0144495f7c671a7e4b3_340.jpg" },
//     { name:  "Levithon", image: "https://pixabay.com/get/e834b5062cf4033ed1584d05fb1d4e97e07ee3d21cac104490f0c67eafedbcbe_340.jpg" },
//     { name: "Alvarz", image: "https://pixabay.com/get/e83db40e28fd033ed1584d05fb1d4e97e07ee3d21cac104490f0c67eafedbcbe_340.jpg" }
// ]

app.use("/", indexRoute);
app.use("/campgrounds", campgroundRoute);
app.use(commentRoute);

app.listen(3000, function(){
    console.log("Server Has Started !!");
});