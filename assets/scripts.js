$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

document.addEventListener('DOMContentLoaded', function () {
  const image = document.getElementById('zoomable-image');
  const overlay = document.getElementById('overlay');

  image.addEventListener('click', function () {
    overlay.style.display = 'flex';
    const zoomedImage = document.createElement('img');
    zoomedImage.src = image.src;
    overlay.appendChild(zoomedImage);
  });

  overlay.addEventListener('click', function () {
    overlay.style.display = 'none';
    overlay.innerHTML = '';
  });
});