"use strict"



window.onload = () =>{

        const links = document.getElementsByClassName("add-cart");
        for (let i = 0; i < links.length; i++) {
            links[i].addEventListener("click", addItemToCart);
        }
    
}

const addItemToCart = (e) => {
    // find card body of button clicked 
    const cardBody = e.target.closest('.card-body');

    // retrieve info 
    const itemTitle = cardBody.querySelector('.card-title').innerText;
    const itemPrice = cardBody.querySelector('.card-text').innerText;

    let double = 0;
    // add new item to cart if not empty or create a new array
    const cart = JSON.parse(sessionStorage.getItem('cart')) || [];
    
    // search if item is inside cart
    for (let i = 0; i < cart.length; i++) {
        if (itemTitle === cart[i].title) {
            cart[i].amount = cart[i].amount + 1;
            console.log(cart[i].amount)
            sessionStorage.setItem('cart', JSON.stringify(cart));
            double = 1;
            break;
        }
    }

    // add new item to array
    if (double === 0) {
        const itemClicked = { title: itemTitle, item: itemPrice, amount: 1 };
        cart.push(itemClicked);
        sessionStorage.setItem('cart', JSON.stringify(cart));
    }
}

