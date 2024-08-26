function pregunta(numero) {
    //Respuestas para las preguntas
    let respuestasId = [0, "pregunta1_opt3",
        "pregunta2_opt2", "pregunta3_opt1",
        "pregunta4_opt1", "pregunta5_opt3",
        "pregunta6_opt2", "pregunta7_opt3",
        "pregunta8_opt1", "pregunta9_opt2",
        "pregunta10_opt2"];


    //Explicaciones de las preguntas
    let respuestasExplicacion = [0, ["La respuesta correcta es la c porque el presupuesto de ventas se basa en una estimación de ingresos futuros.", "respuesta correcta", "El análisis de tendencias es crucial para el presupuesto de ventas."],
        ["La evaluación de recursos financieros es esencial al considerar una inversión propia.", "respuesta correcta", "Tener un fondo de reserva es una medida clave."],
        ["El presupuesto de egresos incluye tanto gastos fijos como variables, lo que es crucial para la planificación financiera.", "respuesta correcta", "El control de costos se enfoca en gastos variables en función de las ventas."],
        ["El control de costos durante todas las etapas del proyecto es esencial para evitar sobrecostos.", "respuesta correcta", "La flexibilidad es clave en la planificación presupuestaria."],
        ["La estimación precisa de financiamiento es vital para evitar sorpresas financieras.", "La respuesta correcta es la c.", "Mantener informados a los inversionistas mejora la gestión del proyecto."],
        ["Las herramientas y software específicos son fundamentales en la etapa de desarrollo de proyectos.", "respuesta correcta", "La capacitación mejora la productividad del proyecto."],
        ["La investigación y desarrollo se enfoca en la innovación de productos o servicios.", "Los beneficios para empleados son cruciales.", "respuesta correcta"],
        ["La evaluación de tendencias externas es esencial en la planificación de ingresos.", "respuesta correcta", "La segmentación de clientes mejora la precisión del presupuesto."],
        ["La comunicación transparente es vital en la relación con inversionistas.", "respuesta correcta", "Las estrategias de ajuste son importantes."],
        ["El análisis de costos y el uso de métodos múltiples son claves en la precisión del presupuesto de ingresos.", "respuesta correcta", "El seguimiento de resultados es una práctica recomendada."]];


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
        "enunciado": "¿Cuál es un aspecto clave en la creación de un presupuesto de ventas?",
        "opciones": ['La estimación de gastos fijos.', 'La inclusión de contingencias.', 'La proyección de ingresos futuros.'],
    },
    {
        "enunciado": "¿Qué se debe considerar antes de comprometer una inversión propia en un proyecto?",
        "opciones": ['El plan de marketing.', 'La evaluación de recursos financieros disponibles.', 'El alcance del proyecto.'],
    },
    {
        "enunciado": "¿Qué incluye un presupuesto de egresos?",
        "opciones": ['Gastos fijos y variables.', 'Solo gastos variables.', 'Solo gastos fijos.'],
    },
    {
        "enunciado": "¿Qué es esencial en la gestión de costos durante el desarrollo de un proyecto?",
        "opciones": ['Controlar los costos en todas las etapas.', 'Estimar los ingresos.', 'Determinar los precios de venta.'],
    },
    {
        "enunciado": "¿Qué es importante al estimar el financiamiento necesario para un proyecto?",
        "opciones": ['La definición del alcance.', 'La previsión de contingencias.', 'La inclusión de todos los costos relevantes.'],
    },
    {
        "enunciado": "¿Qué es fundamental para el desarrollo exitoso de un proyecto informático?",
        "opciones": ['La adquisición de inmuebles.', 'La selección de herramientas y software adecuados.', 'El marketing y la promoción.'],
    },
    {
        "enunciado": "¿Qué elemento es importante en la investigación y desarrollo de un proyecto?",
        "opciones": ['El análisis financiero.', 'La implementación de seguros.', 'La innovación tecnológica.'],
    },
    {
        "enunciado": "¿Qué se debe analizar al crear un presupuesto de ventas?",
        "opciones": ['La tasa de interés.', 'Las tendencias y factores externos.', 'La competencia en precios.'],
    },
    {
        "enunciado": "¿Qué es clave en la relación con inversionistas?",
        "opciones": ['La entrega puntual de resultados.', 'La comunicación transparente.', 'El análisis de mercado.'],
    },
    {
        "enunciado": "¿Qué técnica puede mejorar la precisión de un presupuesto de ventas?",
        "opciones": ['El uso de un solo método de pronóstico.', 'La combinación de múltiples métodos de pronóstico.', 'La exclusión de factores externos.'],
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
