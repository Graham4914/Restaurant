import starterDishImage from './salad.jpg';
import mainDishImage from './salmon.jpg';
import dessertDishImage from './panna-cotta.jpg';

function createImageSlider(imageSources) {
  const slider = document.createElement('div');
  slider.classList.add('image-slider');

  // Create an array to hold the image elements.
  const imageElements = imageSources.map((src, index) => {
    const img = document.createElement('img');
    img.src = src;
    img.classList.add('slide');
    img.style.opacity = index === 0 ? '1' : '0';
    slider.appendChild(img);
    return img;
  });

  let current = 0;
  setInterval(() => {
    // Corrected: Ensure we're accessing the image elements correctly
    const previous = current;
    current = (current + 1) % imageElements.length;
    imageElements[previous].style.opacity = '0'; // Fade out the previous image
    imageElements[current].style.opacity = '1'; // Fade in the current image
  }, 3000); // Change every 3 seconds

  console.log(imageElements);
  return slider;

}


function createMenuContent() {
  const menuContent = document.createElement('div');
  menuContent.classList.add('menu-content');

  menuContent.innerHTML = `
    <div class="menu-wrapper">
    <h2 class="menu-title">Menu</h2>
    <p class="intro">Enjoy the best food in town.</p>
    <div class="menu">
    
  <div class="menu-section">
    <h2>Starters</h2>
    <div class="menu-item">
      <h3>Garden Herb Salad</h3>
      <p>A medley of fresh-picked greens, tossed with heirloom tomatoes and a light vinaigrette.</p>
    </div>
    <div class="menu-item">
      <h3>Butternut Squash Soup</h3>
      <p>Creamy, seasoned squash soup with a hint of nutmeg, served with artisan bread.</p>
    </div>
  </div>
  <div class="menu-section">
    <h2>Main Courses</h2>
    <div class="menu-item">
      <h3>Grilled Salmon</h3>
      <p>Herb-crusted salmon filet, grilled to perfection, accompanied by asparagus and lemon butter.</p>
    </div>
    <div class="menu-item">
      <h3>Ribeye Steak</h3>
      <p>Prime cut ribeye, chargrilled, with roasted garlic mashed potatoes and seasonal vegetables.</p>
    </div>
  </div>
  <div class="menu-section">
    <h2>Desserts</h2>
    <div class="menu-item">
      <h3>Chocolate Mousse</h3>
      <p>Decadent dark chocolate mousse topped with whipped cream and a raspberry drizzle.</p>
    </div>
    <div class="menu-item">
      <h3>Vanilla Bean Panna Cotta</h3>
      <p>Silky smooth panna cotta infused with Madagascar vanilla, served with fresh berries.</p>
    </div>
  </div>
</div>
</div>
    `;

  const imageSlider = createImageSlider([starterDishImage, mainDishImage, dessertDishImage]);

  menuContent.appendChild(imageSlider);

  return menuContent;

}

export default createMenuContent;
