function createHomeContent() {
    const homeContent = document.createElement('div');
    homeContent.classList.add('home-content');
    homeContent.innerHTML = `
    <h2>Welcome to the Hardwick Cafe</h2>
    <p>Enjoy the best food in town.</p>
    <p>Welcome to our cozy corner of the web!</p>
    `;
    return homeContent;

}

export default createHomeContent;