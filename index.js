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
          <img
            class="avatar avatar-square md"
            src="/assets/images/cart-outlined.svg"
            alt="avatar-square-2"
          />
          <div class="number-badge">12</div>
        </div>
        <a href="#" class="au-text au-text-bold">Cart</a>
      </li>
    </ul>
  </div>
  </nav>`;
};

addNav();
