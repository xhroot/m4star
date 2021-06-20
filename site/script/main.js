// Only show the first N feed items.
const FEED_LIMIT = 5;

// Post DOM-construction actions.
document.addEventListener('DOMContentLoaded', () => {
  console.log('`DOMContentLoaded` fired.');
  // Placeholder so I don't have to think about it later.
});

// Haha, this is overkill for 3 static elements, but I just wanted to see what it looked like.
// Check it out: an inline invocation of a single instance anonymous stateless React component, using
// the CDN React (no separate compile => JIT Babel). Better than Handlebars?
ReactDOM.render(
  new (()=> {
    const guidelines = [{
      "title": "Turn on voice chat",
      "description": "This greatly assists team coordination and generally improves gameplay.  Plus, it's more fun to chat while we slay.",
    },{
      "title": "Clan tag prefix: <code>M4*</code>",
      "description": "Inspire fear in your opponents! Identify with other clan members! Even bots lie down and accept death when they see us approach! Clan tag is optional but encouraged.",
    },{
      "title": "Treat each other kindly",
      "description": "Recognize and respect each other. Celebrate our diversity and unique talents we bring to the game.",
    }];

    return (
      <div class="col">
        <h2>Clan Guidelines</h2>
        <dl>
          {guidelines.map(x => 
            <React.Fragment>
            <dt>
              <i class="bi-check2-circle"></i>
              <span dangerouslySetInnerHTML={{__html: x.title}}/>
            </dt>
            <dd>{x.description}</dd>
            </React.Fragment>
          )}
        </dl>
      </div>
    );
  }),
  document.getElementById('guidelinesAnchor')
);

ReactDOM.render(
  <Slideshow/>,
  document.getElementById('slideshowAnchor')
);

// No top level async yet.  Any async task needs to go in here.
(async () => {

  const feedData = await (await fetch('script/feedData.json')).json();

  ReactDOM.render(
    <Feed feedItems={feedData.slice(0, FEED_LIMIT)} />,
    document.getElementById('feedAnchor')
  );
})();
