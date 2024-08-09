// Import all project images
import portrait from './assets/images/portrait.jpg';
import gitHubIcon from './assets/images/github.svg';
import linkedInIcon from './assets/images/linkedin.svg';
import projectImg1 from './assets/images/cat.jpg';
import projectImg2 from './assets/images/cat2.jpg';
import projectImg3 from './assets/images/cat3.jpg';
import projectImg4 from './assets/images/cat4.jpg';
import projectImg5 from './assets/images/cat5.jpg';
import projectImg6 from './assets/images/cat6.jpg';
import projectImg7 from './assets/images/cat7.jpg';
import projectImg8 from './assets/images/cat8.jpg';

export default function loadDom() {
  // Select DOM elements
  const portraitContainer = document.querySelector('.imageContainer');
  const gitHubLink = document.querySelector('.social-link1');
  const linkedInLink = document.querySelector('.social-link');
  const projectLink1 = document.querySelector('.project-link-1');
  const project1PicContainers = document.querySelectorAll('.project');

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

  // Initialize an empty array for project images
  const projectImages = [
    projectImg1,
    projectImg2,
    projectImg3,
    projectImg4,
    projectImg5,
    projectImg6,
    projectImg7,
    projectImg8,
  ];

  for (let i = 0; i < project1PicContainers.length; i += 1) {
    // Create and append the project image
    const img = new Image();
    img.src = projectImages[i];
    img.alt = `project image ${i + 1}`;
    project1PicContainers[i].appendChild(img);

    // Create and append the GitHub icon link
    const projectGit = new Image();
    projectGit.src = gitHubIcon;
    projectGit.alt = 'Link to project GitHub repo';
    projectGit.classList.add('projectLinkImg');

    // Select the corresponding project link element
    const projectLinkElement = document.querySelector(`.project-link-${i + 1}`);

    // Check if the element exists to avoid errors
    if (projectLinkElement) {
      projectLinkElement.appendChild(projectGit);
    } else {
      console.error(`.project-link-${i + 1} not found`);
    }
  }
}
