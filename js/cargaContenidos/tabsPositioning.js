// Función para ajustar el tamaño de los tabs
function ajustarTamanoTabs() {
    console.log('Ejecutando ajustarTamanoTabs');
    
    // Verificar si el elemento tabs existe
    const tabsContentElement = document.getElementById('tabsContentID');
    if (!tabsContentElement) {
        console.log('tabsContentID no encontrado, omitiendo ajuste de tamaño');
        return; // Salir temprano si no existe
    }
    
    // Obtener el contenedor principal
    const parentContainer = document.getElementById('lateralUnityContent');
    if (!parentContainer) {
        console.log('lateralUnityContent no encontrado, omitiendo ajuste de tamaño');
        return; // Salir temprano si no existe
    }
    
    // Calcular y establecer el ancho
    const parentContainerAncho = parentContainer.offsetWidth - 0.5;
    console.log('Ajustando ancho de tabs a:', parentContainerAncho);
    tabsContentElement.style.width = parentContainerAncho + 'px';
}

// Ejecutar ajuste solo cuando la página está completamente cargada
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOMContentLoaded en tabsPositioning.js');
    
    // Verificar si estamos en la sección de inicio antes de ajustar
    if (window.seccionActual === 'inicio' || window.seccionActual === null) {
        setTimeout(ajustarTamanoTabs, 500);
    }
});

// Ajustar cuando se redimensiona la ventana, solo si estamos en la página de inicio
window.addEventListener('resize', function() {
    // Solo ejecutar si estamos en la sección de inicio
    if (window.seccionActual === 'inicio') {
        ajustarTamanoTabs();
    }
});

// Exportar la función para que pueda ser utilizada desde unidad1.js
window.ajustarTamanoTabs = ajustarTamanoTabs;
  