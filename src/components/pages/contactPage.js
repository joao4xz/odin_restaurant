import phone from '/src/assets/images/contactPage/phone.svg'
import email from '/src/assets/images/contactPage/email.svg'
import location from '/src/assets/images/contactPage/location.svg'
import shopImage from '/src/assets/images/contactPage/icecreamshop.jpg';

export function createContactPage() {
  const main = document.createElement('main');

  const aboutCard = document.createElement('div');
  aboutCard.classList.add('mainCard', 'contactCard');

  const contactUs = document.createElement('h2');
  contactUs.textContent = 'Contact Us'

  const infoArea = document.createElement('div');
  infoArea.classList.add('infoArea');
  
  const phoneText = document.createElement('p');
  phoneText.textContent = '(555) 123-4567'
  
  const emailText = document.createElement('p');
  emailText.textContent = 'frostydelights@icecream.com'
  
  const locationText = document.createElement('p');
  locationText.textContent = '123 Palm Street, Miami, FL 33101, United States'

  const image = new Image();
  image.src = shopImage;
  
  infoArea.innerHTML = phone;
  infoArea.appendChild(phoneText);
  infoArea.innerHTML += email;
  infoArea.appendChild(emailText);
  infoArea.innerHTML += location;
  infoArea.appendChild(locationText);
  
  aboutCard.appendChild(contactUs);
  aboutCard.appendChild(infoArea);
  aboutCard.appendChild(image);

  main.appendChild(aboutCard);

  return main;
}