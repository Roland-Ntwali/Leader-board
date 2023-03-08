import render from './module/render.js';
import scores from './module/scores.js';
import './style.css';

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/amavubiGames/scores/';

const refreshButton = document.querySelector('.refresh');
const form = document.querySelector('form');

refreshButton.addEventListener('click', () => {
  render(url);
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const submitButton = document.querySelector('.submit_button');
  const username = form.name.value;
  const score = form.score.value;
  scores(url, username, score);
  form.reset();
  submitButton.disable = true;
});

document.addEventListener('DOMContentLoaded', () => {
  render(url);
});