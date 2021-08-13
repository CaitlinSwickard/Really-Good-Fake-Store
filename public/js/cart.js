const decreaseBtn = document.querySelectorAll('.decrease');
const increaseBtn = document.querySelectorAll('.increase');
const delBtn = document.querySelectorAll(".delete");
const cartId = document.querySelectorAll(".cartId");

// update(remove) qty of product in cart
const decreaseQty = async (event) => {
    const id = event.target.getAttribute("data-id");
    const qtyField = document.getElementById(`qty-${id}`);
    let qty = parseInt(qtyField.textContent);

    if (qty > 1) {
        if (event.target.hasAttribute('data-id')) {
            
            qty -= 1;
            qtyField.textContent = qty;

            const response = await fetch(`/api/cart/${id}`, {
              method: 'PUT',
              body: JSON.stringify({ qty }),
              headers: { 'Content-Type': 'application/json' },
            });

            if (response.ok) {
              document.location.reload();
            } else {
              alert('Failed to change qty');
            }
        }
    } 
};

// update(increase) qty of product in cart
const increaseQty = async (event) => {
    const id = event.target.getAttribute("data-id");
    const qtyField = document.getElementById(`qty-${id}`)
    let qty = parseInt(qtyField.textContent);

    if (event.target.hasAttribute('data-id')) {
    
        qty += 1;
        qtyField.textContent = qty;

        const response = await fetch(`/api/cart/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ qty }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert('Failed to change qty');
        }
    } 
};

// delete product in cart
const delBtnHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');
    
        const response = await fetch(`/api/cart/${id}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          document.location.reload();
        } else {
          alert('Failed to delete product');
        }
    }
};

// btn handlers
for (let i = 0; i < decreaseBtn.length; i++) {
  const btn = decreaseBtn[i];
  btn.addEventListener("click", decreaseQty);
};

for (let i = 0; i < increaseBtn.length; i++) {
  const btn = increaseBtn[i];
  btn.addEventListener("click", increaseQty);
};

for (let i = 0; i < delBtn.length; i++) {
  const btn = delBtn[i];
  btn.addEventListener("click", delBtnHandler);
};