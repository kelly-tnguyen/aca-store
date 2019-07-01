function Products(products){
        let productDivs = "";

        for (let i=0; i < products.length; i++) {
            let product = products[i];
            productDivs += 
            `<div id = 'product'>
                <div><h2 id ='${product.id}'>${product.name}</h2></div>
                <div><li>Description: ${product.description}</li></div>
                <div><li>${product.price}</li></div>
                <div><li>Category: ${product.category}</li></div>
                <div><li>Rating (5 is the highest): ${product.rating}</li></div>
             </div>`
        
        }
    document.getElementById("products").innerHTML = productDivs;
}
Products(products);


function search(){
    let searchWord = document.getElementById("searchBox").value;
    //Shows exact mathing 
    let filteredProducts = products.filter(p => p.name === searchWord)
    
    Products(filteredProducts);
}

