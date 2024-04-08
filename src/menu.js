function createMenuContent() {
    const menuContent = document.createElement('div');
    menuContent.classList.add('menu-content');
    menuContent.innerHTML = `
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
    `;
    return menuContent;

}

export default createMenuContent;