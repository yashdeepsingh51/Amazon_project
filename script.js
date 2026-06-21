const products = [
  {
    id: 1,
    title: 'Wireless Bluetooth Headphones',
    category: 'Electronics',
    price: 4149,
    rating: 4.5,
    stock: 15,
    image: 'wireless-bluetooth-headphones-over-ear-1.webp',
    description: 'Over-ear wireless headphones with deep bass, 30-hour battery life, and cushioned ear cups for all-day comfort.'
  },
  {
    id: 2,
    title: 'Smart Fitness Watch',
    category: 'Electronics',
    price: 6639,
    rating: 4.2,
    stock: 8,
    image: 'smart-fitness-watch-tracker-1.jpg',
    description: 'Track steps, heart rate, sleep, and notifications with this water-resistant smart fitness watch.'
  },
  {
    id: 3,
    title: 'Portable Bluetooth Speaker',
    category: 'Electronics',
    price: 2489,
    rating: 4.0,
    stock: 20,
    image: 'portable-bluetooth-speaker-1.jpg',
    description: 'Compact speaker delivering 360-degree sound and up to 12 hours of playtime.'
  },
  {
    id: 4,
    title: 'Running Shoes',
    category: 'Fashion',
    price: 4979,
    rating: 4.6,
    stock: 12,
    image: 'running-shoes-sport-footwear-1.jpg',
    description: 'Lightweight, breathable running shoes with cushioned soles for maximum comfort.'
  },
  {
    id: 5,
    title: 'Cotton Crew T-Shirt (Pack of 3)',
    category: 'Fashion',
    price: 2074,
    rating: 4.3,
    stock: 30,
    image: 'cotton-crew-t-shirt-pack-1.jpg',
    description: 'Soft, breathable cotton t-shirts in classic colors. Machine washable and durable.'
  },
  {
    id: 6,
    title: 'Stainless Steel Water Bottle',
    category: 'Home',
    price: 1535,
    rating: 4.7,
    stock: 25,
    image: 'stainless-steel-water-bottle-insulated-1.webp',
    description: 'Insulated bottle that keeps drinks cold for 24 hours or hot for 12 hours.'
  },
  {
    id: 7,
    title: 'Non-Stick Cookware Set',
    category: 'Home',
    price: 7469,
    rating: 4.4,
    stock: 6,
    image: 'non-stick-cookware-set-pots-1.jpg',
    description: 'Complete cookware set with durable non-stick coating and ergonomic handles.'
  },
  {
    id: 8,
    title: 'Organic Green Tea (50 Bags)',
    category: 'Grocery',
    price: 1078,
    rating: 4.5,
    stock: 40,
    image: 'organic-green-tea-bags-1.jpg',
    description: 'Premium organic green tea rich in antioxidants with a fresh, soothing flavor.'
  },
  {
    id: 9,
    title: 'Whole Bean Coffee 1kg',
    category: 'Grocery',
    price: 1908,
    rating: 4.8,
    stock: 18,
    image: 'whole-bean-coffee-1kg-roasted-1.jpg',
    description: 'Bold, smooth whole bean coffee roasted to perfection for a rich morning brew.'
  },
  {
    id: 10,
    title: 'Yoga Mat',
    category: 'Sports',
    price: 2656,
    rating: 4.3,
    stock: 14,
    image: 'yoga-mat-exercise-fitness-1.jpg',
    description: 'Eco-friendly, non-slip yoga mat with carrying strap for home or studio workouts.'
  },
  {
    id: 11,
    title: 'Adjustable Dumbbells 5-25 lb',
    category: 'Sports',
    price: 9959,
    rating: 4.6,
    stock: 5,
    image: 'adjustable-dumbbells-home-gym-1.png',
    description: 'Space-saving adjustable dumbbells designed for a full-body workout at home.'
  },
  {
    id: 12,
    title: 'USB-C Charging Cable 2-Pack',
    category: 'Electronics',
    price: 829,
    rating: 4.1,
    stock: 50,
    image: 'usb-c-charging-cable-braided-1.jpg',
    description: 'Braided USB-C cables, 6ft long, supporting fast charging and data sync.'
  },
  {
    id: 13,
    title: 'Leather Wallet',
    category: 'Fashion',
    price: 2904,
    rating: 4.4,
    stock: 10,
    image: 'leather-wallet-rfid-bifold-1.jpg',
    description: 'Genuine leather bifold wallet with RFID blocking technology and multiple card slots.'
  },
  {
    id: 14,
    title: 'Desk Lamp LED',
    category: 'Home',
    price: 2323,
    rating: 4.2,
    stock: 16,
    image: 'led-desk-lamp-adjustable-1.jpg',
    description: 'Dimmable LED desk lamp with USB charging port and adjustable arm for any workspace.'
  }
];

// -------------------- LocalStorage Keys --------------------
const STORAGE = {
  CART: 'Amazon_cart',
  ADDRESSES: 'Amazon_addresses',
  SELECTED_ADDRESS: 'Amazon_selected_address',
  ORDERS: 'Amazon_orders',
  LAST_ORDER: 'Amazon_last_order'
};

// -------------------- Image Placeholder --------------------
const PLACEHOLDER_IMG =
  'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect width="200" height="200" fill="%23eaeded"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23565959" font-size="18">No Image</text></svg>';

window.setPlaceholder = function (img) {
  img.onerror = null;
  img.src = PLACEHOLDER_IMG;
};

// -------------------- Storage Helpers --------------------
function getCart() {
  return JSON.parse(localStorage.getItem(STORAGE.CART)) || [];
}

function saveCart(cart) {
  localStorage.setItem(STORAGE.CART, JSON.stringify(cart));
  updateCartCount();
  // Re-render product grid if on home page
  if (document.body.id === 'home-page') {
    renderHome();
  }
  // Re-render product detail if on product page
  if (document.body.id === 'product-page') {
    renderProductDetails();
  }
}

function getAddresses() {
  return JSON.parse(localStorage.getItem(STORAGE.ADDRESSES)) || [];
}

function saveAddresses(addresses) {
  localStorage.setItem(STORAGE.ADDRESSES, JSON.stringify(addresses));
}

function getSelectedAddressId() {
  return localStorage.getItem(STORAGE.SELECTED_ADDRESS);
}

function setSelectedAddressId(id) {
  if (id) localStorage.setItem(STORAGE.SELECTED_ADDRESS, id);
  else localStorage.removeItem(STORAGE.SELECTED_ADDRESS);
}

function getOrders() {
  return JSON.parse(localStorage.getItem(STORAGE.ORDERS)) || [];
}

function saveOrders(orders) {
  localStorage.setItem(STORAGE.ORDERS, JSON.stringify(orders));
}

function setLastOrder(order) {
  localStorage.setItem(STORAGE.LAST_ORDER, JSON.stringify(order));
}

// -------------------- UI Helpers --------------------
function formatPrice(amount) {
  return '₹' + Number(amount).toLocaleString('en-IN');
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function renderStars(rating) {
  let html = '';
  const rounded = Math.round(rating);
  for (let i = 1; i <= 5; i++) {
    const fill = i <= rounded ? '#ffa41c' : '#ddd';
    html += `<svg class="star" width="16" height="16" viewBox="0 0 24 24" fill="${fill}" aria-hidden="true"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`;
  }
  return `<span class="stars">${html}<span class="rating-text">${rating.toFixed(1)}</span></span>`;
}

function showToast(message, type = 'success') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }
  const toast = document.createElement('div');
  toast.className = `toast ${type === 'error' ? 'error' : ''}`;
  toast.textContent = message;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

function getCartItemQuantity(productId) {
  const cart = getCart();
  const item = cart.find(i => i.productId === productId);
  return item ? item.quantity : 0;
}

// -------------------- Cart Logic --------------------
function getCartItemsWithProducts() {
  return getCart()
    .map((item) => ({ ...item, product: products.find((p) => p.id === item.productId) }))
    .filter((item) => item.product);
}

function getCartTotal() {
  return getCartItemsWithProducts().reduce((total, item) => total + item.product.price * item.quantity, 0);
}

function addToCart(productId, quantity = 1) {
  const product = products.find((p) => p.id === productId);
  if (!product || product.stock < 1) {
    showToast('Product is out of stock', 'error');
    return;
  }
  const cart = getCart();
  const item = cart.find((i) => i.productId === productId);
  if (item) {
    if (item.quantity + quantity > product.stock) {
      showToast('Not enough stock available', 'error');
      return;
    }
    item.quantity += quantity;
  } else {
    cart.push({ productId, quantity });
  }
  saveCart(cart);
  showToast('Product added to cart', 'success');
}

function removeFromCart(productId) {
  const cart = getCart().filter((i) => i.productId !== productId);
  saveCart(cart);
  showToast('Product removed from cart', 'success');
  if (document.body.id === 'cart-page') renderCart();
  if (document.body.id === 'checkout-page') renderCheckoutSummary();
}

function updateQuantity(productId, change) {
  const cart = getCart();
  const item = cart.find((i) => i.productId === productId);
  if (!item) return;
  const product = products.find((p) => p.id === productId);
  item.quantity += change;
  if (item.quantity <= 0) {
    removeFromCart(productId);
    return;
  }
  if (product && item.quantity > product.stock) {
    item.quantity = product.stock;
    showToast('Maximum available stock reached', 'error');
  }
  saveCart(cart);
  if (document.body.id === 'cart-page') renderCart();
  if (document.body.id === 'checkout-page') renderCheckoutSummary();
}

function clearCart() {
  saveCart([]);
}

// -------------------- Navbar --------------------
function updateCartCount() {
  const count = getCart().reduce((sum, item) => sum + item.quantity, 0);
  const el = document.getElementById('cart-count');
  if (el) {
    el.textContent = count;
    el.style.display = count > 0 ? 'flex' : 'none';
  }
}

function initSearch() {
  const form = document.getElementById('search-form');
  const input = document.getElementById('search-input');
  if (!form || !input) return;
  form.addEventListener('submit', (e) => {
    const term = input.value.trim();
    if (document.body.id === 'home-page') {
      e.preventDefault();
      renderHome(term);
    } else {
      e.preventDefault();
      window.location.href = term ? `index.html?search=${encodeURIComponent(term)}` : 'index.html';
    }
  });
}

// -------------------- Home Page --------------------
function createProductCard(product) {
  const outOfStock = product.stock <= 0;
  const title = escapeHtml(product.title);
  const cartQty = getCartItemQuantity(product.id);
  
  if (outOfStock) {
    return `
      <article class="product-card">
        <span class="badge">Out of Stock</span>
        <a href="product.html?id=${product.id}">
          <img src="${product.image}" alt="${title}" loading="lazy" onerror="setPlaceholder(this)">
        </a>
        <h3><a href="product.html?id=${product.id}">${title}</a></h3>
        <div class="rating">${renderStars(product.rating)}</div>
        <div class="price">${formatPrice(product.price)}</div>
        <div class="card-actions">
          <button class="btn btn-light" data-action="view" data-id="${product.id}">View Details</button>
          <button class="btn btn-primary" disabled>Out of Stock</button>
        </div>
      </article>
    `;
  }
  
  if (cartQty > 0) {
    // Show quantity controls
    return `
      <article class="product-card in-cart">
        <a href="product.html?id=${product.id}">
          <img src="${product.image}" alt="${title}" loading="lazy" onerror="setPlaceholder(this)">
        </a>
        <h3><a href="product.html?id=${product.id}">${title}</a></h3>
        <div class="rating">${renderStars(product.rating)}</div>
        <div class="price">${formatPrice(product.price)}</div>
        <div class="qty-controls-card">
          <button class="qty-btn minus" data-action="dec" data-id="${product.id}" aria-label="Decrease quantity">−</button>
          <span class="qty-value">${cartQty}</span>
          <button class="qty-btn plus" data-action="inc" data-id="${product.id}" aria-label="Increase quantity">+</button>
        </div>
      </article>
    `;
  }
  
  // Show add to cart button
  return `
    <article class="product-card">
      <a href="product.html?id=${product.id}">
        <img src="${product.image}" alt="${title}" loading="lazy" onerror="setPlaceholder(this)">
      </a>
      <h3><a href="product.html?id=${product.id}">${title}</a></h3>
      <div class="rating">${renderStars(product.rating)}</div>
      <div class="price">${formatPrice(product.price)}</div>
      <div class="card-actions">
        <button class="btn btn-light" data-action="view" data-id="${product.id}">View Details</button>
        <button class="btn btn-primary" data-action="add" data-id="${product.id}">Add to Cart</button>
      </div>
    </article>
  `;
}

function handleProductGridClick(e) {
  const btn = e.target.closest('button[data-action]');
  if (!btn) return;
  const id = parseInt(btn.dataset.id, 10);
  const action = btn.dataset.action;
  
  if (action === 'view') {
    window.location.href = `product.html?id=${id}`;
  } else if (action === 'add') {
    addToCart(id, 1);
  } else if (action === 'inc') {
    updateQuantity(id, 1);
  } else if (action === 'dec') {
    updateQuantity(id, -1);
  }
}

function renderHome(searchTerm = '') {
  const grid = document.getElementById('product-grid');
  if (!grid) return;
  const params = new URLSearchParams(window.location.search);
  const term = (searchTerm || params.get('search') || '').toLowerCase().trim();
  const searchInput = document.getElementById('search-input');
  if (searchInput && term && !searchTerm) searchInput.value = params.get('search');
  const filtered = term
    ? products.filter(
        (p) =>
          p.title.toLowerCase().includes(term) ||
          p.category.toLowerCase().includes(term) ||
          p.description.toLowerCase().includes(term)
      )
    : products;
  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="empty-state" style="grid-column: 1 / -1;">
        <h2>No products found</h2>
        <p>Try a different search term.</p>
      </div>`;
    return;
  }
  grid.innerHTML = filtered.map(createProductCard).join('');
}

// -------------------- Product Details Page --------------------
function renderProductDetails() {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id'), 10);
  const product = products.find((p) => p.id === id);
  const container = document.getElementById('product-detail');
  if (!container) return;
  if (!product) {
    container.innerHTML = `
      <div class="empty-state" style="grid-column: 1 / -1;">
        <h2>Product not found</h2>
        <a href="index.html" class="btn btn-primary">Continue Shopping</a>
      </div>`;
    return;
  }
  const title = escapeHtml(product.title);
  document.title = `${title} | Amazon`;
  const outOfStock = product.stock <= 0;
  const cartQty = getCartItemQuantity(product.id);
  
  let actionsHtml;
  if (outOfStock) {
    actionsHtml = `<button class="btn btn-primary" disabled>Out of Stock</button>`;
  } else if (cartQty > 0) {
    actionsHtml = `
      <div class="qty-controls-product">
        <button class="qty-btn minus" data-action="dec" data-id="${product.id}" aria-label="Decrease quantity">−</button>
        <span class="qty-value">${cartQty}</span>
        <button class="qty-btn plus" data-action="inc" data-id="${product.id}" aria-label="Increase quantity">+</button>
      </div>
    `;
  } else {
    actionsHtml = `<button class="btn btn-primary" id="add-to-cart-btn">Add to Cart</button>`;
  }
  
  container.innerHTML = `
    <div class="image-col">
      <img src="${product.image}" alt="${title}" onerror="setPlaceholder(this)">
    </div>
    <div class="info-col">
      <h1>${title}</h1>
      <div class="rating">${renderStars(product.rating)}</div>
      <hr style="border:0;border-top:1px solid var(--border);margin:1rem 0;">
      <div class="price-large">${formatPrice(product.price)}</div>
      <p class="stock ${outOfStock ? 'out' : 'in'}">
        ${outOfStock ? 'Out of Stock' : `In Stock (${product.stock} available)`}
      </p>
      <p class="desc">${escapeHtml(product.description)}</p>
      <div class="detail-actions">
        ${actionsHtml}
        <a href="cart.html" class="btn btn-secondary">Go to Cart</a>
      </div>
    </div>
  `;
  
  // Attach event listeners for quantity controls
  const plusBtn = container.querySelector('.qty-btn.plus');
  const minusBtn = container.querySelector('.qty-btn.minus');
  
  if (plusBtn) {
    plusBtn.addEventListener('click', () => updateQuantity(product.id, 1));
  }
  if (minusBtn) {
    minusBtn.addEventListener('click', () => updateQuantity(product.id, -1));
  }
  
  const addBtn = document.getElementById('add-to-cart-btn');
  if (addBtn) {
    addBtn.addEventListener('click', () => addToCart(product.id, 1));
  }
}

// -------------------- Cart Page --------------------
function handleCartClick(e) {
  const btn = e.target.closest('button[data-action]');
  if (!btn) return;
  const id = parseInt(btn.dataset.id, 10);
  const action = btn.dataset.action;
  if (action === 'inc') updateQuantity(id, 1);
  else if (action === 'dec') updateQuantity(id, -1);
  else if (action === 'remove') removeFromCart(id);
}

function renderCart() {
  const itemsContainer = document.getElementById('cart-items');
  const summaryContainer = document.getElementById('cart-summary');
  if (!itemsContainer || !summaryContainer) return;
  const cartItems = getCartItemsWithProducts();
  if (cartItems.length === 0) {
    itemsContainer.innerHTML = `
      <div class="empty-state">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 6h15l-1.5 9h-12z"/><circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/><path d="M6 6L5 3H2"/></svg>
        <h2>Your cart is empty</h2>
        <p>Looks like you haven't added anything yet.</p>
        <a href="index.html" class="btn btn-primary">Continue Shopping</a>
      </div>`;
    summaryContainer.innerHTML = '';
    return;
  }
  const itemsHtml = cartItems
    .map(
      ({ product, quantity }) => `
      <div class="cart-item" data-id="${product.id}">
        <img src="${product.image}" alt="${escapeHtml(product.title)}" onerror="setPlaceholder(this)">
        <div class="item-info">
          <h3>${escapeHtml(product.title)}</h3>
          <p>${escapeHtml(product.category)}</p>
          <p class="stock ${product.stock > 0 ? 'in' : 'out'}">${product.stock > 0 ? 'In Stock' : 'Out of Stock'}</p>
        </div>
        <div class="qty-controls">
          <button data-action="dec" data-id="${product.id}">-</button>
          <span>${quantity}</span>
          <button data-action="inc" data-id="${product.id}">+</button>
        </div>
        <div class="item-price">
          ${formatPrice(product.price * quantity)}
          <br><small>${formatPrice(product.price)} each</small>
          <br><button class="btn btn-danger" style="margin-top:0.5rem;font-size:0.8rem;padding:0.3rem 0.6rem;" data-action="remove" data-id="${product.id}">Remove</button>
        </div>
      </div>`
    )
    .join('');
  itemsContainer.innerHTML = itemsHtml;
  const total = getCartTotal();
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  summaryContainer.innerHTML = `
    <h2>Subtotal (${itemCount} item${itemCount !== 1 ? 's' : ''})</h2>
    <div class="summary-row total"><span>Total</span><span>${formatPrice(total)}</span></div>
    <a href="checkout.html" class="btn btn-primary" style="width:100%;margin-top:0.5rem;">Proceed to Checkout</a>
  `;
}

// -------------------- Checkout Page --------------------
let editingAddressId = null;

function renderAddressList() {
  const list = document.getElementById('address-list');
  const noAddressMsg = document.getElementById('no-address-msg');
  if (!list) return;
  const addresses = getAddresses();
  const selectedId = getSelectedAddressId();
  if (addresses.length === 0) {
    list.innerHTML = '';
    if (noAddressMsg) noAddressMsg.classList.remove('hidden');
    openAddressForm();
    return;
  }
  if (noAddressMsg) noAddressMsg.classList.add('hidden');
  list.innerHTML = addresses
    .map(
      (addr) => `
      <div class="address-card ${addr.id === selectedId ? 'selected' : ''}" data-id="${addr.id}">
        <div class="name">${escapeHtml(addr.fullName)}</div>
        <div class="phone">${escapeHtml(addr.mobile)}</div>
        <div class="address-lines">
          ${escapeHtml(addr.house)}, ${escapeHtml(addr.street)}<br>
          ${escapeHtml(addr.city)}, ${escapeHtml(addr.state)} - ${escapeHtml(addr.pincode)}
        </div>
        <div class="actions">
          <button class="btn btn-secondary" data-action="select" data-id="${addr.id}">Deliver Here</button>
          <button class="btn btn-light" data-action="edit" data-id="${addr.id}">Edit</button>
          <button class="btn btn-danger" data-action="delete" data-id="${addr.id}">Delete</button>
        </div>
      </div>`
    )
    .join('');
}

function handleAddressCardClick(e) {
  const btn = e.target.closest('button[data-action]');
  if (!btn) return;
  const id = btn.dataset.id;
  const action = btn.dataset.action;
  if (action === 'select') selectAddress(id);
  else if (action === 'edit') {
    const address = getAddresses().find((a) => a.id === id);
    openAddressForm(address);
  } else if (action === 'delete') {
    deleteAddress(id);
  }
}

function openAddressForm(address = null) {
  const formContainer = document.getElementById('address-form-container');
  const formTitle = document.getElementById('address-form-title');
  const form = document.getElementById('address-form');
  if (!formContainer || !form) return;
  form.reset();
  editingAddressId = address ? address.id : null;
  if (formTitle) formTitle.textContent = address ? 'Edit Address' : 'Add New Address';
  if (address) {
    document.getElementById('addr-name').value = address.fullName;
    document.getElementById('addr-mobile').value = address.mobile;
    document.getElementById('addr-house').value = address.house;
    document.getElementById('addr-street').value = address.street;
    document.getElementById('addr-city').value = address.city;
    document.getElementById('addr-state').value = address.state;
    document.getElementById('addr-pincode').value = address.pincode;
  }
  formContainer.classList.remove('hidden');
  formContainer.scrollIntoView({ behavior: 'smooth' });
}

function closeAddressForm() {
  const formContainer = document.getElementById('address-form-container');
  if (formContainer) formContainer.classList.add('hidden');
  editingAddressId = null;
}

function handleAddressSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const address = {
    id: editingAddressId || Date.now().toString(),
    fullName: document.getElementById('addr-name').value.trim(),
    mobile: document.getElementById('addr-mobile').value.trim(),
    house: document.getElementById('addr-house').value.trim(),
    street: document.getElementById('addr-street').value.trim(),
    city: document.getElementById('addr-city').value.trim(),
    state: document.getElementById('addr-state').value.trim(),
    pincode: document.getElementById('addr-pincode').value.trim()
  };
  let addresses = getAddresses();
  if (editingAddressId) {
    addresses = addresses.map((a) => (a.id === editingAddressId ? address : a));
  } else {
    addresses.push(address);
  }
  saveAddresses(addresses);
  setSelectedAddressId(address.id);
  closeAddressForm();
  renderAddressList();
  showToast('Address saved', 'success');
}

function deleteAddress(id) {
  if (!confirm('Are you sure you want to delete this address?')) return;
  let addresses = getAddresses().filter((a) => a.id !== id);
  saveAddresses(addresses);
  const selected = getSelectedAddressId();
  if (selected === id) setSelectedAddressId(addresses.length ? addresses[0].id : null);
  renderAddressList();
  showToast('Address deleted', 'success');
}

function selectAddress(id) {
  setSelectedAddressId(id);
  renderAddressList();
}

function renderCheckoutSummary() {
  const container = document.getElementById('checkout-summary');
  if (!container) return;
  const cartItems = getCartItemsWithProducts();
  if (cartItems.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <h2>Your cart is empty</h2>
        <a href="index.html" class="btn btn-primary">Shop Now</a>
      </div>`;
    return;
  }
  const itemsHtml = cartItems
    .map(
      ({ product, quantity }) => `
      <div class="order-item">
        <img src="${product.image}" alt="${escapeHtml(product.title)}" onerror="setPlaceholder(this)">
        <div class="order-info">
          <h4>${escapeHtml(product.title)}</h4>
          <p>Qty: ${quantity}</p>
        </div>
        <div class="order-price">${formatPrice(product.price * quantity)}</div>
      </div>`
    )
    .join('');
  const total = getCartTotal();
  container.innerHTML = `
    <h2>Order Summary</h2>
    ${itemsHtml}
    <div class="summary-row total"><span>Order Total</span><span>${formatPrice(total)}</span></div>
    <button id="place-order-btn" class="btn btn-primary" style="width:100%;margin-top:1rem;">Place Order</button>
  `;
  document.getElementById('place-order-btn').addEventListener('click', placeOrder);
}

function renderCheckout() {
  renderAddressList();
  renderCheckoutSummary();
  const addBtn = document.getElementById('add-address-btn');
  const cancelBtn = document.getElementById('cancel-address-btn');
  const form = document.getElementById('address-form');
  const addressList = document.getElementById('address-list');
  if (addBtn) addBtn.addEventListener('click', () => openAddressForm());
  if (cancelBtn) cancelBtn.addEventListener('click', closeAddressForm);
  if (form) form.addEventListener('submit', handleAddressSubmit);
  if (addressList) addressList.addEventListener('click', handleAddressCardClick);
}

function placeOrder() {
  const cartItems = getCartItemsWithProducts();
  if (cartItems.length === 0) {
    showToast('Your cart is empty', 'error');
    return;
  }
  const addresses = getAddresses();
  const selectedId = getSelectedAddressId();
  const address = addresses.find((a) => a.id === selectedId);
  if (!address) {
    showToast('Please select a delivery address', 'error');
    if (getAddresses().length === 0) openAddressForm();
    return;
  }
  const total = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const deliveryDate = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toLocaleDateString(undefined, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  const order = {
    id: Date.now().toString(),
    date: new Date().toLocaleString(),
    deliveryDate,
    address,
    items: cartItems.map(({ product, quantity }) => ({ product, quantity, price: product.price })),
    total
  };
  const orders = getOrders();
  orders.push(order);
  saveOrders(orders);
  setLastOrder(order);
  clearCart();
  showToast('Order placed successfully', 'success');
  setTimeout(() => {
    window.location.href = 'order-success.html';
  }, 600);
}

// -------------------- Order Success Page --------------------
function renderOrderSuccess() {
  const container = document.getElementById('success-content');
  if (!container) return;
  const order = JSON.parse(localStorage.getItem(STORAGE.LAST_ORDER));
  if (!order) {
    container.innerHTML = `
      <div class="empty-state">
        <h2>No recent order found</h2>
        <a href="index.html" class="btn btn-primary">Continue Shopping</a>
      </div>`;
    return;
  }
  const itemsHtml = order.items
    .map(
      (item) => `
      <div class="order-item">
        <img src="${item.product.image}" alt="${escapeHtml(item.product.title)}" width="50" height="50" onerror="setPlaceholder(this)">
        <div class="order-info">
          <h4>${escapeHtml(item.product.title)}</h4>
          <p>Qty: ${item.quantity}</p>
        </div>
        <div class="order-price">${formatPrice(item.price * item.quantity)}</div>
      </div>`
    )
    .join('');
  container.innerHTML = `
    <div class="success-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 13l4 4L19 7"/></svg></div>
    <h1>Order Placed Successfully</h1>
    <p>Thank you for shopping with Amazon.</p>
    <div class="delivery-date">Estimated delivery: <strong>${order.deliveryDate}</strong></div>
    <div class="success-detail">
      <h3>Delivery Address</h3>
      <p>
        <strong>${escapeHtml(order.address.fullName)}</strong> (${escapeHtml(order.address.mobile)})<br>
        ${escapeHtml(order.address.house)}, ${escapeHtml(order.address.street)}<br>
        ${escapeHtml(order.address.city)}, ${escapeHtml(order.address.state)} - ${escapeHtml(order.address.pincode)}
      </p>
    </div>
    <div class="success-detail">
      <h3>Order Items</h3>
      ${itemsHtml}
      <div class="summary-row total"><span>Total</span><span>${formatPrice(order.total)}</span></div>
    </div>
    <a href="index.html" class="btn btn-primary" style="margin-top:1.5rem;">Continue Shopping</a>
  `;
}

// -------------------- App Initialization --------------------
document.addEventListener('DOMContentLoaded', () => {
  updateCartCount();
  initSearch();
  switch (document.body.id) {
    case 'home-page':
      renderHome();
      break;
    case 'product-page':
      renderProductDetails();
      break;
    case 'cart-page':
      renderCart();
      break;
    case 'checkout-page':
      renderCheckout();
      break;
    case 'success-page':
      renderOrderSuccess();
      break;
  }

  // Attach delegated event listeners for dynamic content
  const productGrid = document.getElementById('product-grid');
  if (productGrid) productGrid.addEventListener('click', handleProductGridClick);

  const cartItemsContainer = document.getElementById('cart-items');
  if (cartItemsContainer) cartItemsContainer.addEventListener('click', handleCartClick);
  
  const productDetail = document.getElementById('product-detail');
  if (productDetail) productDetail.addEventListener('click', handleProductGridClick);
});