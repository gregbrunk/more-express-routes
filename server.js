// 1. Pick A Color

var express = require('express');
var app = express();

app.get("/pick_a_color/:color", function(req, res){
	var color = req.params.color;
	res.send("You picked: " + color);
});


//2. Which Taco
var burgers = ["Hamburger", "Cheese Burger", "Dble Cheese Burger"];
var tacos = ["Soft Taco", "Crunchy Taco", "Super Taco"];

app.get("/tacos/:index", function(req, res){
	var num = req.params.index;
	for(i=0; i<tacos.length; i++){
		if (num == i){
			res.send(tacos[i]);
		} else if (num > 2){
			res.send("There aren't that many tacos!");
		}
	}
});

app.get("/burgers/:index", function(req, res){
	var num = req.params.index;
	for(i=0; i<burgers.length; i++){
		if (num == i){
			res.send(burgers[i]);
		} else if (num > 2){
			res.send("There aren't that many bugers!");
		}
	}
});


// 3. The Number Guessing Game
app.get("/pickanumber", function (req, res) {
    var number = parseInt(req.query.number);
    var secretNumber = 7;
    if (number === secretNumber) {
        res.send("Nailed It!");
    } else if (number < secretNumber) {
    	res.send("Too Low");
    } else {
    	res.send("Too High");
    }
});

//http://localhost:3000/pickanumber?number=7

app.listen(3000, function() {
	console.log("Go to localhost:3000");
});
