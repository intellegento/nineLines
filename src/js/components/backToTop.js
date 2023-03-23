import LocomotiveScroll from "locomotive-scroll";
const scroller = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
    tablet: {
    smooth: true
    },
    smartphone: {
    smooth: true
    }
    });

const init = () => {
    const progressPath = document.querySelector('.progress-wrap svg path');
    console.log(progressPath, "progressPath")
    const pathLength = progressPath.getTotalLength();
    console.log(pathLength, "pathLength")
    progressPath.style.transition = 'none';
    progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = 'stroke-dashoffset 10ms linear';
    
    scroller.on('scroll', (obj) => {
    const progress = pathLength - (obj.scroll.y / obj.limit.y * 308);
    console.log(progress, "progress")
    progressPath.style.strokeDashoffset = `${progress}`;
    
    });   
}

const destroy = () => {
    $('.progress-wrap').off('click');
    $(window).off('scroll', updateProgress);
};

export default {
    init,
    destroy,
};
