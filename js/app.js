import stiralka from './json/stiralka.json' assert {type: 'json'};

let container = document.querySelector(".left-bar");

for (let i = 0; i < stiralka.length; i++) {
    let user = ` 
    <div class= "cart">
        
        <div class"add">
            <div class="imeg"><img src="./js/photo/${stiralka[i].img}"></div>
            <div class="text">
                ${stiralka[i].name}<br>
                ${stiralka[i].price}$
            </div><br>
            <div class="button"> 
                <button class = "btn" data-id="${stiralka[i].id}">Add to cart</button>
            </div>
        </div>
    </div>
    `;
    container.innerHTML += user;

}

document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener('click', function (e) {
        console.log(this.id);
        addToCart(this.dataset.id);
        showPrice();
    })
})


function addToCart(id) {
    let elem;
    for (let i = 0, len = stiralka.length; i < len; i++) {
        if (stiralka[i].id == id) {
            elem = stiralka[i];
            break;
        }
    }

    document.querySelector(".right-bar").innerHTML += `      
    <div class="small-cart">
        <img class="jpeg" src="./js/photo/${elem.img}">
        <div class="cart-content">
            ${elem.name}
            <br>
            <span class="cost">
            ${elem.price}
            </span>
            <span class="currency">
            $
            </span>
        </div>
        <div class="button"> 
            <button class = "delete"  data-id="${elem.id}">Delete</button>
        </div>
    </div>
    `;

    document.querySelectorAll(".delete").forEach(btn => {
        btn.addEventListener('click', function (e) {
            this.parentNode.parentNode.remove();
            showPrice();
        })
    })
}

function showPrice() {
    let onlytotal = document.querySelector(".total_price");
    let cost = document.querySelectorAll(".cost");
    let totalPrice = 0;
    for (let i = 0, len = cost.length; i < len; i++) {
        totalPrice += parseFloat(cost[i].innerText);
    }
    console.log(onlytotal);
    onlytotal.innerHTML = "Total: $" + totalPrice;
}

showPrice();


