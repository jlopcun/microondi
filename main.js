const $id = (element) => document.getElementById(element);

const $body = document.body;
const $navBar__ul = $id('navBar__ul');
const $navBar__button = $id('navBar__button');
const $darkLight = $id('darkLight');
const $pageContent = $id('pageContent');
const $productsContainer = $id('productsContainer');
const RootStyles = document.documentElement.style;


$navBar__button.addEventListener('click',()=>{
    $navBar__button.classList.toggle('opened');
    $navBar__ul.classList.toggle('opened');
    $body.classList.toggle('menuOpened');
    $pageContent.classList.toggle('menuOpened');
})




window.addEventListener('DOMContentLoaded',()=>{
    const saw = (entries) =>{
        entries.forEach(el=>{
            if(el.isIntersecting) console.log(el)
        })
    }
    const observer = new IntersectionObserver(saw,{threshold:.50});
    Array.from($productsContainer.children).forEach(el=>{
        observer.observe(el)
    })
})





const $Carrouselimg = $id('Carrouselimg');
const $Carrouselmarker = $id('Carrouselmarker');
let CVcarrousel = 1;
$Carrouselmarker.children[CVcarrousel-1].classList.add('showing');
setInterval(()=>{
    (CVcarrousel===4)?CVcarrousel=1:CVcarrousel+=1;
    $Carrouselimg.src=`assets-microondi/flyers/microondi-flyer-${CVcarrousel}.jpg`;
    Array.from($Carrouselmarker.children).forEach(el=>{
        el.classList.remove('showing');
    })
    $Carrouselmarker.children[CVcarrousel-1].classList.add('showing');
},9000)





























































































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



// window.addEventListener('load',()=>{
//     if(localStorage.getItem('mode')==='sun'){
//         ThemeLight();
//     }
//     else{
//         ThemeDark();
//     }
// })
