'use strict';

const Slideshow = () => {
  const slides = [
    {
      "title": "Water Royale",
      "caption": "KRED51 leading the clan in swimming exercises",
      "image": "image/shot_swimming.jpg"
    },
    {
      "title": "Winner!",
      "caption": "Another great clutch by beaverSTYLE",
      "image": "image/shot_winner.jpg"
    }
  ];

  return (
    <div id="actionSlides" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        {slides.map((x, idx) => {
          let classlist = "carousel-item";
          if (idx == 0) {
            classlist += " active"
          }
          return (
            <div class={classlist}>
              <img src={x.image} class="d-block w-100" alt=""/>
              <div class="carousel-caption d-none d-md-block">
                <h5>{x.title}</h5>
                <p>{x.caption}</p>
              </div>
            </div>
          );
        })}
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#actionSlides" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#actionSlides" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
};
