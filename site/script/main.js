// Constants.
// Post DOM-construction actions.

document.addEventListener('DOMContentLoaded', () => {
  console.log('`DOMContentLoaded` fired.');
});

// Only show the first N feed items.
const FEED_LIMIT = 5;

// Async initialization.
(async () => {
  ReactDOM.render(
    <Slideshow/>,
    document.getElementById('slideshowAnchor')
  );

  const feedData = await (await fetch('script/feedData.json')).json();

  ReactDOM.render(
    <Feed feedItems={feedData.slice(0, FEED_LIMIT)} />,
    document.getElementById('feedAnchor')
  );
})();
