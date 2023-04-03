import html2canvas from 'html2canvas';

function init() {
 // Для кнопки LinkedIn
    document.getElementById('linkedin-share').addEventListener('click', function() {
        console.log("cclick linkedin")
        html2canvas(document.body).then(function(canvas) {
            const base64Url = canvas.toDataURL('image/png');
            const linkedinShareUrl = 'https://www.linkedin.com/sharing/share-offsite/?url=' + encodeURIComponent(window.location.href) + '&media=' + encodeURIComponent(base64Url);
            window.open(linkedinShareUrl, '_blank');
        });
  });
  
  // Для кнопки Telegram
    document.getElementById('telegram-share').addEventListener('click', function() {
        console.log("click telegram")
        html2canvas(document.getElementById('hello'),{scale:0.4}).then(function(canvas, scale="0.4") {
        const base64Url = canvas.toDataURL('image/jpg');
        const telegramShareUrl = 'https://t.me/share/url?url=' + encodeURIComponent(window.location.href) + '&photo=' + encodeURIComponent(base64Url);
        window.open(telegramShareUrl, '_blank');
        });
  });
  
  // Для кнопки Facebook
    document.getElementById('facebook-share').addEventListener('click', function() {
        html2canvas(document.body).then(function(canvas) {
            console.log("click facebook")
        const base64Url = canvas.toDataURL('image/png');
        const facebookShareUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(window.location.href) + '&picture=' + encodeURIComponent(base64Url);
        window.open(facebookShareUrl, '_blank');
        });
  });
  
}

export default {
	init
};