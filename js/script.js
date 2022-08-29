//modal
const phone = document.querySelector('.info__item.phone');
const phone2 = document.querySelector('.menu__item.phone');
const phone3 = document.querySelector('.menu-mobile__phone');
const phone4 = document.querySelector('.menu-mobile__phone-2');
const modal = document.querySelector('.modal');
const close = document.querySelector('.modal__close');
const body = document.querySelector("body");

phone.addEventListener('click', addModal);
phone2.addEventListener('click', addModal);
phone3.addEventListener('click', addModal);
phone4.addEventListener('click', addModal);
function addModal() {
     modal.style.display = "block";
     body.classList.add("lock");
};
close.addEventListener('click', () => {
     modal.style.display = "none";
     body.classList.remove("lock");
});
window.onclick = function (event) {
     if (event.target == modal) {
          modal.style.display = "none";
          body.classList.remove("lock");
     }
}

//scroll__menu
const headerInfo = document.querySelector('.header__info');
const menu = document.querySelector('.header__menu.menu');
const menu2 = document.querySelector('.header__menu.menu-2');

let prevScrollpos = window.pageYOffset;
if (window.innerWidth > 1300) {
     window.onscroll = function () {
          var currentScrollPos = window.pageYOffset;
          if (prevScrollpos > currentScrollPos) {
               headerInfo.style.display = 'block';
               menu.style.display = 'flex';
               menu2.style.display = 'none';
          } else {
               headerInfo.style.display = 'none';
               menu.style.display = 'none';
               menu2.style.display = 'block';
          }
          prevScrollpos = currentScrollPos;
     }

}

//menu-mobile
const menu__burger = document.querySelector(".menu-mobile__burger");
const menu__mobile = document.querySelector('.menu__mobile-nav');

menu__burger.addEventListener("click", (e) => {
     body.classList.toggle("lock");
     menu__mobile.classList.toggle("active");
     menu__burger.classList.toggle("active");
});

//calculator
const calculatorForm = document.forms.calculator;
const elements = document.getElementsByName('texture');
const input = document.getElementsByName('meter');
let count;
calculatorForm.addEventListener('submit', function getCheckedRadioValue(event) {
     for (var i = 0, len = elements.length; i < len; ++i)
          if (elements[i].checked) { count = elements[i].value; }
     for (var i = 0, len = input.length; i < len; ++i) {
          if (!input[count].value) {
               input[count].classList.add('active');
               event.preventDefault();
               input[count].addEventListener('focus', () => {
                    input[count].classList.remove('active');
               })
          }
     }
})
