const { JSDOM } = require('jsdom');

// Setup a basic DOM structure
const dom = new JSDOM(`\n  <div class="menu-icon"></div>\n  <div class="menu-items-container"></div>\n`);

global.window = dom.window;
global.document = dom.window.document;

// Require the script after globals are set so it attaches event listeners
require('../main.js');

const menuIcon = document.querySelector('.menu-icon');
const container = document.querySelector('.menu-items-container');

// First click should add the class
menuIcon.dispatchEvent(new dom.window.Event('click'));
if (!container.classList.contains('active')) {
  throw new Error('Expected container to have active class after first click');
}

// Second click should remove it
menuIcon.dispatchEvent(new dom.window.Event('click'));
if (container.classList.contains('active')) {
  throw new Error('Expected container to not have active class after second click');
}

console.log('Test passed');
