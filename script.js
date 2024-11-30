// Cart array to store added items 
let cart = [];

// Function to add items to the cart
function addToCart(item, price) {
    cart.push({ item, price });
    updateCart();
}

// Function to update the cart display
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');

    // Clear existing items
    cartItems.innerHTML = '';

    // Add each item to the cart
    let total = 0;
    cart.forEach((cartItem, index) => {
        const li = document.createElement('li');
        li.textContent = `${cartItem.item} - ₹${cartItem.price}`; // Fixed here: ₹ symbol correctly used
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = () => removeFromCart(index);
        li.appendChild(removeButton);
        cartItems.appendChild(li);
        total += cartItem.price; // Calculate total correctly
    });

    // Update total price
    totalElement.textContent = `Total: ₹${total}`; // Fixed here as well
}

// Function to remove items from the cart
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

// Function to handle checkout
function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
    } else {
        alert('Thank you for your order!');
        cart = [];
        updateCart();
    }
}

