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

