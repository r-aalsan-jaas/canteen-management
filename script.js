document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('new-item-form');
    const menuItems = document.getElementById('menu-items');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const itemName = document.getElementById('item-name').value;
        const itemPrice = document.getElementById('item-price').value;

        if (itemName && itemPrice) {
            const newItem = document.createElement('li');
            newItem.innerHTML = `${itemName} - ₹${itemPrice} <button onclick="addToCart('${itemName}', ${itemPrice})">Add to Cart</button>`;
            menuItems.appendChild(newItem);

            form.reset();
        }
    });
});

function addToCart(name, price) {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.push({ name, price });
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    alert(`${name} has been added to the cart!`);
}
