const LOCAL_STORAGE_KEY = "diLuciasCart-ID-"

const cartItemsElement = document.querySelector("[data-cart-items-container]")
const total = document.querySelector(".cart-total-amount")

function renderFromLocalStorage(object) {
    cartItemsElement.innerHTML += `
    <li class="cart-item" data-id="${object.id}">
    <span class="cart-item-name">${object.name}</span>
    <span class="cart-item-quantity">${parseInt(object.quantity)}</span>
    <button class="decrease-button">&minus;</button>
    <button class="remove-button">&#10006;</button>
    <button class="increase-button">&plus;</button>
        <span class="cart-item-price">${parseFloat(object.price).toFixed(
            2
        )}</span>
    </li>
    `
    let cartTotal =
        parseFloat(object.price).toFixed(2) * parseInt(object.quantity)

    total.innerText = (parseFloat(total.innerText) + cartTotal).toFixed(2)
}

function getLocalStorageItems() {
    for (let i = 0; i < localStorage.length; i++) {
        const obj = JSON.parse(localStorage.getItem(localStorage.key(i)))
        renderFromLocalStorage(obj)
    }
}

function decrease(e) {
    console.log("DECREASED")
    // for (let i = 0; i < localStorage.length; i++) {
    // const obj = JSON.parse(localStorage.getItem(localStorage.key(i)))
    // }
}
function remove(e) {
    cartItemsElement.innerHTML = ""
    localStorage.removeItem(
        `${LOCAL_STORAGE_KEY}${e.target.parentElement.dataset.id}`
    )
    getLocalStorageItems()
    updateTotal()
}
function increase(e) {
    console.log("INCREASED")
}

function updateRender() {
    cartItemsElement.innerHTML = ""
    getLocalStorageItems()
    updateTotal()
}

function updateTotal() {
    cartItemsElement.innerHTML = ""
    getLocalStorageItems()
    total.innerText = 0
    for (let i = 0; i < localStorage.length; i++) {
        const obj = JSON.parse(localStorage.getItem(localStorage.key(i)))
        const cartTotal =
            parseFloat(obj.price).toFixed(2) * parseInt(obj.quantity)
        total.innerText = (parseFloat(total.innerText) + cartTotal).toFixed(2)
    }
}

getLocalStorageItems()

let decreaseButtons = document.getElementsByClassName("decrease-button")
let removeButtons = document.getElementsByClassName("remove-button")
let increaseButtons = document.getElementsByClassName("increase-button")

for (let i = 0; i < localStorage.length * 3; i++) {
    const buttons = [...decreaseButtons, removeButtons, increaseButtons]
    for (let j = 0; j < buttons.length; i++) {
        const button = buttons[j]
        button.addEventListener("click", (e) => console.log(e.target))
    }
}
