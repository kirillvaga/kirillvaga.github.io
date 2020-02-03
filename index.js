let news;
let filterNews = [];
let NEWS_ON_PAGE = 4;
let activePaginationButton;
const requestURL = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=251501d9720d4d64aa038e7977116df5';

const getCount = length => Math.ceil(length / NEWS_ON_PAGE);

const getCardsToRender = (news, pageNumber) => {
  let start = (pageNumber - 1) * NEWS_ON_PAGE;
  let end = start + NEWS_ON_PAGE;
  return news.slice(start, end);
};

const renderPagination = count => {
  let pagination = document.querySelector('.pagination__buttons');
  pagination.innerHTML = '';
  for (let i = 1; i <= count; i++) {
    let div = document.createElement('div');
    div.id = `button_${i}`;
    div.className = ('pagination__number');
    div.innerHTML = i;
    if (i === 1) {
      activePaginationButton = div;
      colorActiveButton(div, activePaginationButton);
    }
    pagination.appendChild(div);
    div.addEventListener('click', () => {
      const cards = filterNews.length > 0 ? filterNews : news;
      renderCards(getCardsToRender(cards, i));
      colorActiveButton(div, activePaginationButton);
      activePaginationButton = div;
    });
  }
}

const renderCards = cards => {
  let wrapper = document.querySelector('.cards__wrapper');
  wrapper.innerHTML = '';
  cards.forEach(element => {
    let cards = document.createElement('div');
    cards.className = ('cards__item');
    cards.innerHTML = `
        <div class="cards__name">
          <h1>
          ${element.author}
          </h1>
        </div>
        <p class="cards__date">
          ${element.publishedAt}
        </p>
        <div class="cards__content">
          ${element.description}
        </div>
  `;
    wrapper.appendChild(cards);
  });
};

const colorActiveButton = (current, prev) => {
  prev && prev.classList.remove('active');
  current && current.classList.add('active');
}

let search = document.querySelector('.header__search');
search.addEventListener('change', event => {
  let value = event.target.value;
  filterNews = news.filter(item => item.author.toLowerCase().includes(value));
  renderCards(getCardsToRender(filterNews, 1));
  renderPagination(getCount(filterNews.length))
});

let sortBy = document.querySelectorAll('.sort__button');
sortBy.forEach(item => {
  item.addEventListener('click', event => {
    let currentButton = event.target;
    isCurrentButton(currentButton, sortBy);
    sortArray = filterNews.length > 0 ? filterNews : news;
    if (currentButton.id === 'date') {
      sortArray.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
      renderCards(getCardsToRender(sortArray.reverse(), 1));
      renderPagination(getCount(sortArray.length))
    } else {
      sortArray.sort((a, b) => a.author.localeCompare(b.author))
      renderCards(getCardsToRender(sortArray, 1));
      renderPagination(getCount(sortArray.length))
    }
  });
});

const isCurrentButton = (currentButton, array) => {
  array.forEach(item => {
    item.style.backgroundColor = item.id === currentButton.id ? "yellow" : "#e74c3c";
  });
}

const start = () => {
  fetch(requestURL)
    .then(response => response
      .json()).then(res => {
        news = res.articles;
        renderPagination(getCount(news.length));
        renderCards(getCardsToRender(news, 1));
      })
}

start();







