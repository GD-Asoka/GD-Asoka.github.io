$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

function showOverlay(img) {
  var overlay = document.getElementById("overlay");
  var overlayImg = document.getElementById("overlay-img");
  overlayImg.src = img.src;
  overlay.style.display = "flex";
}

function hideOverlay() {
  var overlay = document.getElementById("overlay");
  overlay.style.display = "none";
}

document.addEventListener('DOMContentLoaded', function () {
  const images = document.querySelectorAll('.zoomable-image');
  const overlay = document.getElementById('overlay');

  images.forEach(image => {
    image.addEventListener('click', function () {
      overlay.style.display = 'flex';
      const zoomedImage = document.createElement('img');
      zoomedImage.src = image.src;
      overlay.appendChild(zoomedImage);
    });
  });

  overlay.addEventListener('click', function () {
    overlay.style.display = 'none';
    overlay.innerHTML = '';
  });
});