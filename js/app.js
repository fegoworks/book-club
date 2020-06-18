const hamburger = document.querySelector(".hamburger")
const sidebar = document.querySelector(".sidebar_menu")
const home = document.querySelector(".home")
const headerLt = document.querySelector(".header-lt")
const headerRt = document.querySelector(".header-rt")
const searchInp = document.querySelector("#search")
const searchIc = document.querySelector("#srch_btn")
const ellipsis = document.querySelector('.ellipsis')
const book = document.querySelector('#book_details')
const closeBkDetail = document.querySelector('#close_bk')

hamburger.addEventListener('click', () => {
  hamburger.style.display = "none"
  home.style.display = "block";
  sidebar.classList.add("slider");
  headerLt.classList.add("slider");
})

ellipsis.addEventListener('click', () => {
  book.style.opacity = 1;
  ellipsis.style.display = "none";
})

closeBkDetail.addEventListener('click', () => {
  book.style.opacity = 0;
  ellipsis.style.display = "block";
})