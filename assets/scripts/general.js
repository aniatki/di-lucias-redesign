const counter = document.querySelector("[data-quantity-items]")

function totalQuantity() {
    let total = 0
    for (let i = 0; i < localStorage.length; i++) {
        const current = localStorage.key(i)
        const quantity = JSON.parse(localStorage.getItem(current)).quantity
        total += quantity
    }
    return total
}

document.addEventListener("DOMContentLoaded", () => {
    counter.dataset.quantityItems = totalQuantity()
})

document.addEventListener("click", () => {
    counter.dataset.quantityItems = totalQuantity()
})
