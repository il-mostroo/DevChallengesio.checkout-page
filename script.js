const form=document.querySelector('.form')
const inputFields=document.querySelectorAll('.input-field')
const shippingPriceElement=document.querySelector('.shipping-price')
const totalPriceElement=document.querySelector('.total-price')
const productsList=document.querySelectorAll('#products-list>.product')
let totalPrice=0
let totalQuantity=2//check this again on load 
productsList.forEach(product=>{
    handleProduct(product)
})
function handleProduct(product){
    const plusSignElement=product.querySelector(".plus-sign")
    const minusSignElement=product.querySelector(".minus-sign")
    const priceElement=product.querySelector('.new-price')
    const quantityElement=product.querySelector(".quantity")
    attachAddEventListener(product,plusSignElement,priceElement,quantityElement)
    attachSubEventListener(product,minusSignElement,priceElement,quantityElement)
}
function attachAddEventListener (product,element,priceElement,quantityElement){
    element.addEventListener('click',()=>{
        let price=Number(priceElement.dataset.price)
        const amount=(Number(quantityElement.textContent)+1)
        quantityElement.textContent=amount.toString()
        if(Number(quantityElement.textContent)>0){
            priceElement.textContent="$"+(price*amount).toFixed(2)
        }
        totalPrice+=price*amount
        totalQuantity++
        updateShippingCost()
        updateItemVisibility(amount,product)
    })

}

function attachSubEventListener(product,element,priceElement,quantityElement){
    element.addEventListener('click',()=>{
        const price=Number(priceElement.dataset.price)
        const amount=(Number(quantityElement.textContent)-1)
        if(quantityElement.textContent==="1"  && confirm("Do you wanna remove the item from the basket?")){
            quantityElement.textContent=amount.toString()  
            priceElement.textContent="$0"
        }
        else if(quantityElement.textContent!=="0"){
            quantityElement.textContent=amount.toString()  
            priceElement.textContent="$"+(price*amount).toFixed(2)
        }
        totalPrice-=price*amount
        totalQuantity--
        updateShippingCost()
        updateItemVisibility(amount,product)
    })
}




function updateShippingCost(){
    if(totalQuantity>=7){
        shippingPriceElement.textContent="$38"
    }
    else{
        shippingPriceElement.textContent="$19"
    }
    totalPriceElement.textContent="$"+totalPrice.toFixed(2)
}
function updateItemVisibility(amount,product){
    amount=Math.max(0,amount)
    product.style.opacity=amount===0? "50%" : "100%"
}

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


