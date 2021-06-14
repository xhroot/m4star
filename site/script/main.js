console.log('mainjs start.');

var onDocLoad = () => {
  console.log('onLoad');

  // Activate media carousel.
  $('.carousel').carousel()
};

$(onDocLoad);
