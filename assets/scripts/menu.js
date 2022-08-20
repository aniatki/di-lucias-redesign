const LOCAL_STORAGE_KEY = "diLuciasCart-ID-"

const products = [
    [
        "Chips",
        {
            name: "Chips",
            price: 3.6,
            ingredients: undefined,
            allergen: [1],
            id: 1,
            inCart: false,
            quantity: 1,
        },
        {
            name: "Garlic Chips",
            price: 5.2,
            ingredients: "Garlic Sauce",
            allergen: [1, 2, 4, 6],
            id: 2,
            inCart: false,
            quantity: 1,
        },
        {
            name: "Garlic Chips with Cheese",
            price: 5.7,
            ingredients: "Garlic Sauce, Cheese",
            allergen: [1, 2, 4, 6],
            id: 3,
            inCart: false,
            quantity: 1,
        },
        {
            name: "Curry Chips",
            price: 4.9,
            ingredients: "Curry Sacue",
            allergen: [1, 2, 5, 6],
            id: 4,
            inCart: false,
            quantity: 1,
        },
        {
            name: "Taco Chips",
            price: 6.9,
            ingredients: "Taco Sauce, Cheese",
            allergen: [1, 5],
            id: 5,
            inCart: false,
            quantity: 1,
        },
        {
            name: "Chicken Gravy Chips",
            price: 5.2,
            ingredients: "Chicken Gravy",
            allergen: [1, 2, 4, 5, 7],
            id: 6,
            inCart: false,
            quantity: 1,
        },
        {
            name: "Chip Butty",
            price: 4.7,
            ingredients: undefined,
            allergen: [1, 2],
            id: 7,
            inCart: false,
            quantity: 1,
        },
        {
            name: "Curry Tray Special",
            price: 6.2,
            ingredients: "Curry Sauce",
            allergen: [1, 2, 4, 6],
            id: 8,
            inCart: false,
            quantity: 1,
        },
        {
            name: "Chicken Curry with Chips",
            price: 8.2,
            ingredients: "Curry Sauce, Onions",
            allergen: [1, 5, 6],
            id: 9,
            inCart: false,
            quantity: 1,
        },
    ],
    [
        "General",
        {
            name: "Hot Dog",
            price: 4.3,
            ingredients: "Lettuce, Onions, Mustard, Ketchup, Mayonnaise",
            allergen: [1, 2, 4, 6],
            id: 10,
            inCart: false,
            quantity: 1,
        },
        {
            name: "Onion Rings (4)",
            price: 2.7,
            ingredients: undefined,
            allergen: [1],
            id: 11,
            inCart: false,
            quantity: 1,
        },
        {
            name: "Plain Sausage (2)",
            price: 2.7,
            ingredients: undefined,
            allergen: [1, 7],
            id: 12,
            inCart: false,
            quantity: 1,
        },
        {
            name: "Sausage in Batter",
            price: 2.9,
            ingredients: undefined,
            allergen: [1, 7],
            id: 13,
            inCart: false,
            quantity: 1,
        },
        {
            name: "Garlic Mushrooms (10)",
            price: 4.1,
            ingredients: undefined,
            allergen: [1, 2, 4],
            id: 14,
            inCart: false,
            quantity: 1,
        },
        {
            name: "Large Battered Burger",
            price: 3.8,
            ingredients: undefined,
            allergen: [1, 2, 4],
            id: 15,
            inCart: false,
            quantity: 1,
        },
        {
            name: "Steak & Kidney Pie",
            price: 3.9,
            ingredients: undefined,
            allergen: [1, 2, 5, 6],
            id: 16,
            inCart: false,
            quantity: 1,
        },
        {
            name: "Chicken Curry Pie",
            price: 3.9,
            ingredients: undefined,
            allergen: [1, 2, 5, 6],
            id: 17,
            inCart: false,
            quantity: 1,
        },
        {
            name: "Potato Cakes (2)",
            price: 1.7,
            ingredients: undefined,
            allergen: [1],
            id: 18,
            inCart: false,
            quantity: 1,
        },
        {
            name: "Sausage Baguette",
            price: 5.1,
            ingredients: undefined,
            allergen: undefined,
            id: 19,
            inCart: false,
            quantity: 1,
        },
    ],
    [
        "Kebabs",
        {
            name: "Doner Kebab",
            price: 7.2,
            ingredients: "Lettuce, Onions, Garlic, Chili",
            allergen: [1, 2, 4, 6],
            id: 20,
            inCart: false,
            quantity: 1,
        },
        {
            name: "Chicken Fillet Kebab",
            price: 7.2,
            ingredients: "Lettuce, Onions, Garlic, Chili",
            allergen: [1, 2, 4, 5, 7],
            id: 21,
            inCart: false,
            quantity: 1,
        },
        {
            name: "Fish Kebab",
            price: 6.7,
            ingredients: "Lettuce, Onions, Garlic, Chili",
            allergen: [1, 2, 3, 4],
            id: 22,
            inCart: false,
            quantity: 1,
        },
        {
            name: "Doner Kebab Tray",
            price: 7.8,
            ingredients: "Lettuce, Onions, Garlic, Chili",
            allergen: [1, 2, 4],
            id: 23,
            inCart: false,
            quantity: 1,
        },
        {
            name: "Taco Kebab",
            price: 7.2,
            ingredients: "Lettuce, Onions, Garlic, Chili",
            allergen: [1, 2, 4],
            id: 24,
            inCart: false,
            quantity: 1,
        },
        {
            name: "Doner Wrap",
            price: 5.7,
            ingredients: "Lettuce, Onions, Garlic, Chili",
            allergen: [1, 2, 4, 5, 7],
            id: 25,
            inCart: false,
            quantity: 1,
        },
        {
            name: "Doner Baguette",
            price: 5.7,
            ingredients: "Lettuce, Onions, Garlic, Chili",
            allergen: [1, 2, 4],
            id: 26,
            inCart: false,
            quantity: 1,
        },
        {
            name: "Chicken Kebab Tray",
            price: 7.2,
            ingredients: "Lettuce, Onions, Garlic, Chili",
            allergen: [1, 2, 4, 5, 7],
            id: 27,
            inCart: false,
            quantity: 1,
        },
    ],
    [
        "Drinks",
        {
            name: "330ml Coke",
            price: 1.7,
            ingredients: undefined,
            allergen: undefined,
            id: 28,
            inCart: false,
            quantity: 1,
        },
        {
            name: "330ml Diet Coke",
            price: 1.7,
            ingredients: undefined,
            allergen: undefined,
            id: 29,
            inCart: false,
            quantity: 1,
        },
        {
            name: "330ml Coke Zero",
            price: 1.7,
            ingredients: undefined,
            allergen: undefined,
            id: 30,
            inCart: false,
            quantity: 1,
        },
        {
            name: "330ml Fanta",
            price: 1.7,
            ingredients: undefined,
            allergen: undefined,
            id: 31,
            inCart: false,
            quantity: 1,
        },
        {
            name: "330ml Sprite",
            price: 1.7,
            ingredients: undefined,
            allergen: undefined,
            id: 32,
            inCart: false,
            quantity: 1,
        },
        {
            name: "1L Coke",
            price: 3.3,
            ingredients: undefined,
            allergen: undefined,
            id: 33,
            inCart: false,
            quantity: 1,
        },
        {
            name: "1L Coke Zero",
            price: 3.3,
            ingredients: undefined,
            allergen: undefined,
            id: 34,
            inCart: false,
            quantity: 1,
        },
        {
            name: "1L Fanta",
            price: 3.3,
            ingredients: undefined,
            allergen: undefined,
            id: 35,
            inCart: false,
            quantity: 1,
        },
        {
            name: "1L Sprite",
            price: 3.3,
            ingredients: undefined,
            allergen: undefined,
            id: 36,
            inCart: false,
            quantity: 1,
        },
        {
            name: "500ml Water",
            price: 2,
            ingredients: undefined,
            allergen: undefined,
            id: 37,
            inCart: false,
            quantity: 1,
        },
        {
            name: "100ml Capri Sun",
            price: 1.2,
            ingredients: undefined,
            allergen: undefined,
            id: 38,
            inCart: false,
            quantity: 1,
        },
    ],
    [
        "Sauces",
        {
            name: "Curry Sauce",
            price: 2.4,
            ingredients: undefined,
            allergen: [1, 5, 6],
            id: 39,
            inCart: false,
            quantity: 1,
        },
        {
            name: "Garlic Sauce",
            price: 2.4,
            ingredients: undefined,
            allergen: [1, 2],
            id: 40,
            inCart: false,
            quantity: 1,
        },
        {
            name: "Chili Sauce",
            price: 2.4,
            ingredients: undefined,
            allergen: [1, 2],
            id: 41,
            inCart: false,
            quantity: 1,
        },
        {
            name: "Barbecue Sauce",
            price: 2.4,
            ingredients: undefined,
            allergen: [4],
            id: 42,
            inCart: false,
            quantity: 1,
        },
        {
            name: "Taco Sauce",
            price: 2.4,
            ingredients: undefined,
            allergen: [4],
            id: 43,
            inCart: false,
            quantity: 1,
        },
        {
            name: "Kebab Sauce",
            price: 2.4,
            ingredients: undefined,
            allergen: [4, 6],
            id: 44,
            inCart: false,
            quantity: 1,
        },
        {
            name: "Chicken Gravy",
            price: 2.4,
            ingredients: undefined,
            allergen: undefined,
            id: 45,
            inCart: false,
            quantity: 1,
        },
        {
            name: "Vinegar",
            price: 3.5,
            ingredients: undefined,
            allergen: undefined,
            id: 46,
            inCart: false,
            quantity: 1,
        },
    ],
    [
        "Burgers",
        {
            name: "1/2lb Burger",
            price: 6.2,
            ingredients: "Lettuce, Onions, Cheese, Ketchup, Mayonnaise",
            allergen: [1, 4, 5, 7, 13],
            id: 47,
            inCart: false,
            quantity: 1,
        },
        {
            name: "1/4lb Burger with Cheese",
            price: 4.9,
            ingredients: "Lettuce, Onions, Cheese, Ketchup, Mayonnaise",
            allergen: [1, 4, 5, 7, 14],
            id: 48,
            inCart: false,
            quantity: 1,
        },
        {
            name: "Rib Steak Burger",
            price: 4.7,
            ingredients: "Lettuce, Onions, Barbecue, Mayonnaise",
            allergen: [1, 4, 5, 7, 15],
            id: 49,
            inCart: false,
            quantity: 1,
        },
        {
            name: "Salad Burger with Cheese",
            price: 3.7,
            ingredients: "Lettuce, Onions, Cheese, Ketchup, Mayonnaise",
            allergen: [1, 2, 4, 7],
            id: 50,
            inCart: false,
            quantity: 1,
        },
        {
            name: "Large Howie Burger",
            price: 5.1,
            ingredients: "Lettuce, Onions, Ketchup, Mayonnaise",
            allergen: [1, 2, 4, 12],
            id: 51,
            inCart: false,
            quantity: 1,
        },
        {
            name: "Double Burger",
            price: 4.9,
            ingredients: "Lettuce, Onions, Cheese, Ketchup, Mayonnaise",
            allergen: [1, 2, 4, 12],
            id: 52,
            inCart: false,
            quantity: 1,
        },
        {
            name: "Cheese Burger",
            price: 3.2,
            ingredients: "Onions, Cheese, Ketchup",
            allergen: [1, 2, 4, 7],
            id: 53,
            inCart: false,
            quantity: 1,
        },
        {
            name: "Bun Burger",
            price: 3,
            ingredients: "Onions, Ketchup",
            allergen: [1, 2, 4, 7],
            id: 54,
            inCart: false,
            quantity: 1,
        },
        {
            name: "Veggie Burger",
            price: 3.9,
            ingredients: "Lettuce, Onions, Mayonnaise",
            allergen: [1, 2, 4, 5, 13],
            id: 55,
            inCart: false,
            quantity: 1,
        },
    ],
    [
        "Chicken",
        {
            name: "Chicken Fillet Burger",
            price: 5.8,
            ingredients: "Lettuce, Onions, Mayonnaise",
            allergen: [1, 2, 4, 6, 13],
            id: 56,
            inCart: false,
            quantity: 1,
        },
        {
            name: "Chicken Burger",
            price: 4.7,
            ingredients: "Lettuce, Onions, Mayonnaise, Cheese",
            allergen: [1, 2, 4, 6, 13],
            id: 57,
            inCart: false,
            quantity: 1,
        },
        {
            name: "Chicken Tenders (7)",
            price: 5.9,
            ingredients: undefined,
            allergen: [1],
            id: 58,
            inCart: false,
            quantity: 1,
        },
        {
            name: "Chicken Tenders Wrap",
            price: 5.2,
            ingredients: "Lettuce, Onions, Mayonnaise",
            allergen: [1, 2, 4, 5, 7],
            id: 59,
            inCart: false,
            quantity: 1,
        },
        {
            name: "Chicken Nuggets (6)",
            price: 3.7,
            ingredients: undefined,
            allergen: [1, 2, 4, 5, 8],
            id: 60,
            inCart: false,
            quantity: 1,
        },
        {
            name: "Chicken Fillet Baguette",
            price: 6.7,
            ingredients: "Lettuce, Onions, Mayonnaise",
            allergen: [1, 2, 4, 5, 9],
            id: 61,
            inCart: false,
            quantity: 1,
        },
        {
            name: "Boneless Wings (7)",
            price: 5.9,
            ingredients: undefined,
            allergen: [1, 5, 6],
            id: 62,
            inCart: false,
            quantity: 1,
        },
    ],
    [
        "Southern Fried Chicken",
        {
            name: "Junior Box",
            price: 5.2,
            ingredients: "1 piece & chips",
            allergen: [1, 4],
            id: 63,
            inCart: false,
            quantity: 1,
        },
        {
            name: "Snack Box",
            price: 7.7,
            ingredients: "2 pieces & chips",
            allergen: [1, 4],
            id: 64,
            inCart: false,
            quantity: 1,
        },
        {
            name: "Dinner Box",
            price: 8.5,
            ingredients: "3 pieces & chips",
            allergen: [1, 4],
            id: 65,
            inCart: false,
            quantity: 1,
        },
        {
            name: "Family Box",
            price: 15,
            ingredients: "5 pieces & chips",
            allergen: [1, 4],
            id: 66,
            inCart: false,
            quantity: 1,
        },
        {
            name: "Southern Fried Family Box",
            price: 25,
            ingredients: "10 pieces, 2 chips, 1 dip, 1 large mineral",
            allergen: [1, 4],
            id: 67,
            inCart: false,
            quantity: 1,
        },
    ],
    [
        "Fish",
        {
            name: "Fresh Cod",
            price: 7.6,
            ingredients: undefined,
            allergen: [1, 3],
            id: 68,
            inCart: false,
            quantity: 1,
        },
        {
            name: "Smoked Cod",
            price: 7.4,
            ingredients: undefined,
            allergen: [1, 3],
            id: 69,
            inCart: false,
            quantity: 1,
        },
        {
            name: "Cod Portion",
            price: 5.2,
            ingredients: undefined,
            allergen: [1, 3],
            id: 70,
            inCart: false,
            quantity: 1,
        },
        {
            name: "Fish Burger",
            price: 3.7,
            ingredients: "Lettuce, Onions, Mayonnaise",
            allergen: [1, 2, 3, 13],
            id: 71,
            inCart: false,
            quantity: 1,
        },
        {
            name: "Fish Box",
            price: 7.7,
            ingredients: undefined,
            allergen: [1, 3],
            id: 72,
            inCart: false,
            quantity: 1,
        },
    ],
]

const allergens = [
    "Gluten",
    "Milk",
    "Fish",
    "Eggs",
    "Celery",
    "Mustard",
    "Soya",
    "Sulphites",
    "Shellfish",
    "Molluscs",
    "Peanuts",
    "Nuts",
    "Sesame",
    "Lupin",
]

let quantity = 0

function headerElement(prodHeader) {
    return `<article class="menu-card">
                <h2 class="menu-card-header">${prodHeader}</h2>
            </article>
`
}

function innerElement(name, price, allergen, id) {
    return `
    <div class="button-container">
        <button data-id="${id}" class="menu-item">
            <span class="menu-item-name">${name}</span>
            <span class="hover-basket">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.31 11.242C2.27324 11.0946 2.27054 10.9408 2.3021 10.7922C2.33366 10.6436 2.39866 10.5042 2.49216 10.3845C2.58565 10.2648 2.70519 10.1679 2.8417 10.1013C2.97821 10.0347 3.1281 10 3.28 10H20.72C20.8719 10 21.0218 10.0347 21.1583 10.1013C21.2948 10.1679 21.4143 10.2648 21.5078 10.3845C21.6013 10.5042 21.6663 10.6436 21.6979 10.7922C21.7295 10.9408 21.7268 11.0946 21.69 11.242L19.879 18.485C19.7708 18.9177 19.5212 19.3018 19.1697 19.5763C18.8182 19.8508 18.385 19.9999 17.939 20H6.061C5.61501 19.9999 5.18184 19.8508 4.83033 19.5763C4.47882 19.3018 4.22915 18.9177 4.121 18.485L2.31 11.243V11.242Z" stroke="white" stroke-width="2" stroke-linejoin="round"/>
                <path d="M18 10L14 4M9 14V16V14ZM15 14V16V14ZM6 10L10 4L6 10Z" stroke="white" stroke-width="2" stroke-linecap="round"/>
                </svg>
            </span>
            <span class="menu-item-price">${price.toFixed(2)}</span>
        </button>
        <p class="allergen-container">
            Contains:
            <span class="allergen-information">${allergen}</span>
        </p>
    </div>
    `
}

function renderAllergen(allergen) {
    let list = ""
    if (allergen === undefined || typeof allergen === "undefined") {
        list = "No allergens found for this item."
    } else if (typeof allergen === "object") {
        try {
            allergen.forEach((index) => {
                list += `${allergens[index - 1]}, `
            })
        } catch (TypeError) {
            console.log("Something went wrong rendering the allergens.")
        }
    }
    return list
}

function handleClickType(e) {
    if (e.target.nodeName === "BUTTON") {
        return e.target
    } else if (e.target.nodeName === "SPAN") {
        return e.target.parentElement
    } else {
        return null
    }
}

function addAnimation() {
    const popUp = document.querySelector(".pop-up")
    popUp.style.setProperty(
        "filter",
        `hue-rotate(${parseInt(Math.random(0, 0.36) * 200)})`
    )
    console.log(popUp.style.filter)
    popUp.classList.add("is-animating")
    popUp.addEventListener("animationend", () =>
        popUp.classList.remove("is-animating")
    )
}

function handleAction(e) {
    setToLocalStorage(handleClickType(e))
    addAnimation()
}

function setToLocalStorage(e) {
    let parentId = parseInt(e.dataset.id)

    const localStorageValue = {
        name: e.querySelector(".menu-item-name").innerText,
        quantity: 1,
        price: parseFloat(e.querySelector(".menu-item-price").innerText),
        id: parentId,
    }

    const retreived = JSON.parse(
        localStorage.getItem(`${LOCAL_STORAGE_KEY}${parentId}`)
    )

    if (!retreived) {
        localStorage.setItem(
            `${LOCAL_STORAGE_KEY}${parentId}`,
            JSON.stringify(localStorageValue)
        )
    }
    if (retreived) {
        retreived.quantity += 1
        localStorage.setItem(
            `${LOCAL_STORAGE_KEY}${parentId}`,
            JSON.stringify(retreived)
        )
    }
}

// Render all the groups of menu items

products.forEach((prod) => {
    const main = document.querySelector("main")
    main.innerHTML += headerElement(prod[0])
})

// Render all individual items into the respective groups

document.querySelectorAll(".menu-card").forEach((elem) => {
    for (let i = 0; i < products.length; i++) {
        for (let j = 0; j < products[i].length; j++) {
            if (typeof products[i][j] === "string") continue
            if (elem.querySelector("h2").innerText === products[i][0]) {
                const { name, price, id, allergen } = products[i][j]
                elem.innerHTML += innerElement(
                    name,
                    price,
                    renderAllergen(allergen),
                    id
                )
            }
        }
    }
})

document.querySelectorAll(".menu-item").forEach((item) => {
    item.addEventListener("click", (e) => {
        handleAction(e)
    })
})
