console.log('mainjs start.');

const onDocLoad = () => {
  console.log('onLoad');

  // Activate media carousel.
  const carouselAnchor = document.querySelector('.carousel');
  const carousel = new bootstrap.Carousel(carouselAnchor);
};

document.addEventListener('DOMContentLoaded', onDocLoad);
