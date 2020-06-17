let recentGrid = document.querySelector('#recently_added')
let allBooksGrid = document.querySelector('#all_books')

const populateGrids = (el, data) => {
  let cardDetails = ``

  data.forEach((item) => {
    let cardContent = `
      <div class="book d_flex">
        <img
          src="${item.imageUrl}"
          alt=""
        />
        <div class="book_details">
          <h5 class="${available(item.available)}">${item.available}</h5>
          <h3>${item.title}</h3>
          <div>
            <p>${item.author} - ${item.year}</p>
          </div>
          <div>
            <p>${item.genre}</p>
          </div>
          <div class="d_flex">
            <div class="ratings">
              <p>Ratings: <span>4.0</span></p>
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
    `
    cardDetails += cardContent
  });
  el.innerHTML = cardDetails
}
populateGrids(recentGrid, recent)
populateGrids(allBooksGrid, books)