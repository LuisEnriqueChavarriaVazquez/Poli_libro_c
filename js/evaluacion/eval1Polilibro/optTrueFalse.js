let questionsTF = [
	{
		id: 1,
		enunciado:
			"El ciclo de vida de un proyecto informático tiene fases que pueden variar en función del tamaño y complejidad del proyecto.",
		respuesta: "V",
		V: "Correcto, el ciclo de vida de un proyecto informático puede ajustarse según los requisitos específicos, como tamaño, complejidad y presupuesto.",
		F: "Incorrecto, el ciclo de vida de un proyecto informático puede ajustarse según los requisitos específicos, como tamaño, complejidad y presupuesto.",
	},
	{
		id: 2,
		enunciado:
			"La planificación de un proyecto informático solo requiere estimar los costos iniciales.",
		respuesta: "F",
		V: "Incorrecto, la planificación de un proyecto informático incluye, además de los costos, el análisis de viabilidad, los riesgos y la programación de actividades.",
		F: "Correcto, la planificación de un proyecto informático incluye, además de los costos, el análisis de viabilidad, los riesgos y la programación de actividades.",
	},
	{
		id: 3,
		enunciado:
			"En un proyecto informático, la formulación del problema siempre se realiza en la fase de diseño.",
		respuesta: "F",
		V: "Incorrecto, la formulación del problema se realiza en la fase inicial de análisis, no en la fase de diseño.",
		F: "Correcto, la formulación del problema se realiza en la fase inicial de análisis, no en la fase de diseño.",
	},
	{
		id: 4,
		enunciado:
			"La gestión de la integración de un proyecto incluye la coordinación de todas las actividades y tareas necesarias.",
		respuesta: "V",
		V: "Correcto, la gestión de la integración de un proyecto abarca la coordinación de actividades, tareas y recursos para asegurar el cumplimiento de los objetivos.",
		F: "Incorrecto, la gestión de la integración de un proyecto abarca la coordinación de actividades, tareas y recursos para asegurar el cumplimiento de los objetivos.",
	},
	{
		id: 5,
		enunciado:
			"El análisis de contrastes en un proyecto se centra exclusivamente en identificar problemas financieros.",
		respuesta: "F",
		V: "Incorrecto, el análisis de contrastes no se limita a problemas financieros; también abarca otras dimensiones relevantes para el proyecto.",
		F: "Correcto, el análisis de contrastes no se limita a problemas financieros; también abarca otras dimensiones relevantes para el proyecto.",
	},
	{
		id: 6,
		enunciado:
			"El árbol de problemas es una herramienta gráfica utilizada para identificar y organizar las causas y efectos de un problema.",
		respuesta: "V",
		V: "Correcto, el árbol de problemas permite representar gráficamente las causas y efectos de un problema para su mejor análisis.",
		F: "Incorrecto, el árbol de problemas permite representar gráficamente las causas y efectos de un problema para su mejor análisis.",
	},
	{
		id: 7,
		enunciado:
			"Un proyecto informático no incluye fases de pruebas si el equipo está bien capacitado.",
		respuesta: "F",
		V: "Incorrecto, las fases de pruebas son esenciales en cualquier proyecto informático, independientemente de la capacitación del equipo.",
		F: "Correcto, las fases de pruebas son esenciales en cualquier proyecto informático, independientemente de la capacitación del equipo.",
	},
	{
		id: 8,
		enunciado:
			"La formulación de proyectos de software incluye definir objetivos y buscar soluciones a problemas específicos.",
		respuesta: "V",
		V: "Correcto, la formulación de proyectos implica definir objetivos claros y proponer soluciones viables para problemas identificados.",
		F: "Incorrecto, la formulación de proyectos implica definir objetivos claros y proponer soluciones viables para problemas identificados.",
	},
	{
		id: 9,
		enunciado:
			"El diseño de la interfaz de usuario en un proyecto informático es un aspecto menor comparado con la estructura del software.",
		respuesta: "F",
		V: "Incorrecto, el diseño de la interfaz de usuario es fundamental, ya que impacta directamente la experiencia del usuario y la usabilidad del software.",
		F: "Correcto, el diseño de la interfaz de usuario es fundamental, ya que impacta directamente la experiencia del usuario y la usabilidad del software.",
	},
	{
		id: 10,
		enunciado:
			"La asignación de recursos en un proyecto informático se realiza únicamente en la fase de inicio.",
		respuesta: "F",
		V: "Incorrecto, la asignación de recursos es un proceso continuo que puede ajustarse durante todo el ciclo de vida del proyecto.",
		F: "Correcto, la asignación de recursos es un proceso continuo que puede ajustarse durante todo el ciclo de vida del proyecto.",
	},
	{
		id: 11,
		enunciado:
			"Un proyecto informático siempre requiere la colaboración de un equipo multidisciplinario.",
		respuesta: "V",
		V: "Correcto, los proyectos informáticos suelen necesitar la colaboración de expertos en diversas áreas como desarrollo, diseño, y gestión.",
		F: "Incorrecto, los proyectos informáticos suelen necesitar la colaboración de expertos en diversas áreas como desarrollo, diseño, y gestión.",
	},
	{
		id: 12,
		enunciado:
			"La formulación del proyecto se centra solo en identificar las herramientas tecnológicas necesarias.",
		respuesta: "F",
		V: "Incorrecto, la formulación del proyecto incluye analizar problemas, definir objetivos y planificar recursos más allá de las herramientas tecnológicas.",
		F: "Correcto, la formulación del proyecto incluye analizar problemas, definir objetivos y planificar recursos más allá de las herramientas tecnológicas.",
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
