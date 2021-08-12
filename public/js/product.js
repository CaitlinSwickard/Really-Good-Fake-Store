const addToCartBtn = document.getElementsByClassName("add-to-cart");
console.log(addToCartBtn[0]);
  
const addToCart = async (event) => {
    const product_id = event.target.getAttribute("data-id");
    console.log(product_id);
    const response = await fetch("/api/cart/current", {
        method: "GET"
    });
    const currentCart = await response.json();
    console.log(currentCart);
    if (event.target.hasAttribute('data-id') && product_id) {
        if (!currentCart.includes(product_id)) {
            const response = await fetch(`/api/cart`, {
                method: "POST",
                body: JSON.stringify({ product_id }),
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            const currentCart = await response.json();
            console.log(currentCart);
            if (response.ok) {
                document.location.replace("/api/cart");
            } else {
                alert('Failed to add product to cart');
            }
        } else {
            alert("Product already in cart; please go to your cart to adjust quantity.")
        }
    }
};

for (let i = 0; i < addToCartBtn.length; i++) {
    const btn = addToCartBtn[i];
    btn.addEventListener("click", addToCart);
}



