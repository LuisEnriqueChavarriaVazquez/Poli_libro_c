// Archivo unidad3_p1.js - Contiene las primeras secciones de la unidad 3
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
				<li class="tab clgreyl2" id="a7tutorialButton"><a class="clbktx" href="#test-swipe-2">Unidad de competencia</a></li>
				<li class="tab clgreyl2" id="a9tutorialButton"><a class="clbktx" href="#test-swipe-4">Evaluación de los aprendizajes</a></li>
				<li class="tab clgreyl2" id="a11tutorialButton"><a class="clbktx" href="#test-swipe-5">Requerimientos</a></li>
			</ul>
		</div>
		
		<div id="test-swipe-1" class="tabsContentContainerInfo">
			<div class="shadow4 border1 clw">
				<div class="textoTitulo titleContainer white-text colorCardTitleContent border1Sup">Bienvenida</div>
				<div class="cardDesign clw border1Inf">
					<p class="clbktx textoDinamicoIdentificador textoReadingH2">
					Estimados estudiantes que cursan la unidad de aprendizaje Finanzas empresariales, que se imparte en la
					<i class="keyWord">Escuela Superior de Cómputo (ESCOM) del Instituto Politécnico Nacional (IPN)</i>, reciban la mejor de las
					bienvenidas a este <i class="keyWord">recurso didáctico digital (RDD) de la unidad temática 3: la empresa y su entorno</i>,
					correspondiente a la unidad de aprendizaje Finanzas empresariales.
					Este recurso educativo se construyó con la finalidad de apoyarlos en su proceso de aprendizaje de la unidad
					en cuestión, esperamos que les sea de gran ayuda.
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
						Reconoce el <i class="keyWord">papel de las finanzas</i> a partir del <i class="keyWord">contexto empresarial.</i>
					</p>
					<div class="defaultImage">
						<div class="defaultImageContent" id="unidadCompetencia"></div>
					</div>
					<span class="referenciaIcono clgreyl1 border1 clbktx">Retomado de Pixeltrue proveniente de &nbsp; 
					<a href="https://icons8.com/illustrations/illustration/pixeltrue-sleeping" target="_blank">Ouch!</a>
					</span>
				</div>
			</div>
		</div>

		<div id="test-swipe-3" class="tabsContentContainerInfo" style="display: none;">
			<div class="shadow4 border1 clw">
				<div class="textoTitulo titleContainer white-text colorCardTitleContent border1Sup">Metodología</div>
				<div class="cardDesign clw border1Inf">
					<p class="clbktx textoDinamicoIdentificador textoReadingH2">
						<i class="keyWord">El uso de este RDD de la unidad 3: la empresa y su entorno</i>, te permitirá <i class="keyWord">estudiar los contenidos</i> en la secuencia indicada en el programa de estudios de <i class="keyWord">la Unidad de aprendizaje Finanzas empresariales</i>. Para abordar dicha unidad temática se requieren seis horas de teoría y dos horas de <i class="keyWord">aprendizaje autónomo</i>. 
						Este RDD se construyó con la intención de <i class="keyWord">apoyarte en tu proceso de aprendizaje tanto dentro como fuera del aula</i>; está disponible en el momento que lo requieras consultar, adaptándose a tu propio ritmo de aprendizaje, con los que se pretende <i class="keyWord">facilitar el aprendizaje autónomo</i> con miras a lograr los objetivos de aprendizaje de esta unidad temática.
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
				<div class="textoTitulo titleContainer white-text colorCardTitleContent border1Sup">Evaluación de los aprendizajes</div>
				<div class="cardDesign clw border1Inf">
					<p class="clbktx textoDinamicoIdentificador textoReadingH2">
						La evaluación de los aprendizajes de esta unidad temática se llevará a cabo como se muestra a continuación:
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
									<td class="cellCenter textoStandarTable" rowspan="4">Unidad 3</td>
									<td class="cellCenter textoStandarTable">Actividad 3.1</td>
									<td class="textoStandarTable">Cuestionario en formato Tangram</td>
									<td class="cellCenter textoStandarTable">Sin valor para la evaluación</td>
								</tr>
								<tr>
									<td class="cellCenter textoStandarTable">Actividad 3.2</td>
									<td class="textoStandarTable">Infografía</td>
									<td class="cellCenter textoStandarTable">10 puntos</td>
								</tr>
								<tr>
									<td class="cellCenter textoStandarTable">Actividad 3.3</td>
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

					<ul class="browser-default">
						<li class="clbktx textoDinamicoIdentificador textoReadingH2">Conexión a internet</li>
						<li class="clbktx textoDinamicoIdentificador textoReadingH2">Navegador web compatible (Chrome, Firefox, Safari, Edge)</li>
						<li class="clbktx textoDinamicoIdentificador textoReadingH2">Dispositivo con pantalla de al menos 800x600 píxeles</li>
						<li class="clbktx textoDinamicoIdentificador textoReadingH2">JavaScript habilitado en el navegador</li>
					</ul>

					<div class="defaultImage">
						<div class="defaultImageContent" id="requerimientos"></div>
					</div>
					<span class="referenciaIcono clgreyl1 border1 clbktx">Retomado de Pixeltrue proveniente de &nbsp;
						<a href="https://icons8.com/illustrations/illustration/pixeltrue-settings" target="_blank">Ouch!</a>
					</span>
				</div>
			</div>
		</div>
	</div>
</div>`,
	},
	unidadCompetencia: {
		id: "unidadCompetencia",
		titulo: "Unidad de competencia",
		icono: "extension",
		contenido: `
<br>
<div id="test-swipe-2" class="tabsContentContainerInfo">
    <div class="shadow4 border1 clw">
        <div class="textoTitulo titleContainer white-text colorCardTitleContent border1Sup">Unidad de competencia</div>
        <div class="cardDesign clw border1Inf">
            <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                Reconoce el <i class="keyWord">papel de las finanzas</i> a partir del <i class="keyWord">contexto
                    empresarial.</i>
            </p>

            <div class="defaultImage">
                <div class="defaultImageContent" id="unidadCompetencia"></div>
            </div>
            <span class="referenciaIcono clgreyl1 border1 clbktx">Retomado de Pixeltrue proveniente de &nbsp;
                <a href="https://icons8.com/illustrations/illustration/pixeltrue-sleeping" target="_blank">Ouch!</a>
            </span>
        </div>
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
                            <td class="cellCenter textoStandarTable">
                            </td>
                            <td class="textoStandarTable"></td>
                            <td class="cellCenter textoStandarTable"></td>
                        </tr>
                        <tr>
                            <td class="cellCenter textoStandarTable"></td>
                            <td class="textoStandarTable"></td>
                            <td class="cellCenter textoStandarTable">10 puntos</td>
                        </tr>
                        <tr>
                            <td class="cellCenter textoStandarTable"></td>
                            <td class="textoStandarTable"></td>
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
		icono: "local_library",
		contenido: `
<div class="shadow4 border1 clw">
    <div class="textoTitulo titleContainer white-text colorCardTitleContent border1Sup">Introducción</div>
    <div class="cardDesign clw border1Inf">
        <!--Card con un ejemplo-->
        <p class="clbktx textoDinamicoIdentificador textoReadingH2">
            <i class="keyWord">Las empresas son la base del sistema económico</i>, debido a que se encargan de <i
                class="keyWord">la producción, comercialización y distribución de bienes</i> que satisfacen las
            múltiples necesidades la sociedad. Más allá de su infraestructura, tamaño y giro <i class="keyWord">toda
                empresa debe constituirse de acuerdo con la legislación vigente</i> que le otorga una personalidad
            jurídica propia e independiente de sus dueños; para su funcionamiento <i class="keyWord">requiere de
                recursos financieros, tecnológicos y humanos</i> los cuales deben ser administrados eficientemente para
            cumplir con sus objetivos.
        </p>

        <blockquote class="clgreyl1 clgreytx textoDinamicoIdentificador textoReadingH2">
            Las empresas <i class="keyWord">juegan un papel fundamental en cualquier economía;</i> sin embargo, son
            afectadas por diferentes <i class="keyWord">factores presentes en el micro y macroentorno</i> que las
            obligan a tomar decisiones con el propósito de permanecer vigentes en el mercado. Por otro lado, <i
                class="keyWord">una buena o mala administración de los recursos se verá reflejada en las finanzas,</i>
            que se encargan de la distribución y el uso que se le da al dinero.
        </blockquote>

        <p class="clbktx textoDinamicoIdentificador textoReadingH2">
            Los contenidos abordados en este RDD están dirigidos a lograr la siguiente unidad de competencia o
            aprendizajes esperados de la unidad 1: <i class="keyWord">reconoce el papel de las finanzas a partir del
                contexto empresarial</i>, por lo que su construcción fue totalmente intencionada en aras de <i
                class="keyWord">favorecer y apoyarte en tu proceso de aprendizaje</i>.
        </p>

        <div class="defaultImage">
            <div class="defaultImageContent" id="intro"></div>
        </div>
        <span class="referenciaIcono clgreyl1 border1 clbktx">Retomado de Pixeltrue proveniente de &nbsp;
            <a href="https://icons8.com/illustrations/illustration/pixeltrue-vision" target="_blank">Ouch!</a>
        </span>
    </div>
</div>`,
	},
	planGestion: {
		id: "planGestion",
		titulo: "3.1 Plan de gestión para la dirección del proyecto",
		icono: "local_library",
		contenido: `<div class="shadow4 border1 clw">
    <div class="textoTitulo titleContainer white-text colorCardTitleContent border1Sup">3.1 Plan de gestión para la
        dirección del proyecto</div>
    <div class="cardDesign clw border1Inf">
        <p class="clbktx textoDinamicoIdentificador textoReadingH2">
            El Plan de gestión para la dirección del proyecto se constituye por la documentación necesaria que se
            concentra en un documento único.
            Este documento debe estar formalmente documentado y aprobado, especificando cómo se va a dirigir la
            ejecución, el monitoreo, el
            control y el cierre del proyecto. Por lo general es elaborado por el gerente del proyecto en conjunto con su
            equipo de trabajo.
        </p>

    </div>
</div>`,
	},
	gestionIntegracion: {
		id: "gestionIntegracion",
		titulo: "3.1.1 Gestión de integración del proyecto",
		icono: "local_library",
		contenido: `<div class="shadow4 border1 clw">

    <div class="textoTitulo titleContainer white-text colorCardTitleContent border1Sup">3.1.1 Gestión de integración del
        proyecto</div>
    <div class="cardDesign clw border1Inf">
        <p class="clbktx textoDinamicoIdentificador textoReadingH2">

            La institución mundial más importante dedicada a la Dirección de Proyectos es el Project Management
            Institute, (PMI), dicha institución
            se encarga de publicar y actualizar el Project Management Body of Knowledge, más conocida como la guía
            PMBOK, esta guía se considera el
            estándar más influyente que se aplica a la dirección de proyectos, considerando lo anterior el desarrollo de
            los temas de esta unidad
            temática se basa en la Guía PMBOK. <br><br>

            La Guía PMBOK, considera cinco grupos de proceso para la dirección de proyectos, así como diez áreas de
            conocimiento. Deberás
            tener en cuenta que los procesos son aquellas actividades y tareas que deberás seguir para dirigir tu
            proyecto.
            <br>
        </p>
        <div class="cardDesign clgreyl2 border1">
            <table class="striped highlight responsive-table clw border1 shadow2">
                <thead>
                    <tr>

                        <th class="clbktx textoStandarTable"></th>
                        <th class="clbktx textoStandarTable">Proceso</th>
                        <th class="clbktx textoStandarTable">Actividades</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td class="cellCenter textoStandarTable">1</td>
                        <td class="textoStandarTable">Inicio</td>
                        <td class="textoStandarTable">
                            Se identifica la problemática a resolver, se selecciona la solución, se establecen los
                            objetivos, se identifican
                            a los principales interesados, se nombra al director del proyecto y se comunica formalmente
                            el inicio del proyecto.

                        </td>
                    </tr>
                    <tr>
                        <td class="cellCenter textoStandarTable">2</td>
                        <td class="textoStandarTable">Planificación</td>
                        <td class="textoStandarTable">
                            Se identifican las actividades y tareas para definir el alcance del proyecto, se refinan los
                            objetivos, se planifica
                            el cronograma de actividades, se asignan los recursos, se elabora el presupuesto, se nombra
                            al equipo de proyecto y
                            se desarrolla el Plan para la dirección del proyecto.
                        </td>
                    </tr>
                    <tr>
                        <td class="cellCenter textoStandarTable">3</td>
                        <td class="textoStandarTable">Ejecución</td>
                        <td class="textoStandarTable">
                            Se selecciona una metodología, se recopilan requisitos, se elige o crea una arquitectura, se
                            desarrolla un diseño, se
                            crea un modelo, se crea el código, se realizan pruebas, se lleva acabo el despliegue y se
                            establecen las bases para
                            el mantenimiento y soporte.
                        </td>
                    </tr>
                    <tr>
                        <td class="cellCenter textoStandarTable">4</td>
                        <td class="textoStandarTable">Control</td>
                        <td class="textoStandarTable">
                            Se compara el desempeño real con el planificado, se evalúan las solicitudes de cambio para
                            su aprobación o rechazo y se
                            informa a los interesados.
                        </td>
                    </tr>
                    <tr>
                        <td class="cellCenter textoStandarTable">5</td>
                        <td class="textoStandarTable">Cierre</td>
                        <td class="textoStandarTable">
                            La aceptación de los entregables se formaliza con el cliente, se archiva la documentación y
                            se completan las lecciones aprendidas.
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <br>
        <p class="clbktx textoDinamicoIdentificador textoReadingH2">
            Como se mencionó anteriormente los procesos te van a indicar cómo es que debes dirigir tu proyecto, ahora
            toca el turno de ver qué
            conocimientos deberás tener para hacerlo de una manera eficiente.<br><br>
            Se dice que para dirigir un proyecto, es necesario un equipo multidisciplinario debido a que se deben
            dominar conocimientos y habilidades
            de diferentes especialidades. La guía PMBOK jerarquiza estas habilidades en una categoría a la que denomina
            Áreas de Conocimiento, la cual
            esta integrada por diez áreas. <br><br>
            Esto no quiere decir que tu debes ser un experto en cada una de las diez áreas, sino que cuentes con
            conocimiento suficientes de cada una
            de ellas.<br><br>
            Las diez áreas de conocimiento se deben ver como un todo relacionado. Hay áreas como lo es el área de
            integración, comunicación o riesgos
            que son áreas transversales, y van a estar estrechamente relacionadas con el resto de las áreas.<br><br>
            Actividades que se realizan en cada una de las diez áreas del conocimiento <br><br>
        </p>
        <div class="cardDesign clgreyl2 border1">
            <table class="striped highlight responsive-table clw border1 shadow2">
                <thead>
                    <tr>

                        <th class="clbktx textoStandarTable"></th>
                        <th class="clbktx textoStandarTable">Área</th>
                        <th class="clbktx textoStandarTable">Actividades a realizar</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td class="cellCenter textoStandarTable">1</td>
                        <td class="textoStandarTable">Gestión de la integración</td>
                        <td class="textoStandarTable">
                            Identificar, definir, combinar, unificar y coordinar los diversos procesos y actividades de
                            dirección del proyecto.
                        </td>
                    </tr>
                    <tr>
                        <td class="cellCenter textoStandarTable">2</td>
                        <td class="textoStandarTable">Gestión del alcance</td>
                        <td class="textoStandarTable">
                            Garantizar que el proyecto incluye todo el trabajo requerido (y únicamente el trabajo
                            requerido) para completarlo con éxito.
                        </td>
                    </tr>
                    <tr>
                        <td class="cellCenter textoStandarTable">3</td>
                        <td class="textoStandarTable">Gestión del tiempo</td>
                        <td class="textoStandarTable">
                            Gestionar que el proyecto termine dentro del plazo previsto.
                        </td>
                    </tr>
                    <tr>
                        <td class="cellCenter textoStandarTable">4</td>
                        <td class="textoStandarTable">Gestión de los costos</td>
                        <td class="textoStandarTable">
                            Planificar, estimar, presupuestar, financiar, obtener financiación, y controlar los costos
                            de modo que se complete el proyecto
                            dentro del presupuesto aprobado
                        </td>
                    </tr>
                    <tr>
                        <td class="cellCenter textoStandarTable">5</td>
                        <td class="textoStandarTable">Gestión de la calidad</td>
                        <td class="textoStandarTable">
                            Planificar, estimar, presupuestar, financiar, obtener financiación y controlar los costes de
                            modo que se complete el proyecto
                            dentro del presupuesto aprobado
                        </td>
                    </tr>
                    <tr>
                        <td class="cellCenter textoStandarTable">6</td>
                        <td class="textoStandarTable">Gestión de los recursos</td>
                        <td class="textoStandarTable">
                            Garantizar la disponibilidad de los recursos necesarios para el director y el equipo de
                            proyecto, en el momento y
                            lugar adecuados.
                        </td>
                    </tr>
                    <tr>
                        <td class="cellCenter textoStandarTable">7</td>
                        <td class="textoStandarTable">Gestión de la comunicación</td>
                        <td class="textoStandarTable">
                            Garantizar la adecuada recopilación, creación, distribución, almacenamiento, recuperación,
                            gestión, control, y disposición
                            final de la información del proyecto.
                        </td>
                    </tr>
                    <tr>
                        <td class="cellCenter textoStandarTable">8</td>
                        <td class="textoStandarTable">Gestión del riesgo</td>
                        <td class="textoStandarTable">
                            Identificar, analizar, planificar las respuestas y controlar las incertidumbres del
                            proyecto.
                        </td>
                    </tr>
                    <tr>
                        <td class="cellCenter textoStandarTable">9</td>
                        <td class="textoStandarTable">Gestión de las adquisiciones</td>
                        <td class="textoStandarTable">
                            Comprar o adquirir los productos o servicios requeridos por terceros, ajenos a la
                            organización.
                        </td>
                    </tr>
                    <tr>
                        <td class="cellCenter textoStandarTable">10</td>
                        <td class="textoStandarTable">Gestión de los interesados</td>
                        <td class="textoStandarTable">
                            Identificar a todas las personas u organizaciones impactadas por el proyecto, analizar sus
                            expectativas e impacto, y crear estrategias para lograr
                            su participación en el proyecto.
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>




    </div><br>



</div>
</div>
</div>`,
	},
};

// Exportar el objeto de contenidos para que pueda ser importado por unidad3.js
export { contenidosUnidad };
