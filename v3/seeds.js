var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    { 
        name: "Magnolia",
        image: "https://farm5.staticflickr.com/4137/4812576807_8ba9255f38.jpg",
        description: "Kuch Kuch Kuch Kuch Kuch Kuch To Bhi."
    },    
    { 
        name: "Alvazre",
        image: "https://pixabay.com/get/e83db7082af3043ed1584d05fb1d4e97e07ee3d21cac104490f1c77ca0e4b3bb_340.jpg",
        description: "Kuch Kuch Kuch Kuch Kuch Kuch To Bhi."
    },
    { 
        name: "GuildHAll",
        image: "https://pixabay.com/get/e03db50f2af41c22d2524518b7444795ea76e5d004b0144494f6c47eaeebb6_340.jpg",
        description: "Kuch Kuch Kuch Kuch Kuch Kuch To Bhi."
    }
]

function seedDB(){
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("Campground Removed");
        data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
                if(err){
                    console.log(err);
                } else {
                    console.log("Campgroud Added");
                    Comment.create(
                        {
                            text: "DeprecationWarning: collection.remove is deprecated. Use deleteOne, deleteMany, or bulkWrite instead.",
                            author: "System"
                        }, function(err, comment){
                            if(err){
                                console.log(err);
                            } else{
                                campground.comments.push(comment);
                                campground.save();
                                console.log("New Comment Added.");
                            }
                        }
                    )
                }
            });
        });
    });
}

module.exports = seedDB;