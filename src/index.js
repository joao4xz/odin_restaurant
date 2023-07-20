import './style.css';
import iceCreamimage from './assets/images/icecream.jpg'

function component() {
  const container = document.createElement('div');
  container.id = 'content';

  const h1 = document.createElement('h1');
  h1.textContent = 'Frosty Delights'

  const p = document.createElement('p');
  p.textContent = 'Indulge in handcrafted, premium ice creams with a tempting variety of flavors. Friendly staff and a charming atmosphere make every visit a delightful experience in our ice cream wonderland.'

  const image = new Image();
  image.src = iceCreamimage;

  container.appendChild(h1);
  container.appendChild(p);
  container.appendChild(image);

  return container;
}

document.body.appendChild(component());