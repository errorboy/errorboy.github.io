// лочить скрин на мобиле при нажатии на бургер
document.querySelector('.header__burger').addEventListener ('click', function(){
    this.classList.toggle('header__burger_active');
    document.querySelector('.header__menu').classList.toggle('header__menu_active');
    document.querySelector('body').classList.toggle('lock');
})

//сабменю + стрелка после проверки ширины
let changeToActiveSubList = function(){
    this.nextElementSibling.classList.toggle('header__sub-list_active');
    this.querySelector('.arrow').classList.toggle('arrow_active');
}
let chacngeClickMobileToDekstop = function(){
    if(document.body.clientWidth <= 768 && !clickIsActiveted) {
        clickIsActiveted = true;
        console.log('1')
        for(i=0; i<menu_block.length; i++){
            menu_block[i].addEventListener ('click', changeToActiveSubList);
            // console.log('add')
            // console.log(document.body.clientWidth);
        }
    }
    if(document.body.clientWidth >= 769 && clickIsActiveted) {
        clickIsActiveted = false;
        for(i=0; i<menu_block.length; i++){
            menu_block[i].removeEventListener ('click', changeToActiveSubList);
            menu_block[i].nextElementSibling.classList.remove('header__sub-list_active');
            menu_block[i].querySelector('.arrow').classList.remove('arrow_active');
            // console.log('remove')
            
        }
    }
    changeMarginUpButton();
}

let menu_block = document.querySelectorAll('.clicked-menu-block');
let clickIsActiveted = false;
window.onload = chacngeClickMobileToDekstop;
window.onresize = function(event) {
    chacngeClickMobileToDekstop();  
};
//

//button-up start
let button_up = document.querySelector('.button__up');

let changeMarginUpButton = function(){
    if(document.body.clientWidth >= 1089) {
        let num = ((document.body.clientWidth - 1000)/2)-45;
        console.log(document.body.clientWidth);
        console.log(button_up);
        button_up.style = `right: ${num}px;`
        // button_up.style.right = "20px";
    }else{
        button_up.style = `right: 5px`
    }
}
button_up.addEventListener('click', function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

window.onscroll =  function(){scrollButtonUp()};

let scrollButtonUp = function(){
    if(document.body.scrollTop >= 480 || document.documentElement.scrollTop >= 480){
        // button_up.style.display = 'block';
        button_up.classList.add('button__up_visible');
    } else {
        // button_up.style.display = 'none';
        button_up.classList.remove('button__up_visible');
    }
}
