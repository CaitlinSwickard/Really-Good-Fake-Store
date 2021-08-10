const decreaseBtn = document.querySelector('#decrease');
const increaseBtn = document.querySelector('#increase');
const qtyField = document.querySelector("#qty");
const cartId = document.querySelector("#cartId");

const decreaseQty = async (event) => {
    event.preventDefault();

    let qty = parseInt(qtyField.textContent);
    if (qty > 0) {
        qty -= 1;
        qtyField.textContent = qty;
        const response = await fetch(`/api/cart/${cartId.textContent}`, {
            method: 'PUT',
            body: JSON.stringify({ qty }),
            headers: { 'Content-Type': 'application/json' },
        });
    } 
};

const increaseQty = async (event) => {
    event.preventDefault();

    let qty = parseInt(qtyField.textContent);
    if (qty < 100) {
        qty += 1;
        qtyField.textContent = qty;
        const response = await fetch(`/api/cart/${cartId.textContent}`, {
            method: 'PUT',
            body: JSON.stringify({ qty }),
            headers: { 'Content-Type': 'application/json' },
        });
    } 
};

decreaseBtn.addEventListener("click", decreaseQty);
increaseBtn.addEventListener("click", increaseQty);