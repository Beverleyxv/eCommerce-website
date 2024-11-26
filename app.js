

const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Initialize cart in localStorage
if (!localStorage.getItem('cart')) localStorage.setItem('cart', JSON.stringify([]));

// Add product to cart
function addToCart(event) {
    const productCard = event.target.closest('.product-card');
    const productId = productCard.dataset.id;
    const productName = productCard.querySelector('.product-name').textContent;
    const productPrice = parseFloat(productCard.querySelector('.product-price').textContent.replace('$', ''));

    const cart = JSON.parse(localStorage.getItem('cart'));
    const existingProduct = cart.find((item) => item.id === productId);

    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ id: productId, name: productName, price: productPrice, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${productName} added to your cart!`);
}

addToCartButtons.forEach((button) => button.addEventListener('click', addToCart));

