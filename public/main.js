const $id = (element) => document.getElementById(element);

const $navBar__ul = $id('navBar__ul');
const $navBar__button = $id('navBar__button');


$navBar__button.addEventListener('click',()=>{
    $navBar__button.classList.toggle('opened');
    $navBar__ul.classList.toggle('opened');
})