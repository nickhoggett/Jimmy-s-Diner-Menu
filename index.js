import { menuArray }  from './data.js'

const orderedItems = document.querySelector('#orderedItems')
const order = document.querySelector('#order')
const total = document.querySelector('#total')
const modal = document.querySelector('#modal')
const confirmation = document.querySelector('#confirmation')
let inputCard = document.querySelector('#number');

inputCard.addEventListener('keyup', (e) => {
    if (inputCard.value.length === 4 || 
        inputCard.value.length === 9 || 
        inputCard.value.length === 14) {
        inputCard.value += '-'
    }
})

document.addEventListener('click', (e) => {
    let selectedItem = '';
    if (e.target.dataset.pizza) {
        selectedItem = e.target.dataset.pizza
        confirmation.style.display = 'none'
        renderYourOrder(selectedItem)
    } else if (e.target.dataset.hamburger) {
        selectedItem = e.target.dataset.hamburger
        renderYourOrder(selectedItem)
        confirmation.style.display = 'none'
    } else if (e.target.dataset.beer) {
        selectedItem = e.target.dataset.beer
        confirmation.style.display = 'none'
        renderYourOrder(selectedItem)
    } else if (e.target.classList.value === "remove") {
        removeItem(e.target)
    } else if (e.target.id === "complete") {
        modal.style.display = 'block'
    } else if (e.target.classList.value === "close") {
        modal.style.display = 'none'
    } else if (e.target.id === "pay") {
        e.preventDefault()
        modal.style.display = 'none'
        order.classList.add('display-none')
        confirmation.style.display = 'flex'
    }
})


function removeItem(item) {
    item = item.parentElement
    console.log(item.parentElement)
    item.remove()
    if (orderedItems.childElementCount === 0) {
        order.classList.add('display-none')
    }
    //DEBUG: remove price from total
}


function renderYourOrder(item) {
    
    const orderedItem = menuArray[item]

    order.classList.remove('display-none')

    let yourOrderHTML = ``
    let totalHTML = ``

        yourOrderHTML += `
                <div class="item" id="${orderedItem.id}">
                    <p class="medium-font">${orderedItem.name}</p>
                    <p class="remove">Remove</p>
                    <div class="small-font align-right">
                        <p class="price">$${orderedItem.price}</p>
                    </div>
                </div>
        `
        function addprice() {
            if (total.innerHTML === "") {
                return orderedItem.price
            } else {
               return parseInt(total.innerHTML) + orderedItem.price
            }
        }
        
    totalHTML = addprice();

    orderedItems.innerHTML += yourOrderHTML
    total.innerHTML = `${totalHTML}`
}

function renderMenu() {

    const menu = document.querySelector('#menu')

    for (let item of menuArray) {
        let foodArray = ``
            foodArray += `
            <div class="food-item" id="${item.id}">
                <div class="left">
                    <p class="food-emoji">${item.emoji}</p>
                    <div class="food-details">
                        <p class="medium-font">${item.name}</p>
                        <p class="food-ingredients">${item.ingredients}</p>
                        <p class="small-font">$${item.price}</p>
                    </div>
                </div>
                <button class="food-add" data-${item.name}="${item.id}">+</button>
            </div>
            `
        menu.innerHTML += foodArray
    }
}

renderMenu()