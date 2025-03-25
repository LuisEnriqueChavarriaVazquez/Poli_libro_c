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

// Función para cargar el contenido inicial por defecto
function cargarContenidoInicial() {
	// Accedemos al contenedor de los textos
	let contenedorParaElContenidoDeLaUnidad = document.getElementById(
		"lateralUnityContent"
	);

	// Cargamos por defecto el contenido para la unidad (unidad de competencia)
	if (contenidosUnidad.unidadCompetencia) {
		contenedorParaElContenidoDeLaUnidad.innerHTML =
			contenidosUnidad.unidadCompetencia.contenido;
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
		// Opcional: Actualizar el título de la sección actual
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

	// Event listener para el menú de escritorio
let buttonContaineChargeContent = document.getElementById(
"lateralUnityMenuSectionContainer"
);
buttonContaineChargeContent.addEventListener("click", function (event) {
if (event.target.classList.contains("deskOption")) {
			const seccionId = event.target.getAttribute("seccion-id");
			cargarContenido(seccionId);
		}
	});

	// Event listener para el menú móvil
let buttonContaineChargeContentMobile = document.getElementsByClassName(
"mobileOptionsContainer"
);
for (var i = 0; i < buttonContaineChargeContentMobile.length; i++) {
		buttonContaineChargeContentMobile[i].addEventListener(
			"click",
			function (event) {
				if (event.target.classList.contains("mobileOption")) {
					const seccionId = event.target.getAttribute("seccion-id");
					cargarContenido(seccionId);
				}
			}
		);
	}
});
