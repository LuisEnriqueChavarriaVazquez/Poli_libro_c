function pregunta(numero) {
    //Respuestas para las preguntas
    let respuestasId = [
        0,
        "pregunta1_opt2", // Respuesta correcta: b
        "pregunta2_opt3", // Respuesta correcta: c
        "pregunta3_opt1", // Respuesta correcta: a
        "pregunta4_opt3", // Respuesta correcta: c
        "pregunta5_opt1", // Respuesta correcta: a
        "pregunta6_opt2", // Respuesta correcta: b
        "pregunta7_opt3", // Respuesta correcta: c
        "pregunta8_opt1", // Respuesta correcta: a
        "pregunta9_opt3", // Respuesta correcta: c
        "pregunta10_opt2", // Respuesta correcta: b
      ];      

    //Explicaciones de las preguntas
    let respuestasExplicacion = [
        0,
        ["La respuesta correcta es b.", "respuesta correcta", "La opción b refleja la correcta interpretación del contexto."],
        ["La opción c es correcta.", "La opción correcta es c.", "respuesta correcta"],
        ["La opción a es la correcta.", "La respuesta correcta es la opción a.", "Correcto, la opción a es adecuada."],
        ["respuesta correcta", "La opción c es la correcta.", "Esta opción c es la mejor respuesta."],
        ["La respuesta correcta es la opción a.", "respuesta correcta", "La opción a refleja correctamente el concepto."],
        ["La opción b es la respuesta correcta.", "respuesta correcta", "La opción b explica el concepto adecuadamente."],
        ["La opción c es la correcta.", "La opción correcta es c.", "respuesta correcta"],
        ["respuesta correcta", "La opción a es la correcta.", "Correcto, la opción a es la mejor."],
        ["La opción c es la correcta.", "La opción c refleja la mejor interpretación.", "respuesta correcta"],
        ["La respuesta correcta es la opción b.", "respuesta correcta", "La opción b es adecuada para el contexto."],
      ];
      

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
      "enunciado": "¿Qué implica la gestión de la integración del proyecto según la guía PMBOK?",
      "opciones": [
        "Involucra la gestión exclusiva de recursos humanos.",
        "Coordina los diversos procesos y actividades del proyecto.",
        "Se centra únicamente en la planificación de costos."
      ],
    },
    {
      "enunciado": "¿Cuál es el principal propósito de la gestión de riesgos en un proyecto?",
      "opciones": [
        "Evaluar la viabilidad técnica.",
        "Mitigar impactos negativos futuros.",
        "Garantizar la eficiencia en la comunicación."
      ],
    },
    {
      "enunciado": "¿Qué enfoque utiliza la gestión del tiempo en proyectos?",
      "opciones": [
        "Establecer un cronograma claro y secuencial.",
        "Optimizar únicamente los recursos materiales.",
        "Priorizar la comunicación entre equipos."
      ],
    },
    {
      "enunciado": "¿Cuál es una de las prácticas clave en la gestión sostenible de software?",
      "opciones": [
        "Maximizar la velocidad de desarrollo.",
        "Reducir el impacto ambiental del software.",
        "Evitar la documentación extensa."
      ],
    },
    {
      "enunciado": "¿Qué objetivo persigue la gestión de la calidad en un proyecto?",
      "opciones": [
        "Cumplir con las necesidades planteadas originalmente.",
        "Minimizar el tiempo de entrega a toda costa.",
        "Reducir el presupuesto del proyecto."
      ],
    },
    {
      "enunciado": "¿Qué aspecto destaca en la gestión del alcance de un proyecto?",
      "opciones": [
        "Controlar los cambios en el cronograma.",
        "Asegurar que solo se incluya lo necesario.",
        "Maximizar el número de entregables."
      ],
    },
    {
      "enunciado": "¿Qué herramienta es clave para la especificación de requisitos según la PMBOK?",
      "opciones": [
        "Casos de uso detallados.",
        "Matrices de trazabilidad.",
        "Simulaciones en tiempo real."
      ],
    },
    {
      "enunciado": "¿Cuál es el rol principal del acta de constitución del proyecto?",
      "opciones": [
        "Definir los entregables finales.",
        "Formalizar el inicio del proyecto.",
        "Determinar los recursos necesarios."
      ],
    },
    {
      "enunciado": "¿Qué enfoque sigue la gestión de las comunicaciones en un proyecto?",
      "opciones": [
        "Establecer relaciones solo dentro del equipo.",
        "Coordinar la difusión de información relevante.",
        "Centralizar el control en una sola persona."
      ],
    },
    {
      "enunciado": "¿Cuál es el beneficio principal de las pruebas de integración en desarrollo de software?",
      "opciones": [
        "Reducir los costos iniciales.",
        "Asegurar que los componentes trabajen juntos.",
        "Eliminar la necesidad de pruebas unitarias."
      ],
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
