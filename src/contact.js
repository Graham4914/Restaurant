function createContactContent() {
    const contactContent = document.createElement('div');
    contactContent.classList.add('contact-content');
    contactContent.innerHTML = `
    <h2>This is our address!</h2>
    <p>Enjoy the best food in town.</p>
    `;
    return contactContent;

}

export default createContactContent;