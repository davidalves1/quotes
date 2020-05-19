fetch('https://quotes.rest/qod?category=inspire&language=en')
  .then(res => res.json())
  .then(res => {
    const quote = res.contents.quotes[0];

    const message = document.querySelector('.message');
    message.innerHTML = `"${quote.quote}"`

    const author = document.querySelector('.author');
    author.innerHTML = `(${quote.author})`;
  })
