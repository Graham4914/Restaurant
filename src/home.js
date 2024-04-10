import backgroundImage from './HardwickCafe.jpg';

function createHomeContent() {
    const homeContent = document.createElement('div');
    homeContent.classList.add('home-content');
    homeContent.style.backgroundImage = `url(${backgroundImage})`;
    homeContent.style.backgroundSize = 'cover';
    homeContent.style.backgroundPosition = 'center';
    homeContent.innerHTML = `
    <div class="backgroundDiv">
    <h2>Indulge in Elegance at Hardwick Cafe</h2>
    <p>Savor the creations of Celebrity Chef Jenny—where each dish is a masterpiece crafted with the freshest local produce. Experience a symphony of flavors in our relaxed, chic ambiance. Your culinary journey awaits.</p>
    
    </div>
    `;
    return homeContent;

}

export default createHomeContent;