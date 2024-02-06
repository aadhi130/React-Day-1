let btn=document.querySelector('.btn')
let menu=document.querySelector('.menu')

btn.addEventListener('click',function(e){
    e.preventDefault()
    btn.classList.toggle('open')
    menu.classList.toggle('active')
});