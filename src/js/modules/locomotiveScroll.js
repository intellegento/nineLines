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
			const progressPath = document.querySelector(".progressBlock svg circle");
			const pathLength = progressPath.getTotalLength();
      		const numElement = document.querySelector(".num");
	  		const upArrow = document.querySelector(".up-arrow");
			progressPath.style.transition =
			progressPath.style.WebkitTransition = "none";
			progressPath.style.strokeDasharray = pathLength + " " + pathLength;
			progressPath.style.strokeDashoffset = pathLength;
			progressPath.getBoundingClientRect();
			progressPath.style.transition =
				progressPath.style.WebkitTransition =
					"stroke-dashoffset 10ms linear";

			scroller.on("scroll", ({ limit, scroll }) => {
				const progress = pathLength - (scroll.y / limit.y) * pathLength;
        		const numProgress = (((scroll.y / limit.y)) * 100).toFixed(0);
				if (numProgress >= 100) {
					numElement.style.display = "none";
					upArrow.style.display = "block";
				  } else {
					numElement.style.display = "block";
					upArrow.style.display = "none";
				  }
				progressPath.style.strokeDashoffset = `${progress}`;
        		numElement.innerText = `${numProgress}`;
			});
			upArrow.addEventListener("click", () => {
				console.log("click")
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
