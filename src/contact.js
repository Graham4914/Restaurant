import backgroundImage from './contact.jpg';

function createContactContent() {
    const contactContent = document.createElement('div');
    contactContent.classList.add('contact-content');
    contactContent.style.backgroundImage = `url(${backgroundImage})`;
    contactContent.style.backgroundSize = 'cover';
    contactContent.style.backgroundPosition = 'center';

    const header = document.createElement('h2');
    header.textContent = 'Get in Touch';
    contactContent.appendChild(header);

    const form = document.createElement('form');
    form.innerHTML = ` 
    <input type="text" id="name" name="name" placeholder="Your name" required>
    <input type="email" id="email" name="email" placeholder="Your email" required>
    <textarea id="message" name="message" placeholder="Your message" required></textarea>
    <button type="submit">Send Message</button>
    `;

    contactContent.appendChild(form);


    const contactInfo = document.createElement('div');
    contactInfo.classList.add('contact-info');
    contactInfo.innerHTML = `
    <p><strong>Address:</strong> 123 Café Street, Foodville</p>
    <p><strong>Phone:</strong> (123) 456-7890</p>
    <p><strong>Email:</strong> info@hardwickcafe.com</p>
    `;

    contactContent.appendChild(contactInfo);


    return contactContent;

}

export default createContactContent;