import './style.css';
import iceCreamimage from './assets/images/icecream.jpg'

function component() {
  const container = document.createElement('div');
  container.id = 'content';

  // Header
  const header = document.createElement('header');

  const h1Shadow = document.createElement('h1');
  h1Shadow.textContent = 'Frosty Delights';
  h1Shadow.classList.add('shadow');

  const h1Text = document.createElement('h1');
  h1Text.textContent = 'Frosty Delights';
  h1Text.classList.add('text');

  const h1Line = document.createElement('h1');
  h1Line.textContent = 'Frosty Delights';
  h1Line.classList.add('line');

  header.appendChild(h1Shadow);
  header.appendChild(h1Text);
  header.appendChild(h1Line);

  // Nav Bar
  const nav = document.createElement('nav');
  const home = document.createElement('a');
  const menu = document.createElement('a');
  const contact = document.createElement('a');

  menu.href = 'https://github.com';
  home.href = 'https://github.com';
  contact.href = 'https://github.com';

  home.textContent = 'Home';
  menu.textContent = 'Menu';
  contact.textContent = 'Contact';

  home.classList.add('nav-item', 'home');
  menu.classList.add('nav-item', 'menu');
  contact.classList.add('nav-item', 'contact');

  nav.appendChild(home);
  nav.appendChild(menu);
  nav.appendChild(contact);

  // Main
  const main = document.createElement('main');

  const aboutCard = document.createElement('div');
  aboutCard.classList.add('aboutCard');

  const p = document.createElement('p');
  p.textContent = 'Discover a world of flavors at Frosty Delights, where ice cream is an art form. Experience an explosion of tastes, carefully blended with natural ingredients. Satisfy your cravings and create your own edible masterpiece.'

  const image = new Image();
  image.src = iceCreamimage;

  const contactUsText = document.createElement('a');
  contactUsText.textContent = 'Contact Us';
  contactUsText.href = '#';

  // Appends

  aboutCard.appendChild(p);
  aboutCard.appendChild(image);
  aboutCard.appendChild(contactUsText);

  header.appendChild(nav);
  main.appendChild(aboutCard);

  container.appendChild(header);
  container.appendChild(main);

  return container;
}

document.body.appendChild(component());