'use strict';

const Feed = (props) => props.feedItems.map(x => 
  <FeedItem 
    feedDate={x.date} 
    feedMessage={x.message} 
    feedList={x.list} 
  />
);

const FeedItem = (props) => {
  // TODO: Only render 3
  // TODO: Hey is "key" working?
  return (
    <div class="card">
      <div class="card-header">{props.feedDate}</div>
      <div class="card-body">
        <p class="card-text">
          {props.feedMessage}
          <ul>
            {props.feedList ? 
              props.feedList.map((x, idx) => 
                <li key={idx}>{x}</li>
              ) : null
            }
          </ul>
        </p>
      </div>
    </div>
  );
}
