function pregunta(numero) {
    //Respuestas para las preguntas
    let respuestasId = [0, "pregunta1_opt2"
        , "pregunta2_opt3", "pregunta3_opt3"
        , "pregunta4_opt1", "pregunta5_opt1"
        , "pregunta6_opt2", "pregunta7_opt1"
        , "pregunta8_opt3", "pregunta9_opt1"
        , "pregunta10_opt3",];

    //Explicaciones de las preguntas
    let respuestasExplicacion = [0, ["la respuesta era la b",'respuesta correcta','la respuesta era la b']
        , ["la respuesta era la c","La respuesta era la c","respuesta correcta"]
        , ["la respuesta era la c","La respuesta era la c","respuesta correcta"]
        , ["respuesta correcta","La respuesta era la a","la respuesta era la a"]
        , ["respuesta correcta","La respuesta era la a","la respuesta era la a"]
        , ["La respuesta era la b","respuesta correcta",'La respuesta era la b']
        , ["Respuesta correcta","La respuesta era la a","La respuesta era la a"]
        , ["la respuesta era la c","la respuesta era la c","Respuesta correcta"]
        , ["Respuesta correcta","La respuesta era la a","La respuesta era la a"]
        , ["la respuesta era la c","la respuesta era la c","Respuesta correcta"]
        , ];

    let respuestaCorrectaId = respuestasId[numero]
    let contenedor = document.getElementById("pregunta" + String(numero))
    let retroalimentacion = contenedor.querySelector("#retroalimentacion")
    var respuestaAlumnoId = contenedor.querySelector("section>div>label>input:checked").id;

    //Accedemos al contenido de la opcion elejida por el alumno
    var respuestaAlumnoContent = document.getElementById(respuestaAlumnoId);

    //Hay que registrar la respuesta del usuario como atributo en el DOM
    let contenedorPrincipalOPTMULTIPLE = document.getElementById(`pregunta${numero}`);
    contenedorPrincipalOPTMULTIPLE.setAttribute('resultadoFinal',`${respuestaAlumnoContent.value}`)

    //Para la asignacion de la retroalimentación correspondiente
    const regex=/pregunta(\d+)_opt(\d+)/;
    var matches = respuestaAlumnoId.match(regex)

    if (matches){
        var num_pregunta=matches[1];
        var num_retro=matches[2]-1;
    }else{
        console.log("Formato incorrecto")
    }

    //Evaluacion de las preguntas
    if (respuestaCorrectaId == respuestaAlumnoId) {
        retroalimentacion.innerHTML = `<span class="estadoPreguntaAzar">Correcto: </span>` + `&nbsp;<span class="respuestaCorrectaPreguntaAzar">${respuestasExplicacion[num_pregunta][num_retro]}</span>`;
        retroalimentacion.classList.add('mensajeCorrecta');

        //IMPORTANTE... Estas variables estan en el archivo de puntajeActual.js
        puntajeTotal++;
        preguntasContestadasTotal++;
    } else {
        retroalimentacion.innerHTML = `<span class="estadoPreguntaAzar">Incorrecto: </span>`  + `&nbsp;<span class="respuestaCorrectaPreguntaAzar">${respuestasExplicacion[num_pregunta][num_retro]}</span>`;
        retroalimentacion.classList.add('mensajeIncorrecta');

        //IMPORTANTE... Estas variables estan en el archivo de puntajeActual.js
        preguntasContestadasTotal++;
    }

    //IMPORTANTE... Estas variables estan en el archivo de puntajeActual.js
    //Cada que se responda pregunta correcta se actualiza contador
    contadorPreguntas.innerText = puntajeTotal;
    contadorPreguntas2.innerText = puntajeTotal;

    //IMPORTANTE... Estas variables estan en el archivo de puntajeActual.js
    //Cada que contestemos una pregunta se actualiza el contador
    contadorPreguntasRespondidas.innerText = preguntasContestadasTotal;
    contadorPreguntasRespondidas2.innerText = preguntasContestadasTotal;

    //IMPORTANTE... Estas variables estan en el archivo de puntajeActual.js
    //La barra se incrementa de tamaño con cada pregunta
    barraPreguntas.setAttribute('style', 'width:' + preguntasContestadasTotal*5 + '%');
    barraPreguntas2.setAttribute('style', 'width:' + preguntasContestadasTotal*5 + '%');

    //Se elimina el boton de la pregunta que ha sido respondida
    let button_evaluation = document.getElementById('button_evaluation_'+numero);
    button_evaluation.setAttribute('style', 'display:none');

    //Se eliminan los inputs de la pregunta
    let opt1_input = document.getElementById('pregunta' + numero + '_opt1');
    let opt2_input = document.getElementById('pregunta' + numero + '_opt2');
    let opt3_input = document.getElementById('pregunta' + numero + '_opt3');

    opt1_input.setAttribute('disabled', '');
    opt2_input.setAttribute('disabled', '');
    opt3_input.setAttribute('disabled', '');

    //Retroalimentamos al usuario
    M.toast({html: `Pregunta respondida`});

    //Validamos que el examen se hay terminado en este punto
    validateExamenCompletado();
}

const preguntas_aleatorias_indices = [0]
const preguntas = [
    0,
    {
        "enunciado": "¿Cuál es una característica fundamental de la innovación?",
        "opciones": ['Desarrollo de tecnología sofisticada.', 'Transformación de una oportunidad de mejora en valor.', 'Creación de productos completamente nuevos.'],
    },
    {
        "enunciado": "¿Cuál es uno de los aspectos principales de la metodología Design Thinking?",
        "opciones": ['Fases estrictamente secuenciales.', 'Enfoque exclusivo en la tecnología.', 'Consideración de las necesidades del usuario.'],
    },
    {
        "enunciado": "¿Cuál es el objetivo principal de la fase de empatizar/descubrir en Design Thinking?",
        "opciones": ['Definir el problema de manera precisa.', 'Generar soluciones innovadoras.', 'Comprender las necesidades y el contexto de los usuarios.'],
    },
    {
        "enunciado": "¿Qué se busca en la fase de definir del Design Thinking?",
        "opciones": ['Definir claramente el problema y las necesidades de los usuarios.','Identificar las necesidades emocionales de los usuarios.', 'Generar nuevas ideas para resolver el problema.'],
    },
    {
        "enunciado": "¿Cuál es el propósito principal de la fase de idear en Design Thinking?",
        "opciones": ['Desarrollar múltiples ideas creativas.', 'Definir claramente el problema.', 'Generar una solución perfecta.'],
    },
    {
        "enunciado": "¿Qué técnica creativa se utiliza para generar muchas ideas diferentes durante la fase de idear en Design Thinking?",
        "opciones": ['Encuesta.', 'SCAMPER.', 'Entrevista.'],
    },
    {
        "enunciado": "¿Qué se busca al aplicar la técnica Da Vinci o morfológica durante la fase de idear en Design Thinking?",
        "opciones": ['Generar combinaciones de características para crear soluciones innovadoras.', 'Seleccionar las ideas más económicas.', 'Evaluar el impacto medioambiental de las ideas.'],
    },
    {
        "enunciado": "¿Cuál es uno de los aspectos fundamentales a considerar al momento de construir y presentar un prototipo durante la fase de prototipar en Design Thinking?",
        "opciones": ['La validación de la idea.', 'La creatividad del prototipo.', 'Que los prototipos den solución a la problemática planteada.'],
    },
    {
        "enunciado": "¿Qué se busca al realizar el testeo (validar) de un prototipo durante la quinta fase del Design Thinking?",
        "opciones": ['Recoger opiniones de los usuarios para obtener nuevas ideas de mejora.', 'Evaluar la creatividad del prototipo.','Probar la viabilidad económica del prototipo.'],
    },
    {
        "enunciado": "¿Por qué es importante realizar un proceso iterativo durante el testeo de un prototipo en Design Thinking?",
        "opciones": ['Para incrementar el costo del proyecto.', 'Para validar la solución ideal en el primer intento.', 'Para recoger diferentes puntos de vista y mejorar la solución.'],
    },
];

function preguntas_aleatorias() {



    while (preguntas_aleatorias_indices.length < 11) {
        numero = aleatorio(1, preguntas.length-1);
        if (preguntas_aleatorias_indices.includes(numero) == false) {
            preguntas_aleatorias_indices.push(numero)
        }
    }


    let contenedor_preguntas = document.getElementById('contenedor_preguntas');
    let contenido_preguntas = "";
    for (i = 1; i < preguntas_aleatorias_indices.length; i++) {
        contenido_preguntas = contenido_preguntas + `
        <section class="randomizeDOMClass lazy" id="pregunta${preguntas_aleatorias_indices[i]}" resultadoFinal="">
            <!--Formulario para la revision de la pregunta-->
            <form class="cardPregunta clgreyl2 border1 shadow2">
                <!--Numero y enunciado de la pregunta-->
                <div class="titleQuestionContainer clgreyl3">
                    <div class="titleQuestionContainerSecondary">
                        <h5 class="getEnunciadoNumeroPdf preguntaIdentificador clgreyl2 clbktx border1 textoStandar numeracionPregunta">Numero de la pregunta</h5>
                        <a class="waves-effect waves-light tooltipped clgreyl2 clbktx border1"
                            data-position="left" data-tooltip="Selecciona alguna de las opciones">
                            <i class="material-icons">help</i>
                        </a>
                    </div>
                    <p class="getEnunciadoPdf preguntaEnunciado clgreyl2 clbktx border1 textoPregunta">${preguntas[preguntas_aleatorias_indices[i]].enunciado}</p>
                </div>
                
                <!--Opciones de la pregunta-->
                <section class="optionsQuestionContainer clgreyl3" >
                    <div class="form-check">
                        <label class="form-check-label textoStandar clbktx" for="pregunta${preguntas_aleatorias_indices[i]}_opt1">
                            <input name="flexRadioDefault1" type="radio" 
                            id="pregunta${preguntas_aleatorias_indices[i]}_opt1" 
                            value="${preguntas[preguntas_aleatorias_indices[i]].opciones[0]}"/>
                            <span>${preguntas[preguntas_aleatorias_indices[i]].opciones[0]}</span>
                        </label>
                    </div>
                    <div class="form-check">
                        <label class="form-check-label textoStandar clbktx" for="pregunta${preguntas_aleatorias_indices[i]}_opt2">
                            <input name="flexRadioDefault1" type="radio" 
                            id="pregunta${preguntas_aleatorias_indices[i]}_opt2" 
                            value="${preguntas[preguntas_aleatorias_indices[i]].opciones[2]}"/>
                            <span>${preguntas[preguntas_aleatorias_indices[i]].opciones[1]}</span>
                        </label>
                    </div>
                    <div class="form-check">
                        <label class="form-check-label textoStandar clbktx" for="pregunta${preguntas_aleatorias_indices[i]}_opt3">
                            <input name="flexRadioDefault1" type="radio" 
                            id="pregunta${preguntas_aleatorias_indices[i]}_opt3" 
                            value="${preguntas[preguntas_aleatorias_indices[i]].opciones[2]}"/>
                            <span>${preguntas[preguntas_aleatorias_indices[i]].opciones[2]}</span>
                        </label>
                    </div>
                </section>

                
                <!--Boton para revisar la pregunta-->
                <div class="evaluateQuestionContainer">
                    <a class='btn-large btnIndividualQuestion waves-effect waves-light border1 cl5 white-text' id="button_evaluation_${preguntas_aleatorias_indices[i]}" onclick="pregunta(${preguntas_aleatorias_indices[i]})">Revisar pregunta<i
                    class="material-icons right">done</i></a>
                    <!--Retroalimentacion de la pregunta-->
                    <div id="retroalimentacion" cajaRetroalimentacion="retroalimentacion"></div>
                </div>
            </form>
        </section>
        `;
    }
    contenedor_preguntas.innerHTML = contenido_preguntas;

}

function aleatorio(a, b) {
    var aleatorio = Math.round(Math.random() * (b - a) + parseInt(a));
    return aleatorio
}
preguntas_aleatorias();
