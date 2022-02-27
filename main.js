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







const $Carrouselmarker = $id('Carrouselmarker');
if($Carrouselmarker){
    const $Carrouselimg = $id('Carrouselimg');
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
}


const $cartProducts = $id('cartProducts');

const updateCart = () =>{
    $cartProducts.innerHTML="";
    const fragment = document.createDocumentFragment();
    const template = $id('productTemplate').content;
    const localCart = localStorage.getItem('wish').split(",||,").map(el=>JSON.parse(el));
    console.log(localCart)
    localCart.forEach((productObj)=>{
        const thisProduct = template.cloneNode(true);
        thisProduct.querySelector('.product-img').src=productObj.img;
        thisProduct.querySelector('.product-title').textContent=productObj.name;
        thisProduct.querySelector('.product-desc').textContent=productObj.desc;
        thisProduct.querySelector('.product-price').textContent=productObj.price;
        fragment.append(thisProduct);
        $cartProducts.append(fragment);
})
}

if(location.pathname.includes('cart.html') && localStorage.getItem('wish') && localStorage.getItem('wish')!==[]){
    updateCart()
    $cartProducts.addEventListener('click',(e)=>{
        const actions = {
            "buybtncart":(pr)=>{
                const localCart = localStorage.getItem('wish').split(",||,");
                localCart.forEach(el=>{
                    if(JSON.parse(el).name === pr.querySelector('.product-title').textContent) localCart.splice(localCart.indexOf(el),1);
                })
                localStorage.setItem('wish',localCart.join(",||,"));
                $cartProducts.removeChild(pr);
            }
        }
        if(actions[`${e.target.className}`]) actions[`${e.target.className}`](e.target.closest('.product'))
    })
}



if($productsContainer){
    $productsContainer.addEventListener('click',(e)=>{
        const actions = {
            "buybtncart":(pr)=>{
             const productObj = {
                 name:pr.querySelector('.product-title').textContent,
                 img:pr.querySelector('.product-img').src,
                 desc:pr.querySelector('.product-desc').textContent,
                 price:pr.querySelector('.product-price').textContent
             };
             
             if(!localStorage.getItem('wish')){
                 localStorage.setItem('wish',[JSON.stringify(productObj)]);
                 console.log(localStorage.getItem('wish')) 
             }
             else{
                 localStorage.setItem('wish',[localStorage.getItem('wish'),"||",JSON.stringify(productObj)]);
                 console.log(localStorage.getItem('wish'))
             }
            }
        }
        if(actions[`${e.target.className}`]) actions[`${e.target.className}`](e.target.closest('.product'))
    })
}


window.addEventListener('DOMContentLoaded',()=>{
    const showProducts = (parent) =>{
        const saw = (entries) =>{
            entries.forEach(el=>{
                if(el.isIntersecting) el.target.classList.add('productShow')
            })
        }
        const observer = new IntersectionObserver(saw,{threshold:.30});
        Array.from(parent.children).forEach(el=>{
            observer.observe(el)
        })
    }
    if($productsContainer) showProducts($productsContainer);
    else if($cartProducts) showProducts($cartProducts);
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



// window.addEventListener('load',()=>{
//     if(localStorage.getItem('mode')==='sun'){
//         ThemeLight();
//     }
//     else{
//         ThemeDark();
//     }
// })
