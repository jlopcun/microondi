const $id = (element) => document.getElementById(element);

const $body = document.body;
const $navBar__ul = $id('navBar__ul');
const $navBar__button = $id('navBar__button');
const $darkLight = $id('darkLight');
const $pageContent = $id('pageContent');
const $loader = $id('loader');
const RootStyles = document.documentElement.style;
$navBar__button.addEventListener('click',()=>{
    $navBar__button.classList.toggle('opened');
    $navBar__ul.classList.toggle('opened');
    $body.classList.toggle('menuOpened');
    $pageContent.classList.toggle('menuOpened');
})
// const ThemeLight = ()=>{
//     RootStyles.setProperty('--pageMainColor','#fff');
//     (window.location.toString().includes('semi-pages'))
//     ?$darkLight.src="../assets-microondi/sun-svgrepo-com.svg"
//     :$darkLight.src="assets-microondi/sun-svgrepo-com.svg"
//     localStorage.setItem('mode','sun');
// }
// const ThemeDark =()=>{
//     RootStyles.setProperty('--pageMainColor','#777');
//         (window.location.toString().includes('semi-pages'))
//         ?$darkLight.src="../assets-microondi/moon-svgrepo-com.svg"
//         :$darkLight.src="assets-microondi/moon-svgrepo-com.svg"
//         localStorage.setItem('mode','moon');
// }
// $darkLight.addEventListener('click',(e)=>{
//     if(e.target.src.includes('sun')){
//        ThemeDark(e);
//     }
//     else{
//        ThemeLight(e);
//     }
// })



window.addEventListener('load',()=>{
    if(localStorage.getItem('mode')==='sun'){
        ThemeLight();
    }
    else{
        ThemeDark();
    }
})
setTimeout(()=>{
    $loader.classList.add('loader-load');
},1000)