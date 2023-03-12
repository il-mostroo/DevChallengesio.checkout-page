const addItem1=document.querySelector(".plus-sign1")
const subItem1=document.querySelector(".minus-sign1")
const itemsNum1=document.querySelector(".quantity1")

const addItem2=document.querySelector(".plus-sign2")
const subItem2=document.querySelector(".minus-sign2")
const itemsNum2=document.querySelector(".quantity2")

const form=document.querySelector('.form')
const inputFields=document.querySelectorAll('.input-field')

const product1=document.querySelector('.product1')
const product2=document.querySelector('.product2')

const newPrice1=document.querySelector('.new-price1')
const newPrice2=document.querySelector('.new-price2')

const signs=document.querySelectorAll('.sign')
const shipping=document.querySelector('.shipping-price')
addItem1.addEventListener('click',()=>{
    let price=Number((newPrice1.textContent).slice(1))
    price+=54.99
    product1.style.opacity='100%'
    itemsNum1.textContent=(Number(itemsNum1.textContent)+1).toString()
    if(Number(itemsNum1.textContent)>0){
        newPrice1.textContent="$"+(Math.round(price))
    }
})

addItem2.addEventListener('click',()=>{
    let price=Number((newPrice2.textContent).slice(1))
    price+=54.99
    product2.style.opacity='100%'
    itemsNum2.textContent=(Number(itemsNum2.textContent)+1).toString()
    if(Number(itemsNum2.textContent)>0){
        newPrice2.textContent="$"+(Math.round(price))
    }
})

subItem1.addEventListener('click',()=>{
    let price=Number((newPrice1.textContent).slice(1))
    price-=54.99
        if(itemsNum1.textContent==="1"){
        if(confirm("Do you wanna remove the item from the basket?")){
            itemsNum1.textContent=(Number(itemsNum1.textContent)-1).toString()  
            product1.style.opacity='50%'
        }
    }
    else if(!(itemsNum1.textContent=="0")){
        itemsNum1.textContent=(Number(itemsNum1.textContent)-1).toString()  
        newPrice1.textContent="$"+(Math.round(price))
    }
})

subItem2.addEventListener('click',()=>{
    
    let price=Number((newPrice2.textContent).slice(1))
    price-=54.99
        if(itemsNum2.textContent==="1"){
        if(confirm("Do you wanna remove the item from the basket?")){
            itemsNum2.textContent=(Number(itemsNum2.textContent)-1).toString()  
            product2.style.opacity='50%'
        }
    }
    else if(!(itemsNum2.textContent=="0")){
        itemsNum2.textContent=(Number(itemsNum2.textContent)-1).toString()  
        newPrice2.textContent="$"+(Math.round(price))
    }
})

signs.forEach(sign=>{
    sign.addEventListener("click",()=>{
        const items=Number(itemsNum1.textContent)+Number(itemsNum2.textContent)
        if(items>=7){
            shipping.textContent="$38"
        }
        else{
            shipping.textContent="$19"
        }
    })
})

//form validation
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

// alert when user selects 0 quantity
