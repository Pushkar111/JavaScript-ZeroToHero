const main = document.querySelector("main");

for (let i = 2; i <= 10; i++) {
    const myHTML = `
        <div class="card" data-id="${i}">
            <div class="image_container">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="image">
                    <path
                        d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z">
                    </path>
                </svg>
            </div>
            <div class="title">
                <span>Product ${i}</span>
            </div>
            <div class="size">
                <span>Size</span>
                <ul class="list-size">
                    <li class="item-list"><button class="item-list-button">37</button></li>
                    <li class="item-list"><button class="item-list-button">38</button></li>
                    <li class="item-list"><button class="item-list-button">39</button></li>
                    <li class="item-list"><button class="item-list-button">40</button></li>
                    <li class="item-list"><button class="item-list-button">41</button></li>
                </ul>
            </div>
            <div class="action">
                <div class="price">
                    <span>$${i}0.00</span>
                </div>
                <button class="cart-button add-to-cart">
                    <svg class="cart-icon" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                            stroke-linejoin="round" stroke-linecap="round"></path>
                    </svg>
                    <span>Add to cart</span>
                </button>
            </div>
        </div>
    `;
    main.insertAdjacentHTML("beforeend", myHTML);
}

document.addEventListener('DOMContentLoaded', () => {
    const cartCountElement = document.getElementById("cart-count");
    let cartCount = 0;

    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    addToCartButtons.forEach((button) => {
        button.addEventListener('click', () => {
            cartCount++;
            cartCountElement.textContent = cartCount;
        });
    });
});
