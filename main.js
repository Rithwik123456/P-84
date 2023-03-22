canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

img_width=300;
img_height=100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_tag = new Image();
	img_tag.onload = uploading;
	img_tag.src = img_image;
}

function uploading() {
	ctx.drawImage(img_tag, img_x, img_y, img_width, img_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90)){
		alphabetkey();
		document.getElementById("d1").innerHTML="You Pressed Alphabet Key";
		console.log("alphabet key");
		}
		else{
			otherkey();
			document.getElementById("d1").innerHTML="You pressed symbol or other key";
		}

		if(keyPressed >=48 && keyPressed<=57){
		numberkey();
		document.getElementById("d1").innerHTML="You Pressed Number Key";
		console.log("number key");
	    }

		if(keyPressed >=37 && keyPressed<=40){
		arrowkey();
		document.getElementById("d1").innerHTML="You Pressed Arrow Key";
		console.log("arrow key");
		}

		if(keyPressed >=17 && keyPressed<=18){
		specialkey();
		document.getElementById("d1").innerHTML="You Pressed A Special Key";
		console.log("special key");
		}
}

function alphabetkey()
{
	img_image="Alpkey.png";
	add()
}
function numberkey()
{
	img_image="numkey.png";
	add()
}
function arrowkey()
{
	img_image="Arrkey.png";
	add()
}
function specialkey()
{
	img_image="spkey.png";
	add()
}
	
function otherkey()
{
	img_image="otherkey.png";
	add();
}