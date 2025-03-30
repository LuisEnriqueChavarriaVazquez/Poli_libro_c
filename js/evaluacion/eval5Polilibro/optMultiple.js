function pregunta(numero) {
    //Respuestas para las preguntas
    let respuestasId = [0, "pregunta1_opt3", "pregunta2_opt2", "pregunta3_opt1", "pregunta4_opt2", "pregunta5_opt1", "pregunta6_opt3", "pregunta7_opt1", "pregunta8_opt2", "pregunta9_opt3", "pregunta10_opt1"];

      //Explicaciones de las preguntas
      let respuestasExplicacion = [0,
        ["La respuesta correcta es la c. Los recursos financieros, tecnológicos y humanos son esenciales para el funcionamiento de una empresa.", "Respuesta correcta.", "Los recursos financieros, tecnológicos y humanos son cruciales para cumplir con los objetivos empresariales."],
        ["El entorno empresarial influye en la toma de decisiones.", "Respuesta correcta.", "El entorno micro y macroeconómico afecta a las empresas y obliga a la toma de decisiones estratégicas."],
        ["La planificación financiera se basa en proyecciones.", "Respuesta correcta.", "Los estados financieros proforma reflejan situaciones futuras basadas en presupuestos."],
        ["El uso de este recurso digital está alineado con la metodología del programa.", "Respuesta correcta.", "Este RDD está diseñado para facilitar el aprendizaje autónomo siguiendo la secuencia establecida en el programa de estudios."],
        ["Las empresas son fundamentales en la economía.", "Respuesta correcta.", "Las empresas son la base del sistema económico por su papel en la producción y distribución de bienes."],
        ["La matriz de decisiones ayuda a comparar alternativas.", "Respuesta correcta.", "La matriz de decisiones facilita la comparación de opciones mediante criterios ponderados."],
        ["Los indicadores financieros evalúan la viabilidad de proyectos informáticos.", "Respuesta correcta.", "Indicadores como el ROI y el Costo-beneficio son clave para evaluar proyectos."],
        ["El estado de resultados proyecta ingresos y gastos.", "Respuesta correcta.", "El estado de resultados proforma es crucial para prever la utilidad neta futura."],
        ["Los flujos netos de efectivo evalúan la liquidez.", "Respuesta correcta.", "El cálculo de flujos netos de efectivo es esencial para determinar la capacidad de pago de la empresa."]
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

const preguntas_aleatorias_indices = [0];
const preguntas = [
    0,
    {
      "enunciado": "¿Qué recursos son indispensables para el funcionamiento de una empresa?",
      "opciones": ["Solo recursos financieros.", "Recursos humanos y tecnológicos únicamente.", "Recursos financieros, tecnológicos y humanos."]
    },
    {
      "enunciado": "¿Cómo influye el entorno empresarial en la operación de las empresas?",
      "opciones": ["No tiene influencia significativa.", "Afecta la toma de decisiones estratégicas.", "Es irrelevante para la planificación."]
    },
    {
      "enunciado": "¿Qué objetivo tiene la elaboración de estados financieros proforma?",
      "opciones": ["Reflejar situaciones futuras basadas en presupuestos.", "Presentar resultados históricos.", "Obtener información fiscal."]
    },
    {
      "enunciado": "¿Cuál es la intención principal del RDD para la unidad temática?",
      "opciones": ["Ofrecer ejemplos visuales.", "Facilitar el aprendizaje autónomo siguiendo la metodología.", "Proveer acceso a recursos adicionales."]
    },
    {
      "enunciado": "¿Por qué se consideran las empresas como la base del sistema económico?",
      "opciones": ["Por su capacidad de innovación.", "Por su rol en la producción y distribución de bienes.", "Por su estructura organizativa."]
    },
    {
      "enunciado": "¿Qué herramienta es útil para comparar alternativas en la toma de decisiones?",
      "opciones": ["Análisis FODA.", "Estudio de mercado.", "Matriz de decisiones."]
    },
    {
      "enunciado": "¿Qué indicadores financieros son relevantes en la evaluación de proyectos informáticos?",
      "opciones": ["Solo el análisis de costos.", "Indicadores de eficiencia energética.", "Indicadores como el ROI y Costo-beneficio."]
    },
    {
      "enunciado": "¿Cuál es el propósito del estado de resultados proforma?",
      "opciones": ["Proyectar ingresos y gastos futuros.", "Analizar costos históricos.", "Determinar precios de venta."]
    },
    {
      "enunciado": "¿Qué se busca al calcular los flujos netos de efectivo?",
      "opciones": ["Incrementar la inversión.", "Evaluar la liquidez y capacidad de pago.", "Aumentar los ingresos fiscales."]
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
                            value="${preguntas[preguntas_aleatorias_indices[i]].opciones[1]}"/>
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
