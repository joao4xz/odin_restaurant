import './style.css';
import iceCreamimage from './assets/images/icecream.jpg'

function component() {
  const container = document.createElement('div');
  container.id = 'content';

  // Header
  const header = document.createElement('header');

  const h1Shadow = document.createElement('h1');
  h1Shadow.textContent = 'Frosty Delights';
  h1Shadow.id = 'shadow';

  const h1Text = document.createElement('h1');
  h1Text.textContent = 'Frosty Delights';
  h1Text.id = 'text';

  const h1Line = document.createElement('h1');
  h1Line.textContent = 'Frosty Delights';
  h1Line.id = 'line';

  header.appendChild(h1Shadow);
  header.appendChild(h1Text);
  header.appendChild(h1Line);

  // Main
  const main = document.createElement('main');

  const aboutCard = document.createElement('div');
  aboutCard.classList.add('aboutCard');

  const p = document.createElement('p');
  p.textContent = 'Step into a delightful world of heavenly ice creams, carefully handcrafted with a wonderful variety of flavors. Our friendly team is ready to treat you to a magical experience at our warm and inviting ice cream wonderland. Explore the joy of frosty creations, each made with love to bring smiles to every scoop. Come and enjoy the enchantment, creating unforgettable memories with us at our creamy haven!'

  const image = new Image();
  image.src = iceCreamimage;

  aboutCard.appendChild(p);
  aboutCard.appendChild(image);

  main.appendChild(aboutCard);

  container.appendChild(header);
  container.appendChild(main);

  return container;
}

document.body.appendChild(component());