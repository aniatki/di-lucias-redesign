const counter = document.querySelector("[data-quantity-items]")
function totalQuantity() {
    let total = 0
    for (let i = 0; i < localStorage.length; i++) {
        const current = localStorage.key(i)
        const quantity = JSON.parse(localStorage.getItem(current)).quantity
        total += quantity
    }
    total === 0 ? (counter.style.opacity = 0) : (counter.style.opacity = 1)
    return total
}
document.addEventListener("DOMContentLoaded", () => {
    counter.innerText = totalQuantity()
})
document.addEventListener("click", () => {
    counter.style.animationPlayState = "running"
    counter.addEventListener("animationeend", () => {
        counter.style.animationPlayState = "paused"
    })
    counter.innerText = totalQuantity()
})

const toggle = document.querySelector("[data-hamburger-menu]")

toggle.addEventListener("click", () => {
    toggle.classList.toggle("open")
})
