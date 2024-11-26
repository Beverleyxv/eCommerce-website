// Retrieve cart data from localStorage
const cart = JSON.parse(localStorage.getItem('cart-page')) || [];

// Select the cart elements
const cartItemsContainer = document.querySelector('.cart-items');
const cartTotalElement = document.querySelector('.cart-total');

// Function to format price
function formatPrice(price) {
    return `$${price.toFixed(2)}`;
}

// Function to populate cart
function populateCart() {
    // Clear the container
    cartItemsContainer.innerHTML = '';

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
        cartTotalElement.textContent = 'Total: R0.00';
        return;
    }

    // Populate items
    let total = 0;
    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${item.name} - ${formatPrice(item.price)} 
            <button class="remove-btn" data-index="${index}">Remove</button>
        `;
        cartItemsContainer.appendChild(li);
        total += item.price;
    });

    // Update total
    cartTotalElement.textContent = `Total: ${formatPrice(total)}`;
}

// Function to remove item from cart
function removeFromCart(event) {
    if (!event.target.classList.contains('remove-btn')) return;

    const index = parseInt(event.target.dataset.index, 10);

    // Remove item from cart array
    cart.splice(index, 1);

    // Save updated cart to localStorage
    localStorage.setItem('cart-page', JSON.stringify(cart));

    // Update cart display
    populateCart();
}

// Event listener for removing items
cartItemsContainer.addEventListener('click', removeFromCart);

// Populate the cart on page load
populateCart();


