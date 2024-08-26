let questionsTF = [
	{
		id: 1,
		enunciado:
			"El contexto empresarial no afecta la forma en que se gestionan las finanzas de una empresa.",
		respuesta: "F",
		V: "Correcto, el contexto empresarial afecta significativamente la gestión financiera de una empresa.",
		F: "Incorrecto, el contexto empresarial sí afecta la gestión financiera de una empresa.",
	},
	{
		id: 2,
		enunciado:
			"Una empresa puede prescindir de recursos financieros si tiene una buena administración de recursos tecnológicos y humanos.",
		respuesta: "F",
		V: "Correcto, la empresa necesita recursos financieros para funcionar, además de tecnológicos y humanos.",
		F: "Incorrecto, la empresa no puede prescindir de recursos financieros, son esenciales para su funcionamiento.",
	},
	{
		id: 3,
		enunciado:
			"El análisis de micro y macroentorno es innecesario para tomar decisiones financieras en una empresa.",
		respuesta: "F",
		V: "Correcto, el análisis de micro y macroentorno es crucial para la toma de decisiones financieras informadas.",
		F: "Incorrecto, es necesario realizar un análisis del entorno para tomar decisiones financieras acertadas.",
	},
	{
		id: 4,
		enunciado:
			"Una empresa puede operar sin ajustarse a la legislación vigente si tiene buenos recursos financieros.",
		respuesta: "F",
		V: "Correcto, una empresa debe cumplir con la legislación vigente para operar legalmente.",
		F: "Incorrecto, cumplir con la legislación vigente es obligatorio para cualquier empresa, independientemente de sus recursos financieros.",
	},
	{
		id: 5,
		enunciado:
			"La innovación en una empresa está necesariamente vinculada a desarrollos tecnológicos.",
		respuesta: "F",
		V: "Correcto, la innovación no se limita a la tecnología, puede darse en cualquier aspecto del negocio.",
		F: "Incorrecto, la innovación puede darse en cualquier ámbito, no solo en el tecnológico.",
	},
	{
		id: 6,
		enunciado:
			"El design thinking se utiliza únicamente para diseñar productos tecnológicos.",
		respuesta: "F",
		V: "Correcto, el design thinking se puede aplicar en cualquier contexto, no solo en productos tecnológicos.",
		F: "Incorrecto, el design thinking es una metodología aplicable en múltiples áreas, no solo en tecnología.",
	},
	{
		id: 7,
		enunciado:
			"El proceso de empatizar en design thinking se enfoca en comprender las necesidades y emociones del usuario.",
		respuesta: "V",
		V: "Correcto, empatizar implica entender el contexto, las necesidades y las emociones del usuario.",
		F: "Incorrecto, empatizar en design thinking se trata de comprender al usuario desde varios aspectos, incluyendo sus emociones.",
	},
	{
		id: 8,
		enunciado:
			"El prototipado en design thinking busca únicamente validar la funcionalidad de una idea.",
		respuesta: "F",
		V: "Correcto, el prototipado también busca mejorar la interacción con el usuario y optimizar la solución.",
		F: "Incorrecto, el prototipado no solo valida la funcionalidad, también mejora la solución considerando la interacción con el usuario.",
	},
	{
		id: 9,
		enunciado:
			"La fase de definir en design thinking se centra en identificar las necesidades físicas del usuario únicamente.",
		respuesta: "F",
		V: "Correcto, esta fase considera tanto las necesidades físicas como emocionales del usuario.",
		F: "Incorrecto, se deben considerar tanto las necesidades físicas como emocionales para definir correctamente el problema.",
	},
	{
		id: 10,
		enunciado:
			"La metodología SCAMPER se centra en mejorar productos o servicios existentes.",
		respuesta: "V",
		V: "Correcto, SCAMPER es una técnica que busca innovar sobre productos o servicios mediante diferentes enfoques.",
		F: "Incorrecto, SCAMPER se utiliza principalmente para mejorar o repensar productos o servicios existentes.",
	},
	{
		id: 11,
		enunciado:
			"La innovación siempre implica desarrollar algo totalmente nuevo.",
		respuesta: "F",
		V: "Correcto, la innovación puede significar también mejorar o adaptar algo ya existente.",
		F: "Incorrecto, la innovación no necesariamente implica crear algo nuevo, también puede ser una mejora significativa.",
	},
	{
		id: 12,
		enunciado:
			"El análisis financiero no forma parte de la evaluación final en un proyecto empresarial.",
		respuesta: "F",
		V: "Correcto, el análisis financiero es clave en la evaluación final de cualquier proyecto empresarial.",
		F: "Incorrecto, el análisis financiero es fundamental para determinar la viabilidad de un proyecto.",
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
