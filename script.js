

let cartCount = 0;

const cartButtons = document.querySelectorAll(".add-cart");
const cartDisplay = document.getElementById("cart-count");

cartButtons.forEach(button => {

  button.addEventListener("click", () => {

    cartCount++;

    cartDisplay.textContent = cartCount;

    button.innerText = "Added ✓";

    button.style.background = "green";

    setTimeout(() => {

      button.innerText = "Add to Cart";

      button.style.background = "#111";

    }, 1500);

  });

});