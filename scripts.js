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
});
