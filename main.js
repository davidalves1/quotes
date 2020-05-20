const baseUrl = 'https://devtech-quotes-api.herokuapp.com/quote';

fetch(baseUrl)
  .then(res => res.json())
  .then(res => {
    const message = document.querySelector('.message');
    message.innerHTML = `"${res.message}"`;

    const author = document.querySelector('.author');
    author.innerHTML = `(${res.author})`;
  })
  .catch(err => console.error('DEU RUIM! :(', err));
