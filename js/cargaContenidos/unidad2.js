const contenidosUnidad = {
inicio: {
id: "inicio",
titulo: "Inicio",
type: "contenido",
contenido: `
<!--Menu para los contenidos en tiempo real-->
<div class="mainTabsContent" id="tabsContentID">
    <ul id="tabs-swipe-demo" class="tabs clgreyl2 shadow4">
        <li class="tab clgreyl2" id="a6tutorialButton"><a class="clbktx active" href="#test-swipe-1">Bienvenida</a></li>
        <li class="tab clgreyl2" id="a8tutorialButton"><a class="clbktx" href="#test-swipe-3">Metodología</a></li>
        <li class="tab clgreyl2" id="a7tutorialButton"><a class="clbktx" href="#test-swipe-2">Unidad de competencia</a>
        </li>
        <li class="tab clgreyl2" id="a9tutorialButton"><a class="clbktx" href="#test-swipe-4">Evaluación de los
                aprendizajes</a></li>
        <li class="tab clgreyl2" id="a11tutorialButton"><a class="clbktx" href="#test-swipe-5">Requerimientos</a></li>
    </ul>
</div>

<div id="test-swipe-1" class="tabsContentContainerInfo">
    <div class="shadow4 border1 clw">
        <div class="textoTitulo titleContainer white-text colorCardTitleContent border1Sup">Bienvenida</div>
        <div class="cardDesign clw border1Inf">
            <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                En un mundo en constante evolución, la innovación se ha convertido en un diferenciador, en uno de los
                pilares para el éxito de las organizaciones. La innovación no solo consiste en desarrollar nuevos
                productos o servicios o en incorporarles mejoras; también se puede innovar en el modelo de negocios, en
                los procesos, en la relación con el cliente, en los canales de distribución y en cualquier otro aspecto.
                La innovación no tiene límites.
            </p>
            <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                Toda innovación va dirigida a un mercado (usuario) específico, entonces para innovar es fundamental
                conocer bien al mercado en el que nos enfocaremos. En este sentido, cobran relevancia: la investigación
                de mercados, la identificación de tendencias, segmentación adecuada y el diseño de estrategias de
                comercialización, por mencionar algunas.
            </p>
            <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                A diferencia de lo que se pudiera pensar, la innovación puede ser aprendida y entrenada, por lo que está
                al alcance de todas las personas. Hoy día existen algunas metodologías que empresas exitosas han
                utilizado en sus procesos de innovación. En este curso nos enfocaremos en una de esas metodologías: la
                metodología Design Thinking que a través de sus cinco fases —empatizar, definir, idear, prototipar y
                testear— posibilita generar soluciones creativas e innovadoras centradas en las verdaderas necesidades
                del cliente; es decir, en aquello a lo que el cliente le da valor y está dispuesto a comprar.
            </p>
            <div class="defaultImage">
                <div class="defaultImageContent" id="bienvenida"></div>
            </div>
            <span class="referenciaIcono clgreyl1 border1 clbktx">Retomado de Pixeltrue proveniente de &nbsp;
                <a href="https://icons8.com/illustrations/illustration/pixeltrue-welcome" target="_blank">Ouch!</a>
            </span>
        </div>
    </div>
</div>

<div id="test-swipe-2" class="tabsContentContainerInfo" style="display: none;">
    <div class="shadow4 border1 clw">
        <div class="textoTitulo titleContainer white-text colorCardTitleContent border1Sup">Unidad de competencia</div>
        <div class="cardDesign clw border1Inf">
            <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                Formula un estudio de mercado con base en la metodología Design thinking.
            </p>
            <div class="defaultImage">
                <div class="defaultImageContent" id="unidadCompetencia"></div>
            </div>
            <span class="referenciaIcono clgreyl1 border1 clbktx">Ilustración de &nbsp; <a
                    href="https://icons8.com/illustrations/style--pixeltrue">Pixel true</a> &nbsp;, &nbsp; <a
                    href="https://icons8.com/illustrations/">Ouch!</a></span>
        </div>
    </div>
</div>

<div id="test-swipe-3" class="tabsContentContainerInfo" style="display: none;">
    <div class="shadow4 border1 clw">
        <div class="textoTitulo titleContainer white-text colorCardTitleContent border1Sup">Metodología</div>
        <div class="cardDesign clw border1Inf">
            <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                <i class="keyWord">El uso de este RDD de la unidad 2: Innovación y la gestión del mercado</i>, te
                permitirá <i class="keyWord">estudiar los contenidos</i> en la secuencia indicada en el programa de
                estudios de <i class="keyWord">la Unidad de aprendizaje Formulación y evaluación de proyectos
                    informáticos</i>.
                Este RDD se construyó con la intención de <i class="keyWord">apoyarte en tu proceso de aprendizaje tanto
                    dentro como fuera del aula</i>; está disponible en el momento que lo requieras consultar,
                adaptándose a tu propio ritmo de aprendizaje, con los que se pretende <i class="keyWord">facilitar el
                    aprendizaje autónomo</i> con miras a lograr los objetivos de aprendizaje de esta unidad temática.
            </p>
            <div class="defaultImage">
                <div class="defaultImageContent" id="metodologia"></div>
            </div>
            <span class="referenciaIcono clgreyl1 border1 clbktx">Retomado de Pixeltrue proveniente de &nbsp;
                <a href="https://icons8.com/illustrations/illustration/pixeltrue-idea" target="_blank">Ouch!</a>
            </span>
        </div>
    </div>
</div>

<div id="test-swipe-4" class="tabsContentContainerInfo" style="display: none;">
    <div class="shadow4 border1 clw">
        <div class="textoTitulo titleContainer white-text colorCardTitleContent border1Sup">Evaluación de los
            aprendizajes</div>
        <div class="cardDesign clw border1Inf">
            <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                La evaluación de los aprendizajes de esta unidad temática se llevará a cabo como se muestra a
                continuación:
            </p>
            <div class="cardDesign clgreyl2 border1">
                <table class="striped highlight responsive-table clw border1 shadow2">
                    <thead>
                        <tr>
                            <th class="clbktx textoStandarTable">Unidad</th>
                            <th class="clbktx textoStandarTable">Actividad de aprendizaje</th>
                            <th class="clbktx textoStandarTable">Evidencia de aprendizaje</th>
                            <th class="clbktx textoStandarTable">Valor en la evaluación</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="cellCenter textoStandarTable" rowspan="2">Unidad II</td>
                            <td class="cellCenter textoStandarTable">Actividad 2</td>
                            <td class="textoStandarTable">Formulación de un proyecto informático</td>
                            <td class="cellCenter textoStandarTable">15%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="defaultImage">
                <div class="defaultImageContent" id="evaluacionAprendizajes"></div>
            </div>
            <span class="referenciaIcono clgreyl1 border1 clbktx">Retomado de Pixeltrue proveniente de &nbsp;
                <a href="https://icons8.com/illustrations/illustration/pixeltrue-teaching" target="_blank">Ouch!</a>
            </span>
        </div>
    </div>
</div>

<div id="test-swipe-5" class="tabsContentContainerInfo" style="display: none;">
    <div class="shadow4 border1 clw">
        <div class="textoTitulo titleContainer white-text colorCardTitleContent border1Sup">Requerimientos</div>
        <div class="cardDesign clw border1Inf">
            <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                Para acceder y hacer uso de este recurso se requiere:
            </p>
            <ul class="browser-default clbktx textoDinamicoIdentificador textoReadingH2">
                <li>Conexión a internet</li>
                <li>
                    Navegador de internet:
                    <ul class="browser-default">
                        <li>Microsoft Edge (version 85 o superior)</li>
                        <li>Google Chrome (version 85 o superior)</li>
                        <li>Mozilla Firefox (version 80 o superior)</li>
                        <li>Vivaldi (version 3.3 o superior)</li>
                        <li>Opera 70 o superior</li>
                    </ul>
                </li>
            </ul>
            <div class="defaultImage">
                <div class="defaultImageContent" id="requerimientos"></div>
            </div>
            <span class="referenciaIcono clgreyl1 border1 clbktx">Retomado de Pixeltrue proveniente de &nbsp;
                <a href="https://icons8.com/illustrations/illustration/pixeltrue-web-development"
                    target="_blank">Ouch!</a>
            </span>
        </div>
    </div>
</div>`,
},
unidadCompetencia: {
id: "unidadCompetencia",
titulo: "Unidad de competencia",
icono: "extension",
contenido: `
<div class="shadow4 border1 clw">
    <div class="textoTitulo titleContainer white-text colorCardTitleContent border1Sup">Unidad de competencia</div>
    <div class="cardDesign clw border1Inf">
        <p class="clbktx textoDinamicoIdentificador textoReadingH2">
            Formula un estudio de mercado con base en la metodología Design thinking.
        </p>
        <div class="defaultImage">
            <div class="defaultImageContent" id="unidadCompetencia"></div>
        </div>
        <span class="referenciaIcono clgreyl1 border1 clbktx">Ilustración de &nbsp; <a
                href="https://icons8.com/illustrations/style--pixeltrue">Pixel true</a> &nbsp;, &nbsp; <a
                href="https://icons8.com/illustrations/">Ouch!</a></span>
    </div>
</div>`,
},
evaluacionAprendizajes: {
id: "evaluacionAprendizajes",
titulo: "Evaluación de los aprendizajes",
icono: "assessment",
contenido: `
<br>
<div id="test-swipe-4" class="tabsContentContainerInfo">

    <div class="shadow4 border1 clw">
        <div class="textoTitulo titleContainer white-text colorCardTitleContent border1Sup">Evaluación de los
            aprendizajes</div>
        <div class="cardDesign clw border1Inf">
            <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                La evaluación de los aprendizajes de esta unidad temática se llevará a cabo como se muestra a
                continuación:
            </p>

            <div class="cardDesign clgreyl2 border1">
                <table class="striped highlight responsive-table clw border1 shadow2">
                    <thead>
                        <tr>
                            <th class="clbktx textoStandarTable">Unidad</th>
                            <th class="clbktx textoStandarTable">Actividad de aprendizaje</th>
                            <th class="clbktx textoStandarTable">Evidencia de aprendizaje</th>
                            <th class="clbktx textoStandarTable">Valor en la evaluación</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td class="cellCenter textoStandarTable" rowspan="4">Unidad 1</td>
                            <td class="cellCenter textoStandarTable">Actividad 1.1 La empresa y su constitución jurídica
                            </td>
                            <td class="textoStandarTable">Cuestionario en formato Tangram</td>
                            <td class="cellCenter textoStandarTable">Sin valor para la evaluación</td>
                        </tr>
                        <tr>
                            <td class="cellCenter textoStandarTable">Actividad 1.2 Las finanzas y su importancia</td>
                            <td class="textoStandarTable">Infografía</td>
                            <td class="cellCenter textoStandarTable">10 puntos</td>
                        </tr>
                        <tr>
                            <td class="cellCenter textoStandarTable">Actividad 1.3 La empresa, sus finanzas y su
                                relación con el entorno</td>
                            <td class="textoStandarTable">Reporte</td>
                            <td class="cellCenter textoStandarTable">10 puntos</td>
                        </tr>
                        <tr>
                            <td class="cellCenter textoStandarTable" colspan="2">Total</td>
                            <td class="cellCenter textoStandarTable">20 puntos</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="defaultImage">
                <div class="defaultImageContent" id="evaluacionAprendizajes"></div>
            </div>
            <span class="referenciaIcono clgreyl1 border1 clbktx">Retomado de Pixeltrue proveniente de &nbsp;
                <a href="https://icons8.com/illustrations/illustration/pixeltrue-teaching" target="_blank">Ouch!</a>
            </span>
        </div>
    </div>

</div>
`,
},
introduccion: {
id: "introduccion",
titulo: "Introducción",
contenido: `
<div class="shadow4 border1 clw">
    <div class="textoTitulo titleContainer white-text colorCardTitleContent border1Sup">Introducción</div>
    <div class="cardDesign clw border1Inf">
        <p class="clbktx textoDinamicoIdentificador textoReadingH2">
            La innovación y la gestión del mercado son considerados conceptos clave para la competitividad empresarial y
            el desarrollo económico. La innovación promueve en las empresas la creación de nuevos productos, servicios y
            procesos, mientras que la gestión del mercado es la encargada de posicionar esas innovaciones de manera
            efectiva para generar valor en sus productos y captar una mayor cantidad de clientes.
        </p>

        <div class="shadow2 border1 clgreyl1">
            <div class="textoTitulo titleContainer clbktx clgreyl2 border1Sup">1. Innovación</div>
            <div class="cardDesign clgreyl1 border1Inf">
                <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                    La innovación se define como la implementación de una idea nueva o mejorada que aporta valor a un
                    producto, servicio o proceso (Schumpeter, 1934). Se puede clasificar en:
                </p>
                <ul class="browser-default clbktx textoDinamicoIdentificador textoReadingH2">
                    <li><b>Innovación de producto:</b> introducción de bienes o servicios nuevos o mejorados.</li>
                    <li><b>Innovación de proceso:</b> cambios en la producción o distribución para aumentar la
                        eficiencia.</li>
                    <li><b>Innovación organizativa:</b> modificaciones en la gestión o estructura empresarial.</li>
                    <li><b>Innovación de marketing:</b> nuevas estrategias comerciales para mejorar la experiencia del
                        cliente.</li>
                </ul>
                <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                    Según la OCDE (2018, Manual de Oslo), la innovación es un motor clave del crecimiento empresarial y
                    económico, impulsado por factores como la digitalización, la globalización y la sostenibilidad.
                </p>
            </div>
        </div><br>

        <div class="shadow2 border1 clgreyl1">
            <div class="textoTitulo titleContainer clbktx clgreyl2 border1Sup">2. Gestión del Mercado</div>
            <div class="cardDesign clgreyl1 border1Inf">
                <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                    La gestión del mercado se refiere a la planificación, ejecución y control de estrategias para
                    satisfacer las necesidades del consumidor y lograr ventajas competitivas. Incluye aspectos como:
                </p>
                <ul class="browser-default clbktx textoDinamicoIdentificador textoReadingH2">
                    <li><b>Segmentación de mercado:</b> identificación de grupos de consumidores con características
                        similares.</li>
                    <li><b>Posicionamiento de marca:</b> creación de una imagen única y atractiva en la mente del
                        consumidor.</li>
                    <li><b>Estrategias de marketing:</b> uso del mix de marketing (producto, precio, plaza y promoción)
                        para atraer clientes.</li>
                    <li><b>Gestión de la innovación en el mercado:</b> implementación de estrategias para introducir y
                        escalar innovaciones.</li>
                </ul>
                <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                    Kotler y Keller (2016) destacan que una gestión eficaz del mercado requiere un análisis constante de
                    tendencias, competencia y comportamiento del consumidor.
                </p>
            </div>
        </div>

        <div class="defaultImage">
            <div class="defaultImageContent" id="intro"></div>
        </div>
        <span class="referenciaIcono clgreyl1 border1 clbktx">Retomado de Pixeltrue proveniente de &nbsp;
            <a href="https://icons8.com/illustrations/illustration/pixeltrue-vision" target="_blank">Ouch!</a>
        </span>
    </div>
</div>`,
},
innovacion: {
id: "innovacion",
titulo: "2.1 Innovación",
contenido: `
<div class="shadow4 border1 clw">
    <div class="textoTitulo titleContainer white-text colorCardTitleContent border1Sup">2.1 Innovación</div>
    <div class="cardDesign clw border1Inf">
        <p class="clbktx textoDinamicoIdentificador textoReadingH2">
            Hoy en día uno de los factores de más impacto en las organizaciones es la innovación, que muchas veces ha
            llegado a considerarse como
            sinónimo de tecnología, de algo nuevo o disruptivo y no necesariamente es así.<br><br>
            De acuerdo con Tundidor (2016)
        </p>
        <blockquote class="clgreyl1 clgreytx textoDinamicoIdentificador textoReadingH2">
            "Innovar es transformar en valor una oportunidad de mejora, introduciendo un cambio en un sistema de
            referencia".
        </blockquote>
        <p class="clbktx textoDinamicoIdentificador textoReadingH2">

            Para López (2007) la innovación es el proceso a través del cual la empresa genera nuevos o mejoras en sus
            productos, o nuevas maneras de organización o comercialización con el propósito de adaptarse
            al mercado y generar ventajas competitivas sostenibles.<br><br>
            Por otro lado, la OCDE en su manual de Frascati define la innovación como la transformación de una idea en
            un producto o
            servicio comercializable, un procedimiento de fabricación o distribución operativo, nuevo o mejorado, o un
            nuevo método de
            proporcionar un servicio social.<br><br>

        <div class="shadow2 border1 clgreyl1">
            <div class="textoTitulo titleContainer clbktx clgreyl2 border1Sup">Nota</div>
            <div class="cardDesign clgreyl1 border1Inf">
                <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                    Como puedes ver y considerando las definiciones anteriores es indudable que innovar no
                    necesariamente
                    significa desarrollar algo
                    sofisticado o tecnológico; una idea por buena que parezca no será una innovación sino hasta que sea
                    llevada
                    al mercado, se venda y
                    sea adoptada e incorporada en la vida diaria de las personas (lo que pudiera traducirse en una
                    decisión de
                    compra periódica y permanente).
                    Un rasgo característico de la innovación es que debe tener un valor; es decir, aquello por lo que el
                    cliente
                    está dispuesto a pagar.<br><br>
                </p>
                <blockquote class="clgreyl1 clgreytx textoDinamicoIdentificador textoReadingH2"><b>
                        La innovación no tiene límites, es infinita y aplicable a cualquier actividad que el ser humano
                        desarrolle,
                        independientemente del área o campo del conocimiento: agricultura, educación, negocios,
                        economía,
                        sociología, salud, arquitectura, ingeniería, por mencionar algunos.
                    </b></blockquote>
            </div>
        </div><br>

        </p>

    </div>
</div>`,
},
designThinking: {
id: "designThinking",
titulo: "2.2 Design thinking metodología de innovación",
contenido: `
<div class="shadow4 border1 clw">

    <div class="textoTitulo titleContainer white-text colorCardTitleContent border1Sup">2.2 Design thinking metodología
        de innovación</div>
    <div class="cardDesign clw border1Inf">

        <div class="shadow2 border1 clgreyl1">
            <div class="textoTitulo titleContainer clbktx clgreyl2 border1Sup">Design thinking</div>
            <div class="cardDesign clgreyl1 border1Inf">
                <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                    La metodología Design Thinking fue creada e implementada en los años 70 por la empresa IDEO. Es una
                    metodología que aumenta la probabilidad
                    de una innovación revolucionaria y se puede utilizar para lograr innovación en, servicios y modelos
                    de
                    negocio; consta de 5 fases que
                    permiten combinar procesos de diferentes tipos de una manera ordenada. Algunas fases de esta
                    metodología pueden ser divergentes o
                    expansivas, y otras convergentes, esto posibilitará explorar y ampliar la visión sobre los retos y
                    las
                    soluciones, y en otras fases se puede llegar con facilidad a la concreción/selección y prueba de las
                    mejores ideas. Si bien, en el proceso las fases se encuentran de una manera secuencial, el proceso
                    en sí se puede hacer en forma iterativa, por lo que se puede ir hacia atrás cuantas veces sea
                    necesario.<br><br>
                </p>
                <blockquote class="clgreyl1 clgreytx textoDinamicoIdentificador textoReadingH2">
                    <b>
                        Dicha metodología, te permitirá utilizar de manera ordenada técnicas de creatividad con sentido
                        práctico
                        durante todo el ciclo.
                    </b>
                </blockquote>
            </div>
        </div><br>


        <p class="clbktx textoDinamicoIdentificador textoReadingH2">
            La metodología Desingn ThinKing la puedes aplicar principalmente en el diseño de nuevos productos, nuevos
            servicios,
            así como en modelos de negocio; se centra en el usuario y en sus necesidades; se puede utilizar también
            cuando se está ante problemas
            complejos, poco definidos o son complicados, por ejemplo:
        </p>

        <div class="shadow2 border1 clgreyl1 simpleCardText">
            <ol class="browser-default clbktx textoDinamicoIdentificador textoReadingH2"
                style="list-style-type: lower-alpha;">
                <li>El reto/problema a resolver no está del todo claro, es complejo</li>
                <li>El mercado es nuevo, desconocido, impredecible</li>
                <li>El cliente/usuario no sabe bien lo que quiere</li>
            </ol>
        </div>

    </div>
</div>`,
},
empatizar: {
id: "empatizar",
titulo: "2.2.1 Empatizar con el usuario y explorar el mercado",
contenido: `
<div class="shadow4 border1 clw">
    <div class="textoTitulo titleContainer white-text colorCardTitleContent border1Sup">2.2.1 Empatizar con el usuario y
        explorar el mercado </div>
    <div class="cardDesign clw border1Inf">

        <div class="shadow2 border1 clgreyl1">
            <div class="textoTitulo titleContainer clbktx clgreyl2 border1Sup">Empatizar (primera fase de la metodología
                Design Thinking)</div>
            <div class="cardDesign clgreyl1 border1Inf">
                <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                    En esta primera fase, lo que se pretende es que comprendas el problema o las necesidades y el
                    contexto de
                    los usuarios implicados en la
                    solución que pretendes desarrollar. Ponerte en su lugar con el propósito de generar soluciones que
                    les
                    satisfagan. De lo que se trata
                    es que conozcas más a detalle el desafío o reto que te has o te han planteado resolver, debes
                    empatizar con
                    los usuarios y obtener
                    información valiosa (kamein, s.f)<br><br>
                </p>
            </div>
        </div><br>

        <p class="clbktx textoDinamicoIdentificador textoReadingH2">
            Para la fase de empatizar se puede utilizar una gran variedad de técnicas, por ejemplo: <b>la observación y
                la
                encuesta.</b> Es importante observar
            la situación y el contexto en torno al problema, sin hacer juicios previos y a través de la encuesta
            preguntar detalles,
            lo que permitirá crear un vínculo más estrecho entre el usuario y la futura solución.<br><br>
        </p>

        <blockquote class="clgreyl1 clgreytx textoDinamicoIdentificador textoReadingH2">
            Con la información que obtengas aplicando una o varias de las técnicas de obtención de información se puede
            tener una mejor definición
            del problema; debes exponer y cuestionar los supuestos; ver qué intenciones hay detrás; ir a la raíz de lo
            que se desea;
            descubrir motivaciones personales, que a veces no son tan obvias; mirar el problema desde sus detalles;
            verlo desde el punto
            de vista del cliente, usuario, proveedor, empresa, etc.
        </blockquote>

        <p class="clbktx textoDinamicoIdentificador textoReadingH2">
            En la fase de empatizar se recopilan hechos y datos:
            lo que sabemos,
            lo que no sabemos, si ha pasado antes, cuándo ha pasado, cómo lo han resuelto otros, etc. Recoger
            información de las necesidades
            explícitas e Implícitas de los involucrados en el problema, va a permitir tener un abanico más amplio de
            soluciones.
        </p>


    </div>
</div>`,
},
definirNecesidades: {
id: "definirNecesidades",
titulo: "2.2.2 Definir necesidades del usuario",
contenido: `
<div class="shadow4 border1 clw">
    <div class="textoTitulo titleContainer white-text colorCardTitleContent border1Sup">2.2.2 Definir necesidades del
        usuario</div>
    <div class="cardDesign clw border1Inf">

        <div class="shadow2 border1 clgreyl1">
            <div class="textoTitulo titleContainer clbktx clgreyl2 border1Sup">Por Definir (segunda fase de la
                metodología Design Thinking)?</div>
            <div class="cardDesign clgreyl1 border1Inf">
                <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                    En esta segunda fase, tendrás que depurar la información que obtuviste en la fase anterior
                    (empatizar/descubrir) con la finalidad de
                    quedarte con la información que realmente aporta valor. Aquí podrás darle sentido y definir las
                    revelaciones
                    (“insights”) a partir de
                    las observaciones y la información resultante en la primera fase.<br><br>
                </p>
            </div>
        </div><br>

        <p class="clbktx textoDinamicoIdentificador textoReadingH2">
            Es necesario que interpretes lo que hasta ahora conoces y has aprendido y así <b>definir bien el problema.
                Es
                una fase que toma mayor
                importancia,</b> debido a que trazará la directriz y calidad de la solución. Un problema mal formulario
            te puede
            hacer
            diseñar soluciones que nadie necesita.<br><br>

            En esta fase tendrás que trabajar sobre:
        </p><br>
        <div class="shadow2 border1 clgreyl1 simpleCardText">

            <ol class="browser-default clbktx textoDinamicoIdentificador textoReadingH2">
                <li>Las <b>necesidades tanto emocionales como físicas de los usuarios.</b> Buscarás lo que realmente
                    necesita
                    cada usuario específico.</li>
                <li>Identificar las revelaciones <b>(“insights”)</b> que aparecen, no solo las obvias, sino aquellas que
                    pueden
                    contribuir a generar nuevos planteamientos.</li>
                <li>La <b>definición del problema,</b> de una forma clara, que constituirá el punto de vista compartido
                    por el
                    equipo, que es lo que inspira al equipo, <b>que supone un marco de referencia común,</b> y guía los
                    esfuerzos de innovación. Ayudará a tomar decisiones para guiar/centrar esfuerzos, seleccionar ideas.
                </li>
                <li><b>¿Cuáles son los supuestos recogidos, siguen siendo válidos?</b></li>
            </ol>


        </div><br><br>
        <p class="clbktx textoDinamicoIdentificador textoReadingH2">Para trabajar la fase de definir puedes utilizar
            diferentes técnicas como:</p><br>

        <div class="shadow2 border1 clgreyl1">
            <div class="textoTitulo titleContainer clbktx clgreyl2 border1Sup">a. Compartir historias</div>
            <div class="cardDesign clgreyl1 border1Inf">
                <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                    Esta técnica consiste en que deberás crear una historia para transmitir al equipo de desarrollo e
                    interesados en el proyecto
                    lo que nos han contado los usuarios o las personas que tienen el problema; Lo que hemos visto, lo
                    que hemos aprendido y
                    sentido, para poder extraer todos los matices. En general todos aquellos detalles personales de las
                    historias (lo que le
                    gusta, lo que no le gusta, lo que le frustra, emociona y motiva).<br><br>

                    Las personas que escuchan y ven esta historia deberán indicarte que es lo que ven nuevo, lo que les
                    sorprende, preguntan,
                    y completan. Te funcionará bien ir anotando toda la información, y luego agrupar los elementos con
                    diferentes criterios.<br>

                </p>
            </div>
        </div><br>
        <div class="shadow2 border1 clgreyl1">
            <div class="textoTitulo titleContainer clbktx clgreyl2 border1Sup">b. Mapa de empatía</div>
            <div class="cardDesign clgreyl1 border1Inf">
                <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                    Esta técnica te permite hacer un esquema de las personas que entrevistamos, enfatizando cuáles son
                    sus pensamientos, sus emociones,
                    sus aspiraciones, sus características de consumo, entre otros.<br><br>
                    Para trabajar el mapa de empatía deberás:<br>

                <ul class="browser-default clbktx textoDinamicoIdentificador textoReadingH2">
                    <li>Dibujar un mapa para un segmento de mercado.</li>
                    <li>Anotar lo que dice y lo que hace el usuario, así como otros datos más subjetivos, lo que cree,
                        que piensa y que siente.</li>
                    <li>Detectar necesidades a partir de usuarios concretos (target).</li>
                    <li>Observar contradicciones, entre lo que hacen y lo que dicen los usuarios.</li>
                    <li>Identificar sus necesidades y las revelaciones (por qué lo necesitan).</li>
                    <li>Encontrar una revelación profunda, emocional, cuanto más inesperada mejor, detecta algo en lo
                        que valga la pena trabajar, para orientar los esfuerzos de la innovación.</li>
                </ul>

                </p>
            </div>
        </div><br>
        <div class="shadow2 border1 clgreyl1">
            <div class="textoTitulo titleContainer clbktx clgreyl2 border1Sup">c. Plantea la pregunta jugando</div>
            <div class="cardDesign clgreyl1 border1Inf">
                <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                    En este juego encontrarás tres elementos claves:<br>
                </p>

                <ol class="browser-default clbktx textoDinamicoIdentificador textoReadingH2"
                    style="list-style-type: lower-alpha;">
                    <li>El usuario. Es la persona que entrevistamos, encuestamos o que nos brindó información </li>
                    <li>La necesidad. La carencia o escasez de algo que el usuario considera imprescindible. Para
                        redactar la necesidad deberás de utilizar verbos.</li>
                    <li>Las revelaciones(“insights”). Deben ser declaraciones concretas que permitan pensar en la
                        solución.</li>
                </ol><br>
                <p>
                    Para tener más claridad utiliza el siguiente enunciado y cambia lo que está en negritas por la
                    información real de tu proyecto.
                </p>
                <br>
                <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                    <b>[Usuario]</b> necesita <b>[Necesidad]</b> porque <b>[POV – Punto de vista del usuario, deseo
                        profundo, la revelación de lo que verdaderamente le preocupa]</b>
                </p>

            </div>
        </div><br>
        <p class="clbktx textoDinamicoIdentificador textoReadingH2">
            Conseguir sintetizar claramente las necesidades llega a ser complicado, por lo regular vamos a lo evidente,
            lo que ya conocíamos, por
            lo que es conveniente perseverar.
        </p>

    </div>
</div>`,
},
idearConPropuesta: {
id: "idearConPropuesta",
titulo: "2.2.3 Idear con propuesta de valor",
contenido: `
<div class="shadow4 border1 clw">
    <div class="textoTitulo titleContainer white-text colorCardTitleContent border1Sup">2.2.3 Idear con propuesta de
        valor </div>
    <div class="cardDesign clw border1Inf">

        <div class="shadow2 border1 clgreyl1">
            <div class="textoTitulo titleContainer clbktx clgreyl2 border1Sup">Idear (tercera fase de la metodología del
                Design Thinking)</div>
            <div class="cardDesign clgreyl1 border1Inf">
                <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                    Esta tercera fase se considera que es de carácter divergente debido a que es un proceso que se usa
                    para generar múltiples ideas
                    diferentes y creativas para desarrollar un gran número de soluciones posibles para resolver un
                    problema. Es importante que
                    tengas presente que no existe la solución perfecta.<br><br>
                </p>
            </div>
        </div><br>

        <p class="clbktx textoDinamicoIdentificador textoReadingH2">
            En esta fase podrás aplicar técnicas de creatividad como:<br>
        </p><br>

        <div class="shadow2 border1 clgreyl1">
            <div class="textoTitulo titleContainer clbktx clgreyl2 border1Sup">a. Brainstorming (también conocido como
                lluvia de ideas o tormenta de ideas)</div>
            <div class="cardDesign clgreyl1 border1Inf">
                <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                    Es una técnica creativa grupal con la cual podrás generar nuevas ideas acerca de un tema o problema
                    concreto; la puedes
                    utilizar para diversas cosas, pero te puede resultar especialmente útil si necesitas:
                </p><br>
                <ul class="browser-default clbktx textoDinamicoIdentificador textoReadingH2">
                    <li>
                        <b>Recopilar una gran cantidad de ideas.</b> Imagina que quieres lanzar un blog de tu negocio,
                        pero no tienes del todo claro sobre
                        qué temáticas publicar. Hacer un brainstorming puede ser de gran ayuda al momento de proponer
                        ideas para tu estrategia de
                        marketing de contenidos.
                    </li>
                    <li>
                        <b>Trabajar la creatividad.</b> Por ejemplo, a la hora de pensar en el nombre de tu marca o
                        trabajar en el logo.
                    </li>
                    <li>
                        <b>Mejorar procesos de la empresa o solucionar problemas.</b> Habilitar la conversación con
                        diferentes miembros de tu equipo te
                        ayudará a encontrar soluciones creativas y a mirar a tus problemas desde todos los ángulos
                        posibles.
                    </li>
                </ul>
                <blockquote class="clgreyl1 clgreytx textoDinamicoIdentificador textoReadingH2">
                    Definitivamente, si aplicas la técnica del brainstorming puedes obtener una gran variedad de
                    beneficios, como por ejemplo:
                    te ayudará a resolver inconvenientes y sobre todo a encontrar soluciones a los problemas, asimismo
                    te ayudará a superar
                    el conformismo en determinadas situaciones, e incluso puedes encontrar algunas oportunidades de
                    negocio.<br><br>
                    Cuando hagas uso de esta técnica es importante que tengas presente lo siguiente:

                </blockquote><br>

                <ul class="browser-default clbktx textoDinamicoIdentificador textoReadingH2">
                    <li>No debes juzgar ni criticar las ideas que surjan.</li>
                    <li>Los participantes deben pensar libremente, y cualquier idea se debe tomar en cuenta y se agrupan
                        por afinidades. </li>
                    <li>La cantidad de preguntas es importante por lo que se deben formular muchas preguntas. (todas las
                        posibles)</li>
                    <li>Debes seguir un orden, una sola idea cada vez.</li>
                    <li>Puedes combinar ideas para mejorarlas y así potenciar el efecto multiplicador. </li>
                </ul>


            </div>
        </div><br>

        <div class="shadow2 border1 clgreyl1">
            <div class="textoTitulo titleContainer clbktx clgreyl2 border1Sup">b. SCAMPER</div>
            <div class="cardDesign clgreyl1 border1Inf">
                <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                    La técnica scamper es una técnica creativa de lluvia de ideas que te ayudará a explorar tu
                    creatividad desde siete ángulos
                    diferentes. Lo que busca es que un equipo o persona sea capaz de enfrentarse a una situación o a un
                    problema de una forma
                    innovadora, original y completamente diferente.<br><br>

                    Esta técnica la puedes utilizar cuando requieras mejorar un servicio o un producto. Para ello,
                    necesitas aplicar una serie
                    de preguntas relacionadas y con las respuestas debes intentar sacar diferentes ideas.<br><br>

                    Esas preguntas y respuestas se convierten en una lista de verificación (checklist) y se basa en
                    verbos de acción que pueden
                    generar cambios en el producto o servicio que se esté analizando, al mismo tiempo te ayudará a tener
                    una idea más clara para
                    desarrollar uno nuevo.<br><br>

                    El método SCAMPER se traduce en los siguientes verbos:
                </p><br>

                <blockquote class="clgreyl1 clgreytx">
                    <ul class="browser-default clbktx textoDinamicoIdentificador textoReadingH2">
                        <li><b class="clgreyl3 subTitleCard">Sustituir:</b> se puede sustituir algún elemento de los que
                            intervienen: Quién, qué, lugar, elementos, momentos, qué ocurre si cambio y lo sustituyo.
                        </li>
                        <li><b class="clgreyl3 subTitleCard">Combinar:</b> qué puedes combinar para conseguir mejores
                            resultados, cambiar X por Y. </li>
                        <li><b class="clgreyl3 subTitleCard">Adaptar, ajustar o añadir:</b> puedes cambiar algún
                            componente, añadir otro componente, de otro negocio, copiar, etc.</li>
                        <li><b class="clgreyl3 subTitleCard">Modificar, magnificar o minimizar:</b> puedes acortar algún
                            elemento o lo puedes ampliar, puedes cambiar la forma o el color, etc.</li>
                        <li><b class="clgreyl3 subTitleCard">Poner en otros usos:</b> podrías utilizarlo para otras
                            funciones, para otros usuarios, implementarlo en otros sitios, de otra forma, para
                            diferentes usos. </li>
                        <li><b class="clgreyl3 subTitleCard">Eliminar o transformar:</b> puedes quitar componentes,
                            cambiar el resultado.</li>
                        <li><b class="clgreyl3 subTitleCard">Reordenar o invertir:</b> cómo afectaría el producto si lo
                            inviertes, le das la vuelta o lo reordenas, etc.</li>
                    </ul>
                </blockquote>

                <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                    Ya que hayas generado varias ideas, ahora debes seleccionarlas y filtrarlas con el apoyo de
                    diferentes técnicas, y quedarte con las
                    que consideres que resuelven de una mejor manera el problema. No olvides que tomar en cuenta
                    los diferentes puntos de vista
                    de los participantes, y aplicar con flexibilidad y objetividad los criterios y tratar de evitar los
                    intereses particulares.<br><br>

                    Tienes que intentar seleccionar aquellas que sean técnicas económicamente viables, de alto impacto,
                    y que encajen con los criterios
                    previamente definidos. Por ejemplo:<br><br>

                    <b class="clgreyl3 subTitleCard">Criterios cuantitativos:</b>
                </p><br>

                <ul class="browser-default clbktx textoDinamicoIdentificador textoReadingH2">
                    <li><b>Deseable:</b> que resuelva el problema planteado.</li>
                    <li><b>Factible:</b> ¿Se cuenta con la tecnología, los recursos y el tiempo necesarios para
                        hacerlo?, que lo puedas lograr con tus propios recursos.</li>
                    <li><b>Rentable:</b> que te permita recuperar la inversión del proyecto (precio, margen, TIR, etc.).
                    </li>
                </ul><br>

                <p class="clbktx textoDinamicoIdentificador textoReadingH2"><b class="clgreyl3 subTitleCard">Criterios
                        cualitativos:</b></p><br>

                <ul class="browser-default clbktx textoDinamicoIdentificador textoReadingH2">
                    <li>Lo que esté de moda y sea más atractivo </li>
                    <li>La que se considera más innovador y original</li>
                    <li>La que podría tener un mayor éxito en el mercado</li>
                </ul><br>

                <p class="clbktx textoDinamicoIdentificador textoReadingH2"><b class="clgreyl3 subTitleCard">Criterios
                        objetivos:</b></p><br>

                <ul class="browser-default clbktx textoDinamicoIdentificador textoReadingH2">
                    <li>Mayor consumo previsto</li>
                    <li>Más barato</li>
                    <li>Posibles mercados</li>
                    <li>Valor social</li>
                    <li>Menor impacto medioambiental</li>
                    <li>Interés cultural, etc.</li>
                </ul><br>


            </div>
        </div><br>

        <div class="shadow2 border1 clgreyl1">
            <div class="textoTitulo titleContainer clbktx clgreyl2 border1Sup">c. Da Vinci o morfológica</div>
            <div class="cardDesign clgreyl1 border1Inf">
                <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                    Una vez que ya tienes el problema definido, el siguiente paso es idear la solución. Para ello, es
                    necesario que formules
                    previamente la pregunta "¿Cómo podríamos…?" Seguramente ya tienes formulada la pregunta, porque fue
                    parte de la
                    actividad anterior.<br><br>

                <blockquote class="clgreyl1 clgreytx textoDinamicoIdentificador textoReadingH2">
                    En esta fase "Idear" recurrirás a tu imaginación y creatividad, para generar muchas ideas de
                    alternativas de solución.
                    La ventaja de esta técnica es que te permite generar combinaciones, es decir, asociar o conectar
                    partes que aparentemente
                    están desconectadas. Una gran variedad de los productos innovadores surge de la combinación de
                    elementos que ya existían.
                    La técnica de generación de ideas creativas denominada Da Vinci o Morfológica es una técnica que te
                    permite combinar un
                    conjunto de características y como consecuencias genera soluciones creativas e innovadoras para
                    llevarlas a cabo.
                </blockquote>

                </p>
            </div>
        </div><br>
    </div>
</div>`,
},
prototiparLaIdea: {
id: "prototiparLaIdea",
titulo: "2.2.4 Prototipar la idea",
contenido: `
<div class="shadow4 border1 clw">
    <div class="textoTitulo titleContainer white-text colorCardTitleContent border1Sup">2.2.4 Prototipar la idea</div>
    <div class="cardDesign clw border1Inf">

        <div class="shadow2 border1 clgreyl1">
            <div class="textoTitulo titleContainer clbktx clgreyl2 border1Sup">Prototipar (cuarta fase de la metodología
                del Design Thinking)</div>
            <div class="cardDesign clgreyl1 border1Inf">
                <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                    En esta cuarta fase, las ideas van a ser aterrizadas y a convertirse en tangibles. Para que de esa
                    forma el usuario no solo imagine
                    propuestas, sino que pueda verlas y con ello tener claridad del producto o servicio que se le va a
                    proporcionar como solución a su problema.
                    Para ello, debes construir prototipos o escenarios que te permitan visualizar con claridad y al
                    mismo tiempo manipular
                    las posibles soluciones, con el propósito de que identifiques aspectos que puedas mejorar antes de
                    obtener el resultado final.
                </p>
            </div>
        </div><br>

        <p class=" clbktx textoDinamicoIdentificador textoReadingH2">
            El prototipado es una fase de modelado y experimentación donde deberás considerar cuatro aspectos
            fundamentales al momento de
            construir y presentar tu prototipo:
        </p><br>
        <div class="shadow2 border1 clgreyl1 simpleCardText">
            <ol class="browser-default clbktx textoDinamicoIdentificador textoReadingH2">
                <li>Los prototipos que desarrolles deben surgir de las ideas que resultaron de la fase anterior. (idear)
                </li>
                <li>Los prototipos deben dar solución a la problemática planteada.</li>
                <li>Los prototipos deben probarse y verificar que funcionen.</li>
                <li>Los prototipos deben refinarse.</li>
            </ol>
        </div><br>

        <blockquote class="clgreyl1 clgreytx textoDinamicoIdentificador textoReadingH2">
            Estos aspectos te ayudan a probar cómo las soluciones interaccionan con los usuarios y su entorno, para ver
            sus reacciones y así obtener una
            retroalimentación de lo que ve, lo que siente, las ideas que le surgen, y las dudas que pudiera tener, entre
            otras.
        </blockquote>



    </div>
</div>`,
},
testeo: {
id: "testeo",
titulo: "2.2.5 Testeo (validar)",
contenido: `
<div class="shadow4 border1 clw">
    <div class="textoTitulo titleContainer white-text colorCardTitleContent border1Sup">2.2.5 Testeo (validar)</div>
    <div class="cardDesign clw border1Inf">

        <div class="shadow2 border1 clgreyl1">
            <div class="textoTitulo titleContainer clbktx clgreyl2 border1Sup">¿En qué consiste?</div>
            <div class="cardDesign clgreyl1 border1Inf">
                <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                    En esta quinta fase se presenta el prototipo a los usuarios lo que significa solicitar y recoger sus
                    opiniones y de acuerdo con ellas
                    deberás de realizar los ajustes para mejorar el prototipo, el objetivo es que obtengas nuevas ideas
                    para mejorar, a partir de críticas
                    constructivas, dudas que te ayudarán a identificar errores, carencias y puntos débiles que puede
                    tener el producto. Esto te permite
                    seguir desarrollando colaborativamente la solución y presentar diversas mejoras al prototipo.
                </p>
            </div>
        </div><br>

        <p class=" clbktx textoDinamicoIdentificador textoReadingH2">
            Al momento de probar tus prototipos con los usuarios interesados en la solución que estás desarrollando se
            puede identificar
            mejoras significativas y fallos a resolver, para ello es necesario que consideres los siguientes aspectos:
        </p><br>
        <div class="shadow2 border1 clgreyl1 simpleCardText">
            <ul class="browser-default clbktx textoDinamicoIdentificador textoReadingH2">
                <li><b class="clgreyl3 subTitleCard">
                        Diseña test de prueba:</b> qué quieres probar, qué suposición quieres validar, en qué
                    entorno/contexto, qué recursos serán necesarios para ello,
                    cómo medirás los resultados de la prueba.
                </li>
                <li><b class="clgreyl3 subTitleCard">Realiza la prueba:</b> siguiendo el plan establecido, obtén y
                    registra los resultados.</li>
                <li><b class="clgreyl3 subTitleCard">
                        Analiza los resultados:</b> toma decisiones (volver a idear, modificar/completar prototipo,
                    avanzar la implementación, rechazar
                    el concepto/idea, etc.).
                </li>
                <li>Cuando los resultados así lo indiquen, debes rediseñar tu prototipo, recuerda que tu primera idea no
                    es la solución ideal.</li>
                <li><b class="clgreyl3 subTitleCard">
                        Es un proceso iterativo.</b> Para que logres la mejor solución deberás aplicar alguna técnica
                    que facilite que los usuarios puedan exponer puntos de vista a favor y en contra del prototipo con
                    el propósito de que la solución planteada tenga una mejora para satisfacer sus necesidades.
                </li>
            </ul>
        </div><br>

    </div>
</div>`,
},
modeloNegocios: {
id: "modeloNegocios",
titulo: "2.3 Modelo de negocios Canvas",
contenido: `
<div class="shadow4 border1 clw">
    <div class="textoTitulo titleContainer white-text colorCardTitleContent border1Sup">2.3 Modelo de negocios Canvas
    </div>
    <div class="cardDesign clw border1Inf">
        <p class="clbktx textoDinamicoIdentificador textoReadingH2">
            El Modelo de Negocios Canvas (Business Model Canvas) fue creado por Alexander Osterwaler; es una herramienta
            dinámica y visual en la que se describe de manera lógica la forma en la que las organizaciones crean,
            entregan y capturan valor para sus clientes (Serrano y Blázquez, 2016).
        </p>
        <p class="clbktx textoDinamicoIdentificador textoReadingH2">
            El canvas model es un lienzo sumamente útil; en el que se plasma información muy concreta y clara,
            permitiéndonos observar y comprender a nuestro usuario, crear prototipos rápidamente para testear, evaluar
            en el mercado si se comportan como esperábamos y hacer los ajustes que sean necesarios.
        </p>
        <p class="clbktx textoDinamicoIdentificador textoReadingH2">
            El modelo de negocios canvas se compone de nueve bloques, a continuación se detallan:
        </p>

        <div class="cardDesign clgreyl2 border1">
            <table class="striped highlight responsive-table clw border1 shadow2">
                <thead>
                    <tr>
                        <th class="clbktx textoStandarTable" style="width: 5%">No.</th>
                        <th class="clbktx textoStandarTable" style="width: 45%">BLOQUE</th>
                        <th class="clbktx textoStandarTable" style="width: 50%">PREGUNTAS QUE DEBES CONTESTAR</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="cellCenter textoStandarTable">1</td>
                        <td class="textoStandarTable"><b>Segmento de clientes.</b> No olvides que el cliente es el
                            centro del modelo y debemos conocer todo sobre él. En este bloque describirás el segmento o
                            segmentos de mercado en los que te enfocarás, para ello puedes crear tu buyer persona.</td>
                        <td class="textoStandarTable">
                            <ul class="browser-default">
                                <li>¿A quién ayudamos a resolver un problema?</li>
                                <li>¿Qué necesidades funcionales podemos resolver?</li>
                                <li>¿Para quién estamos creando valor?</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td class="cellCenter textoStandarTable">2</td>
                        <td class="textoStandarTable"><b>Propuesta de valor.</b> Debes explicar de forma detallada las
                            características y bondades de tu producto o servicio, tienes que resaltar porqué es
                            diferente al de otros negocios. La propuesta de valor es clave para tu negocio.</td>
                        <td class="textoStandarTable">
                            <ul class="browser-default">
                                <li>¿De qué forma vas a solucionar su problema?</li>
                                <li>¿Qué necesidad estas satisfaciendo?</li>
                                <li>¿Qué valor estas ofreciendo a tus clientes?</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td class="cellCenter textoStandarTable">3</td>
                        <td class="textoStandarTable"><b>Canales.</b> Cómo vamos a hacer llegar nuestro
                            producto/servicio al cliente.</td>
                        <td class="textoStandarTable">¿Cómo te conocerá, comprará y evaluará el producto tu público
                            objetivo?</td>
                    </tr>
                    <tr>
                        <td class="cellCenter textoStandarTable">4</td>
                        <td class="textoStandarTable"><b>Relación con los clientes.</b> Determina cuál es la mejor forma
                            de comunicarte con tus clientes, si debe ser una relación personalizada y exclusiva o
                            general.</td>
                        <td class="textoStandarTable">
                            <ul class="browser-default">
                                <li>¿Qué tipo de relación vas a establecer con tus clientes?</li>
                                <li>¿De qué manera vas a gestionar la relación con los clientes?</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td class="cellCenter textoStandarTable">5</td>
                        <td class="textoStandarTable"><b>Fuentes de ingresos.</b> Define la forma en que vas a monetizar
                            tu producto ya que esta es la manera de cómo va a entrar el dinero a tu negocio. Se puede
                            incluir el dinero que entre por la venta del producto y si es el caso las inversiones de los
                            asociados claves.</td>
                        <td class="textoStandarTable">¿Cuál es la forma en la que tu negocio se va a financiar y obtener
                            ingresos?</td>
                    </tr>
                    <tr>
                        <td class="cellCenter textoStandarTable">6</td>
                        <td class="textoStandarTable"><b>Recursos clave.</b> Debes establecer cuáles son los recursos
                            necesarios para producir el producto /servicio. Pueden ser espacios físicos, digitales, el
                            equipo humano, entre otros.</td>
                        <td class="textoStandarTable">
                            <ul class="browser-default">
                                <li>¿Cuáles son los recursos claves que requiere la idea de negocio?</li>
                                <li>¿Cuáles son los recursos claves que requiere nuestra propuesta de valor?</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td class="cellCenter textoStandarTable">7</td>
                        <td class="textoStandarTable"><b>Actividades clave.</b> Aquí describe cuáles actividades
                            realizarás para cumplir con tu propuesta de valor. Es decir, aquí debes definir en el
                            conjunto de actividades, productos o servicios esenciales para la existencia y el éxito de
                            tu negocio. Es lo que la empresa hace mejor y lo que la distingue de la competencia.</td>
                        <td class="textoStandarTable">
                            <ul class="browser-default">
                                <li>¿Qué actividades son primordiales para hacer funcionar el negocio?</li>
                                <li>¿Qué actividades clave requiere mi propuesta de valor?</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td class="cellCenter textoStandarTable">8</td>
                        <td class="textoStandarTable"><b>Socios clave.</b> Debes identificar en quienes te vas a apoyar
                            para la producción, distribución y comercialización de tu producto o servicio. Por ejemplo,
                            proveedores, empresas de logística, socios estratégicos en investigación y desarrollo, por
                            mencionar algunos.</td>
                        <td class="textoStandarTable">
                            <ul class="browser-default">
                                <li>¿Con quién te apoyas? (proveedores, aliados estratégicos, etc.)</li>
                                <li>¿Quiénes serán los socios claves de tu modelo de negocio?</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td class="cellCenter textoStandarTable">9</td>
                        <td class="textoStandarTable"><b>Estructura de costos.</b> Debes definir cuáles son tus
                            prioridades y los gastos fundamentales en el negocio de aquellos que no lo son.<br><br>Un
                            consejo práctico para este tipo de elemento es usar herramientas en donde puedas llevar el
                            control de estos ingresos y gastos.</td>
                        <td class="textoStandarTable">
                            <ul class="browser-default">
                                <li>¿Cuáles son los costos más importantes dentro de nuestro modelo de negocio?</li>
                                <li>¿Qué recursos claves son los más costosos?</li>
                                <li>¿Qué actividades clave son las más costosas?</li>
                                <li>¿Cuáles son los ingresos y egresos más importantes?</li>
                                <li>¿Qué costos fijos y variables tengo?</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <p class="clbktx textoDinamicoIdentificador textoReadingH2">
            Al desarrollar el modelo de negocios canvas Figura 2.3.1 se puede realizar un análisis integral que te
            ayudará a definir estrategias efectivas para el éxito de tu proyecto
        </p>

        <div class="defaultImage" style="display: flex; justify-content: center; margin: 10px auto;">
            <img src="/img/contenidos/2.3.1.png" alt="Modelo de negocios canvas" class="defaultImageContent"
                style="width: auto; height: 400px; margin: 10px auto;">
        </div>
        <br>
        <span class="referenciaIcono clgreyl1 border1 clbktx">
            Recuperado de Modelo Canvas. (s.f.). Plantillas y ejemplos. &nbsp;
            <a href="https://modelocanvas.net/descargar-plantillas-ejemplos/"
                target="_blank">https://modelocanvas.net/descargar-plantillas-ejemplos/</a>
        </span>

        <br>
        <p class="clbktx textoDinamicoIdentificador textoReadingH2">
            Una vez que revisaste los contenidos de esta unidad temática, ya cuentas con los elementos suficientes para
            desarrollar la siguiente actividad de aprendizaje: <a href="./pdf/actividades/ACTIVIDAD_2 Formulaciòn del proyecto informatico.pdf" target="_blank">Actividad 2 Formulación del proyecto informático</a>
        </p>
    </div>
</div>`,
},
materialApoyo: {
id: "materialApoyo",
titulo: "Material de apoyo",
contenido: `
<section class="containerActividadAprendizajeFather">
    <div class="textoTitulo clbktx">Material de apoyo</div>
    <div class="shadow4 border1 clw">
        <div class="cardDesign clw border1Inf">
            <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                Por el momento no hay material de apoyo disponible para esta unidad.
            </p>
            <div class="defaultImage">
                <div class="defaultImageContent" id="notFound"></div>
            </div>
            <span class="referenciaIcono clgreyl1 border1 clbktx">Retomado de Pixeltrue proveniente de &nbsp;
                <a href="https://icons8.com/illustrations/illustration/pixeltrue-searching" target="_blank">Ouch!</a>
            </span>
        </div>
    </div>
</section>
`,
},
actividades: {
id: "actividades",
titulo: "Actividades de aprendizaje",
contenido: `
<!--Tarjeta con las actividades-->
<section class="containerActividadAprendizajeFather">
    <div class="textoTitulo clbktx">Actividades de aprendizaje</div>
    <section class="gridActividadesAprendizaje">
        <!--Tarjeta 1-->
        <div class="actividadesAprendizaje border1 clgreyl2 shadow2 tarjetaActividades">
            <p class="cardTitleActividad tituloActividadAprendizaje clgreyl1 clbktx">Actividad 2</p>
            <p class="truncate descActividadAprendizaje clgreyl1 clbktx">Formulación del proyecto informático</p>
            <a href="./pdf/actividades/ACTIVIDAD_2 Formulaciòn del proyecto informatico.pdf" target="_blank">
                <div class="buttonDownloadActividadAprendizaje clw border1 shadow2 waves-effect">
                    <i class="material-icons clbktx">download</i>
                    <span class="clbktx">Descargar</span>
                </div>
            </a>
        </div>

    </section>
</section>
`,
},
cierre: {
id: "cierre",
titulo: "Cierre de la unidad temática",
contenido: `
<div class="shadow4 border1 clw">
    <div class="textoTitulo titleContainer white-text colorCardTitleContent border1Sup">Cierre de la unidad temática
    </div>
    <div class="cardDesign clw border1Inf">
        <p class="clbktx textoDinamicoIdentificador textoReadingH2">
            En esta unidad temática empezaste a trabajar con la metodología Design Thinking e inclusive aplicaste
            algunas de sus herramientas.
        </p>
        <p class="clbktx textoDinamicoIdentificador textoReadingH2">
            Te diste cuenta que es una metodología flexible en donde puedes regresar a alguna de sus fases, tantas veces
            como sea necesario para corregir, ajustar, mejorar, incorporar y seguir avanzando.
        </p>
        <p class="clbktx textoDinamicoIdentificador textoReadingH2">
            Como resultado seguramente ya construiste un prototipo "validado" por el usuario final, ya tienes
            información valiosa y ya sabes qué es lo que tu usuario quiere.
        </p>
        <p class="clbktx textoDinamicoIdentificador textoReadingH2">
            Con base en ello ahora desarrollarás tu proyecto informático. Para tal efecto necesitas una metodología, en
            la siguiente unidad temática encontrarás información sobre algunas de las metodologías que permiten
            gestionar el proyecto y desarrollar el software.
        </p>

        <div class="defaultImage">
            <div class="defaultImageContent" id="cierre"></div>
        </div>
        <span class="referenciaIcono clgreyl1 border1 clbktx">Retomado de Pixeltrue proveniente de &nbsp;
            <a href="https://icons8.com/illustrations/illustration/pixeltrue-success" target="_blank">Ouch!</a>
        </span>
    </div>
</div>
`,
},
referencias: {
id: "referencias",
contenido: `11 (referencias)`,
},
referencia12: {
id: "referencia12",
contenido: `12`,
},
referencia13: {
id: "referencia13",
contenido: `13`,
},
referencia14: {
id: "referencia14",
contenido: `14`,
},
referencia15: {
id: "referencia15",
contenido: `15`,
},
referencia16: {
id: "referencia16",
contenido: `16`,
},
};

console.log("contenidosUnidad: ", Object.keys(contenidosUnidad).length);

/////////////////////////////////////
//Object delegation para los botones
/////////////////////////////////////

// Función para inicializar las tabs
function inicializarTabs() {
// Destruir las tabs existentes si hay alguna
const tabsExistentes = document.querySelectorAll('.tabs');
tabsExistentes.forEach(tab => {
const instance = M.Tabs.getInstance(tab);
if (instance) {
instance.destroy();
}
});

// Inicializar las nuevas tabs
const tabs = document.querySelectorAll('.tabs');
tabs.forEach(tab => {
M.Tabs.init(tab, {
swipeable: false,
duration: 300
});
});

// Ajustar el ancho de los tabs
const tabsContainer = document.querySelector('.tabs-container');
if (tabsContainer) {
const parentWidth = tabsContainer.parentElement.offsetWidth;
const tabsWidth = tabsContainer.offsetWidth;
if (tabsWidth > parentWidth) {
tabsContainer.style.width = `${parentWidth}px`;
}
}
}

// Función para cargar el contenido inicial por defecto
function cargarContenidoInicial() {
// Accedemos al contenedor de los textos
let contenedorParaElContenidoDeLaUnidad = document.getElementById(
"lateralUnityContent"
);

// Cargamos por defecto el contenido para la unidad (inicio)
if (contenidosUnidad.inicio) {
contenedorParaElContenidoDeLaUnidad.innerHTML =
contenidosUnidad.inicio.contenido;

// Inicializar las tabs después de cargar el contenido
setTimeout(inicializarTabs, 100);
}
}

// Función para cargar contenido específico
function cargarContenido(seccionId) {
// Accedemos al contenedor de los textos
let contenedorParaElContenidoDeLaUnidad = document.getElementById("lateralUnityContent");

if (!seccionId) return; // Si no hay seccionId, no hacemos nada

const seccion = contenidosUnidad[seccionId];
if (seccion) {
contenedorParaElContenidoDeLaUnidad.innerHTML = seccion.contenido;

// Inicializar los tabs si estamos en la sección de inicio
if (seccionId === 'inicio') {
setTimeout(() => {
const tabsElement = document.querySelector('.tabs');
if (tabsElement) {
M.Tabs.init(tabsElement, {
swipeable: false,
duration: 300
});
}

// Ajustar el ancho de los tabs
const tabsContentElement = document.getElementById('tabsContentID');
if (tabsContentElement) {
const parentContainer = document.getElementById('lateralUnityContent');
if (parentContainer) {
const parentContainerAncho = parentContainer.offsetWidth - 0.5;
tabsContentElement.style.width = parentContainerAncho + 'px';
}
}
}, 100);
}

// Actualizar el título de la sección actual
document.title = `Unidad 2 - ${seccion.titulo || ''}`;

// Actualizar clases activas en el menú
document.querySelectorAll('.navOptionsContent').forEach(el => {
el.classList.remove('activeLinkOptionsContentUnit2');
});
const elementoActivar = document.querySelector(`[seccion-id="${seccionId}"]`);
if (elementoActivar) {
elementoActivar.classList.add('activeLinkOptionsContentUnit2');
}
} else {
console.warn(`Sección ${seccionId} no encontrada`);
contenedorParaElContenidoDeLaUnidad.innerHTML = `
<div class="shadow4 border1 clw">
    <div class="textoTitulo titleContainer white-text colorCardTitleContent border1Sup">Error</div>
    <div class="cardDesign clw border1Inf">
        <p class="clbktx textoDinamicoIdentificador textoReadingH2">
            La sección solicitada no está disponible.
        </p>
    </div>
</div>`;
}
}

// Iniciar la carga de los contenidos cuando se cargue el documento
document.addEventListener("DOMContentLoaded", function () {
cargarContenidoInicial();

// Event listener para el menú de escritorio
let buttonContaineChargeContent = document.getElementById("lateralUnityMenuSectionContainer");
if (buttonContaineChargeContent) {
buttonContaineChargeContent.addEventListener("click", function (event) {
const target = event.target.closest('[seccion-id]');
if (target) {
const seccionId = target.getAttribute("seccion-id");
cargarContenido(seccionId);
}
});
}

// Event listener para el menú móvil
let mobileOptionsContainers = document.getElementsByClassName("mobileOptionsContainer");
Array.from(mobileOptionsContainers).forEach(container => {
container.addEventListener("click", function (event) {
const target = event.target.closest('[seccion-id]');
if (target) {
const seccionId = target.getAttribute("seccion-id");
if (seccionId) {
cargarContenido(seccionId);
// Cerrar el sidenav móvil después de seleccionar una opción
const instance = M.Sidenav.getInstance(document.querySelector('#slide-out'));
if (instance) {
instance.close();
}
}
}
});
});
});