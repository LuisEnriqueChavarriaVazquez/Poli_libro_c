let questionsTF = [
    {   
        id:1,
        enunciado: "La innovación se limita exclusivamente al ámbito tecnológico.",
        respuesta: "F",
        V: "Recuerda que la innovación puede manifestarse en cualquier campo del conocimiento y no se limita a aspectos tecnológicos.",
        F: "Tu respuesta es correcta, la innovación puede manifestarse en cualquier campo del conocimiento",
    },
    {
        id:2,
        enunciado: "La metodología Design Thinking solo se aplica en la creación de nuevos productos.",
        respuesta: "F",
        V: "Recuerda que la metodología Design Thinking se utiliza no solo en el diseño de productos, sino también en la creación de servicios y modelos de negocio, centrándose en las necesidades del usuario.",
        F: "Tu respuesta es correcta, la metodología Design Thinking se utiliza no solo en el diseño de productos, sino también en la creación de servicios y modelos de negocio.",
    },
    {
        id:3,
        enunciado: "Durante la fase de Empatizar/Descubrir en Design Thinking, es importante recopilar información sobre las necesidades tanto explícitas como implícitas de los usuarios.",
        respuesta: "V",
        V: "Tu respuesta es correcta,  durante esta fase, se busca comprender a fondo el problema y las necesidades de los usuarios.",
        F: "Recuerda durante esta fase, se busca comprender a fondo el problema y las necesidades de los usuarios.",
    },
    {
        id:4,
        enunciado: "En la fase de Definir en Design Thinking, es crucial interpretar la información obtenida en la fase anterior para definir claramente el problema y las necesidades de los usuarios.",
        respuesta: "V",
        V: "Tu respuesta es correcta, en esta fase es crucial interpretar la información obtenida en la fase anterior para definir claramente el problema y las necesidades de los usuarios.",
        F: "Recuerda qen la fase Definir es crucial interpretar la información obtenida en la fase anterior para definir claramente el problema y las necesidades de los usuarios..",
    },
    {
        id:5,
        enunciado: "El mapa de empatía es una técnica utilizada para crear un esquema de las personas entrevistadas, destacando sus pensamientos, emociones y características de consumo.",
        respuesta: "V",
        V: "Tu respuesta es correcta, el mapa de empatía es una herramienta que ayuda a comprender mejor a los usuarios.",
        F: "Recuerda que el mapa de empatía es una herramienta que ayuda a comprender mejor a los usuarios. ",
    }, //Preguntas parafraseadas
    {
        id:6,
        enunciado: "Durante la fase de Idear en Design Thinking, se busca generar múltiples ideas creativas y diferentes para abordar un problema.",
        respuesta: "F",
        V: "Recuerda que durante la fase de Idear en Design Thinking, se busca generar una sola idea creativa y única para abordar un problema.",
        F: "Tu respuesta es correcta, durante la fase de Idear en Design Thinking, se busca generar una sola idea creativa y única para abordar un problema.",
    },
    {
        id:7,
        enunciado: "La técnica Da Vinci o Morfológica permite generar ideas combinando características aparentemente desconectadas para crear soluciones innovadoras.",
        respuesta: "V",
        V: "Tu respuesta es correcta, esta tecnica se basa en combinar un conjunto de características para generar soluciones comunes y simples, no necesariamente innovadoras.",
        F: "Recuerda que la técnica Da Vinci o Morfológica se basa en combinar un conjunto de características para generar soluciones comunes y simples, no necesariamente innovadoras.",
    },
    {
        id:8,
        enunciado: "La técnica SCAMPER consiste en explorar la creatividad desde siete ángulos diferentes, utilizando verbos de acción para generar cambios en un producto o servicio.",
        respuesta: "F",
        V: "Recuerda que la técnica SCAMPER no implica explorar la creatividad desde diferentes perspectivas utilizando verbos de acción.",
        F: "Tu respuesta es correcta, la técnica SCAMPER no implica explorar la creatividad desde diferentes perspectivas utilizando verbos de acción.",
    },
    {
        id:9,
        enunciado: " Durante la fase de Prototipar en Design Thinking, los prototipos deben surgir de las ideas generadas en la fase anterior.",
        respuesta: "V",
        V: "Tu respuesta es correcta,  Los prototipos en la fase de Prototipar deben basarse en las ideas desarrolladas durante la fase de Idear.",
        F: "Recuerda que los prototipos en la fase de Prototipar deben basarse en las ideas desarrolladas durante la fase de Idear.",
    },
    {
        id:10,
        enunciado: " En la fase de Testeo (Validar) del Design Thinking, se presentan los prototipos a los usuarios para recoger sus opiniones y realizar ajustes en función de sus comentarios.",
        respuesta: "V",
        V: "Tu respuesta es correcta, en esta fase se presentan los prototipos a los usuarios para recoger sus opiniones y realizar ajustes en función de sus comentarios.",
        F: "Recuerda que en esta se presentan los prototipos a los usuarios para recoger sus opiniones y realizar ajustes en función de sus comentarios.",
    },
    {
        id:11,
        enunciado: "En la fase de Prototipar del Design Thinking, los prototipos no necesitan probarse ni verificar que funcionen correctamente.",
        respuesta: "F",
        V: "Recuerda que en esta fase los prototipos no necesitan probarse ni verificar que funcionen correctamente.",
        F: "Tu respuesta es correcta, en esta fase los prototipos no necesitan probarse ni verificar que funcionen correctamente.",
    },
    {
        id:12,
        enunciado: "Durante el Testeo (Validar) en Design Thinking, no es necesario diseñar un plan de prueba ni registrar los resultados obtenidos.",
        respuesta: "F",
        V: "Recuerda que es esencial diseñar un plan de prueba y registrar los resultados durante el Testeo para realizar análisis y tomar decisiones basadas en ellos.",
        F: "Tu respuesta es correcta, es esencial diseñar un plan de prueba y registrar los resultados durante el Testeo para realizar análisis y tomar decisiones basadas en ellos.",
    },

];

//Sirve para revisar las preguntas una vez que han sido contestadas
function checkTFanswer(id, respuesta, idRetroalimentacion, contenedorButtonsTF){
    //Obtenemos el valor de la respuesta del cliente
    let valueAnswerUser = document.getElementById(id);
    valueAnswerUser.setAttribute('resultadoFinal', `${valueAnswerUser.innerText}`);
    valueAnswerUser = valueAnswerUser.innerText;


    const regex = /questionTF_(\d+)_button/;
    var match = id.match(regex);
    
    var buscaId = match ? match[1] : null;

    
    
    // Buscar el diccionario cuyo id coincide con el valor dado por el usuario
    let  preguntaEncontrada = questionsTF.find(pregunta => pregunta.id == buscaId);
    if (preguntaEncontrada) {
        if (valueAnswerUser == 'V'){
            var retroalimentacion = preguntaEncontrada.V;
        }else{
            var retroalimentacion = preguntaEncontrada.F;
        }    
    
      } else {
        console.log("No se encontró ninguna pregunta con el ID proporcionado.");
      }


    //Accedemos al contenedor de la retroalimentacion
    let contenedorButtonsTF_value = document.getElementById(contenedorButtonsTF);
    let retroalimentacionContainer = document.getElementById(idRetroalimentacion);

    //Validamos que sean correctas
    if(valueAnswerUser == respuesta){
        retroalimentacionContainer.classList.add('mensajeCorrecta');
        retroalimentacionContainer.textContent = "Correcto: "+retroalimentacion;

        //IMPORTANTE... Estas variables estan en el archivo de puntajeActual.js
        puntajeTotal++;
        preguntasContestadasTotal++;
    }else{
        retroalimentacionContainer.classList.add('mensajeIncorrecta');
        retroalimentacionContainer.textContent = "Incorrecto: "+retroalimentacion ;

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

    //Eliminamos los botones de la pregunta
    contenedorButtonsTF_value.setAttribute('style', 'display: none;')

    //Retroalimentamos al usuario
    M.toast({html: `Pregunta respondida`});

    //Validamos que el examen se hay terminado en este punto
    validateExamenCompletado();

    
}

function printQuestionsTrueFalse(){
    let containerTrueFalse = document.getElementById('contenedor_preguntas');

    let suffledquestionsTF = shuffle(questionsTF);

    for(var i = 0; i < 8; i++){
        containerTrueFalse.innerHTML +=  `
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