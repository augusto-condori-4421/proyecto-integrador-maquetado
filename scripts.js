document.addEventListener('DOMContentLoaded', () => { // espera a que el dom cargue completamente
    const elements = document.querySelectorAll('.left, .right'); // selecciona los elementos con esas clases
    
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
