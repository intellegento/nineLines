import LocomotiveScroll from "locomotive-scroll";


const init = () => {
	new LocomotiveScroll({
        el: document.querySelector("[data-scroll-container]"),
        smooth: true
      });
};


export default {
	init
};