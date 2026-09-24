import { loadHome } from './home.js';
import { loadMenu } from './menu.js';
import { loadAbout } from './about.js';

function clearContent() {
  const content = document.getElementById('content');
  content.innerHTML = '';
}

const homeBtn = document.getElementById('home-btn');
const menuBtn = document.getElementById('menu-btn');
const aboutBtn = document.getElementById('about-btn');

homeBtn.addEventListener('click', () => {
  clearContent();
  loadHome();
});

menuBtn.addEventListener('click', () => {
  clearContent();
  loadMenu();
});

aboutBtn.addEventListener('click', () => {
  clearContent();
  loadAbout();
});

loadHome();
