    document.addEventListener("DOMContentLoaded", function() {
        document.querySelectorAll(".product").forEach(product => {
            let quantityElement = product.querySelector(".quantity");
            let decreaseButton = product.querySelector(".decrease");
            let increaseButton = product.querySelector(".increase");

            increaseButton.addEventListener("click", function() {
                let currentQuantity = parseInt(quantityElement.textContent);
                quantityElement.textContent = currentQuantity + 1;
            });

            decreaseButton.addEventListener("click", function() {
                let currentQuantity = parseInt(quantityElement.textContent);
                if (currentQuantity > 1) {
                    quantityElement.textContent = currentQuantity - 1;
                }
            });
        });
    });