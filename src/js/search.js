(() => {
  function displaySearchResults(results, store) {
    const searchResultsList = document.getElementById('search-results');
    let noResults;

    if (document.documentElement.lang === 'ru') {
      noResults = '<li class="search-results__item is-nothing">Извините, я пока не подключил поиск по русским страничкам.</li>';
    } else {
      noResults = '<li class="search-results__item is-nothing">No results found</li>';
    }

    if (results.length) { // Are there any results?
      let appendString = '';

      for (let i = 0; i < results.length; i++) { // Iterate over the results
        const item = store[results[i].ref];
        appendString +=
        `<li class="search-results__item">
          <a class="search-results__link" href="${item.url}">
            <h2 class="search-results__title">
              ${item.title}
            </h2>
            <p class="search-results__summary">${item.content}</p>
            <span class="search-results__url">${item.url}</span>
          </li>`;
      }

      searchResultsList.innerHTML = appendString;
    } else {
      searchResultsList.innerHTML = noResults;
    }
  }

  // eslint-disable-next-line consistent-return
  function getQueryVariable(variable) {
    const query = window.location.search.substring(1);
    const vars = query.split('&');

    for (let i = 0; i < vars.length; i++) {
      const pair = vars[i].split('=');

      if (pair[0] === variable) {
        return decodeURIComponent(pair[1].replace(/\+/g, '%20'));
      }
    }
  }

  const searchTerm = getQueryVariable('query');

  if (searchTerm) {
    // document.getElementById('search-box').setAttribute('value', searchTerm);

    const searchBoxes = document.querySelectorAll('.form__search-input');

    for (let i = 0; i < searchBoxes.length; i++) {
      searchBoxes[i].setAttribute('value', searchTerm);
    }

    // Initalize lunr with the fields it will be searching on. I've given title
    // a boost of 10 to indicate matches on this field are more important.
    // eslint-disable-next-line no-undef
    const idx = lunr(() => {
      // this.use(lunr.ru);
      this.field('id');
      this.field('title', { boost: 10 });
      this.field('author');
      this.field('category');
      this.field('content');
    });

    // eslint-disable-next-line guard-for-in, no-restricted-syntax
    for (const key in window.store) { // Add the data to lunr
      idx.add({
        id: key,
        title: window.store[key].title,
        author: window.store[key].author,
        category: window.store[key].category,
        content: window.store[key].content,
      });

      const results = idx.search(searchTerm); // Get lunr to perform a search
      displaySearchResults(results, window.store); // We'll write this in the next section
    }
  }
})();
