var navToggle = document.getElementById('nav-toggle');
var sideContainer = document.getElementById('side-container');

navToggle.addEventListener("click", navMenu);

function navMenu() {
    sideContainer.classList.toggle('menu-open');
    event.currentTarget.classList.toggle('active');
    document.body.classList.toggle('body-overflow');/*Убирает скролл по странице когда активно меню*/
}

var mail = document.getElementById('email');
var phone = document.getElementById('phone');
var country = document.getElementById('country');
var message = document.getElementById('message');


var mailRegExp = /@/;
function check() {
    if(mail.value == "" || mail.value !== mailRegExp.match){
        this.style.outline = '2px solid #FF8484';
        this.style.outlineOffset = '-2px';
    }
    else{
        this.style.outline = 'none';
        this.style.outlineOffset = 'none';
    }
}
mail.addEventListener('change',check);
