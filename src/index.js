import './style.css';
import portrait from './assets/images/portrait.jpg';
import gitHubIcon from './assets/images/github.svg';
import linkedInIcon from './assets/images/linkedin.svg';

const portraitContainer = document.querySelector('.imageContainer');
const gitHubLink = document.querySelector('.social-link1');
const linkedInLink = document.querySelector('.social-link');

// Append portrait image
const myPortrait = new Image();
myPortrait.src = portrait;
myPortrait.alt = 'Portrait of Callum';
myPortrait.classList.add('portrait');
portraitContainer.appendChild(myPortrait);

// Append GitHub icon
const gitHubImg = new Image();
gitHubImg.src = gitHubIcon;
gitHubImg.alt = 'GitHub logo';
gitHubLink.appendChild(gitHubImg);

// Append LinkedIn icon
const linkedInImg = new Image();
linkedInImg.src = linkedInIcon;
linkedInImg.alt = 'LinkedIn logo';
linkedInLink.appendChild(linkedInImg);
