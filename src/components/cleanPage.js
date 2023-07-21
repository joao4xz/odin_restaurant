import { createHeader } from "./header";
import { createHomePage } from "./pages/homePage";
import { createMenuPage } from "./pages/menuPage";
import { createContactPage } from "./pages/contactPage";

export function cleanPage(home, menu, contact, selected, container) {
  home.addEventListener('click', () => {
    if(selected !== 'home'){
      container.textContent = '';
      const header = createHeader('home', container);
      const main = createHomePage();
      container.appendChild(header);
      container.appendChild(main);
    }
  });

  menu.addEventListener('click', () => {
    if(selected !== 'menu'){
      container.textContent = '';
      const header = createHeader('menu', container);
      const main = createMenuPage();
      container.appendChild(header);
      container.appendChild(main);
    }
  });

  contact.addEventListener('click', () => {
    if(selected !== 'contact'){
      container.textContent = '';
      const header = createHeader('contact', container);
      const main = createContactPage();
      container.appendChild(header);
      container.appendChild(main);
    }
  });
}