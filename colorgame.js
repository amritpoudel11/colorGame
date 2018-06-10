var numSquares= 6;
var colors= [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay= document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton= document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");


inIt();

function inIt(){
	for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click",function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		if(this.textContent === "Easy"){
			numSquares = 3;
		
		}
		else {
			numSquares = 6;
		}

//the above code can be written as- ternary operator
//this.textcontent === "Easy" ? numSquares = 3: numSquares=6;
		reset();
		//how many squares to show
		//pick new colors
		// update page to reflect changes

		});
	}
	for (var i = 0; i < squares.length; i++) {
	//add initial colors to squares
		//add click listeners to squares
	squares[i].addEventListener("click",function(){
		//grab clicked color
		var clickedColor= this.style.backgroundColor;
		// compare grabbed to picked color
		if(clickedColor === pickedColor){
			messageDisplay.textContent= "Correct!";	
			changeColors(clickedColor);
			h1.style.backgroundColor= clickedColor;
			resetButton.textContent = "Play Again?";
		}
		else{
			this.style.backgroundColor= "#232323";
			messageDisplay.textContent= "Try Again";
		}
		});
	}
	reset();
}


function reset(){
	colors = generateRandomColors(numSquares);
	//pick a new random color from the array
	pickedColor =pickColor();
	//change colordisplay to match the picked color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent= "New Colors";
	messageDisplay.textContent= "";
	//change colors of squares
	for (var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.display ="block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display ="none";
		}
		
	}
	h1.style.backgroundColor = "steelblue";
}
// var easyBtn= document.querySelector("#easyBtn");
// var hardBtn= document.querySelector("#hardBtn");

// easyBtn.addEventListener("click",function(){
// 	easyBtn.classList.add("selected");
// 	hardBtn.classList.remove("selected");
// 	numSquares= 3;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent=pickedColor;
// 	for (var i = 0; i < squares.length; i++) {
// 		if(colors[i]){
// 			squares[i].style.backgroundColor= colors[i];
// 		}
// 		else{
// 			squares[i].style.display= "none";
// 		}
// 	};
// });
// hardBtn.addEventListener("click",function(){
// 	hardBtn.classList.add("selected");
// 	easyBtn.classList.remove("selected");
// 	numSquares = 6;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent=pickedColor;
// 	for (var i = 0; i < squares.length; i++) {
// 		squares[i].style.backgroundColor= colors[i];
// 		squares[i].style.display= "block";
// 	};
// });

resetButton.addEventListener("click",function(){
	reset();
	/*//generate all new Colors
	colors = generateRandomColors(numSquares);
	//pick a new random color from the array
	pickedColor =pickColor();
	//change colordisplay to match the picked color
	colorDisplay.textContent = pickedColor;
	this.textContent= "New Colors";
	messageDisplay.textContent= "";
	//change colors of squares
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
	};
	h1.style.backgroundColor = "steelblue";*/
});
colorDisplay.textContent = pickedColor;




function changeColors(color){
	//loop through all squares
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor=color;
	};
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}
function generateRandomColors(num){
	//make an array
	var arr = [];
	// add num random colors to array
	for (var i = 0; i < num; i++) {
		//get random color and push into arr
		arr.push(randomColor());
	};
	//return that array
	return arr;
}

function randomColor(){
	//pick a red from 0 to 255
	var red = Math.floor(Math.random() * 256);
	// pick green from 0 to 255
	var green = Math.floor(Math.random() * 256);
	//pick a blue from 0 to 255
	var blue= Math.floor(Math.random() * 256);
	"rgb(red, green, blue)"
	return "rgb(" + red + ", " + green + ", " + blue +")";
}





