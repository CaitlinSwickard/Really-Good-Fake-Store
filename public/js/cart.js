const decreaseBtn = document.querySelector('.decrease');
const increaseBtn = document.querySelector('.increase');
const delBtn = document.querySelector(".delete");
const cartId = document.querySelector(".cartId");

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

decreaseBtn.addEventListener("click", decreaseQty);
increaseBtn.addEventListener("click", increaseQty);
delBtn.addEventListener("click", delBtnHandler);