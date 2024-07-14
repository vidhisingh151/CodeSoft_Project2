let bars = document.querySelector('#barsbtn');
let menu = document.querySelector('ul');

bars.addEventListener('click', () =>{
    menu.classList.toggle('show_menu')
});

   AOS.init();