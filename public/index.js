let shoppingCart = [];

function Products(products){
    let productDivs = "";

    for (let i=0; i < products.length; i++) {
         let product = products[i];
          productDivs += 
         `<div id = 'product'>
         <div><h2>${product.name}</h2></div>
         <div><img id = "pictures" src=${product.imgUrl}></div>
         <div id = "more ${product.id}"></div>
         <div>Price: ${product.price}</li></div>
         <br>
         <button id = "viewBtn ${product.id}" onClick="ProductDetails(${product.id})">View</button><br>
         <button id="bag-btn">
            <img class = "icon cartNum smallerCart" src="/images/shopping-cart-256.png">Add to Cart</button>
          </div>`
       }
    document.getElementById("products").innerHTML = productDivs;
}

window.onload = () => {
    Products(products);
}

function ProductDetails(id) {
    let product = products.find(p=>p.id === id);
    let button = document.getElementById(`viewBtn ${product.id}`);
    document.getElementById(`more ${product.id}`).innerHTML = 
    `<div>
        <div><li>Description: ${product.description}</li></div>
        <div><li>Category: ${product.category}</li></div>
        <div><li>Rating (5 is the highest): ${product.rating}</li></div>
    </div>`; 
        button.setAttribute('onClick', `hideDetails(${product.id})`)
        button.innerHTML = "Hide";
}

function hideDetails(id) {
    let product = products.find(p => p.id === id);
    document.getElementById(`more ${product.id}`).innerHTML = "";
    document.getElementById(`viewBtn ${product.id}`).setAttribute('onClick', `ProductDetails(${product.id})`)
}

function search(){
    let searchWord = document.getElementById("searchBox").value;
    //Shows exact mathing 
    let filteredProducts = products.filter(p => p.name.toLowerCase().includes(searchWord))

    Products(filteredProducts);
}


