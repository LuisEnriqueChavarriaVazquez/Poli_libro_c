$(document).ready(function () {
    // Objeto con los contenidos de cada sección
    const contenidos = {
        inicio: `
            <div class="titleContainer">
                <h1 class="titulo">Proyecto Final</h1>
            </div>
            <div class="contenido">
                <p class="textoNormal">
                    Bienvenido al proyecto final del curso. En esta sección desarrollarás un proyecto completo
                    aplicando todos los conocimientos adquiridos durante el curso.
                </p>
            </div>
        `,
        introduccion: `
            <div class="titleContainer">
                <h1 class="titulo">Introducción</h1>
            </div>
            <div class="contenido">
                <p class="textoNormal">
                    En este proyecto final, aplicarás los conocimientos y habilidades adquiridos durante el curso
                    para desarrollar una solución informática completa. El objetivo es que demuestres tu capacidad
                    para analizar, diseñar e implementar un sistema que resuelva una necesidad específica.
                </p>
            </div>
        `,
        desarrollo: `
            <div class="titleContainer">
                <h1 class="titulo">Desarrollo</h1>
            </div>
            <div class="contenido">
                <p class="textoNormal">
                    En esta sección desarrollarás paso a paso tu proyecto final, aplicando las metodologías y
                    técnicas aprendidas durante el curso. Asegúrate de documentar adecuadamente cada etapa
                    del desarrollo.
                </p>
            </div>
        `,
        cierre: `
            <div class="titleContainer">
                <h1 class="titulo">Cierre</h1>
            </div>
            <div class="contenido">
                <p class="textoNormal">
                    En esta sección final, realizarás:
                </p>
                <ul class="browser-default">
                    <li>Entrega de documentación final</li>
                    <li>Presentación del proyecto</li>
                    <li>Demostración del sistema</li>
                    <li>Evaluación y retroalimentación</li>
                </ul>
            </div>
        `
    };

    // Función para cargar el contenido
    function cargarContenido(seccionId) {
        const contenido = contenidos[seccionId];
        if (contenido) {
            $("#lateralUnityContent").html(contenido);
            // Activar Materialize components si es necesario
            $('.materialboxed').materialbox();
            $('pre code').each(function(i, block) {
                hljs.highlightBlock(block);
            });
        }
    }

    // Event listener para los links de navegación
    $(".navOptionsContent").click(function (e) {
        e.preventDefault();
        const seccionId = $(this).attr("seccion-id");
        if (seccionId) {
            cargarContenido(seccionId);
            
            // Remover clase activa de todos los links
            $(".navOptionsContent").removeClass("activeLinkOptionsContentProyectoFinal");
            // Agregar clase activa al link clickeado
            $(this).addClass("activeLinkOptionsContentProyectoFinal");
        }
    });

    // Cargar contenido inicial
    cargarContenido("inicio");
});
