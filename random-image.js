const images = [
  'images/698d7c5fe078b.jpg',
  'images/698d7c66b3b04.jpg',
  'images/698d7c71360c1.jpg',
  'images/698d7c7ae8ae7.jpg',
  'images/698d7c89a8a83.image.png',
  'images/698d7c9001999.jpg',
  'images/698d7c9c81ee5.jpg',
  'images/698d7cba1bdc7.jpg',
  'images/698d7cca90d08.jpg',
  'images/698d7cff268a5.jpg',
  'images/com.apple.Foundation.NSItemProvider.w3pBK3.jpg',
  'images/IMG_3993.JPG'
];

const selectedImage = images[Math.floor(Math.random() * images.length)];

document.querySelector('.pz').src = selectedImage;
