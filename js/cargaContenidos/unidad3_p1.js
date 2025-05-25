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
				<li class="tab clgreyl2" id="a6tutorialButton"><a class="clbktx active" href="#test-swipe-1">Introducción</a></li>
				<li class="tab clgreyl2" id="a7tutorialButton"><a class="clbktx" href="#test-swipe-2">Unidad de competencia</a></li>
				<li class="tab clgreyl2" id="a9tutorialButton"><a class="clbktx" href="#test-swipe-4">Evaluación de los aprendizajes</a></li>
			</ul>
		</div>
		
		<div id="test-swipe-1" class="tabsContentContainerInfo">
			<div class="shadow4 border1 clw">
				<div class="textoTitulo titleContainer white-text colorCardTitleContent border1Sup">Introducción</div>
				<div class="cardDesign clw border1Inf">
					<p class="clbktx textoDinamicoIdentificador textoReadingH2">
					La gestión técnica y ambiental es clave para el desarrollo eficiente y sostenible de tu proyecto. Toma en cuenta que la correcta planificación y ejecución de los aspectos técnicos posibilitan que los recursos, procesos y tecnologías se utilicen de manera adecuada, en total alineación al cumpliendo con los objetivos establecidos.
					</p>
					<p class="clbktx textoDinamicoIdentificador textoReadingH2">
					Por otro lado, la gestión ambiental es fundamental para minimizar el impacto ecológico del proyecto, asegurando el cumplimiento de la normatividad ambiental vigente y promoviendo prácticas responsables con el entorno. 
					</p>
					<p class="clbktx textoDinamicoIdentificador textoReadingH2">
					La gestión técnica y ambiental permiten no solo el buen desarrollo del proyecto, sino también generar un impacto positivo en la sociedad y en el medio ambiente.
					</p>
					<p class="clbktx textoDinamicoIdentificador textoReadingH2">
					Por su importancia, en esta unidad temática podrás estudiar aspectos sobre la gestión técnica y ambiental; también conocerás algunas estrategias y herramientas para su implementación efectiva en cualquier tipo de proyecto, pero sobre todo en los proyectos informáticos.
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
						Formula la estructura técnica y ambiental del proyecto con base en su metodología, plan desarrollo y sostenibilidad.
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
									<td class="cellCenter textoStandarTable" rowspan="3">Unidad III</td>
									<td class="cellCenter textoStandarTable">Actividad 3</td>
									<td class="textoStandarTable">Plan de gestión para la dirección</td>
									<td class="cellCenter textoStandarTable">10%</td>
								</tr>
								<tr>
									<td class="cellCenter textoStandarTable">Actividad 4</td>
									<td class="textoStandarTable">Plan de desarrollo del software<br>Documentación (reporte)<br>y<br>Sistema</td>
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
            Formula la estructura técnica y ambiental del proyecto con base en su metodología, plan desarrollo y sostenibilidad.
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
                            <td class="cellCenter textoStandarTable" rowspan="3">Unidad III</td>
                            <td class="cellCenter textoStandarTable">Actividad 3</td>
                            <td class="textoStandarTable">Plan de gestión para la dirección</td>
                            <td class="cellCenter textoStandarTable">10%</td>
                        </tr>
                        <tr>
                            <td class="cellCenter textoStandarTable">Actividad 4</td>
                            <td class="textoStandarTable">Plan de desarrollo del software<br>Documentación (reporte)<br>y<br>Sistema</td>
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
        <p class="clbktx textoDinamicoIdentificador textoReadingH2">
					La gestión técnica y ambiental es clave para el desarrollo eficiente y sostenible de tu proyecto. Toma en cuenta que la correcta planificación y ejecución de los aspectos técnicos posibilitan que los recursos, procesos y tecnologías se utilicen de manera adecuada, en total alineación al cumpliendo con los objetivos establecidos.
					</p>
					<p class="clbktx textoDinamicoIdentificador textoReadingH2">
					Por otro lado, la gestión ambiental es fundamental para minimizar el impacto ecológico del proyecto, asegurando el cumplimiento de la normatividad ambiental vigente y promoviendo prácticas responsables con el entorno. 
					</p>
					<p class="clbktx textoDinamicoIdentificador textoReadingH2">
					La gestión técnica y ambiental permiten no solo el buen desarrollo del proyecto, sino también generar un impacto positivo en la sociedad y en el medio ambiente.
					</p>
					<p class="clbktx textoDinamicoIdentificador textoReadingH2">
					Por su importancia, en esta unidad temática podrás estudiar aspectos sobre la gestión técnica y ambiental; también conocerás algunas estrategias y herramientas para su implementación efectiva en cualquier tipo de proyecto, pero sobre todo en los proyectos informáticos.
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
