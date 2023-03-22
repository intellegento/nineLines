import LocomotiveScroll from "locomotive-scroll";


const init = () => {
	console.log("scroll to")
	new LocomotiveScroll({
        el: document.querySelector("[data-scroll-container]"),
        smooth: true
      });
      console.log("locomotive")
};

export default {
	init
};