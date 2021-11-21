const $id = (element) => document.getElementById(element);

const $body = document.body;
const $navBar__ul = $id('navBar__ul');
const $navBar__button = $id('navBar__button');
const $darkLight = $id('darkLight');
const $pageContent = $id('pageContent');
const RootStyles = document.documentElement.style;
$navBar__button.addEventListener('click',()=>{
    $navBar__button.classList.toggle('opened');
    $navBar__ul.classList.toggle('opened');
    $body.classList.toggle('menuOpened');
    $pageContent.classList.toggle('menuOpened');
})

$darkLight.addEventListener('click',(e)=>{
    if(e.target.src.includes('sun')){
        RootStyles.setProperty('--pageMainColor','#777');
        RootStyles.setProperty('--prouctBgcolor','#aaa');
        e.target.src="assets-microondi/moon-svgrepo-com.svg";
    }
    else{
        RootStyles.setProperty('--pageMainColor','#fff');
        RootStyles.setProperty('--prouctBgcolor','#eee');
        e.target.src="assets-microondi/sun-svgrepo-com.svg";
    }
})



