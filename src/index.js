import './style.css';
import { createHeader } from './components/header.js'
import { createHomePage } from './components/pages/homePage.js'

function component() {
  const container = document.createElement('div');
  container.id = 'content';

  // Create landing page
  const header = createHeader('home', container);
  const main = createHomePage();
  
  // Container Append
  container.appendChild(header);
  container.appendChild(main);

  return container;
}

document.body.appendChild(component());