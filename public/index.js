// have search bar with enter button
// show name, rating, number of reviews and price
// include a link or button that should be clicked on so that you can see the details of the product

function Products(products){
        let productDivs = "";

        for (let i=0; i < products.length; i++) {
            let product = products[i];
            productDivs +=`<div>${product.name}</div>`
        }
    document.getElementById("products").innerHTML = productDivs;
}
Products(products);

function search(){
    let searchWord = document.getElementById("search").value;

    let filteredProducts = products.filter(p=>p.name === searchWord)
    Products(filteredProducts);
}