let hintMessages = []

const LOCAL_STORAGE_KEY = "diLuciasCart-ID-"

const cartItemsElement = document.querySelector("[data-cart-items-container]")
const total = document.querySelector(".cart-total-amount")

function renderFromLocalStorage(object) {
    cartItemsElement.innerHTML += `
    <li class="cart-item" data-id="${object.id}">
    <span class="cart-item-name">${object.name}</span>
    <span class="cart-item-quantity">${parseInt(object.quantity)}</span>
    <button class="decrease-button">-</button>
    <button class="remove-button">&times;</button>
    <button class="increase-button">+</button>
        <span class="cart-item-price">${parseFloat(object.price).toFixed(
            2
        )}</span>
    </li>
    `

    let decreaseButtons = document.querySelectorAll(".decrease-button"),
        removeButtons = document.querySelectorAll(".remove-button"),
        increaseButtons = document.querySelectorAll(".increase-button")
    let buttons = [...decreaseButtons, ...removeButtons, ...increaseButtons]

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", (e) => {
            if (e.target.classList.contains("remove-button")) {
                remove(e)
            } else {
                modifyQuantity(e)
            }
        })
    }

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

function remove(e) {
    cartItemsElement.textContent = ""

    localStorage.removeItem(
        `${LOCAL_STORAGE_KEY}${e.target.parentElement.dataset.id}`
    )
    getLocalStorageItems()
    updateTotal()
}

function showHint(message) {
    if (document.querySelector(".hint-message")) return
    const messageElement = document.createElement("div")
    messageElement.classList.add("hint-message")
    messageElement.innerText = message
    document.querySelector("main").append(messageElement)
    setTimeout(() => {
        messageElement.innerText = ""
        messageElement.remove()
    }, 5000)
}

function determineType(e, currentQuantity) {
    const type = e.target.innerHTML
    if (type === "+") {
        return currentQuantity + 1
    } else if (type === "-") {
        if (currentQuantity === 1) {
            showHint(
                "Whoops, we can't give you less than one item. Hint: press the 'x' button to remove it from your cart."
            )
            return 1
        }
        return currentQuantity - 1
    } else {
        console.warn("Something went wrong updating the quantity.")
    }
}

function modifyQuantity(e) {
    let object = JSON.parse(
        localStorage.getItem(
            `${LOCAL_STORAGE_KEY}${e.target.parentElement.dataset.id}`
        )
    )

    let updated = {
        name: object.name,
        id: object.id,
        quantity: determineType(e, parseInt(object.quantity)),
        price: object.price,
    }

    localStorage.setItem(
        `${LOCAL_STORAGE_KEY}${e.target.parentElement.dataset.id}`,
        JSON.stringify(updated)
    )
    getLocalStorageItems()
    updateTotal()
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

if (hintMessages.length > 0) isThereHints()
