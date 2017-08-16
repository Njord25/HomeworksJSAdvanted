(function () {
	var canvas = document.getElementById('canvas');
	ctx = canvas.getContext("2d");
	width = canvas.width;
	height = canvas.height;
	vx1 = -3 + Math.random() * 6;
	vy1 = -3 + Math.random() * 6;
	vx2 = -5 + Math.random() * 6;
	vy2 = -5 + Math.random() * 6;
	maxRadius = 30;

	rect_1 = {
		radius: 10 + Math.random() * maxRadius,
		x: 40 + Math.random() * (width - (2 * maxRadius)),
		y: 40 + Math.random() * (height - (2 * maxRadius)),
		x: 40 + Math.random() * (width - (2 * maxRadius)),
		y: 40 + Math.random() * (height - (2 * maxRadius)),
		width: 50,
		height: 50
	};

	rect_2 = {
		radius: 10 + Math.random() * maxRadius,
		x: 40 + Math.random() * (width - (2 * maxRadius)),
		y: 40 + Math.random() * (height - (2 * maxRadius)),
		x: 40 + Math.random() * (height - (2 * maxRadius)),
		y: 40 + Math.random() * (height - (2 * maxRadius)),
		width: 100,
		height: 100
	};

	function drawRect() {

	// Red rectangle
	ctx.beginPath();
	ctx.fillStyle = "#C20000";
	ctx.fillRect(rect_1.x, rect_1.y, rect_1.width, rect_1.height);
	ctx.stroke();

	// Green rectangle
	ctx.beginPath();
	ctx.fillStyle = "#00FF90";
	ctx.fillRect(rect_2.x, rect_2.y, rect_2.width, rect_2.height);
	ctx.stroke();
	}

	function draw () {
		ctx.clearRect(0, 0, width, height);
		drawRect();

		if(utils.rectIntersect(rect_1, rect_2)) {
			var va = vx1;
			vx1 = vx2;
			vx2 = va;
			va = vy1;
			vy1 = vy2;
			vy2 = va;
		} else {

			if(rect_1.x + vx1 > canvas.width - rect_1.width
				|| rect_1.x + vx1 < 0) {
				vx1 = -vx1;
			}

			if(rect_1.y + vy1 > canvas.height - rect_1.height
				|| rect_1.y + vy1 < 0 ) {
				vy1 = -vy1;
			}

			if(rect_2.x + vx2 > canvas.width - rect_2.width
				|| rect_2.x + vx2 < 0) {
				vx2 = -vx2;
			}

			if(rect_2.y + vy2 > canvas.height - rect_2.height
				|| rect_2.y + vy2 < 0 ) {
				vy2 = -vy2;
			}
		}

		rect_1.x += vx1;
	    rect_1.y += vy1;

	    rect_2.x += vx2;
	    rect_2.y += vy2;
	}

	setInterval(draw, 10);

})();
