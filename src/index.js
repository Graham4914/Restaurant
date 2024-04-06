import './styles.css';

function createHeader() {
    const header = document.createElement('header');
    header.classList.add('header')

    const nav = document.createElement('nav');
    nav.classList.add('nav');

    const homeButton = document.createElement('button');
    homeButton.textContent = 'Home';
    homeButton.classList.add('nav-item');
    homeButton.id = 'home';

    //add event listners

    const menuButton = document.createElement('button');
    menuButton.textContent = 'Menu';
    menuButton.id = 'menu';

    //ev

    const contactButton = document.createElement('button');
    contactButton.textContent = 'Contact';
    contactButton.id = 'contact';


    nav.appendChild(homeButton);
    nav.appendChild(menuButton);
    nav.appendChild(contactButton);

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

function initializeWebsite() {
    const content = document.getElementById('content');
    content.appendChild(createHeader());
    content.appendChild(createMainContent());
    content.appendChild(createFooter());

}

initializeWebsite();
