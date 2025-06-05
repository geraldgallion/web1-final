// === DYNAMICALLY INJECT CSS ===
const styles = `
/* CSS Styles here */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Segoe UI', sans-serif;
  
  color: #333;
  line-height: 1.6;
  overflow-x: hidden;
  scroll-behavior: smooth;
}h2{
text-color: black ;
}
//== ABOUT US==//

/* Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Body and Layout */
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: url('KUPAL1.JPEG') center/cover no-repeat;
   
  color: #333;
  line-height: 1.6;
}

.container {
  width: 90%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 1rem;
}

/* Header */
.site-header {
  background-color: #fff;
  border-bottom: 1px solid #eee;
  padding: 1rem 0;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

.logo {
  font-size: 2rem;
  font-weight: bold;
  color: rgb(223, 77, 77);
}

.nav {
  margin-top: 0.5rem;
}

.nav__list {
  display: flex;
  list-style: none;
  gap: 1.5rem;
}

.nav__link {
  text-decoration: none;
  color: #333;
  font-weight: 600;
}

.nav__link:hover,
.nav__link.active {
  color: #ff4d4d;
}

/* About Section */
.about-section {
  background-color: #fff;
  padding: 3rem 1rem;
  margin-top: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

.about-section h2 {
  font-size: 2rem;
  text-align: center;
  margin-bottom: 1.5rem;
}

.about-section p {
  margin-bottom: 1rem;
  font-size: 1.1rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

/* Footer */
.site-footer {
  background-color: #222;
  color: #aaa;
  text-align: center;
  padding: 1rem;
  margin-top: 3rem;
}




//==HOME==//



/* Reset & Base Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Segoe UI', sans-serif;
  background: url('KUPAL1.JPEG') center/cover no-repeat;
  
  color: #333;
  line-height: 1.6;
  overflow-x: hidden;
  scroll-behavior: smooth;
}

/* Container */
.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
}

/* Header */
.site-header {
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 999;
  animation: slideDown 0.6s ease forwards;
}
@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.header-flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo {
  font-size: 2rem;
  font-weight: bold;
  color: #ff4d4d;
}
.nav__list {
  list-style: none;
  display: flex;
  gap: 2rem;
}
.nav__link {
  text-decoration: none;
  color: #333;
  font-weight: 600;
  position: relative;
  transition: color 0.3s ease;
}
.nav__link:hover,
.nav__link.active {
  color: #ff4d4d;
}
.nav__link::after {
  content: "";
  position: absolute;
  width: 0%;
  height: 2px;
  bottom: -4px;
  left: 0;
  background-color: #ff4d4d;
  transition: width 0.3s ease-in-out;
}
.nav__link:hover::after,
.nav__link.active::after {
  width: 100%;
}

/* Hero Section */
.hero {
  background: url('KUPAL1.JPEG') center/cover no-repeat;
  color: #b08ab7;
  text-align: center;
  padding: 6rem 1rem;
  border-radius: 8px;
  animation: fadeInHero 1.5s ease forwards;
}
@keyframes fadeInHero {
  0% {
    opacity: 0;
    transform: scale(1.05);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
.hero__content h2 {
  font-size: 3rem;
  margin-bottom: 1rem;
  transition: all 0.6s ease;
}
.hero__content p {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  transition: all 0.6s ease;
}

/* Button */
.btn {
  display: inline-block;
  background-color: #ff4d4d;
  color: white;
  padding: 0.8rem 2rem;
  border: none;
  text-decoration: none;
  font-weight: bold;
  border-radius: 5px;
  transition: background-color 0.3s ease, transform 0.3s ease;
}
.btn:hover {
  background-color: #e60000;
  transform: translateY(-3px);
}

/* Animation Classes */
.fade-up {
  opacity: 0;
  transform: translateY(30px);
  animation: fadeUp 1s ease forwards;
}
.delay-1 { animation-delay: 0.3s; }
.delay-2 { animation-delay: 0.6s; }

@keyframes fadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive */
@media (max-width: 768px) {
  .nav__list {
    flex-direction: column;
    background: white;
    position: absolute;
    right: 0;
    top: 60px;
    width: 100%;
    display: none;
  }
  .hero__content h2 {
    font-size: 2rem;
  }
  .hero__content p {
    font-size: 1rem;
  }
}



//==CHECKOUT==//



/* Basic styles for checkout page */
body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  margin: 0;
  padding: 0;
}

.container {
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
}

.site-header {
  background-color: #333;
  color: white;
  padding: 1rem 0;
  text-align: center;
}

.site-header .logo {
  font-size: 2rem;
}

.nav__list {
  list-style: none;
  padding: 0;
}

.nav__list li {
  display: inline;
  margin: 0 10px;
}

.nav__link {
  color: white;
  text-decoration: none;
}

.checkout-section {
  background-color: white;
  padding: 2rem;
  margin-top: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.checkout-section h2 {
  text-align: center;
  margin-bottom: 20px;
}

form {
  display: flex;
  flex-direction: column;
}

form label {
  margin-bottom: 5px;
  font-weight: bold;
}

form input,
form textarea,
form select {
  margin-bottom: 15px;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}

form button {
  padding: 10px;
  background-color: #ff4d4d;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.1rem;
}

form button:hover {
  background-color: #e60000;
}

.site-footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 1rem;
  position: fixed;
  width: 100%;
  bottom: 0;
}




//==PRODUCT==//



/* General Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  background-color: #f8f8f8;
  color: #333;
  line-height: 1.6;
}

.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
}

/* Header */
.site-header {
  background-color: #fff;
  padding: 1rem 0;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 100;
  
}

.logo {
  font-size: 2rem;
  font-weight: bold;
  color: #ff4d4d;
  user-select: none;
}

nav {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav__list {
  list-style: none;
  display: flex;
  gap: 1.5rem;
}

.nav__link {
  text-decoration: none;
  color: #333;
  font-weight: bold;
  position: relative;
  padding-bottom: 3px;
  transition: color 0.3s ease;
  user-select: none;
}

.nav__link:hover,
.nav__link.active {
  color: #ff4d4d;
}

/* Cart icon with count */
.cart-container {
  position: relative;
  cursor: pointer;
  user-select: none;
}

.cart-icon {
  font-size: 1.8rem;
  color: #ff4d4d;
}

.cart-count {
  position: absolute;
  top: -8px;
  right: -10px;
  background-color: #e60000;
  color: white;
  border-radius: 50%;
  padding: 2px 7px;
  font-size: 0.8rem;
  font-weight: bold;
  box-shadow: 0 0 3px #e60000;
  user-select: none;
}

/* Product Section */
.product-section h2 {
  text-align: center;
  margin: 2rem 0;
  font-size: 2rem;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
  padding: 1rem 0;
}

.product-item {
  background-color: #fff;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0,0,0,0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;
  user-select: none;
}

.product-item:hover {
  transform: translateY(-8px) scale(1.03);
  box-shadow: 0 8px 20px rgba(0,0,0,0.15);
}

.product-item img {
  max-width: 100%;
  height: auto;
  border-radius: 6px;
  transition: transform 0.4s ease;
  user-select: none;
}

.product-item:hover img {
  transform: scale(1.1);
}

.product-item h3 {
  margin: 1rem 0 0.5rem;
  font-size: 1.1rem;
  color: #222;
}

.product-item p {
  color: #666;
  font-weight: 600;
  margin-bottom: 1rem;
  user-select: text;
}

/* Add to Cart Button */
.btn {
  display: inline-block;
  margin-top: 0.5rem;
  padding: 0.5rem 1.25rem;
  background-color: #ff4d4d;
  color: #fff;
  border-radius: 25px;
  text-decoration: none;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  border: none;
  outline: none;
  transition: background 0.3s ease, transform 0.2s ease;
  user-select: none;
}

.btn:hover:not(.added) {
  background-color: #e60000;
  transform: scale(1.05);
}

/* Animation for adding to cart */
@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
}

.btn.added {
  background-color: #28a745 !important;
  animation: pulse 0.5s ease;
  pointer-events: none;
}

/* Footer */
.site-footer {
  text-align: center;
  padding: 1rem;
  background-color: #222;
  color: #aaa;
  margin-top: 3rem;
  user-select: none;
}

/* Responsive */
@media (max-width: 480px) {
  .product-item h3 {
    font-size: 1rem;
  }
  .btn {
    font-size: 0.9rem;
    padding: 0.4rem 1rem;
  }
}


.cart-sidebar {
  position: fixed;
  top: 0;
  right: -350px;
  width: 350px;
  height: 100%;
  background-color: #fff;
  box-shadow: -4px 0 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
  z-index: 1000;
  overflow-y: auto;
  transition: right 0.3s ease;
}

.cart-sidebar.open {
  right: 0;
}

.cart-sidebar h2 {
  font-size: 1.4rem;
  margin-bottom: 20px;
  color: #222;
}

.cart-item {
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
}

.cart-item img {
  width: 70px;
  height: 70px;
  object-fit: cover;
  border-radius: 5px;
}

.cart-item-details {
  flex-grow: 1;
}

.cart-item-details h4 {
  font-size: 1rem;
  margin: 0;
}

.cart-item-details p {
  font-size: 0.9rem;
  color: #444;
  margin: 5px 0 0;
}

.close-cart {
  position: absolute;
  top: 15px;
  right: 15px;
  font-size: 1.5rem;
  background: none;
  border: none;
  cursor: pointer;
  color: #aaa;
}


.remove-btn {
  background-color: #ff4d4d;
  border: none;
  color: white;
  padding: 4px 8px;
  margin-top: 5px;
  border-radius: 3px;
  cursor: pointer;
  font-size: 0.8rem;
  transition: background-color 0.2s;
}

.remove-btn:hover {
  background-color: #e60000;
}


#place-order-btn {
  background-color: #28a745;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  width: 100%;
  margin-top: 1rem;
  transition: background-color 0.3s;
}

#place-order-btn:hover {
  background-color: #218838;
}

.order-summary ul li {
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  font-size: 1rem;
  border-bottom: 1px dashed #ccc;
}




`;
const styleTag = document.createElement('style');
styleTag.innerHTML = styles;
document.head.appendChild(styleTag);

// === JAVASCRIPT LOGIC ===
let cartItems = [];

// Add to Cart Logic
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', event => {
    event.preventDefault();

    const productItem = button.closest('.product-item');
    const productName = productItem.querySelector('h3').textContent;
    const productPrice = parseFloat(productItem.querySelector('p').textContent.replace(/[^\d.]/g, ''));
    const productImage = productItem.querySelector('img').src;

    cartItems.push({ name: productName, price: productPrice, image: productImage });

    document.getElementById('cart-count').textContent = cartItems.length;

    button.classList.add('added');
    button.textContent = 'NA ADD NA!';
    setTimeout(() => {
      button.classList.remove('added');
      button.textContent = 'Add to Cart';
    }, 1500);

    updateCartSidebar();
  });
});

// Update Cart Sidebar
function updateCartSidebar() {
  const cartContainer = document.getElementById('cart-items');
  cartContainer.innerHTML = '';

  cartItems.forEach((item, index) => {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('cart-item');

    itemDiv.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div class="cart-item-details">
        <h4>${item.name}</h4>
        <p>₱${item.price.toLocaleString()}</p>
        <button class="remove-btn" data-index="${index}">Remove</button>
      </div>
    `;
    cartContainer.appendChild(itemDiv);
  });

  // Display Total
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);
  const totalDiv = document.createElement('div');
  totalDiv.style.marginTop = '1rem';
  totalDiv.style.fontWeight = 'bold';
  totalDiv.textContent = `Total: ₱${total.toLocaleString(undefined, { minimumFractionDigits: 2 })}`;
  cartContainer.appendChild(totalDiv);

  // Remove Button Logic
  document.querySelectorAll('.remove-btn').forEach(button => {
    button.addEventListener('click', (e) => {
      const index = parseInt(e.target.getAttribute('data-index'));
      cartItems.splice(index, 1);
      updateCartSidebar();
      document.getElementById('cart-count').textContent = cartItems.length;
    });
  });
}

// Open Cart Sidebar
document.querySelector('.cart-container').addEventListener('click', () => {
  document.getElementById('cart-sidebar').classList.add('open');
});

// Close Cart Sidebar
document.getElementById('close-cart').addEventListener('click', () => {
  document.getElementById('cart-sidebar').classList.remove('open');
});

document.getElementById('place-order-btn').addEventListener('click', function () {
  if (cartItems.length > 0) {
    alert('Order placed successfully!');
    cartItems = [];
    document.getElementById('cart-count').textContent = cartItems.length;
    updateCartSidebar();
  } else {
    alert('Your cart is empty.');
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name && email && message) {
      formMessage.textContent = `Thanks for contacting us, ${name}! We'll reply shortly.`;
      form.reset();
    } else {
      formMessage.textContent = "Please fill out all fields.";
      formMessage.style.color = "red";
    }
  });
});


function placeOrder() {
  const cart = JSON.parse(localStorage.getItem('cartItems')) || [];
  if (cart.length === 0) {
    alert("Wala pang laman ang cart!");
    return;
  }
  // Proceed to order confirmation
  window.location.href = 'order-confirmation.html';
}

// ALLIN.JS

document.addEventListener('DOMContentLoaded', () => {
  const cartButtons = document.querySelectorAll('.add-to-cart');

  cartButtons.forEach(button => {
    button.addEventListener('click', () => {
      const productItem = button.closest('.product-item');
      const name = productItem.querySelector('h3').textContent;
      const priceText = productItem.querySelector('p').textContent;
      const price = parseFloat(priceText.replace(/[^\d.]/g, ''));
      let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

      const existing = cartItems.find(item => item.name === name);
      if (existing) {
        existing.quantity += 1;
      } else {
        cartItems.push({ name, price, quantity: 1 });
      }

      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      updateCartCount();
    });
  });

  function updateCartCount() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const count = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const cartCountElem = document.getElementById('cart-count');
    if (cartCountElem) {
      cartCountElem.textContent = count;
    }
  }

  updateCartCount();
});
confirmBtn.addEventListener('click', () => {
  summarySection.style.display = 'none';
  confirmation.style.display = 'block';
  localStorage.removeItem('cartItems');
  const cartCount = document.getElementById('cart-count');
  if (cartCount) cartCount.textContent = '0';

  
});function addToCart(product) {
  const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  const existingItem = cartItems.find(item => item.name === product.name);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cartItems.push({ name: product.name, price: product.price, quantity: 1 });
  }

  localStorage.setItem('cartItems', JSON.stringify(cartItems));
  updateCartCount(); // optional
}

