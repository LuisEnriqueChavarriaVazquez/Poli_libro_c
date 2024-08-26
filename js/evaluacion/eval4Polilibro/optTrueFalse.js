let questionsTF = [
	{
		id: 1,
		enunciado:
			"El presupuesto de inversión solo incluye los costos de mobiliario y equipo de oficina.",
		respuesta: "F",
		V: "Correcto, el presupuesto de inversión incluye otros costos como recursos humanos, hardware, software y servicios externos.",
		F: "Incorrecto, el presupuesto de inversión abarca más allá del mobiliario y equipo de oficina.",
	},
	{
		id: 2,
		enunciado: "El fondo de reserva es opcional en una inversión propia.",
		respuesta: "F",
		V: "Correcto, mantener un fondo de reserva es crucial para afrontar imprevistos o emergencias durante el proyecto.",
		F: "Incorrecto, el fondo de reserva es esencial para evitar contratiempos financieros.",
	},
	{
		id: 3,
		enunciado:
			"En una inversión financiada, es recomendable evaluar múltiples opciones de financiamiento.",
		respuesta: "V",
		V: "Correcto, evaluar diferentes opciones permite elegir la más adecuada según los objetivos del proyecto.",
		F: "Incorrecto, evaluar varias opciones es importante para tomar decisiones informadas.",
	},
	{
		id: 4,
		enunciado:
			"Un presupuesto de egresos solo se aplica a proyectos de corto plazo.",
		respuesta: "F",
		V: "Correcto, un presupuesto de egresos puede aplicarse a períodos de tiempo como mensual, trimestral o anual.",
		F: "Incorrecto, los presupuestos de egresos pueden tener diferentes plazos, no solo corto plazo.",
	},
	{
		id: 5,
		enunciado:
			"Los costos de desarrollo incluyen recursos humanos y herramientas de software.",
		respuesta: "V",
		V: "Correcto, los costos de desarrollo contemplan estos y otros elementos como equipo y licencias.",
		F: "Incorrecto, los costos de desarrollo abarcan más que solo recursos humanos y software.",
	},
	{
		id: 6,
		enunciado: "Los gastos de venta no incluyen comisiones sobre ventas.",
		respuesta: "F",
		V: "Correcto, las comisiones sobre ventas son un componente común en los gastos de venta.",
		F: "Incorrecto, las comisiones son parte importante de los gastos de venta.",
	},
	{
		id: 7,
		enunciado:
			"Los servicios profesionales son parte de los gastos administrativos.",
		respuesta: "V",
		V: "Correcto, los gastos administrativos incluyen honorarios de consultores, contadores y otros profesionales.",
		F: "Incorrecto, los servicios profesionales forman parte de los gastos administrativos.",
	},
	{
		id: 8,
		enunciado:
			"Las primas de seguros financieros son gastos que afectan la rentabilidad de una empresa.",
		respuesta: "V",
		V: "Correcto, estos gastos pueden impactar significativamente la salud financiera de la empresa.",
		F: "Incorrecto, las primas de seguros son gastos relevantes que afectan la rentabilidad.",
	},
	{
		id: 9,
		enunciado:
			"La investigación y desarrollo (I+D) no se considera un gasto a ponderar en una empresa.",
		respuesta: "F",
		V: "Correcto, la I+D es fundamental para la innovación y competitividad de la empresa.",
		F: "Incorrecto, la I+D es clave para el desarrollo de nuevos productos y servicios.",
	},
	{
		id: 10,
		enunciado: "Un presupuesto de ventas solo se basa en datos históricos.",
		respuesta: "F",
		V: "Correcto, además de datos históricos, se deben considerar tendencias y factores externos.",
		F: "Incorrecto, un presupuesto de ventas incluye análisis de tendencias y otros factores.",
	},
	{
		id: 11,
		enunciado:
			"Las actividades de marketing no son parte del presupuesto de ingresos.",
		respuesta: "F",
		V: "Correcto, las actividades de marketing son cruciales para la promoción y generación de ingresos.",
		F: "Incorrecto, el marketing es esencial para impulsar las ventas y generar ingresos.",
	},
	{
		id: 12,
		enunciado:
			"La gestión de riesgos incluye la contratación de seguros contra riesgos operativos.",
		respuesta: "V",
		V: "Correcto, los seguros son una estrategia importante para mitigar riesgos en la empresa.",
		F: "Incorrecto, la gestión de riesgos considera la contratación de seguros como medida preventiva.",
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
