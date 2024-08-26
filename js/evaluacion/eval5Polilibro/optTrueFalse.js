let questionsTF = [
	{
		id: 1,
		enunciado: "El RDD de esta unidad se diseñó solo para su uso en clase.",
		respuesta: "F",
		V: "Correcto, el RDD se puede utilizar tanto dentro como fuera del aula para apoyar el aprendizaje autónomo.",
		F: "Incorrecto, el RDD está diseñado para apoyar el aprendizaje tanto dentro como fuera del aula.",
	},
	{
		id: 2,
		enunciado:
			"El menú de navegación del RDD incluye un glosario para facilitar la comprensión del tema.",
		respuesta: "V",
		V: "Correcto, el glosario proporciona definiciones para facilitar la comprensión de términos relevantes.",
		F: "Incorrecto, el menú de navegación sí incluye un glosario.",
	},
	{
		id: 3,
		enunciado:
			"El estado de resultados proforma refleja las utilidades pasadas de la empresa.",
		respuesta: "F",
		V: "Correcto, el estado de resultados proforma proyecta ingresos y gastos futuros, no pasados.",
		F: "Incorrecto, el estado de resultados proforma proyecta utilidades futuras.",
	},
	{
		id: 4,
		enunciado:
			"En la evaluación de proyectos, una TIR por debajo del costo de capital indica que el proyecto es rentable.",
		respuesta: "F",
		V: "Correcto, una TIR por debajo del costo de capital sugiere que el proyecto no es rentable.",
		F: "Incorrecto, una TIR baja indica que el proyecto no debería aceptarse.",
	},
	{
		id: 5,
		enunciado:
			"El análisis de costo-beneficio se basa únicamente en los costos directos del proyecto.",
		respuesta: "F",
		V: "Correcto, el análisis de costo-beneficio incluye tanto costos directos como indirectos.",
		F: "Incorrecto, el análisis debe considerar todos los costos relevantes.",
	},
	{
		id: 6,
		enunciado:
			"La matriz de decisión ayuda a comparar diferentes opciones en función de criterios específicos.",
		respuesta: "V",
		V: "Correcto, la matriz de decisión facilita la evaluación al ponderar distintos criterios.",
		F: "Incorrecto, la matriz de decisión efectivamente se utiliza para comparar opciones.",
	},
	{
		id: 7,
		enunciado:
			"El presupuesto de ventas solo debe basarse en las tendencias históricas.",
		respuesta: "F",
		V: "Correcto, el presupuesto de ventas también debe considerar factores externos y proyecciones futuras.",
		F: "Incorrecto, se deben incluir otros análisis además de las tendencias históricas.",
	},
	{
		id: 8,
		enunciado:
			"El RDD facilita la adaptación al ritmo de aprendizaje individual del estudiante.",
		respuesta: "V",
		V: "Correcto, el RDD está diseñado para ser consultado en cualquier momento, adaptándose al ritmo del estudiante.",
		F: "Incorrecto, el RDD permite que cada estudiante aprenda a su propio ritmo.",
	},
	{
		id: 9,
		enunciado: "Un ROI positivo implica que el proyecto es más rentable.",
		respuesta: "V",
		V: "Correcto, cuanto mayor sea el ROI, más rentable es el proyecto.",
		F: "Incorrecto, un ROI positivo indica que el proyecto genera beneficios.",
	},
	{
		id: 10,
		enunciado:
			"El flujo neto de efectivo negativo siempre indica que un proyecto debe ser cancelado.",
		respuesta: "F",
		V: "Correcto, un flujo negativo podría requerir ajustes en lugar de la cancelación inmediata del proyecto.",
		F: "Incorrecto, no necesariamente se cancela un proyecto con flujo negativo; pueden realizarse ajustes.",
	},
	{
		id: 11,
		enunciado:
			"La evaluación de los aprendizajes incluye actividades que no tienen valor en la calificación final.",
		respuesta: "V",
		V: "Correcto, la actividad 1.1 es formativa y no cuenta para la evaluación.",
		F: "Incorrecto, algunas actividades no tienen valor en la evaluación final.",
	},
	{
		id: 12,
		enunciado:
			"Las empresas no requieren de recursos tecnológicos para su funcionamiento.",
		respuesta: "F",
		V: "Correcto, los recursos tecnológicos son esenciales para la operación de una empresa.",
		F: "Incorrecto, las empresas necesitan recursos tecnológicos, entre otros, para funcionar adecuadamente.",
	},
];

//Sirve para revisar las preguntas una vez que han sido contestadas
function checkTFanswer(
	id,
	respuesta,
	idRetroalimentacion,
	contenedorButtonsTF
) {
	//Obtenemos el valor de la respuesta del cliente
	let valueAnswerUser = document.getElementById(id);
	valueAnswerUser.setAttribute(
		"resultadoFinal",
		`${valueAnswerUser.innerText}`
	);
	valueAnswerUser = valueAnswerUser.innerText;

	const regex = /questionTF_(\d+)_button/;
	var match = id.match(regex);

	var buscaId = match ? match[1] : null;

	// Buscar el diccionario cuyo id coincide con el valor dado por el usuario
	let preguntaEncontrada = questionsTF.find(
		(pregunta) => pregunta.id == buscaId
	);
	if (preguntaEncontrada) {
		if (valueAnswerUser == "V") {
			var retroalimentacion = preguntaEncontrada.V;
		} else {
			var retroalimentacion = preguntaEncontrada.F;
		}
	} else {
		console.log("No se encontró ninguna pregunta con el ID proporcionado.");
	}

	//Accedemos al contenedor de la retroalimentacion
	let contenedorButtonsTF_value = document.getElementById(contenedorButtonsTF);
	let retroalimentacionContainer = document.getElementById(idRetroalimentacion);

	//Validamos que sean correctas
	if (valueAnswerUser == respuesta) {
		retroalimentacionContainer.classList.add("mensajeCorrecta");
		retroalimentacionContainer.textContent = "Correcto: " + retroalimentacion;

		//IMPORTANTE... Estas variables estan en el archivo de puntajeActual.js
		puntajeTotal++;
		preguntasContestadasTotal++;
	} else {
		retroalimentacionContainer.classList.add("mensajeIncorrecta");
		retroalimentacionContainer.textContent = "Incorrecto: " + retroalimentacion;

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
	barraPreguntas.setAttribute(
		"style",
		"width:" + preguntasContestadasTotal * 5 + "%"
	);
	barraPreguntas2.setAttribute(
		"style",
		"width:" + preguntasContestadasTotal * 5 + "%"
	);

	//Eliminamos los botones de la pregunta
	contenedorButtonsTF_value.setAttribute("style", "display: none;");

	//Retroalimentamos al usuario
	M.toast({ html: `Pregunta respondida` });

	//Validamos que el examen se hay terminado en este punto
	validateExamenCompletado();
}

function printQuestionsTrueFalse() {
	let containerTrueFalse = document.getElementById("contenedor_preguntas");

	let suffledquestionsTF = shuffle(questionsTF);

	for (var i = 0; i < 8; i++) {
		containerTrueFalse.innerHTML += `
            <section class="randomizeDOMClass lazy">
                <form class="cardPregunta clgreyl2 border1 shadow2">
                    <!--Numero y enunciado de la pregunta-->
                    <div class="titleQuestionContainer clgreyl3">
                        <div class="titleQuestionContainerSecondary">
                            <h5 class="getEnunciadoNumeroPdf preguntaIdentificador clgreyl2 clbktx border1 textoStandar numeracionPregunta">Numero de la pregunta</h5>
                            <a class="tooltipped clgreyl2 clbktx border1"
                            data-position="left" data-tooltip="Presiona el boton izquierdo o derecho">
                            <i class="material-icons">help</i>
                            </a>
                        </div>
                        <p class="getEnunciadoPdf preguntaEnunciado clgreyl2 clbktx border1 textoPregunta">${suffledquestionsTF[i].enunciado}</p>
                    </div>
                    
                    <section class="optionsQuestionContainer clgreyl3 hide-on-small-only" ></section>

                    <!--Boton para revisar la pregunta-->
                    <div class="evaluateQuestionContainer">
                        <!--Opciones de la pregunta-->
                        <section class="optionsQuestionContainerTF clgrel1" id="questionTFButtonsContainer_${suffledquestionsTF[i].id}">
                            <div class="buttonTrue shadow2 waves-effect cl5 white-text"  id="questionTF_${suffledquestionsTF[i].id}_buttonTrue" onclick="checkTFanswer('questionTF_${suffledquestionsTF[i].id}_buttonTrue','${suffledquestionsTF[i].respuesta}','questionTF_${suffledquestionsTF[i].id}_retroalimentacion','questionTFButtonsContainer_${suffledquestionsTF[i].id}')">
                                V
                            </div>
                            <div class="buttonFalse shadow2 waves-effect cl4 white-text"  id="questionTF_${suffledquestionsTF[i].id}_buttonFalse" onclick="checkTFanswer('questionTF_${suffledquestionsTF[i].id}_buttonFalse','${suffledquestionsTF[i].respuesta}','questionTF_${suffledquestionsTF[i].id}_retroalimentacion','questionTFButtonsContainer_${suffledquestionsTF[i].id}')">
                                F
                            </div>
                        </section>
                        <!--Retroalimentacion de la pregunta-->
                        <div id="questionTF_${suffledquestionsTF[i].id}_retroalimentacion" cajaRetroalimentacion="retroalimentacion"></div>
                    </div>
                </form>
            </section>
        `;
	}
}

printQuestionsTrueFalse();
