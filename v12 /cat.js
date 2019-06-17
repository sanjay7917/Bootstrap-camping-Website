var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");
var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});
var Cat = mongoose.model("Cat", catSchema);

// var george = new Cat({
//     name: "sanju",
//     age: 7,
//     temperament: "cunt"
// });
// george.save(function(err, cat){
//     if(err){
//         console.log("Somthing Went Wrong.")
//     } else{
//         console.log("New Cat Add To DB.")
//         console.log(cat);
//     }
// });

Cat.create({
    name: "Sad",
    age: 9,
    temperament: "Bland"
},function(err, cat){
    if(err){
        console.log(err);
    } else {
        console.log(cat);
    }
});

Cat.find({}, function(err, cats){
    if(err){
        console.log("Ohh Error Occur");
        console.log(err);
    } else{
        console.log("all The Cat");
        console.log(cats);
    }
});