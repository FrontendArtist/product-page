const searchInput = document.getElementById("search__input")
const filters = document.querySelectorAll(".filter")
const priceInput = document.getElementById("search-price").querySelector("input")
const priceSearchButton = document.getElementById("search-price").querySelector("button")
const products = document.querySelectorAll(".product-item")


const searchHandler = event =>{
    const searchValue = event.target.value.toLowerCase().trim()
    console.log(searchValue);
    products.forEach(item =>{
        const productName = item.children[1].innerText.toLowerCase();
        if (productName.includes(searchValue)) {
            item.style.display = "block"
                }
                else{
                    item.style.display = "none"
                }
       
    })
}
const filterHandler = event =>{

    const filter = event.target.dataset.filter;
    changeClass(filter)
    products.forEach(item =>{
        
        const product = item.children[1].innerText;
        switch (filter) {
        case "all":
            item.style.display = "block"
            break;
        case "laptop":
            
            if (item.dataset.category === filter) {
                item.style.display = "block"
                
            }else{
                item.style.display = "none"
                
            }
            break;
        case "console":
            if (item.dataset.category === filter) {
                item.style.display = "block"
            }else{
                item.style.display = "none"
            }
            break;
        case "phone":
            if (item.dataset.category === filter) {
                item.style.display = "block"
            }else{
                item.style.display = "none"
            }
            break;
        case "more":
            if (item.dataset.category === filter) {
                item.style.display = "block"
            }else{
                item.style.display = "none"
            }
            break;
    
    }
    })
    
}
const changeClass = filter =>{

    filters.forEach(button => {

        if (button.dataset.filter === filter) {
            button.classList.add("filter--selected")
        }else{
            button.classList.remove("filter--selected")
        }
    })
}
const priceSearchHandler = button => {
    const price = priceInput.value;
    products.forEach(item =>{
        const itemPrice = item.children[2].innerHTML.split(" ")[0]
        if (!price) {
            item.style.display="block"
        }
        else if (price === itemPrice) {
            item.style.display="block"
        }else{
            item.style.display="none"
        }
    })
}

searchInput.addEventListener("keyup" , searchHandler)
filters.forEach(item => item.addEventListener("click" , filterHandler))
priceSearchButton.addEventListener("click" , priceSearchHandler)
