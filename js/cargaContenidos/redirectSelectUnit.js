// Objeto con la información de las unidades
const unidades = {
    'unidad1': {
        titulo: 'Aspectos generales de un proyecto y el análisis del entorno',
        url: 'unidad1.html',
        color: '#75A990',
        textColor: '#2C3E50'
    },
    'unidad2': {
        titulo: 'Innovación y la gestión del mercado',
        url: 'unidad2.html',
        color: '#D77A86',
        textColor: '#2C3E50'
    },
    'unidad3': {
        titulo: 'Gestión técnica y ambiental del proyecto',
        url: 'unidad3.html',
        color: '#9A83C9',
        textColor: '#2C3E50'
    },
    'unidad4': {
        titulo: 'Gestión del presupuesto del proyecto',
        url: 'unidad4.html',
        color: '#D77A70',
        textColor: '#2C3E50'
    },
    'unidad5': {
        titulo: 'Evaluación Financiera del proyecto',
        url: 'unidad5.html',
        color: '#8896C7',
        textColor: '#2C3E50'
    },
    'proyectoFinal': {
        titulo: 'Desarrollo del proyecto final',
        url: 'proyecto-final.html',
        color: '#7BA7CC',
        textColor: '#2C3E50'
    }
};

// Función para truncar texto
function truncateText(text, maxLength) {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength - 3) + '...';
}

// Función para actualizar el texto según el ancho de la pantalla
function updateTextSizes() {
    const selectContent = document.querySelector('.select-content');
    if (!selectContent) return;

    const unitTitle = selectContent.querySelector('.unit-title');
    const unitNumber = selectContent.querySelector('.unit-number');
    const selectContainer = document.querySelector('.custom-select-container');
    const customSelect = document.querySelector('.custom-select');

    // Ajustar estilos según el ancho de la pantalla
    if (window.innerWidth <= 768) {
        selectContainer.style.minWidth = '90%';
        selectContainer.style.margin = '16px auto';
        unitTitle.style.fontSize = '14px';
        unitNumber.style.fontSize = '12px';
        customSelect.style.height = '28px';
        
        // Truncar texto en móviles
        const originalText = unitTitle.getAttribute('data-original-text') || unitTitle.textContent;
        unitTitle.setAttribute('data-original-text', originalText);
        unitTitle.textContent = truncateText(originalText, 40);
    } else if (window.innerWidth <= 1024) {
        selectContainer.style.minWidth = '400px';
        selectContainer.style.margin = '16px auto';
        unitTitle.style.fontSize = '16px';
        unitNumber.style.fontSize = '14px';
        customSelect.style.height = '30px';

        // Truncar texto en tablets
        const originalText = unitTitle.getAttribute('data-original-text') || unitTitle.textContent;
        unitTitle.setAttribute('data-original-text', originalText);
        unitTitle.textContent = truncateText(originalText, 60);
    } else {
        selectContainer.style.minWidth = '500px';
        selectContainer.style.margin = '18px auto';
        unitTitle.style.fontSize = '18px';
        unitNumber.style.fontSize = '16px';
        customSelect.style.height = '32px';

        // Restaurar texto original en desktop
        const originalText = unitTitle.getAttribute('data-original-text');
        if (originalText) {
            unitTitle.textContent = originalText;
        }
    }
}

// Función para crear el select personalizado
function crearSelectUnidades() {
    const titleContainer = document.querySelector('.titleUnity');
    if (!titleContainer) return;

    // Crear el contenedor principal
    const selectContainer = document.createElement('div');
    selectContainer.className = 'custom-select-container';
    selectContainer.style.cssText = `
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        min-width: 500px;
        width: auto;
        margin: 18px auto;
        z-index: 99999999999999999999;
        transition: all 0.3s ease;
    `;

    // Crear el select personalizado
    const customSelect = document.createElement('div');
    customSelect.className = 'custom-select';
    customSelect.style.cssText = `
        width: 100%;
        height: 32px;
        background: white;
        border: 1px solid #e0e0e0;
        border-radius: 4px;
        cursor: pointer;
        display: flex;
        align-items: center;
        position: relative;
        transition: all 0.3s ease;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12);
        z-index: 99999999999999999999;
        outline: none;
        tabindex: 0;
    `;

    // Obtener la unidad actual
    const currentUnit = Object.keys(unidades).find(key => 
        window.location.pathname.includes(unidades[key].url)
    );

    // Crear el contenido del select
    const selectContent = document.createElement('div');
    selectContent.className = 'select-content';
    selectContent.style.cssText = `
        display: flex;
        align-items: center;
        width: 100%;
        height: 100%;
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        padding: 0 8px;
    `;

    // Crear el número de unidad
    const unitNumber = document.createElement('span');
    unitNumber.className = 'unit-number';
    unitNumber.style.cssText = `
        background-color: ${unidades[currentUnit].color};
        color: white;
        padding: 0 8px;
        border-radius: 3px;
        margin-right: 8px;
        font-weight: bold;
        font-size: 16px;
        line-height: 24px;
        display: inline-flex;
        align-items: center;
        height: 24px;
        white-space: nowrap;
    `;
    unitNumber.textContent = currentUnit === 'proyectoFinal' ? 'Proyecto Final' : `Unidad ${currentUnit.slice(-1)}`;

    // Crear el título de la unidad
    const unitTitle = document.createElement('span');
    unitTitle.className = 'unit-title';
    unitTitle.style.cssText = `
        color: ${unidades[currentUnit].textColor};
        font-weight: bold;
        font-size: 18px;
        flex-grow: 1;
        line-height: 24px;
        display: inline-flex;
        align-items: center;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        transition: all 0.3s ease;
    `;
    unitTitle.textContent = unidades[currentUnit].titulo;

    // Crear el chevron
    const chevron = document.createElement('i');
    chevron.className = 'material-icons';
    chevron.style.cssText = `
        color: ${unidades[currentUnit].color};
        font-size: 32px;
        transition: transform 0.3s ease;
        display: inline-flex;
        align-items: center;
        line-height: 20px;
        font-weight: bold;
        opacity: 0.8;
    `;
    chevron.textContent = 'expand_more';

    // Crear el dropdown
    const dropdown = document.createElement('div');
    dropdown.className = 'select-dropdown';
    dropdown.style.cssText = `
        position: fixed;
        top: ${customSelect.getBoundingClientRect().bottom + 4}px;
        left: ${customSelect.getBoundingClientRect().left}px;
        right: ${window.innerWidth - customSelect.getBoundingClientRect().right}px;
        background: white;
        border: 1px solid #e0e0e0;
        border-radius: 4px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        display: none;
        z-index: 999999999999999999999;
        max-height: 300px;
        overflow-y: auto;
    `;

    // Crear las opciones del dropdown
    Object.entries(unidades).forEach(([key, value], index) => {
        const option = document.createElement('div');
        option.className = 'select-option';
        option.style.cssText = `
            padding: 6px 12px;
            cursor: pointer;
            display: flex;
            align-items: center;
            transition: background-color 0.2s ease;
            min-height: 36px;
            outline: none;
        `;
        option.setAttribute('tabindex', '0');
        option.setAttribute('role', 'option');
        option.setAttribute('aria-selected', 'false');

        const optionNumber = document.createElement('span');
        optionNumber.style.cssText = `
            background-color: ${value.color};
            color: white;
            padding: 0 8px;
            border-radius: 3px;
            margin-right: 8px;
            font-weight: bold;
            font-size: 14px;
            line-height: 24px;
            display: inline-flex;
            align-items: center;
            height: 24px;
            white-space: nowrap;
        `;
        optionNumber.textContent = key === 'proyectoFinal' ? 'Proyecto Final' : `Unidad ${key.slice(-1)}`;

        const optionTitle = document.createElement('span');
        optionTitle.style.cssText = `
            color: ${value.textColor};
            font-weight: bold;
            font-size: 16px;
            line-height: 24px;
            display: inline-flex;
            align-items: center;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            transition: all 0.3s ease;
        `;
        optionTitle.textContent = value.titulo;

        option.appendChild(optionNumber);
        option.appendChild(optionTitle);

        option.addEventListener('click', () => {
            if (value.url !== window.location.pathname.split('/').pop()) {
                window.location.href = value.url;
            }
        });

        // Añadir eventos de teclado a las opciones
        option.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                if (value.url !== window.location.pathname.split('/').pop()) {
                    window.location.href = value.url;
                }
            }
        });

        dropdown.appendChild(option);
    });

    // Variables para el control del teclado
    let selectedIndex = -1;
    const options = dropdown.querySelectorAll('.select-option');

    // Función para actualizar la selección visual
    function updateSelection() {
        options.forEach((option, index) => {
            if (index === selectedIndex) {
                option.style.backgroundColor = '#f5f5f5';
                option.setAttribute('aria-selected', 'true');
                option.focus();
            } else {
                option.style.backgroundColor = 'transparent';
                option.setAttribute('aria-selected', 'false');
            }
        });
    }

    // Función para manejar la navegación por teclado
    function handleKeyDown(e) {
        if (dropdown.style.display !== 'block') {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                dropdown.style.display = 'block';
                chevron.style.transform = 'rotate(180deg)';
                selectedIndex = 0;
                updateSelection();
            }
            return;
        }

        switch (e.key) {
            case 'ArrowDown':
                e.preventDefault();
                selectedIndex = (selectedIndex + 1) % options.length;
                updateSelection();
                break;
            case 'ArrowUp':
                e.preventDefault();
                selectedIndex = (selectedIndex - 1 + options.length) % options.length;
                updateSelection();
                break;
            case 'Enter':
                e.preventDefault();
                if (selectedIndex >= 0) {
                    const selectedOption = options[selectedIndex];
                    const url = selectedOption.querySelector('.unit-title').textContent;
                    const unit = Object.entries(unidades).find(([_, value]) => value.titulo === url);
                    if (unit && unit[1].url !== window.location.pathname.split('/').pop()) {
                        window.location.href = unit[1].url;
                    }
                }
                break;
            case 'Escape':
                e.preventDefault();
                dropdown.style.display = 'none';
                chevron.style.transform = 'rotate(0deg)';
                selectedIndex = -1;
                updateSelection();
                break;
        }
    }

    // Añadir eventos de teclado al select
    customSelect.addEventListener('keydown', handleKeyDown);

    // Actualizar el manejo del clic para mantener la selección
    customSelect.addEventListener('click', () => {
        const isOpen = dropdown.style.display === 'block';
        dropdown.style.display = isOpen ? 'none' : 'block';
        chevron.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(180deg)';
        
        if (!isOpen) {
            selectedIndex = 0;
            updateSelection();
        } else {
            selectedIndex = -1;
            updateSelection();
        }
        
        // Actualizar la posición del dropdown
        if (!isOpen) {
            dropdown.style.top = `${customSelect.getBoundingClientRect().bottom + 4}px`;
            dropdown.style.left = `${customSelect.getBoundingClientRect().left}px`;
            dropdown.style.right = `${window.innerWidth - customSelect.getBoundingClientRect().right}px`;
        }
    });

    // Actualizar la posición del dropdown cuando se hace scroll
    window.addEventListener('scroll', () => {
        if (dropdown.style.display === 'block') {
            dropdown.style.top = `${customSelect.getBoundingClientRect().bottom + 4}px`;
            dropdown.style.left = `${customSelect.getBoundingClientRect().left}px`;
            dropdown.style.right = `${window.innerWidth - customSelect.getBoundingClientRect().right}px`;
        }
    });

    // Actualizar la posición del dropdown cuando se redimensiona la ventana
    window.addEventListener('resize', () => {
        if (dropdown.style.display === 'block') {
            dropdown.style.top = `${customSelect.getBoundingClientRect().bottom + 4}px`;
            dropdown.style.left = `${customSelect.getBoundingClientRect().left}px`;
            dropdown.style.right = `${window.innerWidth - customSelect.getBoundingClientRect().right}px`;
        }
    });

    // Cerrar el dropdown al hacer clic fuera
    document.addEventListener('click', (e) => {
        if (!customSelect.contains(e.target) && !dropdown.contains(e.target)) {
            dropdown.style.display = 'none';
            chevron.style.transform = 'rotate(0deg)';
            selectedIndex = -1;
            updateSelection();
        }
    });

    // Efectos hover en las opciones
    dropdown.querySelectorAll('.select-option').forEach(option => {
        option.addEventListener('mouseenter', () => {
            option.style.backgroundColor = '#f5f5f5';
        });
        option.addEventListener('mouseleave', () => {
            option.style.backgroundColor = 'transparent';
        });
    });

    // Ensamblar el select
    selectContent.appendChild(unitNumber);
    selectContent.appendChild(unitTitle);
    selectContent.appendChild(chevron);
    customSelect.appendChild(selectContent);
    selectContainer.appendChild(customSelect);
    selectContainer.appendChild(dropdown);

    // Reemplazar el título actual con el select
    titleContainer.parentNode.replaceChild(selectContainer, titleContainer);

    // Inicializar los tamaños de texto responsivos
    updateTextSizes();
}

// Inicializar el select cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    crearSelectUnidades();
    // Agregar listener para el resize de la ventana
    window.addEventListener('resize', updateTextSizes);
});
