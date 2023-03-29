import LocomotiveScroll from "locomotive-scroll";
const scroller = new LocomotiveScroll({
	el: document.querySelector("[data-scroll-container]"),
	smooth: true,
	tablet: {
		smooth: true,
	},
	smartphone: {
		smooth: true,
	},
});

const init = () => {
	(function ($) {
		$(document).ready(function () {
			var progressPath = document.querySelector(".progressBlock svg circle");
			var pathLength = progressPath.getTotalLength();
      var numElement = document.querySelector(".num");
			progressPath.style.transition =
			progressPath.style.WebkitTransition = "none";
			progressPath.style.strokeDasharray = pathLength + " " + pathLength;
			progressPath.style.strokeDashoffset = pathLength;
			progressPath.getBoundingClientRect();
			progressPath.style.transition =
				progressPath.style.WebkitTransition =
					"stroke-dashoffset 10ms linear";


			scroller.on("scroll", ({ limit, scroll }) => {
				const progress = pathLength - (scroll.y / limit.y) * 94;
        const numProgress = (((scroll.y / limit.y)) * 100).toFixed(0);
				progressPath.style.strokeDashoffset = `${progress}`;
        numElement.innerText = `${numProgress}`;
			});
		});
	})(jQuery);
};

const destroy = () => {
	$(".progress-wrap").off("click");
	$(window).off("scroll", updateProgress);
};

export default {
	init,
	destroy,
};
