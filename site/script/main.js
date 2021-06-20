const onDomLoad = () => {
  console.log('DOMContentLoaded fired.');

  // Activate media carousel.
  const carouselAnchor = document.querySelector('.carousel');
  const carousel = new bootstrap.Carousel(carouselAnchor);
};

document.addEventListener('DOMContentLoaded', onDomLoad);

// Only show the first N feed items.
const FEED_LIMIT = 5;

(async () => {
  const feedData = await (await fetch('script/feedData.json')).json();

  ReactDOM.render(
    <Feed feedItems={feedData.slice(0, FEED_LIMIT)} />,
    document.getElementById('feedAnchor')
  );
})();
