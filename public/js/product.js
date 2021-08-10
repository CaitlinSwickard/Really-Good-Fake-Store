const addToCartBtn = document.querySelector(".add-to-cart");

const addToCart = async (event) => {
    const product_id = event.target.getAttribute("data-id");
    console.log(product_id);

    const currentCart = await fetch("/api/cart/current", {
        method: "GET"
    });

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
        
            console.log(response);
        
            if (response.ok) {
                // document.location.replace("/api/cart");
            } else {
                alert('Failed to add product to cart');
            }
        } else {
            alert("Product already in cart; please go to your cart to adjust quantity.")
        }
    }
};

addToCartBtn.addEventListener("click", addToCart);

