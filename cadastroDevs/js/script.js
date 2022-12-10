const tech = document.querySelectorAll('input[name="tech"]:checked').value;
const add = document.querySelector("#add");
let newTech = document.querySelector(".newTech");
const showButton = document.querySelector(".showButton");
const closeButton = document.querySelector("#closeButtonDevs")

add.addEventListener('click', ()=>{
    newLine("newTech");
    

})
window.addEventListener("load", ()=>{
    showDevs("devs")
})
showButton.addEventListener("click", ()=>{
    let buttons = document.querySelectorAll("input[type='button']")
    let containerDevs = document.querySelector(".containerDevs");
    let inputs = document.querySelectorAll("input[type='text']")
    let devsDiv = document.querySelector(".test");

    devsDiv.classList.add("show")
    containerDevs.classList.add("show")
    for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.add("show")
            inputs[i].classList.add("show")
         

        
    }
})
closeButton.addEventListener("click", ()=>{
    let buttons = document.querySelectorAll("input[type='button']")
    let containerDevs = document.querySelector(".containerDevs");
    let inputs = document.querySelectorAll("input[type='text']")
    let devsDiv = document.querySelector(".test");

    devsDiv.classList.remove("show")
    containerDevs.classList.remove("show")
    
    for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove("show")
            inputs[i].classList.remove("show")
          

        
    }
})

