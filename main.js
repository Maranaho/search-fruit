//fruits
const fruitsArr = [
    "Apple", 
    "Banana", 
    "Orange", 
    "Mango", 
    "Strawberry", 
    "Pineapple", 
    "Blueberry", 
    "Grapes", 
    "Kiwi", 
    "Peach", 
    "Watermelon", 
    "Papaya", 
    "Cherry", 
    "Pomegranate", 
    "Plum", 
    "Raspberry", 
    "Lychee", 
    "Dragonfruit", 
    "Avocado", 
    "Cantaloupe"
  ];

// Select DOM elements
const searchInput = document.getElementById("searchInput")
const submitBtn = document.getElementById("submitBtn")
const fruitList = document.getElementById("fruitList")

//Define some variables
const maxLength = 5

// functions
const fillTheULWithFruits = searchValue =>{    
    
    fruitsArr
    .filter(fruit => fruit.toLowerCase().includes(searchValue.toLowerCase()))
    .slice(0,maxLength)
    .forEach(fruit =>{
        // create a LI elt
        const liElt = document.createElement("li")
        liElt.innerText = fruit
        fruitList.appendChild(liElt)
    })

}

const handleSubmit = ()=>{
    //Clear the field
    searchInput.value = ""

    //Hide the fruits
    fruitList.classList.add("hide")
}


// Everything happening every time we type in the field
const handleKeyup = event =>{

    fruitList.innerHTML = ""

    const value = event.target.value
    if(value === "") fruitList.classList.add("hide")
    else fruitList.classList.remove("hide")

    fillTheULWithFruits(value)
    
    //Checking if the key is Enter or Return
    if(event.key === "Enter") handleSubmit()
    else chosenFruit.innerText = ""
        
}
    
    
// Event listeners
searchInput.addEventListener("keyup",handleKeyup)
submitBtn.addEventListener("click",handleSubmit)


// Order of operations
const init = ()=>  {
    // fill the UL with all the fruits
    fillTheULWithFruits("")
}

// Initialize the app
init()

