import generateJoke from "./generateJoke";
import './scss/main.scss';
import laughing from './assets/laughing.svg';

const laughImg = document.getElementById('laughImg');
laughImg.src = laughing;

console.log(generateJoke());