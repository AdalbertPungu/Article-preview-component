document.addEventListener("DOMContentLoaded", function() {
  const shareButton = document.getElementById('shareButton');
  const socialView = document.getElementById('socialView');

  shareButton.addEventListener('click', function() {
    socialView.classList.toggle('article__contact-box-hidden');
    socialView.classList.toggle('article__contact-box-visible');
  });
});
