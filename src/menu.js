function createMenuContent() {
    const menuContent = document.createElement('div');
    menuContent.classList.add('menu-content');
    menuContent.innerHTML = `
    <h2>Menu</h2>
    <p>Enjoy the best food in town.</p>
    `;
    return menuContent;

}

export default createMenuContent;