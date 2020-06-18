/** @format */

let carouselGrid = document.querySelector('#carousel');

const available = (book) => (book === 'Available' ? 'available' : 'borrowed');

const populateCarousel = (el, data) => {
  let bookDetails = ``;

  data.forEach((item) => {
    let bookContent = `
      <div class="carousel-cell">
        <div class="ellipsis"></div>
        <img
          src="${item.imageUrl}"
          alt="${item.title}"
        />
        <div id="book_details" class="book_details">
          <button id="close_bk" class="btn">X</button>
          <h5 class="${available(item.available)}">${item.available}</h5>
          <h3>${item.title}</h3>
          <div>
            <p>${item.author}</p>
            <p>${item.year}</p>
          </div>
          <div>
            <h4>Genre: <span>${item.genre}</span></h4>
            <h4>Labels: <span>${item.labels}</span></h4>
          </div>
          <div class="d_flex">
            <div class="ratings">
              <h4>Ratings: <span>4.0</span></h4>
              <div>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star grey"></i>
              </div>
            </div>
            <div class="d_flex">
              <div class="views d_flex reverse">
                <i class="fas fa-user-friends"></i>
                <span>33</span>
              </div>
              <div class="views d_flex reverse">
                <i class="far fa-heart"></i>
                <span>16</span>
              </div>
            </div>
          </div>
        </div>
      </div>
`;
    bookDetails += bookContent;
  });
  el.innerHTML = bookDetails;
};

// Get recently added books
populateCarousel(carouselGrid, recent);

// Display books in a carousel
let elem = document.querySelector('.carousel');
let flkty = new Flickity(elem, {
  // options
  cellAlign: 'left',
  contain: true,
  wrapAround: true,
  freeScroll: true,
  arrowShape: {
    x0: 30,
    x1: 50,
    y1: 15,
    x2: 50,
    y2: 15,
    x3: 50,
  },
});