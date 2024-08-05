import './style.css';
import portrait from './assets/images/portrait.jpg';

const portraitContainer = document.querySelector('.imageContainer');

const myPortrait = new Image();
myPortrait.src = portrait;
portraitContainer.appendChild(myPortrait);
