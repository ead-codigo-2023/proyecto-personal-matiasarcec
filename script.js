let currentIndex = 0;

function nextImage() {
 currentIndex++;
 if (currentIndex >= document.querySelectorAll('.carrusel img').length) {
    currentIndex = 0;
 }
 showImage(currentIndex);
}

function showImage(index) {
 let images = document.querySelectorAll('.carrusel img');
 for (let i = 0; i < images.length; i++) {
    images[i].style.display = 'none';
 }
 images[index].style.display = 'block';
}

setInterval(nextImage, 3000);

showImage(currentIndex);