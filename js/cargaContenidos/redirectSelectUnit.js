// Objeto con la información de las unidades
const unidades = {
    'unidad1': {
        titulo: 'Aspectos generales de un proyecto y el análisis del entorno',
        url: 'unidad1.html',
        color: '#75A990'
    },
    'unidad2': {
        titulo: 'Innovación y la gestión del mercado',
        url: 'unidad2.html',
        color: '#D77A86'
    },
    'unidad3': {
        titulo: 'Gestión técnica y ambiental del proyecto',
        url: 'unidad3.html',
        color: '#9A83C9'
    },
    'unidad4': {
        titulo: 'Gestión del presupuesto del proyecto',
        url: 'unidad4.html',
        color: '#D77A70'
    },
    'unidad5': {
        titulo: 'Título de la unidad 5',
        url: 'unidad5.html',
        color: '#8896C7'
    }
};

// Función para crear el select
function crearSelectUnidades() {
    // Obtener el elemento donde está el título actual
    const titleContainer = document.querySelector('.titleUnity');
    if (!titleContainer) return;

    // Crear el contenedor del select
    const selectContainer = document.createElement('div');
    selectContainer.className = 'select-unidades-container';
    selectContainer.style.position = 'relative';
    selectContainer.style.display = 'flex';
    selectContainer.style.alignItems = 'center';
    selectContainer.style.justifyContent = 'center';
    selectContainer.style.height = '100%';
    selectContainer.style.backgroundColor = 'white';
    selectContainer.style.borderRadius = '4px';
    selectContainer.style.top = '15px';
    selectContainer.style.padding = '0';
    selectContainer.style.minWidth = '300px';
    selectContainer.style.margin = '0 auto';

    // Crear el select
    const select = document.createElement('select');
    select.className = 'browser-default';
    select.style.width = '100%';
    select.style.height = '36px';
    select.style.background = 'white';
    select.style.border = 'none';
    select.style.borderRadius = '4px';
    select.style.color = '#333';
    select.style.padding = '0 30px 0 10px';
    select.style.fontSize = '14px';
    select.style.cursor = 'pointer';
    select.style.appearance = 'none';
    select.style.webkitAppearance = 'none';
    select.style.mozAppearance = 'none';
    select.style.fontFamily = 'Arial, sans-serif';
    select.style.lineHeight = '36px';
    select.style.verticalAlign = 'middle';

    // Obtener la unidad actual basada en la URL
    const currentUnit = Object.keys(unidades).find(key => 
        window.location.pathname.includes(unidades[key].url)
    );

    // Crear las opciones
    Object.entries(unidades).forEach(([key, value]) => {
        const option = document.createElement('option');
        option.value = value.url;
        option.textContent = `Unidad ${key.slice(-1)}: ${value.titulo}`;
        option.style.color = '#333';
        option.style.backgroundColor = '#fff';
        option.style.height = '36px';
        option.style.lineHeight = '36px';
        if (key === currentUnit) {
            option.selected = true;
        }
        select.appendChild(option);
    });

    // Crear el icono de chevron
    const chevronIcon = document.createElement('i');
    chevronIcon.className = 'material-icons';
    chevronIcon.textContent = 'expand_more';
    chevronIcon.style.color = '#666';
    chevronIcon.style.position = 'absolute';
    chevronIcon.style.right = '8px';
    chevronIcon.style.top = '50%';
    chevronIcon.style.transform = 'translateY(-50%)';
    chevronIcon.style.pointerEvents = 'none';
    chevronIcon.style.fontSize = '20px';
    chevronIcon.style.display = 'flex';
    chevronIcon.style.alignItems = 'center';
    chevronIcon.style.height = '100%';

    // Agregar elementos al contenedor
    selectContainer.appendChild(select);
    selectContainer.appendChild(chevronIcon);

    // Reemplazar el título actual con el select
    titleContainer.parentNode.replaceChild(selectContainer, titleContainer);

    // Evento de cambio del select
    select.addEventListener('change', (e) => {
        const selectedUrl = e.target.value;
        if (selectedUrl !== window.location.pathname.split('/').pop()) {
            window.location.href = selectedUrl;
        }
    });
}

// Inicializar el select cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', crearSelectUnidades);
