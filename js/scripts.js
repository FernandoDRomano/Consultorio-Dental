/*
    PARA CAMBIAR EL ICONO DEL MENU DE NAVEGACIÓN
*/

//Selecciono el boton con el icono de hamburguesa
let boton = document.querySelector('.botonMenu');
//Selecciono los enlaces del menu principal
let enlaces = document.querySelectorAll('#menuPrincipal .nav-item');

//Evento al boton
boton.addEventListener('click', (e) => {
    e.target.classList.toggle('iconoCerrar')
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
    autoplay: {
        delay: 2000,
    },
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

/*
    PARA CONFIGURAR pickadate.js
*/

$('.datepicker').pickadate({
    monthsFull:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],
    monthsShort:["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"],
    weekdaysFull:["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"],
    weekdaysShort:["Dom","Lun","Mar","Mié","Jue","Vie","Sáb"],
    today:"Hoy",
    clear:"Borrar",
    close:"Cerrar",
    firstDay:1,
    format:"dddd d !de mmmm !de yyyy",
    formatSubmit:"dd/mm/yyyy",
    selectYears: true,
    selectMonths:true,
    // Accessibility labels
    labelMonthNext: 'Siguiente Mes',
    labelMonthPrev: 'Anterior Mes',
    labelMonthSelect: 'Seleccione un Mes',
    labelYearSelect: 'Seleccione un Año',
    //Fechas minimas y maximas permitidads
    min: true, //Si coloco el valor en true no permitira seleccionar fechas anteriores
    max: 30, //30 es la cantidad de días posteriores a la actual que se podra seleccionar, este valor se puede modificar
});

$('.timepicker').pickatime({
    clear: 'Limpiar',
    format: 'HH:i A',
    //Para definir el intervalo en minutos
    interval: 30,
    //Para definir el intervalo de horas que mostrara
    min: [9,00], //Empieza a partir de las 9hs
    max: [13,00], //Hasta las 13hs

});

/*
    PARA CONFIGURAR LA BARRA DE NAVEGACIÓN FIJA CON STICKIT
*/

$('#menuNavegacion').stickit({
    className: 'menuFijo',
});

/*
    PARA CONFIGURAR EL EFECTO SCROLL DE LA PAGINA WEB
*/

$('#menuPrincipal a').mPageScroll2id({
    //Para indicarle el tamaño del menu de navegación fijo
    offset: 50,
    //Para darle la clase activo al enlace seleccionado
    highlightClass: 'active'
});