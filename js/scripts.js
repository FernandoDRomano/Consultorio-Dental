/*
    PARA CAMBIAR EL ICONO DEL MENU DE NAVEGACIÓN
*/

//Selecciono el boton con el icono de hamburguesa
let boton = document.querySelector('.botonMenu');
//Selecciono los enlaces del menu principal
let enlaces = document.querySelectorAll('#menuPrincipal .nav-item');

//Evento al boton
boton.addEventListener('click', (e) => {
    if(e.target.classList.contains('iconoCerrar')){
        e.target.classList.remove('iconoCerrar')
    }else{
        e.target.classList.add('iconoCerrar');
    }
});

//Evento a los enlaces del menu principal
enlaces.forEach(elemento => {
    elemento.addEventListener('click', (e)=>{
        //Le quito la clase para que desaparezca el icono de cerrar 
        boton.classList.remove('iconoCerrar');
        //Collapso el menu nuevamente
        document.querySelector('#menuPrincipal').classList.remove('show');
    });
});

/*
    PARA CONFIGURAR EL SLIDER CON SWIPER
*/

let mySwiper = new Swiper ('.swiper-container', {
    //PARA QUE SE AUTO INICIE
    //autoplay: {
        //delay: 2000,
    //},
    //ACTIVAR LAS FLECHAS DE NAVEGACIÓN
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    //ACTIVANDO LA PAGINACION 
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    //PARA CONTROLAR CON LOS BOTONES DEL TECLADO
    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },
    //LOOP INFINITO
    loop: true,
    //EFECTO AL PASAR EL SLIDE
    effect: 'fade',
    //TIEMPO ENTRE CAMBIO DE IMAGEN
    speed: 500,
    //PARA MOFICAR EL CURSOR: PARA QUE APARESCA LA MANITO
    grabCursor: true,
})

/*
    PARA CONFIGURAR EL MODAL CON VENOBOX
*/

$(document).ready(function(){
    $('.venobox').venobox({
        spinner: 'cube-grid',
        bgcolor: 'rgba(255,255,255,0.4)',
        border: '5px',
        closeColor: '#fff',
        share: []
    }); 
});

/*
    PARA CONFIGURAR counterUp 
*/
$('.counter').counterUp({
    delay: 10,
    time: 1200
});