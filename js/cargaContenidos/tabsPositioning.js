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
    setTimeout(ajustarTamanoTabs, 500); // Pequeño retraso para asegurar que todo esté listo
});

// Ajustar cuando se redimensiona la ventana
window.addEventListener('resize', function() {
    ajustarTamanoTabs();
});
  