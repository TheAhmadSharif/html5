var canvas = document.getElementById('getCanvas');
var context = canvas.getContext("2d");
context.fillStyle = "blueviolet";

var canvasWidth = canvas.width;
var canvasHeight = canvas.height;

var playAnimation = true;
var startBtn = document.getElementById('startBtn');
var stopBtn = document.getElementById('pauseBtn');

var Shape = function (x,y, width, height) {
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
};

var shapes = new Array();

for (var i = 0; i < 80; i ++) {
	var x = Math.floor(Math.random() * 300);
	var y = Math.floor(Math.random() * 300);
	var width = height = Math.floor(Math.random() * 10);
	shapes.push(new Shape(x,y,width, height));
}

function animate() {
	context.clearRect(0,0, canvasWidth, canvasHeight);
	var shapesLength = shapes.length;

	for(var i = 0; i < shapesLength; i++) {
		var tmpShape = shapes[i];
		tmpShape.x = tmpShape.x + Math.random() * 4 - 2;

		if (tmpShape.x == 150 ) {
			tmpShape.x = 0;
		}
		context.fillRect(tmpShape.x, tmpShape.y, tmpShape.width, tmpShape.height);
	}
	if (playAnimation) {
		setTimeout(animate, 40);
	}	
};

stopBtn.style.display = 'none';
startBtn.addEventListener("click", function () {
startBtn.style.display = 'none';
stopBtn.style.display = 'block';

	playAnimation = true;
	animate();
});

animate();

stopBtn.addEventListener("click", function () {
stopBtn.style.display = 'none';
startBtn.style.display = 'block';
playAnimation = false;
});