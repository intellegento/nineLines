const init = () => {
	const block = document.querySelectorAll(".block");
	window.addEventListener("load", function () {
		block.forEach((item) => {
			let numElement = item.querySelector(".num");
			let num = parseInt(100);
			let count = 0;
			let time = 2000 / num;
			let circle = item.querySelector(".circle");
			setInterval(() => {
				if (count == num) {
					clearInterval();
				} else {
					count += 1;
					numElement.innerText = count;
				}
			}, time);
			circle.style.strokeDashoffset = 189 - 189 * (num / 100);
			let dots = item.querySelector(".dots");
			dots.style.transform = `rotate(${360 * (num / 100)}deg)`;
			if (num == 100) {
				dots.style.opacity = 0;
			}
		});
	});
};

const destroy = () => {
	helpers.$window.off(".backTop");
	helpers.$document.off(".backTop");
};

export default {
	init,
	destroy,
};
