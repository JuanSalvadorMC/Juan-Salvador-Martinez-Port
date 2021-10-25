/* window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
 */

  navbrand=document.getElementById('navbrand');
  navbrand.classList.add('pestanas-all');
 navbrand.setAttribute("style", "transition: 3s;width: 100%;");

  var nav= [];
  
nav[0]=document.getElementById('xabout');
nav[1]=document.getElementById('xcual');
nav[2]=document.getElementById('xexp');
nav[3]=document.getElementById('xpor');
nav[4]=document.getElementById('xcont');
imp=document.getElementById('contacto')

nav.forEach(element => {

    element.addEventListener('click', function(){
        nav.forEach(elementx => {
           /*  element.classList.contains('nombreclase'); */
            elementx.classList.remove('selecti');
        });
        element.classList.add('selecti');
    });
    
});
nav[4].addEventListener('click',function () {
    imp.classList.add('animate__animated','animate__tada');
    
    setTimeout(() => {
        imp.classList.remove('animate__tada');
    }, 1500);
});


/* MODAL */

const prev = document.querySelector('.carousel-control-prev');
const next = document.querySelector('.carousel-control-next');


const divItem1 = document.getElementById('carousel-item-div-1');
const divItem2 = document.getElementById('carousel-item-div-2');
const divItem3 = document.getElementById('carousel-item-div-3');
const divItem4 = document.getElementById('carousel-item-div-4');
const divItem5 = document.getElementById('carousel-item-div-5');


const openKekuul = document.querySelector('.hero__ctar');
const openWalmart = document.querySelector('.slideWalmart');
const openIesWeb = document.querySelector('.slideIesWeb');
const modal = document.querySelector('.modal');
let click=false;

const closeModal = document.querySelector('.modal__close');
const modalContainer = document.querySelector('.modal__container');

openKekuul.addEventListener('click', (e)=>{
    divItem1.classList.add('active');
    divItem2.classList.remove('active');
    divItem3.classList.remove('active');
    divItem4.classList.remove('active');
    divItem5.classList.remove('active');
    e.preventDefault();
    modal.classList.add('modal--show');
    document.getElementById('carrusel1').src='./assets/portafolio/kekuul/agencia2.png';
    document.getElementById('carrusel2').src='./assets/portafolio/kekuul/fund.png';
    document.getElementById('carrusel3').src='./assets/portafolio/kekuul/agencia4.png';
    document.getElementById('carrusel4').src='./assets/portafolio/kekuul/CapturaAgencia.png';
    document.getElementById('carrusel5').src='./assets/portafolio/kekuul/www.kekuul.com.jpeg';
    setTimeout(() => {
        click=false;
    }, 500);
    desaparecerIconos();  
});
openWalmart.addEventListener('click', (e)=>{
    divItem1.classList.add('active');
    divItem2.classList.remove('active');
    divItem3.classList.remove('active');
    divItem4.classList.remove('active');
    divItem5.classList.remove('active');
    e.preventDefault();
    modal.classList.add('modal--show');
    document.getElementById('carrusel1').src='./assets/portafolio/Walmart/Captura.PNG';
    document.getElementById('carrusel2').src='./assets/portafolio/Walmart/registro.png';
    document.getElementById('carrusel3').src='./assets/portafolio/Walmart/Registroal_25.png';
    document.getElementById('carrusel4').src='./assets/portafolio/Walmart/captura_39.png';
    document.getElementById('carrusel5').src='./assets/portafolio/Walmart/Captura203.png';
    setTimeout(() => {
        click=false;
    }, 500);
    desaparecerIconos();  
});
openIesWeb.addEventListener('click', (e)=>{
    divItem1.classList.add('active');
    divItem2.classList.remove('active');
    divItem3.classList.remove('active');
    divItem4.classList.remove('active');
    divItem5.classList.remove('active');
    e.preventDefault();
    modal.classList.add('modal--show');
    document.getElementById('carrusel1').src='./assets/portafolio/IesWeb/Capt.jpeg';
    document.getElementById('carrusel2').src='./assets/portafolio/IesWeb/Capturahost.jpeg';
    document.getElementById('carrusel3').src='./assets/portafolio/IesWeb/8_localhost.jpeg';
    document.getElementById('carrusel4').src='./assets/portafolio/IesWeb/Captura_localhost.jpeg';
    document.getElementById('carrusel5').src='./assets/portafolio/IesWeb/Captura.PNG';
    setTimeout(() => {
        click=false;
        console.log('false');
    }, 500);
    desaparecerIconos();  
});


closeModal.addEventListener('click', (e)=>{
    e.preventDefault();
        setTimeout(() => {
            click=false;
            modal.classList.remove('modal--show');
        }, 100);
});
modal.addEventListener('click', (e)=>{
    if (!click) {
        modal.classList.remove('modal--show');
    }
});
modalContainer.addEventListener('click', (e)=>{
    
    click=true;
    modal.classList.add('modal--show');
    setTimeout(() => {
        click=false;
    }, 100);
});

function desaparecerIconos(){
    console.log('prev',divItem1.className);
    if(divItem1.classList.contains('active') || divItem1.classList.contains('carousel-item-end')){
        prev.style.opacity=0;
    }else{
        prev.style.opacity=0.5;
    }
    if (divItem1.classList.contains('active') && divItem1.classList.contains('carousel-item-start')){
        console.log('entro');
        prev.style.opacity=0.5;
    }
    console.log('next',divItem5.className);
    if(divItem5.classList.contains('active') || divItem5.classList.contains('carousel-item-start')){
        next.style.opacity=0;
    }else{
        next.style.opacity=0.5;
    }
    if(divItem5.classList.contains('active') && divItem5.classList.contains('carousel-item-end')){
        console.log('entro');
        next.style.opacity=0.5;
    }
}

prev.addEventListener('click', (e)=>{
    desaparecerIconos();       
});
next.addEventListener('click', (e)=>{
    desaparecerIconos();       
});

/*  */

  


