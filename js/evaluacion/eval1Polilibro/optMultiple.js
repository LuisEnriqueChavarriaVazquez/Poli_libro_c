function pregunta(numero) {
    //Respuestas para las preguntas
    let respuestasId = [0, "pregunta1_opt1",
        "pregunta2_opt2", "pregunta3_opt3",
        "pregunta4_opt2", "pregunta5_opt1",
        "pregunta6_opt1", "pregunta7_opt3",
        "pregunta8_opt2", "pregunta9_opt1",
        "pregunta10_opt2"];
    

    //Explicaciones de las preguntas
    let respuestasExplicacion = [0, ["respuesta correcta", "La respuesta era la b", "La respuesta era la c"],
    ["La respuesta era la a", "respuesta correcta", "La respuesta era la c"],
    ["La respuesta era la a", "La respuesta era la b", "respuesta correcta"],
    ["La respuesta era la b", "respuesta correcta", "La respuesta era la c"],
    ["respuesta correcta", "La respuesta era la b", "La respuesta era la c"],
    ["respuesta correcta", "La respuesta era la b", "La respuesta era la c"],
    ["La respuesta era la b", "La respuesta era la c", "respuesta correcta"],
    ["La respuesta era la c", "respuesta correcta", "La respuesta era la a"],
    ["respuesta correcta", "La respuesta era la b", "La respuesta era la c"],
    ["La respuesta era la b", "respuesta correcta", "La respuesta era la c"]];


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
        "enunciado": "¿Qué elemento es fundamental en la formulación de proyectos informáticos?",
        "opciones": ["Asignación eficiente de recursos", "Maximización de la inversión", "Simplificación de procesos"]
    },
    {
        "enunciado": "¿Cuál es uno de los principales desafíos en la gestión de la integración de proyectos informáticos?",
        "opciones": ["Coordinar las tareas de forma independiente", "Equilibrar los objetivos contrapuestos", "Evitar la documentación de los procesos"]
    },
    {
        "enunciado": "¿Qué técnica ayuda a analizar la problemática a través de una representación gráfica?",
        "opciones": ["Análisis de contrastes", "Árbol de decisiones", "Árbol de problemas"]
    },
    {
        "enunciado": "¿Cuál es la característica principal del ciclo de vida de un proyecto de software?",
        "opciones": ["La subdivisión en fases", "El enfoque exclusivo en tecnología", "La independencia de las fases"]
    },
    {
        "enunciado": "¿Qué se busca con la técnica del análisis de causa-efecto?",
        "opciones": ["Identificar causas potenciales", "Optimizar la estructura organizacional", "Evitar el análisis detallado"]
    },
    {
        "enunciado": "¿Cuál es uno de los criterios clave para clasificar los proyectos informáticos?",
        "opciones": ["Procedencia del capital", "Tipo de tecnología utilizada", "Nivel de automatización"]
    },
    {
        "enunciado": "¿Qué se debe considerar en la fase de diseño de un software?",
        "opciones": ["Lógica del flujo de datos", "Capacitación del usuario final", "Monitoreo de actualizaciones"]
    },
    {
        "enunciado": "¿Cuál es una de las fases críticas para la planificación de proyectos?",
        "opciones": ["Estudio de viabilidad", "Implementación de la solución", "Evaluación financiera"]
    },
    {
        "enunciado": "¿Qué técnica de análisis se enfoca en comparar el estado actual con el deseado?",
        "opciones": ["Análisis de contrastes", "Análisis de costo-beneficio", "Diagrama de Gantt"]
    },
    {
        "enunciado": "¿Cuál es uno de los elementos clave para el éxito en la gestión de un proyecto informático?",
        "opciones": ["Equilibrar tiempo, costo y alcance", "Reducir la documentación", "Enfocarse solo en los recursos financieros"]
    }
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
