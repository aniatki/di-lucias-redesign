// Hamburger menu toggle

document
    .querySelector("[data-hamburger-menu]")
    .setAttribute("onclick", "this.classList.toggle('open')")

// Cart item counter

const counter = document.querySelectorAll("[data-quantity-items]")

counter.forEach((elem) => {
    document.addEventListener("DOMContentLoaded", () => {
        elem.innerText = totalQuantity(elem)
    })
    setInterval(() => {
        elem.innerText = totalQuantity(elem)
    }, 1000)
})

function totalQuantity(elem) {
    let total = 0
    for (let i = 0; i < localStorage.length; i++) {
        const current = localStorage.key(i)
        const quantity = JSON.parse(localStorage.getItem(current)).quantity
        total += quantity
    }
    total === 0 ? (elem.style.opacity = 0) : (elem.style.opacity = 1)
    return total
}

function update(elem) {
    document.addEventListener("click", () => {
        elem.style.animationPlayState = "running"
        elem.addEventListener("animationeend", () => {
            elem.style.animationPlayState = "paused"
        })
        elem.innerText = totalQuantity(elem)
    })
}
