import portrait from './assets/images/portrait.jpg';
import gitHubIcon from './assets/images/github.svg';
import linkedInIcon from './assets/images/linkedin.svg';
import projectImg1 from './assets/images/cat.jpg';

export default function loadDom() {
  // Select DOM elements
  const portraitContainer = document.querySelector('.imageContainer');
  const gitHubLink = document.querySelector('.social-link1');
  const linkedInLink = document.querySelector('.social-link');
  const projectLink1 = document.querySelector('.project-link-1');
  const project1PicContainer = document.querySelector('.project1');

  // Check if the elements exist to avoid errors
  if (!portraitContainer || !gitHubLink || !linkedInLink) {
    console.error('One or more required DOM elements are missing.');
    return;
  }

  // Create and append portrait image
  const myPortrait = new Image();
  myPortrait.src = portrait;
  myPortrait.alt = 'Portrait of Callum';
  myPortrait.classList.add('portrait');
  portraitContainer.appendChild(myPortrait);

  // Create and append GitHub icon
  const gitHubImg = new Image();
  gitHubImg.src = gitHubIcon;
  gitHubImg.alt = 'GitHub logo';
  gitHubLink.appendChild(gitHubImg);

  // Create and append LinkedIn icon
  const linkedInImg = new Image();
  linkedInImg.src = linkedInIcon;
  linkedInImg.alt = 'LinkedIn logo';
  linkedInLink.appendChild(linkedInImg);

  const projectGit = new Image();
  projectGit.src = gitHubIcon;
  projectGit.alt = 'link to project github repo';
  projectGit.classList.add('projectLinkImg');
  projectLink1.appendChild(projectGit);

  const screenshot1 = new Image();
  screenshot1.src = projectImg1;
  screenshot1.alt = 'picture of a knight travails project';
  project1PicContainer.appendChild(screenshot1);
}
