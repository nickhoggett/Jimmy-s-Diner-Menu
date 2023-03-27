import { menuArray }  from './data.js'

const menu = document.querySelector('#menu');

function renderMenu() {
    for (let item of menuArray) {
        let foodArray = ``
            foodArray += `
            <div class="food-item">
                <div class="left">
                    <p class="food-emoji">${item.emoji}</p>
                    <div class="food-details">
                        <p class="food-name">${item.name}</p>
                        <p class="food-ingredients">${item.ingredients}</p>
                        <p class="food-price">$${item.price}</p>
                    </div>
                </div>
                <button class="food-add">+</button>
            </div>
            `
            menu.innerHTML += foodArray;
    }
}

renderMenu()

    
    
    
