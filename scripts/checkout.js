"use strict"

const checkoutBtn = document.getElementById("checkoutBtn");


window.onload = () =>{
    displayCartItems();
    checkoutBtn.onclick = checkoutCart;
}

const displayCartItems = () =>{

    let cartItems = JSON.parse(sessionStorage.getItem('cart')) || [];
    let cartItemCount = document.getElementById("cartItemCount");
    let cartItemsContainer = document.getElementById('cartItems');
    let finalCost = document.getElementById("finalCost");
    let total = 0;
    cartItemsContainer.innerHTML = '';
    cartItemCount.innerText = cartItems.length


        cartItems.forEach(item => {
            
            let itemElement = document.createElement('p');
            let priceInteger = parseInt(item.item.slice(1));
            let costItem = priceInteger * item.amount;
            total += costItem;
            itemElement.innerHTML = `<a href="products.html">${item.title}</a><span> x ${item.amount}</span> <span class="price">${costItem}$</span>`;
            cartItemsContainer.appendChild(itemElement);
        });
        
        finalCost.innerText = total + "$";
}

const checkoutCart = () =>{
    sessionStorage.removeItem('cart'); 
    window.location.href = 'Index.html';
}