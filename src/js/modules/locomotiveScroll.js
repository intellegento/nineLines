import LocomotiveScroll from "locomotive-scroll";
const scroller = new LocomotiveScroll({
	el: document.querySelector("[data-scroll-container]"),
	smooth: true,
	tablet: {
		smooth: true,
	},
	smartphone: {
		mooth: true,
	},
});

const init = () => {
	(function ($) {
		$(document).ready(function () {
			var progressPath = document.querySelector(".progress-wrap path");
			console.log(progressPath, "progre");
			var pathLength = progressPath.getTotalLength();
			progressPath.style.transition =
			progressPath.style.WebkitTransition = "none";
			console.log(pathLength, "pathLength");
			progressPath.style.strokeDasharray = pathLength + " " + pathLength;
			progressPath.style.strokeDashoffset = pathLength;
			progressPath.getBoundingClientRect();
			progressPath.style.transition =
				progressPath.style.WebkitTransition =
					"stroke-dashoffset 10ms linear";

			scroller.on("scroll", ({ limit, scroll }) => {
				const progress = pathLength - (scroll.y / limit.y) * 308;
				progressPath.style.strokeDashoffset = `${progress}`;
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
