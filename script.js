document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("searchInput");
    const productCards = document.querySelectorAll(".product-card");


    searchInput.addEventListener("keyup", function() {
        const filter = searchInput.value.toLowerCase();
        productCards.forEach(card => {
            const productName = card.querySelector("h3").textContent.toLowerCase();
            if (productName.includes(filter)) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }
        });
    });
});



