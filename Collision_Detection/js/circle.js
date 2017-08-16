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

	circle_1 = {
		radius: 10 + Math.random() * maxRadius,
		x: 40 + Math.random() * (width - (2 * maxRadius)),
		y: 40 + Math.random() * (height - (2 * maxRadius)),

	};

	circle_2 = {
		radius: 9 + Math.random() * maxRadius,
		x: 40 + Math.random() * (width - (2 * maxRadius)),
		y: 40 + Math.random() * (height - (2 * maxRadius)),
	};

	function drawCircle() {
		ctx.beginPath();
		ctx.fillStyle = "#41dcf4";
		ctx.arc(circle_1.x, circle_1.y, circle_1.radius, 0, Math.PI * 2, false);
		ctx.fill();
		ctx.closePath();

		ctx.beginPath();
		ctx.fillStyle = "#FF5733";
		ctx.arc(circle_2.x, circle_2.y, circle_2.radius, 0, Math.PI * 2, false);
		ctx.fill();
		ctx.closePath();
	}

	function draw () {
		ctx.clearRect(0, 0, width, height);
		drawCircle();

	    if(utils.circleCollision(circle_1, circle_2)) {
			var va = vx1;
			vx1 = vx2;
			vx2 = va;
			va = vy1;
			vy1 = vy2;
			vy2 = va;
		} else {
			if(circle_1.x + vx1 > canvas.width - circle_1.radius
				|| circle_1.x + vx1 < circle_1.radius) {
			    vx1 = -vx1;
			}
			if(circle_1.y + vy1 > canvas.height - circle_1.radius
				|| circle_1.y + vy1 < circle_1.radius ) {
			    vy1 = -vy1;
			}

			if(circle_2.x + vx2 > canvas.width - circle_2.radius
				|| circle_2.x + vx2 < circle_2.radius) {
			    vx2 = -vx2;
			}

			if(circle_2.y + vy2 > canvas.height - circle_2.radius
				|| circle_2.y + vy2 < circle_2.radius ) {
			    vy2 = -vy2;
			}
		}

		circle_1.x += vx1;
	    circle_1.y += vy1;

	    circle_2.x += vx2;
	    circle_2.y += vy2;
	}

	setInterval(draw, 10);

})();
