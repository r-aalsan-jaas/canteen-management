document.addEventListener('DOMContentLoaded', () => {
    const cartItemsList = document.getElementById('cart-items-list');
    const clearCartButton = document.getElementById('clear-cart');
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    function displayCartItems() {
        cartItemsList.innerHTML = '';
        cartItems.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = `${item.name} - ₹${item.price}`;
            cartItemsList.appendChild(listItem);
        });
    }

    clearCartButton.addEventListener('click', () => {
        localStorage.removeItem('cartItems');
        displayCartItems();
        alert('Cart has been cleared!');
    });

    displayCartItems();
});
