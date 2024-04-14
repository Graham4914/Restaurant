import './styles.css';
import createHomeContent from './home';
import createContactContent from './contact';
import createMenuContent from './menu';



function createHeader() {
    const header = document.createElement('header');
    header.classList.add('header');

    const logoDiv = document.createElement('div');
    logoDiv.id = 'logo';
    logoDiv.innerHTML = `
    <h1>Hardwick Cafe</h1>
  `;

    logoDiv.classList.add('logo');

    const nav = document.createElement('nav');
    nav.classList.add('nav');

    const homeButton = document.createElement('button');
    homeButton.textContent = 'Home';
    homeButton.classList.add('nav-item');
    homeButton.id = 'home';

    //add event listners

    const menuButton = document.createElement('button');
    menuButton.textContent = 'Menu';
    menuButton.classList.add('nav-item');
    menuButton.id = 'menu';

    //ev

    const contactButton = document.createElement('button');
    contactButton.textContent = 'Contact';
    contactButton.classList.add('nav-item');
    contactButton.id = 'contact';


    nav.appendChild(homeButton);
    nav.appendChild(menuButton);
    nav.appendChild(contactButton);

    header.appendChild(logoDiv);
    header.appendChild(nav);
    return header;
}


function createMainContent() {
    const main = document.createElement('main');
    main.classList.add('main-content');
    // add main content here

    return main;
}

function createFooter() {
    const footer = document.createElement('footer');
    footer.classList.add('footer');

    return footer;
}

function addEventListeners(mainContent) {
    const buttons = document.querySelectorAll('.nav-item');
    const homeButton = document.getElementById('home');
    homeButton.addEventListener('click', () => {
        mainContent.innerHTML = '';
        mainContent.appendChild(createHomeContent());
        setActiveButton(homeButton, buttons);
    });

    const menuButton = document.getElementById('menu');
    menuButton.addEventListener('click', () => {
        mainContent.innerHTML = '';
        mainContent.appendChild(createMenuContent());
        setActiveButton(menuButton, buttons);
    });

    const contactButton = document.getElementById('contact');
    contactButton.addEventListener('click', () => {
        mainContent.innerHTML = '';
        mainContent.appendChild(createContactContent());
        setActiveButton(contactButton, buttons);
    });
}

function setActiveButton(activeButton, buttons) {
    buttons.forEach(button => {
        button.classList.remove('active');
    });
    activeButton.classList.add('active');
}


function initializeWebsite() {
    const content = document.getElementById('content');
    const mainContent = createMainContent();

    content.appendChild(createHeader());
    content.appendChild(mainContent);
    content.appendChild(createFooter());

    addEventListeners(mainContent);

    mainContent.appendChild(createHomeContent());

    const homeButton = document.getElementById('home');
    homeButton.classList.add('active');
}

initializeWebsite();
