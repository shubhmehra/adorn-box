const addNav = () => {
  document.getElementById(
    "main-navbar"
  ).innerHTML += `<nav class="navbar main-container-width">
  <div class="navbar-container">
    <a href="/index.html" class="navbar-title">Adorn Box</a>
    <div class="input-group">
      <input
        type="text"
        class="navbar-input au-input"
        placeholder="search"
      />
    </div>
    <ul class="navbar-links">
      <li class="navbar-list">
        <button class="button button-outlined-secondary">Login</button>
      </li>
      <li class="navbar-list">
        <div class="badge">
          <img
            class="avatar avatar-square md"
            src="/assets/images/heartIcon.svg"
            alt="avatar-square-2"
          />
          <div class="number-badge">12</div>
        </div>
      </li>
      <li class="navbar-list">
        <div class="badge">
          <a href="/components/cart/cart.html" class="au-text au-text-bold">
            <img
              class="avatar avatar-square md"
              src="/assets/images/cart-outlined.svg"
              alt="avatar-square-2"
            />
            <div class="number-badge">12</div>
          </a>
        </div>
        <a href="/components/cart/cart.html" class="au-text au-text-bold">Cart</a>
      </li>
    </ul>
  </div>
  </nav>`;
};

addNav();

const addCategoryTile = () => {
  for (let categoryLoopIndex = 0; categoryLoopIndex < 5; categoryLoopIndex++) {
    document.getElementById(
      "product-categories"
    ).innerHTML += `<div class="product-image-container">
      <img
        class="product-image"
        src="https://picsum.photos/300/200/?blur"
        alt="product-image-${categoryLoopIndex}"
      />
      <div class="card-overlay-text">Men</div>
    </div>`;
  }
};

addCategoryTile();

const addCollectionCatalogue = () => {
  for (
    let collectionLoopIndex = 0;
    collectionLoopIndex < 2;
    collectionLoopIndex++
  ) {
    document.getElementById(
      "collection-catalogue"
    ).innerHTML += `<div class="card card-horizontal e-comm-card">
      <div class="product-image-container">
        <img
          class="product-image"
          src="https://picsum.photos/200/240/?blur"
          alt="product-image-${collectionLoopIndex}"
        />
        <div class="card-badge">New Arrival</div>
      </div>
      <div class="card-horizontal-body">
        <div class="card-text">
          <div class="card-title card-text-gap">Summer Collection</div>
          Check out our best winter collection to stay warm in style this season
        </div>
      </div>
    </div>`;
  }
};

addCollectionCatalogue();
