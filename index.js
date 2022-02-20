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
        <button class="button button-outlined-secondary" onclick="location.href = '/components/auth/login.html';">Login</button>
      </li>
      <li class="navbar-list">
        <div class="badge">
          <a href="/components/wishlist/wishlist.html" class="au-text au-text-bold">
            <img
              class="avatar avatar-square md"
              src="/assets/images/heartIcon.svg"
              alt="avatar-square-2"
            />
            <div class="number-badge">12</div>
          </a>
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
      <a href="/components/product-list/product-list.html">
        <img
          class="product-image"
          src="https://picsum.photos/300/200/?blur"
          alt="product-image-${categoryLoopIndex}"
        />
        <div class="card-overlay-text">Men</div>
      </a>
    </div>`;
  }
};

window.location.pathname.includes("index") && addCategoryTile();

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

window.location.pathname.includes("index") && addCollectionCatalogue();

const addWishListContainer = () => {
  for (let wishlistLoopIndex = 0; wishlistLoopIndex < 5; wishlistLoopIndex++) {
    document.getElementById("wishlist-container").innerHTML += `
      <div class="card card-ecommerce ab-cart-card">
        <div class="product-image-container">
          <img
            class="product-image"
            src="https://picsum.photos/300/200/?blur"
            alt="product-image-${wishlistLoopIndex}"
          />
        </div>
        <div class="card-badge-dismiss">X</div>
        <div class="card-title">Survey Corps Anime Book</div>
        <div class="card-text ab-text-center ab-cart-price">Rs. 250</div>
        <button
          class="button button-outlined-primary button-full-width"
        >
          Move to cart
        </button>
      </div>
    `;
  }
};

window.location.pathname.includes("wishlist") && addWishListContainer();
