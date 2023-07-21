import iceCreamImage1 from '/src/assets/images/menuPage/icecream1.png'
import iceCreamImage2 from '/src/assets/images/menuPage/icecream2.png'
import iceCreamImage3 from '/src/assets/images/menuPage/icecream3.png'
import iceCreamImage4 from '/src/assets/images/menuPage/icecream4.png'
import iceCreamImage5 from '/src/assets/images/menuPage/icecream5.png'
import iceCreamImage6 from '/src/assets/images/menuPage/icecream6.png'

function _createIceCreamCard(iceCreamImage, iceCreamTitle, iceCreamDescription) {
  const iceCream = document.createElement('div');
  iceCream.classList.add('iceCreamCard');

  const image = new Image();
  image.src = iceCreamImage;

  const title = document.createElement('h2');
  title.textContent = iceCreamTitle;

  const description = document.createElement('p');
  description.textContent = iceCreamDescription;

  iceCream.appendChild(image);
  iceCream.appendChild(title);
  iceCream.appendChild(description);

  return iceCream;
}

export function createMenuPage() {
  const main = document.createElement('main');

  const menuCard = document.createElement('div');
  menuCard.classList.add('mainCard', 'menuCard');

  const iceCream1 = _createIceCreamCard(iceCreamImage1, 'One Ice Cream Ball', 'A delightful single scoop of creamy ice cream, served on a crispy cone for a classic and satisfying treat.');
  menuCard.appendChild(iceCream1);

  const iceCream2 = _createIceCreamCard(iceCreamImage2, 'Three Ice Cream Ball on a Cone', 'A tantalizing trio of ice cream flavors, skillfully balanced on a crispy cone, offering a delightful mix of tastes in every bite.');
  menuCard.appendChild(iceCream2);

  const iceCream3 = _createIceCreamCard(iceCreamImage3, 'Three Ice Cream Ball on a Glass', 'A delightful display of three colorful ice cream scoops, served in an elegant glass for an elevated dessert experience.');
  menuCard.appendChild(iceCream3);

  const iceCream4 = _createIceCreamCard(iceCreamImage4, 'Sundae', 'A decadent delight featuring multiple ice cream scoops, topped with luscious syrups, crunchy nuts, and a cherry on top.');
  menuCard.appendChild(iceCream4);

  const iceCream5 = _createIceCreamCard(iceCreamImage5, 'Popsicle', 'A refreshing frozen treat on a stick, available in various fruity flavors to beat the heat.');
  menuCard.appendChild(iceCream5);

  const iceCream6 = _createIceCreamCard(iceCreamImage6, 'Double Popsicle', 'Twice the delight with two frozen popsicles, a perfect choice for sharing or savoring all to yourself.');
  menuCard.appendChild(iceCream6);

  main.appendChild(menuCard);

  return main;
}