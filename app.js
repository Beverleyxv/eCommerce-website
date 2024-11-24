document.addEventListener('DOMContentLoaded', () => {
    const cart = [];
    const buttons = document.querySelectorAll('.add-to-cart');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const product = button.parentElement.querySelector('h3').textContent;
            alert(`${product} has been added to your cart!`);
            cart.push(product);
            console.log(cart);
        });
    });
});
