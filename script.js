const addItem1=document.querySelector(".plus-sign1")
const subItem1=document.querySelector(".minus-sign1")
const itemsNum1=document.querySelector(".quantity1")

const addItem2=document.querySelector(".plus-sign2")
const subItem2=document.querySelector(".minus-sign2")
const itemsNum2=document.querySelector(".quantity2")

const form=document.querySelector('.form')
const inputFields=document.querySelectorAll('.input-field')

addItem1.addEventListener('click',()=>{
    itemsNum1.textContent=(Number(itemsNum1.textContent)+1).toString()
})

addItem2.addEventListener('click',()=>{
    itemsNum2.textContent=(Number(itemsNum2.textContent)+1).toString()
})

subItem1.addEventListener('click',()=>{
    if(!(itemsNum1.textContent==="0")){
        itemsNum1.textContent=(Number(itemsNum1.textContent)-1).toString()  
    }
})

subItem2.addEventListener('click',()=>{
    if(!(itemsNum2.textContent==="0")){
        itemsNum2.textContent=(Number(itemsNum2.textContent)-1).toString()  
    }
})

//form validation
const myCheckbox=document.querySelector(".my-checkbox")
console.log(myCheckbox)
form.addEventListener('submit',(event)=>{
    event.preventDefault()
    let fieldEmpty=1
    for(let field of inputFields){
       if(field.value===""){
        fieldEmpty=0
       }
    }
    if(fieldEmpty){
        alert('form validated successfully!')
    }
    else{
        alert("Fill up all fileds and try again please!")
    }
})