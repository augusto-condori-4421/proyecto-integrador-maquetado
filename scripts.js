document.addEventListener('DOMContentLoaded', () => { // espera a que el dom cargue completamente
    const elements = document.querySelectorAll('.left, .right'); // selecciona los elementos con esas clases
    
    // Agregar clase para ocultar elementos inicialmente
    elements.forEach(element => element.classList.add('animate-on-scroll'));
    
    const observer = new IntersectionObserver((entries) => { // usa la libreria intersectionObserver
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const animation = element.classList.contains('left') ? 'animate__fadeInLeft' : 'animate__fadeInRight';
                element.classList.add('animate__animated', animation);
                observer.unobserve(element);
            }
        });
    }, { threshold: 0.2 }); // 20% del elemento visible

    // llama a la funcion observer
    elements.forEach(element => observer.observe(element));

    // Animaciones para elementos que suben y bajan, funcion upDownElements replica de la funcion observer
    const upDownElements = document.querySelectorAll('.up, .down');
    
    // Ocultar elementos up/down inicialmente
    upDownElements.forEach(element => element.classList.add('animate-on-scroll'));
    
    const upDownObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const animation = element.classList.contains('up') ? 'animate__fadeInUp' : 'animate__fadeInDown';
                element.classList.add('animate__animated', animation);
                upDownObserver.unobserve(element);
            }
        });
    }, { threshold: 0.2 });

    upDownElements.forEach(element => upDownObserver.observe(element));
});

// Manejo del encabezado, barra de navegacion
// funcion: que el encabezado se fije al quedar fuera de vision por escrollear
const header = document.querySelector("header");
let lastScroll = 0;

window.addEventListener("scroll", () => {
    let currentScroll = window.scrollY;

    if (currentScroll > lastScroll && currentScroll > 400) {
        // Si scrolleaste hacia abajo y pasaste los 100px, se fija con animación
        header.classList.add("fixed");
    } else if (currentScroll <= 50) {
        // Si vuelves arriba, se quita la clase fixed
        header.classList.remove("fixed");
    }

    lastScroll = currentScroll;
});

// burger menu
const buttonClose = document.querySelector(".button-close");
const buttonOpen = document.querySelector(".button-open");
const options = document.querySelector(".options");

// df === display flex
// dn === display none
// deja a btn-close y options con df
// y a btn-open con dn
buttonOpen.addEventListener("click", () => {
    options.classList.remove("dn");
    options.classList.add("df");
    
    buttonClose.classList.remove("dn");
    buttonClose.classList.add("df");

    buttonOpen.classList.remove("df");
    buttonOpen.classList.add("dn");
});

// accion opuesta
buttonClose.addEventListener("click", () => {
    options.classList.remove("df");
    options.classList.add("dn");
    
    buttonClose.classList.remove("df");
    buttonClose.classList.add("dn");

    buttonOpen.classList.remove("dn");
    buttonOpen.classList.add("df");
});

// boton de volver al inicio
const btnUp = document.querySelector(".btn-up");

window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        btnUp.classList.add("show");
    } else {
        btnUp.classList.remove("show");
    }
});

btnUp.addEventListener("click", () => {
    window.scrollTo(0, 0);
});
