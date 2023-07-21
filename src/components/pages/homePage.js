import iceCreamimage from '/src/assets/images/icecream.jpg'

export function createHomePage() {
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

  aboutCard.appendChild(p);
  aboutCard.appendChild(image);
  aboutCard.appendChild(contactUsText);

  main.appendChild(aboutCard);

  return main;
}