var numSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var msgDisplay = document.querySelector("#msg");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#resetButton");
var modeBtns = document.querySelectorAll(".mode");

init();

function init(){
	//mode buttons eventListener
	setUpModeButtons();
	setUpSquares();
	reset();
}

function setUpModeButtons(){
	for(var i=0; i<modeBtns.length; i++){
		modeBtns[i].addEventListener("click", function(){
			modeBtns[0].classList.remove("selected");
			modeBtns[1].classList.remove("selected");
			this.classList.add("selected");	
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();
		});
	}
}

function setUpSquares(){
	for(var i=0; i<squares.length; i++){
		//add click listeners to squares
		squares[i].addEventListener("click", function(){
			//grab color of clicked square
			var clickedColor = this.style.background;

			//compare color to pickedColor
			if(clickedColor === pickedColor){
				msgDisplay.textContent = "Correct";
				changeColor(clickedColor);
				h1.style.background = clickedColor;
				resetButton.textContent = "Play Again?";
			} else {
				this.style.background = "#232323";
				msgDisplay.textContent = "Try Again";
			}
		});
	}
}

//refactoring easyBtn and hardBtn eventListener


function reset(){
	//generate new colors
	colors = generateRandomColor(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;

	resetButton.textContent = "New Colors";
	msgDisplay.textContent = "";

	//change colors of squares
	for(var i=0; i<squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "steelblue";
}

resetButton.addEventListener("click", function(){
	reset();
})

for(var i=0; i<squares.length; i++){
	//add click listeners to squares
	squares[i].addEventListener("click", function(){
		//grab color of clicked square
		var clickedColor = this.style.background;

		//compare color to pickedColor
		if(clickedColor === pickedColor){
			msgDisplay.textContent = "Correct";
			changeColor(clickedColor);
			h1.style.background = clickedColor;
			resetButton.textContent = "Play Again?";
		} else {
			this.style.background = "#232323";
			msgDisplay.textContent = "Try Again";
		}
	});
}

function changeColor(color){
	//loop through all squares
	for(var i=0; i<squares.length; i++){
		//change each color to match given color
		squares[i].style.background = color;
	}
}

function pickColor() {
	var randNum = Math.floor(Math.random() * colors.length);
	return colors[randNum];
}

function generateRandomColor(num){
	var colorArr = [];

	for(var i=0; i<num; i++){
		//get random color and push into array
		colorArr.push(randomColor());
	}

	return colorArr;
}

function randomColor(){
	//pick red (0, 255), green(0, 255), blue(0, 255)
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	//return string: rgb(r, g, b)
	return "rgb(" + r + ", " + g + ", " + b + ")";

}

