import html2canvas from 'html2canvas';

function init() {
    function createImage() {
        html2canvas(document.querySelector("#sharing-container")).then(canvas => {
          const imageData = canvas.toDataURL();
          console.log(imageData);
          const shareUrl = `https://example.com/share?image=${encodeURIComponent(imageData)}`;
          window.open(shareUrl, "_blank");
        });
      }
      
      function createLinkedInShare() {
        const sharingContainer = document.querySelector("#sharing-container");
      
        html2canvas(sharingContainer).then(canvas => {
          const imageData = canvas.toDataURL();
          const linkedInShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}&media=${encodeURIComponent(imageData)}&title=My LinkedIn Share`;
          console.log(linkedInShareUrl)
          window.open(linkedInShareUrl, "_blank");
        });
      }
      
      // Находим кнопку и назначаем на нее обработчик клика
      const button = document.querySelector("#share-button-linkedin");
      button.addEventListener("click", createImage);
}

export default {
	init
};