import { cleanPage } from "./cleanPage";

function createHeader(selected, container) {
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
  h1Shadow.appendChild(h1Text);
  h1Shadow.appendChild(h1Line);

  // Nav Bar
  const nav = document.createElement('nav');
  const home = document.createElement('a');
  const menu = document.createElement('a');
  const contact = document.createElement('a');

  home.textContent = 'Home';
  menu.textContent = 'Menu';
  contact.textContent = 'Contact';

  cleanPage(home, menu, contact, selected, container);

  home.classList.add('nav-item');
  menu.classList.add('nav-item');
  contact.classList.add('nav-item');

  home.classList.remove('selected');
  menu.classList.remove('selected');
  contact.classList.remove('selected');

  switch (selected) {
    case 'home':
      home.classList.add('selected');
      break;
    case 'menu':
      menu.classList.add('selected');
      break;
    case 'contact':
      contact.classList.add('selected');
      break;
  }

  nav.appendChild(home);
  nav.appendChild(menu);
  nav.appendChild(contact);

  header.appendChild(nav);

  return header;
}

export { createHeader };