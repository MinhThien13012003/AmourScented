let iconCart = document.querySelector('.icon-cart');
let body = document.querySelector('body');
let closeCart=document.querySelector('.cart-close');


iconCart.addEventListener('click',()=>{
    body.classList.toggle('show-cart')
})
closeCart.addEventListener('click', ()=>{
    body.classList.toggle('show-cart')
})

