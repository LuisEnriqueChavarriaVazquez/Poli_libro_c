let questionsTF = [
	{
		id: 1,
		enunciado:
			"Las empresas no necesitan cumplir con la legislación vigente para operar.",
		respuesta: "F",
		V: "Correcto, toda empresa debe constituirse de acuerdo con la legislación vigente.",
		F: "Incorrecto, toda empresa debe cumplir con la legislación vigente para operar.",
	},
	{
		id: 2,
		enunciado:
			"Las finanzas no están relacionadas con la toma de decisiones empresariales.",
		respuesta: "F",
		V: "Correcto, las finanzas están directamente relacionadas con la toma de decisiones empresariales.",
		F: "Incorrecto, las finanzas son clave para la toma de decisiones en una empresa.",
	},
	{
		id: 3,
		enunciado:
			"El Project Management Body of Knowledge (PMBOK) se considera el estándar más influyente en la dirección de proyectos.",
		respuesta: "V",
		V: "Correcto, la guía PMBOK es el estándar más influyente en la dirección de proyectos.",
		F: "Incorrecto, la guía PMBOK es ampliamente reconocida en la dirección de proyectos.",
	},
	{
		id: 4,
		enunciado:
			"El control de los costos no es necesario para la finalización exitosa de un proyecto.",
		respuesta: "F",
		V: "Correcto, el control de costos es esencial para finalizar un proyecto dentro del presupuesto aprobado.",
		F: "Incorrecto, el control de costos es crucial para la gestión adecuada de un proyecto.",
	},
	{
		id: 5,
		enunciado:
			"La gestión de las comunicaciones en un proyecto solo se refiere a la comunicación interna.",
		respuesta: "F",
		V: "Correcto, la gestión de comunicaciones abarca tanto la comunicación interna como externa.",
		F: "Incorrecto, la gestión de comunicaciones también incluye la externa.",
	},
	{
		id: 6,
		enunciado:
			"La documentación de software solo es necesaria durante la fase de desarrollo.",
		respuesta: "F",
		V: "Correcto, la documentación es fundamental durante todo el ciclo de vida del software.",
		F: "Incorrecto, la documentación es clave en todas las fases del desarrollo del software.",
	},
	{
		id: 7,
		enunciado:
			"El análisis de requerimientos en un proyecto de software incluye técnicas como el modelado de procesos y casos de uso.",
		respuesta: "V",
		V: "Correcto, estas técnicas son comunes en el análisis de requerimientos.",
		F: "Incorrecto, estas técnicas son esenciales en el análisis de requerimientos.",
	},
	{
		id: 8,
		enunciado:
			"Las pruebas de regresión son innecesarias después de realizar cambios en el software.",
		respuesta: "F",
		V: "Correcto, las pruebas de regresión son necesarias para asegurar que los cambios no introduzcan nuevos errores.",
		F: "Incorrecto, las pruebas de regresión son esenciales para garantizar la estabilidad del software.",
	},
	{
		id: 9,
		enunciado:
			"La gestión de riesgos se limita solo a la identificación de posibles problemas.",
		respuesta: "F",
		V: "Correcto, la gestión de riesgos también incluye la planificación de respuestas y control.",
		F: "Incorrecto, la gestión de riesgos abarca desde la identificación hasta el control de los riesgos.",
	},
	{
		id: 10,
		enunciado:
			"El prototipado en el análisis de requerimientos permite validar requisitos de forma temprana.",
		respuesta: "V",
		V: "Correcto, el prototipado facilita la validación temprana de los requisitos.",
		F: "Incorrecto, el prototipado es clave para validar requisitos en etapas iniciales.",
	},
	{
		id: 11,
		enunciado:
			"Las pruebas de rendimiento no son necesarias si el software funciona correctamente en condiciones normales.",
		respuesta: "F",
		V: "Correcto, las pruebas de rendimiento son esenciales para evaluar cómo el software responde bajo carga.",
		F: "Incorrecto, las pruebas de rendimiento son críticas para garantizar la estabilidad bajo carga.",
	},
	{
		id: 12,
		enunciado:
			"El control de calidad en un proyecto se basa únicamente en la revisión final del producto.",
		respuesta: "F",
		V: "Correcto, el control de calidad se realiza durante todo el ciclo de vida del proyecto.",
		F: "Incorrecto, el control de calidad es un proceso continuo durante todo el proyecto.",
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
