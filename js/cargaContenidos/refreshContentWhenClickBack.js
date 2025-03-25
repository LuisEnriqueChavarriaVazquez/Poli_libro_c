let lastUrl = location.href;
let checkCount = 0;
const MAX_CHECKS = 3;

document.addEventListener('DOMContentLoaded', function() {
    // Store initial state
    const initialState = {
        url: location.href,
        timestamp: Date.now()
    };
    sessionStorage.setItem('pageState', JSON.stringify(initialState));

    // Handle back/forward navigation
    window.addEventListener('popstate', function() {
        const currentUrl = location.href;
        if (currentUrl !== lastUrl) {
            // Check if we need to refresh based on time passed
            const previousState = JSON.parse(sessionStorage.getItem('pageState') || '{}');
            const timePassed = Date.now() - (previousState.timestamp || 0);
            
            // Only refresh if more than 2 seconds have passed since last state
            if (timePassed > 2000) {
                console.log('Navigation detected, refreshing content');
                // Instead of reloading the page, try to reload just the content
                const sectionId = getSectionFromUrl(currentUrl);
                if (typeof cargarContenido === 'function' && sectionId) {
                    cargarContenido(sectionId);
                }
            }
            
            // Update last URL
            lastUrl = currentUrl;
        }
    });
});

function getSectionFromUrl(url) {
    // Extract section ID from URL hash if present
    const hash = url.split('#')[1];
    return hash || 'inicio';
}

//Codigo de prueba para ver si se actualiza la pagina en caso de que los elementos no tengan el display none
//La funcion prueba lo que hace es quitar los display none.
/**
 * Para que funcione debemos cambiar el setTimeout de la linea 3 por un setInterval
 */
function prueba() {
    // Obtener los últimos cuatro elementos
    const elementosOcultos = document.querySelectorAll('.tabsContentContainerInfo:nth-last-child(-n+4)');

    // Mostrar los elementos ocultos
    elementosOcultos.forEach(function(elemento) {
        elemento.style.display = 'block';
    });
};

// setTimeout(() => {
//     prueba();
// }, 1200);
