document.addEventListener('DOMContentLoaded', function() {
    console.log('DOMContentLoaded en collapsible.js');
    
    try {
        // Primera sección
        const primeraSeccion = document.getElementById('primeraSeccion');
        const primeraSeccionIcon = document.getElementById('primeraSeccionIcon');
        const primeraSeccionHideElements = document.querySelectorAll('.primeraSeccionHide');
        
        if (primeraSeccion && primeraSeccionIcon && primeraSeccionHideElements.length > 0) {
            primeraSeccion.addEventListener('click', function() {
                if (primeraSeccionIcon.textContent === 'expand_more') {
                    // Mostrar elementos
                    primeraSeccionIcon.textContent = 'expand_less';
                    primeraSeccionHideElements.forEach(element => {
                        element.style.display = 'block';
                    });
                } else {
                    // Ocultar elementos
                    primeraSeccionIcon.textContent = 'expand_more';
                    primeraSeccionHideElements.forEach(element => {
                        element.style.display = 'none';
                    });
                }
            });
        }
        
        // Segunda sección
        const segundaSeccion = document.getElementById('segundaSeccion');
        const segundaSeccionIcon = document.getElementById('segundaSeccionIcon');
        const segundaSeccionHideElements = document.querySelectorAll('.segundaSeccionHide');
        
        if (segundaSeccion && segundaSeccionIcon && segundaSeccionHideElements.length > 0) {
            segundaSeccion.addEventListener('click', function() {
                if (segundaSeccionIcon.textContent === 'expand_more') {
                    // Mostrar elementos
                    segundaSeccionIcon.textContent = 'expand_less';
                    segundaSeccionHideElements.forEach(element => {
                        element.style.display = 'block';
                    });
                } else {
                    // Ocultar elementos
                    segundaSeccionIcon.textContent = 'expand_more';
                    segundaSeccionHideElements.forEach(element => {
                        element.style.display = 'none';
                    });
                }
            });
        }
        
    } catch (error) {
        console.warn('Error en collapsible.js, pero continuando:', error);
    }
});