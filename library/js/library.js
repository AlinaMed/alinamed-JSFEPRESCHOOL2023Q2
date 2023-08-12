console.log('');



 const myButton = document.getElementById('hamburger');
const open_burger_menu  = document.querySelector('.open_burger_menu')



 myButton.addEventListener('click', (event) => {
    console.log(event)

console.log('Hello')


open_burger_menu.classList.toggle('hidden')


 })
 
 const burger_menu_close = document.querySelector('.burger_menu_close')

 burger_menu_close.addEventListener('click', (event) =>{
    open_burger_menu.classList.toggle('hidden')
 })
 


 