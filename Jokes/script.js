const base_url = 'https://api.jokes.one';
const chuck_base_url = 'https://api.chucknorris.io/jokes';

const button = document.getElementById('joke-of-the-day');
const randomJokeButton = document.getElementById('random-joke');
  fetch(base_url + '/jod')
    .then(res => res.json())
    .then(data => {
      const joke = data.contents.jokes[0].joke;
      console.log(joke);
      const display = document.getElementById('joke');
      display.innerHTML = joke.text;
    })
    .catch(e => console.error(e.message));
;
  fetch(chuck_base_url + '/random')
    .then(res => res.json())
    .then(data => {
      const display = document.getElementById('joke');
      display.innerHTML = data.value;
    })
    .catch(e => console.error(e.message));
;
