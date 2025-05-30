// Este archivo combina los contenidos de los archivos fragmentados
// La idea es cargar los contenidos desde los tres archivos y combinarlos en un único objeto

// Declaramos el objeto que contendrá todos los contenidos
const contenidosUnidad = {};

// Función para cargar los contenidos de los archivos y combinarlos
async function cargarContenidos() {
	try {
		// Cargar dinámicamente los módulos
		const modulo1 = await import("./unidad3_p1.js");
		const modulo2 = await import("./unidad3_p2.js");
		const modulo3 = await import("./unidad3_p3.js");

		// Combinar todos los contenidos en un solo objeto
		Object.assign(
			contenidosUnidad,
			modulo1.contenidosUnidad,
			modulo2.contenidosUnidad,
			modulo3.contenidosUnidad
		);

		console.log(
			"Contenidos cargados exitosamente:",
			Object.keys(contenidosUnidad).length
		);

		// Inicializar con el contenido por defecto una vez cargado todo
		cargarContenidoInicial();

		// Configurar los event listeners después de cargar los contenidos
		configurarEventListeners();
	} catch (error) {
		console.error("Error al cargar los contenidos:", error);
		// Mostrar mensaje de error en la interfaz
		document.getElementById("lateralUnityContent").innerHTML = `
<div class="shadow4 border1 clw">
                <div class="textoTitulo titleContainer white-text colorCardTitleContent border1Sup">Error de carga</div>
    <div class="cardDesign clw border1Inf">
        <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                        Ocurrió un error al cargar los contenidos. Por favor recarga la página.
                    </p>
        </div>
            </div>`;
	}
}

// Función para configurar los event listeners
function configurarEventListeners() {
	// Event listener para el menú de escritorio
	const desktopMenu = document.getElementById("lateralUnityMenuSectionContainer");
	if (desktopMenu) {
		desktopMenu.addEventListener("click", function (event) {
			const target = event.target.closest("[seccion-id]");
			if (target) {
				event.preventDefault();
				const seccionId = target.getAttribute("seccion-id");
				console.log("Desktop menu click on section:", seccionId);
				cargarContenido(seccionId);
			}
		});
	}

	// Event listener para el menú móvil
	const mobileMenus = document.querySelectorAll(".mobileOptionsContainer");
	mobileMenus.forEach(menu => {
		menu.addEventListener("click", function (event) {
			const target = event.target.closest("[seccion-id]");
			if (target) {
				event.preventDefault();
				const seccionId = target.getAttribute("seccion-id");
				console.log("Mobile menu click on section:", seccionId);
				cargarContenido(seccionId);
				
				// Cerrar el sidenav en móvil
				const sidenav = document.querySelector(".sidenav");
				if (sidenav && M && M.Sidenav) {
					const instance = M.Sidenav.getInstance(sidenav);
					if (instance) {
						instance.close();
					}
				}
			}
		});
	});
}

// Función para inicializar las tabs
function inicializarTabs() {
	// Destruir las tabs existentes si hay alguna
	const tabsExistentes = document.querySelectorAll('.tabs');
	tabsExistentes.forEach(tab => {
		const instance = M.Tabs.getInstance(tab);
		if (instance) {
			instance.destroy();
		}
	});

	// Inicializar las nuevas tabs
	const tabs = document.querySelectorAll('.tabs');
	tabs.forEach(tab => {
		M.Tabs.init(tab, {
			swipeable: false,
			duration: 300
		});
	});

	// Ajustar el ancho de los tabs
	const tabsContainer = document.querySelector('.tabs-container');
	if (tabsContainer) {
		const parentWidth = tabsContainer.parentElement.offsetWidth;
		const tabsWidth = tabsContainer.offsetWidth;
		if (tabsWidth > parentWidth) {
			tabsContainer.style.width = `${parentWidth}px`;
		}
	}
}

// Función para cargar el contenido inicial por defecto
function cargarContenidoInicial() {
	// Accedemos al contenedor de los textos
	let contenedorParaElContenidoDeLaUnidad = document.getElementById(
		"lateralUnityContent"
	);

	// Cargamos por defecto el contenido para la unidad (inicio)
	if (contenidosUnidad.inicio) {
		contenedorParaElContenidoDeLaUnidad.innerHTML =
			contenidosUnidad.inicio.contenido;
		
		// Inicializar las tabs después de cargar el contenido
		setTimeout(inicializarTabs, 100);
	}
}

// Función para cargar contenido específico
function cargarContenido(seccionId) {
	// Accedemos al contenedor de los textos
	let contenedorParaElContenidoDeLaUnidad = document.getElementById(
		"lateralUnityContent"
	);

	if (!seccionId) return; // Si no hay seccionId, no hacemos nada

	const seccion = contenidosUnidad[seccionId];
	if (seccion) {
		contenedorParaElContenidoDeLaUnidad.innerHTML = seccion.contenido;
		
		// Inicializar los tabs si estamos en la sección de inicio
		if (seccionId === 'inicio') {
			setTimeout(() => {
				const tabsElement = document.querySelector('.tabs');
				if (tabsElement) {
					M.Tabs.init(tabsElement, {
						swipeable: false,
						duration: 300
					});
				}
				
				// Ajustar el ancho de los tabs
				const tabsContentElement = document.getElementById('tabsContentID');
				if (tabsContentElement) {
					const parentContainer = document.getElementById('lateralUnityContent');
					if (parentContainer) {
						const parentContainerAncho = parentContainer.offsetWidth - 0.5;
						tabsContentElement.style.width = parentContainerAncho + 'px';
					}
				}
			}, 100);
		}

		// Actualizar el título de la sección actual
		document.title = `Unidad 3 - ${seccion.titulo || ""}`;
	} else {
		console.warn(`Sección ${seccionId} no encontrada`);
		contenedorParaElContenidoDeLaUnidad.innerHTML = `
            <div class="shadow4 border1 clw">
                <div class="textoTitulo titleContainer white-text colorCardTitleContent border1Sup">Error</div>
                <div class="cardDesign clw border1Inf">
                    <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                        La sección solicitada no está disponible.
                    </p>
                </div>
            </div>`;
	}
}

// Iniciar la carga de los contenidos cuando se cargue el documento
document.addEventListener("DOMContentLoaded", function () {
	cargarContenidos();
});
