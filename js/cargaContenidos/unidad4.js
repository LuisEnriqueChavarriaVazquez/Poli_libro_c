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
                    Estimados estudiantes que cursan la unidad de aprendizaje Formulación y evaluación de proyectos informáticos, que se imparte en la
                    <i class="keyWord">Escuela Superior de Cómputo (ESCOM) del Instituto Politécnico Nacional (IPN)</i>, reciban la mejor de las
                    bienvenidas a este <i class="keyWord">recurso didáctico digital (RDD) de la unidad temática 4: Gestión del presupuesto del proyecto</i>.
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
                        Gestiona el <i class="keyWord">presupuesto del proyecto</i> a partir del <i class="keyWord">análisis de costos y recursos</i> necesarios.
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
                        <i class="keyWord">El uso de este RDD de la unidad 4: Gestión del presupuesto del proyecto</i>, te permitirá <i class="keyWord">estudiar los contenidos</i> en la secuencia indicada en el programa de estudios de <i class="keyWord">la Unidad de aprendizaje Formulación y evaluación de proyectos informáticos</i>. 
                    <p class="textoStandar">La metodología de esta unidad se basa en el aprendizaje práctico y la aplicación de conceptos en casos reales.</p>
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
                                    <td class="cellCenter textoStandarTable" rowspan="2">Unidad IV<br>y<br>Unidad V</td>
                                    <td class="cellCenter textoStandarTable">Actividad 5</td>
                                    <td class="textoStandarTable">Los presupuestos y la evaluación financiera del proyecto</td>
                                    <td class="cellCenter textoStandarTable">5%</td>
                                </tr>
                                <tr>
                                    <td class="cellCenter textoStandarTable" colspan="2">Total</td>
                                    <td class="cellCenter textoStandarTable">5%</td>
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

        <div id="test-swipe-5" class="tabsContentContainerInfo">
            <div class="shadow4 border1 clw">
                <div class="textoTitulo titleContainer white-text colorCardTitleContent border1Sup">Requerimientos</div>
                <div class="cardDesign clw border1Inf">
                    <p class="textoStandar">Para aprovechar al máximo esta unidad, es necesario tener conocimientos básicos de gestión de proyectos y contabilidad.</p>
        </div>
    </div>
</div>
`
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
            Formula los presupuestos requeridos en el proyecto con base en la inversión, ingresos, egresos y ventas.
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
        type: "contenido",
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
                            <td class="cellCenter textoStandarTable" rowspan="2">Unidad IV<br>y<br>Unidad V</td>
                            <td class="cellCenter textoStandarTable">Actividad 5</td>
                            <td class="textoStandarTable">Los presupuestos y la evaluación financiera del proyecto</td>
                            <td class="cellCenter textoStandarTable">5%</td>
                        </tr>
                        <tr>
                            <td class="cellCenter textoStandarTable" colspan="2">Total</td>
                            <td class="cellCenter textoStandarTable">5%</td>
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
   `
    },
    unidad4_1_presupuesto_inversion: {
        id: "unidad4_1_presupuesto_inversion",
        titulo: "4.1 Presupuesto de inversión",
        type: "contenido",
        contenido: `
    <div class="shadow4 border1 clw">
          <div class="textoTitulo titleContainer white-text colorCardTitleContent border1Sup">4.1 Presupuesto de inversión </div>
          <div class="cardDesign clw border1Inf">
            <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                Previo a la elaboración del presupuesto de inversión es medular que definas el <i class="keyWord">alcance del proyecto</i>; es decir, debes tener muy claros los requisitos, funciones, características, 
                así como los resultados esperados del sistema o aplicación que desarrollarás y, con base en esto deberás realizar una planificación detallada de los activos, de los costos y gastos 
                asociados con el arranque del proyecto.<br><br>
                En el presupuesto de inversión se incluyen:

            </p><br>
            <div class="shadow2 border1 clgreyl1">
                <div class="textoTitulo titleContainer clbktx clgreyl2 border1Sup">a.	Estimación de costos de mobiliario y equipo de oficina.</div>
                <div class="cardDesign clgreyl1 border1Inf">
                    <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                        Actualmente existe la opción de rentar oficinas equipadas; si no eliges dicha opción, haz una relación del mobiliario y equipo de oficina (escritorios, sillas, mesas para reuniones, 
                        archiveros, etc.) que necesitas para desarrollar tu proyecto, así como su costo y a quién se lo comprarás (proveedores). 
                    </p>
                </div>
            </div><br>
            <div class="shadow2 border1 clgreyl1">
                <div class="textoTitulo titleContainer clbktx clgreyl2 border1Sup">b.	Estimación de costos de recursos humanos.</div>
                <div class="cardDesign clgreyl1 border1Inf">
                    <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                        Deberás hacer el cálculo de los costos asociados con el personal necesario (desarrolladores, diseñadores, testers, etc). para el desarrollo del proyecto. Por lo que tendrás que considerar
                         los salarios, beneficios, impuestos, capacitación, entre otros, por el tiempo que dure el proyecto.
                    </p>
                </div>
            </div><br>
            <div class="shadow2 border1 clgreyl1">
                <div class="textoTitulo titleContainer clbktx clgreyl2 border1Sup">c.	Estimación de costos de hardware y software.</div>
                <div class="cardDesign clgreyl1 border1Inf">
                    <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                        Deberás determinar la cantidad de dinero necesario para la adquisición de hardware y software que el proyecto requiere. Entre los recursos que tienes que considerar se encuentran: 
                        servidores, computadoras, licencias de software, herramientas de desarrollo, etc.
                    </p>
                </div>
            </div><br>
            <div class="shadow2 border1 clgreyl1">
                <div class="textoTitulo titleContainer clbktx clgreyl2 border1Sup">d.	Estimación de costos de servicios externos.</div>
                <div class="cardDesign clgreyl1 border1Inf">
                    <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                        Si tu proyecto lo requiere, deberás calcular los costos de servicios externos como consultoría, entrenamiento, soporte técnico, servicios de nube, entre otros.
                    </p>
                </div>
            </div><br>
            <div class="shadow2 border1 clgreyl1">
                <div class="textoTitulo titleContainer clbktx clgreyl2 border1Sup">e.	Estimación de costos de infraestructura y servicios públicos.</div>
                <div class="cardDesign clgreyl1 border1Inf">
                    <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                        Considera los costos asociados con la infraestructura y los servicios públicos necesarios para el desarrollo del proyecto, como el espacio de oficina, electricidad, 
                        conexión a internet, entre otros.
                    </p>
                </div>
            </div><br>
            <div class="shadow2 border1 clgreyl1">
                <div class="textoTitulo titleContainer clbktx clgreyl2 border1Sup">f.	Estimación de gastos financieros.</div>
                <div class="cardDesign clgreyl1 border1Inf">
                    <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                        Si consigues financiamiento para tu proyecto, estima la cantidad de dinero que pagarás de intereses derivados del financiamiento.
                    </p>
                </div>
            </div><br>
            <div class="shadow2 border1 clgreyl1">
                <div class="textoTitulo titleContainer clbktx clgreyl2 border1Sup">g.	Estimación de costos de marketing y promoción.</div>
                <div class="cardDesign clgreyl1 border1Inf">
                    <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                        Deberás considerar los gastos relacionados con la promoción del proyecto y la adquisición de clientes, así como los gastos en publicidad, participación en eventos y actividades de marketing.
                    </p>
                </div>
            </div><br>
            <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                <i class="keyWord">No olvides:</i>
            </p>
            <ul class="browser-default clbktx textoDinamicoIdentificador textoReadingH2 textBoldOwn" >
                <li>Incluir un porcentaje adicional del presupuesto para <i class="keyWord">contingencias</i> imprevistas o cambios en los requisitos del proyecto. </li>
                <li>Realizar un <i class="keyWord">cronograma de gastos</i> que muestre cuándo se desembolsarán los costos y gastos a lo largo del tiempo. Por ejemplo, algunos costos pueden ser iniciales (desarrollo) y 
                    otros recurrentes (mantenimiento).
                </li>
                <li><i class="keyWord">Revisar y ajustar</i>, revisa el presupuesto cuidadosamente para asegurarte de que todos los costos relevantes hayan sido considerados y realiza ajustes en caso de ser necesario.</li>
                <li><i class="keyWord">Documentar y presentar</i>, documenta el presupuesto de inversión en un formato claro y fácil de entender. Presenta el presupuesto a las partes interesadas y obtén su aprobación.</li>
            </ul>
            <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                El presupuesto de inversión debe ser flexible y estar sujeto a cambios a medida que el proyecto se desarrolla. Adicionalmente, es fundamental que monitorees y lleves un control de los gastos 
                durante todas las etapas para mantenerte dentro del presupuesto. Toma en cuenta que cada proyecto es único, por lo que el presupuesto de inversión debe ajustarse según las necesidades 
                específicas del proyecto.
            </p>


          </div>
  </div>`,
    },
    unidad4_1_1_inversion_propia: {
        id: "unidad4_1_1_inversion_propia",
        titulo: "4.1.1 Inversión propia",
        type: "contenido",
        contenido: `
    <div class="shadow4 border1 clw">
        <div class="textoTitulo titleContainer white-text colorCardTitleContent border1Sup">4.1.1 Inversión propia</div>
        <div class="cardDesign clw border1Inf">
            <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                La inversión propia es cuando financias el proyecto con recursos propios, lo que significa que estás dispuesto a utilizar tu propio dinero en lugar de buscar inversionistas o un financiamiento externo. Por lo que son importantes las siguientes consideraciones:
            </p>
            <div class="shadow2 border1 clgreyl1">
                <div class="textoTitulo titleContainer clbktx clgreyl2 border1Sup">1. Evalúa tus recursos financieros</div>
                <div class="cardDesign clgreyl1 border1Inf">
                    <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                        Antes de comprometer tu inversión en el proyecto, es importante evaluar tus recursos financieros disponibles. Esto incluye fondos en efectivo, ahorros, inversiones líquidas u otros activos que puedas convertir en efectivo para financiar el proyecto.
                    </p>
                </div>
            </div><br>
            <div class="shadow2 border1 clgreyl1">
                <div class="textoTitulo titleContainer clbktx clgreyl2 border1Sup">2. Establece un presupuesto claro</div>
                <div class="cardDesign clgreyl1 border1Inf">
                    <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                        Es fundamental crear un presupuesto detallado que incluya todos los costos asociados con el proyecto. Asegúrate de considerar todos los aspectos, desde el presupuesto de inversión hasta los costos operativos y el presupuesto de ingresos.
                    </p>
                </div>
            </div><br>
            <div class="shadow2 border1 clgreyl1">
                <div class="textoTitulo titleContainer clbktx clgreyl2 border1Sup">3. Mantén un fondo de reserva</div>
                <div class="cardDesign clgreyl1 border1Inf">
                    <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                        Es importante tener un fondo de reserva para hacer frente a gastos imprevistos o emergencias durante el desarrollo del proyecto. Este fondo puede ayudarte a evitar contratiempos financieros y mantener el proyecto en marcha.
                    </p>
                </div>
            </div><br>
            <div class="shadow2 border1 clgreyl1">
                <div class="textoTitulo titleContainer clbktx clgreyl2 border1Sup">4. Controla los costos</div>
                <div class="cardDesign clgreyl1 border1Inf">
                    <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                        Durante todas las etapas del proyecto, es esencial controlar los costos y ajustar el presupuesto según sea necesario, sin demeritar la calidad. Busca formas de reducir gastos o realinear recursos financieros para maximizar el valor del proyecto.
                    </p>
                </div>
            </div><br>
            <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                Recuerda que invertir tus propios recursos en un proyecto puede ser una estrategia valiosa, pero también conlleva riesgos. Asegúrate de realizar una planificación cuidadosa y de mantener una gestión financiera sólida a lo largo del proyecto.
            </p>
        </div>
    </div>
    `
    },
    unidad4_1_2_inversion_financiada: {
        id: "unidad4_1_2_inversion_financiada",
        titulo: "4.1.2 Inversión financiada",
        type: "contenido",
        contenido: `
    <div class="shadow4 border1 clw">
        <div class="textoTitulo titleContainer white-text colorCardTitleContent border1Sup">4.1.2 Inversión financiada</div>
        <div class="cardDesign clw border1Inf">
            <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                Si tu inversión será financiada por fuentes externas, considera lo siguiente:
            </p>
            <div class="shadow2 border1 clgreyl1">
                <div class="textoTitulo titleContainer clbktx clgreyl2 border1Sup">1. Identifica fuentes de financiamiento</div>
                <div class="cardDesign clgreyl1 border1Inf">
                    <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                        Investiga y evalúa diversas fuentes de financiamiento disponibles para proyectos informáticos. Esto puede incluir préstamos bancarios, inversores ángeles, capital de riesgo, subvenciones gubernamentales, crowdfunding, entre otros.
                    </p>
                </div>
            </div><br>
            <div class="shadow2 border1 clgreyl1">
                <div class="textoTitulo titleContainer clbktx clgreyl2 border1Sup">2. Prepara un plan de negocios sólido</div>
                <div class="cardDesign clgreyl1 border1Inf">
                    <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                        Antes de buscar financiamiento, es fundamental preparar un plan de negocios detallado que describa el proyecto, sus objetivos, estrategias, análisis de mercado, proyecciones financieras y cómo se utilizará el financiamiento solicitado.
                    </p>
                </div>
            </div><br>
            <div class="shadow2 border1 clgreyl1">
                <div class="textoTitulo titleContainer clbktx clgreyl2 border1Sup">3. Calcula la cantidad de financiamiento necesaria</div>
                <div class="cardDesign clgreyl1 border1Inf">
                    <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                        Estima cuidadosamente la cantidad de financiamiento que necesitarás para llevar a cabo el proyecto informático. Asegúrate de incluir todos los costos relevantes para evitar sorpresas más adelante.
                    </p>
                </div>
            </div><br>
            <div class="shadow2 border1 clgreyl1">
                <div class="textoTitulo titleContainer clbktx clgreyl2 border1Sup">4. Evalúa diferentes opciones de financiamiento</div>
                <div class="cardDesign clgreyl1 border1Inf">
                    <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                        Evalúa las diferentes opciones de financiamiento disponibles y elige la que mejor se adapte a tus objetivos y necesidades. Considera factores como tasas de interés, plazos de pago y condiciones de préstamo.
                    </p>
                </div>
            </div><br>
            <div class="shadow2 border1 clgreyl1">
                <div class="textoTitulo titleContainer clbktx clgreyl2 border1Sup">5. Mantén a los inversionistas informados</div>
                <div class="cardDesign clgreyl1 border1Inf">
                    <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                        Si has obtenido financiamiento a través de inversores, asegúrate de mantenerlos informados sobre el progreso del proyecto y los resultados financieros. Esto implica una comunicación transparente, informes periódicos y mantener una relación abierta y colaborativa.
                    </p>
                </div>
            </div><br>
            <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                Recuerda que cada fuente de financiamiento tiene sus propias ventajas y desventajas, por lo que es importante analizar cuidadosamente tus opciones y tomar decisiones informadas para garantizar el éxito a largo plazo de tu proyecto.
            </p>
        </div>
    </div>
    `
    },
    unidad4_2_presupuestos_egresos: {
        id: "unidad4_2_presupuestos_egresos",
        titulo: "4.2 Presupuestos de egresos",
        type: "contenido",
        contenido: `
    <div class="shadow4 border1 clw">
        <div class="textoTitulo titleContainer white-text colorCardTitleContent border1Sup">4.2 Presupuestos de egresos</div>
        <div class="cardDesign clw border1Inf">
            <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                Un presupuesto de egresos, también conocido como presupuesto de gastos o presupuesto de salida, es un plan financiero que detalla todas las salidas de dinero que se espera tener durante un período de tiempo determinado. Este presupuesto puede ser mensual, trimestral, semestral o anual, dependiendo de tus necesidades. El presupuesto de egresos incluye:
            </p>
            <div class="shadow2 border1 clgreyl1">
                <div class="textoTitulo titleContainer clbktx clgreyl2 border1Sup">1. Gastos fijos</div>
                <div class="cardDesign clgreyl1 border1Inf">
                    <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                        Identifica y lista todos tus gastos fijos, es decir, aquellos que son recurrentes y no dependen de la producción y ventas; por ejemplo, la renta, los sueldos, el pago de servicios públicos, seguros, pagos de intereses, suscripciones, mantenimiento preventivo, etc.
                    </p>
                </div>
            </div><br>
            <div class="shadow2 border1 clgreyl1">
                <div class="textoTitulo titleContainer clbktx clgreyl2 border1Sup">2. Gastos variables</div>
                <div class="cardDesign clgreyl1 border1Inf">
                    <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                        Son aquellos que varían en función de la producción y las ventas. Estos gastos pueden incluir costos de materia prima, comisiones por ventas, y otros gastos relacionados con la producción.
                    </p>
                </div>
            </div><br>
            <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                Recuerda que un presupuesto de egresos es una herramienta poderosa para gestionar tus finanzas de manera efectiva y alcanzar tus objetivos financieros a largo plazo. Revisa y actualiza tu presupuesto regularmente para asegurarte de que siga siendo relevante y se ajuste a tus necesidades.
            </p>
        </div>
    </div>
    `
    },
    unidad4_2_1_costos_desarrollo: {
        id: "unidad4_2_1_costos_desarrollo",
        titulo: "4.2.1 Costos de desarrollo",
        type: "contenido",
        contenido: `
    <div class="shadow4 border1 clw">
        <div class="textoTitulo titleContainer white-text colorCardTitleContent border1Sup">4.2.1 Costos de desarrollo</div>
        <div class="cardDesign clw border1Inf">
            <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                Estos costos comprenden todos los gastos que implica desarrollar el proyecto informático. Algunos de los elementos que podrían considerarse como parte de dicho costo son:
            </p>
            <div class="shadow2 border1 clgreyl1">
                <div class="textoTitulo titleContainer clbktx clgreyl2 border1Sup">1. Recursos humanos</div>
                <div class="cardDesign clgreyl1 border1Inf">
                    <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                        Los salarios y honorarios de los profesionales involucrados en el desarrollo del proyecto son uno de los mayores componentes de los costos. Esto incluye desarrolladores de software, diseñadores de UX/UI, ingenieros de calidad, gerentes de proyecto, entre otros.
                    </p>
                </div>
            </div><br>
            <div class="shadow2 border1 clgreyl1">
                <div class="textoTitulo titleContainer clbktx clgreyl2 border1Sup">2. Herramientas y software</div>
                <div class="cardDesign clgreyl1 border1Inf">
                    <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                        La adquisición de herramientas de desarrollo, entornos de programación, software de diseño, bases de datos y otros recursos tecnológicos necesarios para el desarrollo del proyecto.
                    </p>
                </div>
            </div><br>
            <div class="shadow2 border1 clgreyl1">
                <div class="textoTitulo titleContainer clbktx clgreyl2 border1Sup">3. Equipo y hardware</div>
                <div class="cardDesign clgreyl1 border1Inf">
                    <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                        La compra o alquiler de hardware, como servidores, computadoras, dispositivos móviles, así como cualquier equipo especializado requerido para el desarrollo y las pruebas.
                    </p>
                </div>
            </div><br>
            <div class="shadow2 border1 clgreyl1">
                <div class="textoTitulo titleContainer clbktx clgreyl2 border1Sup">4. Licencias y permisos</div>
                <div class="cardDesign clgreyl1 border1Inf">
                    <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                        Los costos asociados con la obtención de licencias de software, patentes, derechos de autor u otros permisos necesarios para utilizar ciertas tecnologías o implementar ciertas funciones.
                    </p>
                </div>
            </div><br>
            <div class="shadow2 border1 clgreyl1">
                <div class="textoTitulo titleContainer clbktx clgreyl2 border1Sup">5. Capacitación</div>
                <div class="cardDesign clgreyl1 border1Inf">
                    <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                        La formación del personal en nuevas tecnologías, herramientas o metodologías que puedan ser necesarias para el desarrollo del proyecto.
                    </p>
                </div>
            </div><br>
            <div class="shadow2 border1 clgreyl1">
                <div class="textoTitulo titleContainer clbktx clgreyl2 border1Sup">6. Gastos de consultoría externa</div>
                <div class="cardDesign clgreyl1 border1Inf">
                    <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                        Los honorarios pagados a consultores externos o expertos en áreas específicas que puedan ser contratados para asesorar o colaborar en el proyecto.
                    </p>
                </div>
            </div><br>
            <div class="shadow2 border1 clgreyl1">
                <div class="textoTitulo titleContainer clbktx clgreyl2 border1Sup">7. Gastos de viaje y alojamiento</div>
                <div class="cardDesign clgreyl1 border1Inf">
                    <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                        En caso de que el proyecto requiera viajes, especialmente si se trabaja con equipos distribuidos o se necesita interactuar con clientes u otros socios comerciales.
                    </p>
                </div>
            </div><br>
            <div class="shadow2 border1 clgreyl1">
                <div class="textoTitulo titleContainer clbktx clgreyl2 border1Sup">8. Costos de gestión de proyectos</div>
                <div class="cardDesign clgreyl1 border1Inf">
                    <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                        Los gastos asociados con la gestión y coordinación del proyecto, incluidos los honorarios de los gerentes de proyecto y cualquier software de gestión de proyectos utilizado.
                    </p>
                </div>
            </div><br>
            <div class="shadow2 border1 clgreyl1">
                <div class="textoTitulo titleContainer clbktx clgreyl2 border1Sup">9. Pruebas y control de calidad</div>
                <div class="cardDesign clgreyl1 border1Inf">
                    <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                        Los costos relacionados con la realización de pruebas de software, incluidas pruebas de funcionalidad, pruebas de rendimiento, pruebas de seguridad, entre otras, así como cualquier herramienta o servicio utilizado para estas pruebas.
                    </p>
                </div>
            </div><br>
            <div class="shadow2 border1 clgreyl1">
                <div class="textoTitulo titleContainer clbktx clgreyl2 border1Sup">10. Gastos operativos</div>
                <div class="cardDesign clgreyl1 border1Inf">
                    <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                        Otros gastos operativos generales que puedan surgir durante el desarrollo del proyecto, como servicios públicos, alquiler de espacio de oficina, suministros de oficina, etc.
                    </p>
                </div>
            </div><br>
            <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                Es importante tener en cuenta que los costos de desarrollo pueden variar significativamente según la naturaleza y el alcance del proyecto, así como según la ubicación geográfica y las condiciones del mercado. Realiza una estimación detallada y precisa de estos costos al planificar cualquier proyecto informático.
            </p>
        </div>
    </div>
    `
    },
    unidad4_2_2_gastos_venta: {
        id: "unidad4_2_2_gastos_venta",
        titulo: "4.2.2 Gastos de venta",
        type: "contenido",
        contenido: `
    <div class="shadow4 border1 clw">
        <div class="textoTitulo titleContainer white-text colorCardTitleContent border1Sup">4.2.2 Gastos de venta</div>
        <div class="cardDesign clw border1Inf">
            <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                Los gastos de venta son aquellos relacionados con la promoción, comercialización y venta de productos o servicios de una empresa. Algunos ejemplos de gastos de venta comunes son:
            </p>
            <div class="shadow2 border1 clgreyl1">
                <div class="textoTitulo titleContainer clbktx clgreyl2 border1Sup">1. Sueldos y bonificaciones de personal de ventas</div>
                <div class="cardDesign clgreyl1 border1Inf">
                    <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                        Salarios, bonificaciones y compensaciones adicionales para el personal de ventas, incluidos vendedores, representantes de servicio al cliente y gerentes de ventas.
                    </p>
                </div>
            </div><br>
            <div class="shadow2 border1 clgreyl1">
                <div class="textoTitulo titleContainer clbktx clgreyl2 border1Sup">2. Comisiones sobre ventas</div>
                <div class="cardDesign clgreyl1 border1Inf">
                    <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                        Pagos a agentes de ventas, representantes comerciales, distribuidores o intermediarios por la venta de productos o servicios. Esto puede ser una comisión basada en un porcentaje de las ventas o una tarifa fija por transacción.
                    </p>
                </div>
            </div><br>
            <div class="shadow2 border1 clgreyl1">
                <div class="textoTitulo titleContainer clbktx clgreyl2 border1Sup">3. Formación y desarrollo de ventas</div>
                <div class="cardDesign clgreyl1 border1Inf">
                    <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                        Gastos relacionados con la capacitación y el desarrollo profesional del equipo de ventas, incluyendo programas de formación en ventas, cursos de desarrollo de habilidades y eventos de capacitación.
                    </p>
                </div>
            </div><br>
            <div class="shadow2 border1 clgreyl1">
                <div class="textoTitulo titleContainer clbktx clgreyl2 border1Sup">4. Viajes</div>
                <div class="cardDesign clgreyl1 border1Inf">
                    <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                        Gastos de viaje y de hospedaje derivados de la visita a clientes, reuniones de ventas, conferencias y ferias comerciales, así como cualquier otro viático relacionado con la actividad de ventas.
                    </p>
                </div>
            </div><br>
            <div class="shadow2 border1 clgreyl1">
                <div class="textoTitulo titleContainer clbktx clgreyl2 border1Sup">5. Publicidad y marketing</div>
                <div class="cardDesign clgreyl1 border1Inf">
                    <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                        Incluye los costos asociados con la publicidad en medios impresos, digitales, televisión, radio, redes sociales, así como campañas de marketing en línea, publicidad de búsqueda pagada, correo directo, entre otros.
                    </p>
                </div>
            </div><br>
            <div class="shadow2 border1 clgreyl1">
                <div class="textoTitulo titleContainer clbktx clgreyl2 border1Sup">6. Material promocional y diseño gráfico</div>
                <div class="cardDesign clgreyl1 border1Inf">
                    <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                        Costos relacionados con la creación y producción de material promocional, como folletos, catálogos, volantes, carteles, banners, logotipos y material para ferias comerciales.
                    </p>
                </div>
            </div><br>
            <div class="shadow2 border1 clgreyl1">
                <div class="textoTitulo titleContainer clbktx clgreyl2 border1Sup">7. Eventos y patrocinios</div>
                <div class="cardDesign clgreyl1 border1Inf">
                    <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                        Costos asociados con la organización o participación en eventos de la industria, conferencias, seminarios, patrocinios de eventos locales o deportivos, y otras actividades de promoción de la marca.
                    </p>
                </div>
            </div><br>
            <div class="shadow2 border1 clgreyl1">
                <div class="textoTitulo titleContainer clbktx clgreyl2 border1Sup">8. Software y herramientas de ventas</div>
                <div class="cardDesign clgreyl1 border1Inf">
                    <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                        Costos de adquisición y mantenimiento de software de gestión de relaciones con clientes (CRM), herramientas de automatización de marketing, sistemas de seguimiento de ventas, entre otros.
                    </p>
                </div>
            </div><br>
            <div class="shadow2 border1 clgreyl1">
                <div class="textoTitulo titleContainer clbktx clgreyl2 border1Sup">9. Costos de envío y distribución</div>
                <div class="cardDesign clgreyl1 border1Inf">
                    <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                        Gastos de envío, manejo y distribución de productos vendidos, incluyendo costos de embalaje, almacenamiento, transporte y logística.
                    </p>
                </div>
            </div><br>
            <div class="shadow2 border1 clgreyl1">
                <div class="textoTitulo titleContainer clbktx clgreyl2 border1Sup">10. Investigación de mercado y estudios de mercado</div>
                <div class="cardDesign clgreyl1 border1Inf">
                    <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                        Gastos asociados con la investigación de mercado, análisis competitivo, estudios de segmentación de clientes, encuestas de satisfacción del cliente y otras actividades para comprender mejor las necesidades y preferencias del mercado.
                    </p>
                </div>
            </div><br>
            <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                Estos son solo algunos ejemplos de gastos de venta más comunes. Es importante que cada empresa analice sus necesidades específicas y priorice sus inversiones en ventas de acuerdo con sus objetivos comerciales y estrategias de mercado.
            </p>
        </div>
    </div>
    `
    },
    unidad4_2_3_gastos_administracion: {
        id: "unidad4_2_3_gastos_administracion",
        titulo: "4.2.3 Gastos de administración",
        type: "contenido",
        contenido: `
    <div class="shadow4 border1 clw">
        <div class="textoTitulo titleContainer white-text colorCardTitleContent border1Sup">4.2.3 Gastos de administración</div>
        <div class="cardDesign clw border1Inf">
            <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                Los gastos de administración son aquellos relacionados con la gestión y administración general de una empresa. Estos gastos son necesarios para mantener el funcionamiento (operación) diario de la empresa. Algunos ejemplos de gastos de administración son:
            </p>
            <div class="shadow2 border1 clgreyl1">
                <div class="textoTitulo titleContainer clbktx clgreyl2 border1Sup">1. Salarios y compensaciones del personal administrativo</div>
                <div class="cardDesign clgreyl1 border1Inf">
                    <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                        Incluye los sueldos, salarios, bonificaciones y otros beneficios para el personal administrativo, como gerentes, contadores, secretarias, recepcionistas y otros empleados de oficina.
                    </p>
                </div>
            </div><br>
            <div class="shadow2 border1 clgreyl1">
                <div class="textoTitulo titleContainer clbktx clgreyl2 border1Sup">2. Renta y gastos de oficina</div>
                <div class="cardDesign clgreyl1 border1Inf">
                    <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                        Costo de la renta, arrendamiento de equipos de oficina, suministros de oficina, mantenimiento de instalaciones, servicios públicos, limpieza y seguridad.
                    </p>
                </div>
            </div><br>
            <div class="shadow2 border1 clgreyl1">
                <div class="textoTitulo titleContainer clbktx clgreyl2 border1Sup">3. Servicios profesionales</div>
                <div class="cardDesign clgreyl1 border1Inf">
                    <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                        Honorarios pagados a consultores externos, abogados, contadores, auditores, asesores financieros y otros profesionales para servicios de consultoría, asesoramiento legal, contabilidad, auditoría y otros servicios especializados.
                    </p>
                </div>
            </div><br>
            <div class="shadow2 border1 clgreyl1">
                <div class="textoTitulo titleContainer clbktx clgreyl2 border1Sup">4. Tecnología de la información (TI)</div>
                <div class="cardDesign clgreyl1 border1Inf">
                    <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                        Costos relacionados con la infraestructura de tecnología de la información y comunicación, incluyendo software, licencias, depreciación del hardware, mantenimiento de sistemas, servicios de internet, servicios en la nube y otros gastos relacionados con TI.
                    </p>
                </div>
            </div><br>
            <div class="shadow2 border1 clgreyl1">
                <div class="textoTitulo titleContainer clbktx clgreyl2 border1Sup">5. Seguros</div>
                <div class="cardDesign clgreyl1 border1Inf">
                    <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                        Primas de seguros para cubrir riesgos comerciales, como seguros de responsabilidad civil, seguros de propiedad, seguros de gastos médicos y seguros de vida para empleados, y otros tipos de seguros comerciales.
                    </p>
                </div>
            </div><br>
            <div class="shadow2 border1 clgreyl1">
                <div class="textoTitulo titleContainer clbktx clgreyl2 border1Sup">6. Formación y desarrollo profesional</div>
                <div class="cardDesign clgreyl1 border1Inf">
                    <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                        Costos de capacitación y desarrollo profesional para el personal.
                    </p>
                </div>
            </div><br>
            <div class="shadow2 border1 clgreyl1">
                <div class="textoTitulo titleContainer clbktx clgreyl2 border1Sup">7. Comunicaciones</div>
                <div class="cardDesign clgreyl1 border1Inf">
                    <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                        Gastos relacionados con la comunicación interna y externa de la empresa, como telefonía fija, telefonía móvil, servicios de correo electrónico, servicios de mensajería, correo postal y otros servicios de comunicación.
                    </p>
                </div>
            </div><br>
            <div class="shadow2 border1 clgreyl1">
                <div class="textoTitulo titleContainer clbktx clgreyl2 border1Sup">8. Gastos generales y administrativos</div>
                <div class="cardDesign clgreyl1 border1Inf">
                    <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                        Otros gastos generales y administrativos no categorizados anteriormente, como suscripciones a revistas y periódicos, membresías profesionales, cuotas de asociaciones comerciales, gastos de oficina pequeños, entre otros.
                    </p>
                </div>
            </div><br>
            <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                Estos son solo algunos ejemplos de gastos de administración comunes. Es importante que cada empresa analice sus necesidades específicas y priorice sus inversiones en administración de acuerdo con sus objetivos comerciales y estrategias de crecimiento.
            </p>
        </div>
    </div>
    `
    },
    unidad4_2_4_gastos_financieros: {
        id: "unidad4_2_4_gastos_financieros",
        titulo: "4.2.4 Gastos financieros",
        type: "contenido",
        contenido: `
    <div class="shadow4 border1 clw">
    <div class="textoTitulo titleContainer white-text colorCardTitleContent border1Sup">4.2.4 Gastos financieros</div>
    <div class="cardDesign clw border1Inf">
        <p class="clbktx textoDinamicoIdentificador textoReadingH2">
            Los gastos financieros son aquellos relacionados con el financiamiento y la gestión de los recursos financieros de una empresa. Estos gastos pueden surgir de diversas actividades financieras y pueden afectar significativamente la rentabilidad y la salud financiera de la empresa. Algunos ejemplos de gastos financieros son:
        </p>
        <div class="shadow2 border1 clgreyl1">
            <div class="textoTitulo titleContainer clbktx clgreyl2 border1Sup">1. Intereses sobre préstamos y deudas</div>
            <div class="cardDesign clgreyl1 border1Inf">
                <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                    Incluye los intereses pagados sobre préstamos bancarios, líneas de crédito, bonos emitidos u otras formas de financiamiento de deudas.
                </p>
            </div>
        </div><br>
        <div class="shadow2 border1 clgreyl1">
            <div class="textoTitulo titleContainer clbktx clgreyl2 border1Sup">2. Costos de financiamiento</div>
            <div class="cardDesign clgreyl1 border1Inf">
                <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                    Además de los intereses, los costos de financiamiento pueden incluir tarifas bancarias, comisiones por apertura, cargos por procesamiento de préstamos y otros gastos relacionados con la obtención de financiamiento.
                </p>
            </div>
        </div><br>
        <div class="shadow2 border1 clgreyl1">
            <div class="textoTitulo titleContainer clbktx clgreyl2 border1Sup">3. Pérdidas por fluctuaciones cambiarias</div>
            <div class="cardDesign clgreyl1 border1Inf">
                <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                    Si la empresa realiza transacciones en monedas extranjeras, las fluctuaciones en los tipos de cambio pueden generar pérdidas financieras. Estas pérdidas se consideran gastos financieros.
                </p>
            </div>
        </div><br>
        <div class="shadow2 border1 clgreyl1">
            <div class="textoTitulo titleContainer clbktx clgreyl2 border1Sup">4. Gastos de emisión de acciones</div>
            <div class="cardDesign clgreyl1 border1Inf">
                <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                    Si la empresa emite acciones, ya sea en una oferta pública inicial (OPI) o en una colocación privada, los gastos asociados con la emisión de acciones, como honorarios legales, honorarios de banqueros de inversión y otros costos de suscripción, se consideran gastos financieros.
                </p>
            </div>
        </div><br>
        <div class="shadow2 border1 clgreyl1">
            <div class="textoTitulo titleContainer clbktx clgreyl2 border1Sup">5. Comisiones de tarjetas de crédito y débito</div>
            <div class="cardDesign clgreyl1 border1Inf">
                <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                    Si la empresa acepta pagos con tarjeta de crédito o débito, se incurre en comisiones de procesamiento que se consideran gastos financieros.
                </p>
            </div>
        </div><br>
        <div class="shadow2 border1 clgreyl1">
            <div class="textoTitulo titleContainer clbktx clgreyl2 border1Sup">6. Gastos de reestructuración financiera</div>
            <div class="cardDesign clgreyl1 border1Inf">
                <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                    Los gastos relacionados con la reestructuración de la deuda o la financiación, como los honorarios de asesores financieros, los costos legales y otros gastos asociados con la reorganización financiera, se consideran gastos financieros.
                </p>
            </div>
        </div><br>
        <div class="shadow2 border1 clgreyl1">
            <div class="textoTitulo titleContainer clbktx clgreyl2 border1Sup">7. Primas de seguros financieros</div>
            <div class="cardDesign clgreyl1 border1Inf">
                <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                    Los pagos de primas por seguros financieros, como seguros contra riesgos financieros, seguro de crédito, seguro de caución, seguro de inversión, entre otros, se consideran gastos financieros.
                </p>
            </div>
        </div><br>
        <div class="shadow2 border1 clgreyl1">
            <div class="textoTitulo titleContainer clbktx clgreyl2 border1Sup">8. Costos de mantenimiento de cuentas bancarias</div>
            <div class="cardDesign clgreyl1 border1Inf">
                <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                    Tarifas y cargos por servicios bancarios, como mantenimiento de cuentas, transferencias bancarias, cheques de caja, servicios de banca en línea, entre otros, se consideran gastos financieros.
                </p>
            </div>
        </div><br>
        <div class="shadow2 border1 clgreyl1">
            <div class="textoTitulo titleContainer clbktx clgreyl2 border1Sup">9. Gastos de valoración de activos y pasivos</div>
            <div class="cardDesign clgreyl1 border1Inf">
                <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                    Los gastos relacionados con la valoración de activos y pasivos, como tasaciones, valoraciones de inversiones, valoración de propiedades, entre otros, se consideran gastos financieros.
                </p>
            </div>
        </div><br>
        <p class="clbktx textoDinamicoIdentificador textoReadingH2">
            Estos son solo algunos ejemplos de gastos financieros. Es importante para la empresa comprender y controlar dichos gastos para mantener una gestión financiera sólida y optimizar su rentabilidad.
        </p>
    </div>
</div>
`
    },
    unidad4_2_5_otros_gastos: {
        id: "unidad4_2_5_otros_gastos",
        titulo: "4.2.5 Otros gastos a ponderar",
        type: "contenido",
        contenido: `
    <div class="shadow4 border1 clw">
    <div class="textoTitulo titleContainer white-text colorCardTitleContent border1Sup">4.2.5 Otros gastos a ponderar</div>
    <div class="cardDesign clw border1Inf">
        <p class="clbktx textoDinamicoIdentificador textoReadingH2">
            Además de los gastos mencionados anteriormente, la empresa puede incurrir en otros gastos, dependiendo de su industria, tamaño y objetivos específicos. Algunos ejemplos son:
        </p>
        <div class="shadow2 border1 clgreyl1">
            <div class="textoTitulo titleContainer clbktx clgreyl2 border1Sup">1. Investigación y desarrollo (I+D)</div>
            <div class="cardDesign clgreyl1 border1Inf">
                <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                    Costos asociados con la investigación y desarrollo de nuevos productos, tecnologías o servicios. Esto puede incluir salarios de investigadores, costos de materiales, equipos de laboratorio, y otros gastos relacionados con la innovación.
                </p>
            </div>
        </div><br>
        <div class="shadow2 border1 clgreyl1">
            <div class="textoTitulo titleContainer clbktx clgreyl2 border1Sup">2. Recursos humanos y beneficios para empleados</div>
            <div class="cardDesign clgreyl1 border1Inf">
                <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                    Gastos relacionados con la contratación, capacitación y retención de empleados, así como los beneficios como seguros médicos, planes de jubilación, vacaciones y otros beneficios laborales.
                </p>
            </div>
        </div><br>
        <div class="shadow2 border1 clgreyl1">
            <div class="textoTitulo titleContainer clbktx clgreyl2 border1Sup">3. Mantenimiento de activos fijos</div>
            <div class="cardDesign clgreyl1 border1Inf">
                <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                    Costos relacionados con el mantenimiento, reparación y actualización de activos fijos de la empresa, como maquinaria, equipo, vehículos y propiedades inmobiliarias.
                </p>
            </div>
        </div><br>
        <div class="shadow2 border1 clgreyl1">
            <div class="textoTitulo titleContainer clbktx clgreyl2 border1Sup">4. Costos de cumplimiento normativo y legal</div>
            <div class="cardDesign clgreyl1 border1Inf">
                <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                    Gastos asociados con el cumplimiento de regulaciones gubernamentales, normatividad de la industria, licencias comerciales, impuestos, auditorías, asesoramiento y otros requisitos legales.
                </p>
            </div>
        </div><br>
        <div class="shadow2 border1 clgreyl1">
            <div class="textoTitulo titleContainer clbktx clgreyl2 border1Sup">5. Innovación tecnológica</div>
            <div class="cardDesign clgreyl1 border1Inf">
                <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                    Costos asociados con la adopción de nuevas tecnologías, actualización de sistemas de información, desarrollo de plataformas digitales, y otros gastos para mejorar la eficiencia y la competitividad tecnológica de la empresa.
                </p>
            </div>
        </div><br>
        <div class="shadow2 border1 clgreyl1">
            <div class="textoTitulo titleContainer clbktx clgreyl2 border1Sup">6. Riesgo y seguro de negocio</div>
            <div class="cardDesign clgreyl1 border1Inf">
                <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                    Gastos relacionados con la gestión de riesgos empresariales, como primas de seguros contra riesgos operativos, cibernéticos, de responsabilidad civil, y otros tipos de seguros para proteger los activos y la reputación de la empresa.
                </p>
            </div>
        </div><br>
        <div class="shadow2 border1 clgreyl1">
            <div class="textoTitulo titleContainer clbktx clgreyl2 border1Sup">7. Responsabilidad social corporativa (RSC)</div>
            <div class="cardDesign clgreyl1 border1Inf">
                <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                    Gastos asociados con iniciativas de RSC, como donaciones caritativas, patrocinios de eventos comunitarios, programas de voluntariado corporativo, y otras actividades para contribuir al bienestar social y ambiental.
                </p>
            </div>
        </div><br>
    </div>
</div>
`
    },
    unidad4_3_presupuesto_ventas: {
        id: "unidad4_3_presupuesto_ventas",
        titulo: "4.3 Presupuesto de ventas o ingresos",
        type: "contenido",
        contenido: `
    <div class="shadow4 border1 clw">
    <div class="textoTitulo titleContainer white-text colorCardTitleContent border1Sup">4.3 Presupuesto de ventas o ingresos</div>
    <div class="cardDesign clw border1Inf">
        <p class="clbktx textoDinamicoIdentificador textoReadingH2">
            El presupuesto de ventas, también conocido como presupuesto de ingresos, es una estimación de los ingresos que una empresa espera generar durante un período de tiempo específico. Este tipo de presupuesto es fundamental para la planificación financiera y la toma de decisiones estratégicas.
            <br><br>
            Algunos de los aspectos a considerar para crear un presupuesto de ventas son:
        </p>
        <div class="shadow2 border1 clgreyl1">
            <div class="textoTitulo titleContainer clbktx clgreyl2 border1Sup">1. Recopila datos históricos</div>
            <div class="cardDesign clgreyl1 border1Inf">
                <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                    Revisa las ventas pasadas y los ingresos de la empresa durante períodos similares en el pasado. Esto te dará una base sólida sobre la cual empezar a proyectar tus ingresos futuros.
                </p>
            </div>
        </div><br>
        <div class="shadow2 border1 clgreyl1">
            <div class="textoTitulo titleContainer clbktx clgreyl2 border1Sup">2. Analiza tendencias y factores externos</div>
            <div class="cardDesign clgreyl1 border1Inf">
                <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                    Considera cualquier factor externo que pueda influir en las ventas futuras, como tendencias del mercado, cambios en la demanda del consumidor, condiciones económicas, competencia, estacionalidad y eventos especiales que puedan afectar la demanda de tus productos o servicios.
                </p>
            </div>
        </div><br>
        <div class="shadow2 border1 clgreyl1">
            <div class="textoTitulo titleContainer clbktx clgreyl2 border1Sup">3. Establece metas de ventas</div>
            <div class="cardDesign clgreyl1 border1Inf">
                <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                    Basándote en un análisis histórico y considerando las tendencias y factores externos, establece metas de ventas realistas y alcanzables para el período que estás presupuestando.
                </p>
            </div>
        </div><br>
        <div class="shadow2 border1 clgreyl1">
            <div class="textoTitulo titleContainer clbktx clgreyl2 border1Sup">4. Estima las ventas por producto y por servicio</div>
            <div class="cardDesign clgreyl1 border1Inf">
                <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                    Desglosa tus metas de ventas totales en ventas individuales por producto o servicio. Utiliza datos históricos, pronósticos de demanda y análisis de mercado para estimar las ventas de cada línea de productos o servicios.
                </p>
            </div>
        </div><br>
        <div class="shadow2 border1 clgreyl1">
            <div class="textoTitulo titleContainer clbktx clgreyl2 border1Sup">5. Considera precios y márgenes de ganancia</div>
            <div class="cardDesign clgreyl1 border1Inf">
                <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                    Ten en cuenta los precios de venta actuales y los márgenes de ganancia asociados con cada producto o servicio. Ajusta tus estimaciones de ventas según cualquier cambio planificado en los precios o márgenes de ganancia.
                </p>
            </div>
        </div><br>
        <div class="shadow2 border1 clgreyl1">
            <div class="textoTitulo titleContainer clbktx clgreyl2 border1Sup">6. Utiliza múltiples métodos de pronóstico</div>
            <div class="cardDesign clgreyl1 border1Inf">
                <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                    Considera utilizar varios métodos de pronóstico, como el método de promedio móvil, el método de regresión, análisis de series temporales, encuestas de mercado u otros métodos cuantitativos o cualitativos para mejorar la precisión de tus estimaciones de ventas.
                </p>
            </div>
        </div><br>
        <div class="shadow2 border1 clgreyl1">
            <div class="textoTitulo titleContainer clbktx clgreyl2 border1Sup">7. Realiza seguimiento y ajustes</div>
            <div class="cardDesign clgreyl1 border1Inf">
                <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                    Realiza constantemente un seguimiento de tus ventas reales en comparación con tu presupuesto de ventas. Identifica cualquier desviación y ajusta tus estrategias y presupuestos según sea necesario para alcanzar tus objetivos de ventas.
                </p>
            </div>
        </div><br>
        <div class="shadow2 border1 clgreyl1">
            <div class="textoTitulo titleContainer clbktx clgreyl2 border1Sup">8. Comunica y revisa</div>
            <div class="cardDesign clgreyl1 border1Inf">
                <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                    Comunica el presupuesto de ventas a todas las partes interesadas dentro de la empresa y revisa regularmente el progreso hacia las metas establecidas. Esto ayudará a mantener a todos en la misma sintonía y a promover un enfoque colaborativo para alcanzar los objetivos de ventas.
                </p>
            </div>
        </div><br>
        <p class="clbktx textoDinamicoIdentificador textoReadingH2">
            Recuerda que, al desarrollar un presupuesto de ventas, es importante ser realista y flexible, considerando tanto las oportunidades como las posibles amenazas que puedan surgir en el camino. Un presupuesto de ventas bien desarrollado es una guía invaluable para ayudar a la empresa a alcanzar sus objetivos financieros y de crecimiento.
        </p>
    </div>
</div>
`
    },
    material_apoyo: {
        id: "material_apoyo",
        titulo: "Material de apoyo",
        type: "contenido",
        contenido: `
    <section class="containerActividadAprendizajeFather">
      <div class="textoTitulo clbktx">Material de apoyo</div>
      <section class="gridActividadesAprendizaje">
  
          <!--Tarjeta 1-->
          <!-- <div class="actividadesAprendizaje border1 clgreyl2 shadow2 tarjetaActividades">
              <p class="cardTitleActividad tituloActividadAprendizaje clgreyl1 clbktx">Lectura 1</p>
              <p class="truncate descActividadAprendizaje clgreyl1 clbktx">Las organizaciones y la empresa</p>
              <a href="./pdf/actividades/Lectura 1 las organizaciones y la empresa-1.pdf" target="_blank">
                  <div class="buttonDownloadActividadAprendizaje clw border1 shadow2 waves-effect">
                      <i class="material-icons clbktx">download</i>
                      <span class="clbktx">Descargar</span>
                  </div>
              </a>
          </div> -->
          
  
      </section>
  </section>
  `
    },
    actividades_aprendizaje: {
        id: "actividades_aprendizaje",
        titulo: "Actividades de aprendizaje",
        type: "contenido",
        contenido: `
    <!--Tarjeta con las actividades-->
  <section class="containerActividadAprendizajeFather">
      <div class="textoTitulo clbktx">Actividades de aprendizaje</div>
      <section class="gridActividadesAprendizaje">
          <!--Tarjeta 1-->
          <div class="actividadesAprendizaje border1 clgreyl2 shadow2 tarjetaActividades">
              <p class="cardTitleActividad tituloActividadAprendizaje clgreyl1 clbktx">Actividad 4</p>
              <p class="truncate descActividadAprendizaje clgreyl1 clbktx">Plan de desarrollo del software</p>
              <a href="./pdf/actividades/ACTIVIDAD_4 Plan de desarrollo del software.pdf" target="_blank">
                  <div class="buttonDownloadActividadAprendizaje clw border1 shadow2 waves-effect">
                      <i class="material-icons clbktx">download</i>
                      <span class="clbktx">Descargar</span>
                  </div>
              </a>
          </div>
  
      </section>
  </section>
  `
    },
    cierre: {
        id: "cierre",
        titulo: "Cierre de la unidad temática",
        type: "contenido",
        contenido: `
    <div class="shadow4 border1 clw">
      <div class="textoTitulo titleContainer white-text colorCardTitleContent border1Sup">Cierre de la unidad temática</div>
      <div class="cardDesign clw border1Inf">
          <p class="clbktx textoDinamicoIdentificador textoReadingH2">
              ¡Felicidades! Has concluido esta unidad temática. Ahora tienes más elementos que te ayudarán a reconocer la relevancia que tienen las finanzas en todas las organizaciones y en específico en las empresas, independientemente de su constitución, tamaño y giro.
          </p>
  
          <blockquote class="clgreyl1 clgreytx textoDinamicoIdentificador textoReadingH2">
              Recuerda que las empresas son indispensables en nuestras vidas y que constituyen la columna vertebral de la economía. En este sentido, la productividad, la rentabilidad y la competitividad se han convertido en tres de las principales pretensiones de muchas empresas. Para lograr dichas pretensiones se requiere, entre otros aspectos, de la toma de decisiones basadas en información financiera verídica, confiable y oportuna que se verá reflejada en los estados financieros, tema que estudiarás en la unidad temática 2.
          </blockquote>
  
          <div class="defaultImage">
              <div class="defaultImageContent" id="cierre"></div>
          </div>
          <span class="referenciaIcono clgreyl1 border1 clbktx">Retomado de Pixeltrue proveniente de &nbsp; 
          <a href="https://icons8.com/illustrations/illustration/pixeltrue-success" target="_blank">Ouch!</a>
          </span>
      </div>
  </div>
  `
    }
};

// Validar que todas las secciones tengan contenido válido
document.addEventListener("DOMContentLoaded", function() {
    console.log("Validando secciones disponibles...");
    
    // Verificar cada sección
    for (const key in contenidosUnidad) {
        if (contenidosUnidad.hasOwnProperty(key)) {
            const seccion = contenidosUnidad[key];
            if (!seccion.contenido || typeof seccion.contenido !== 'string' || seccion.contenido.trim() === '') {
                console.warn(`Sección "${key}" no tiene contenido válido`);
            } else {
                console.log(`Sección "${key}" es válida`);
            }
        }
    }
});

// Función para activar componentes de Materialize después de cargar contenido
function activateNewComponents() {
    // Verificar si Materialize está disponible
    if (typeof M !== 'undefined') {
        // Inicializar componentes de Materialize que necesitan ser reinicializados
        var elems = document.querySelectorAll('.collapsible');
        if (elems.length > 0) {
            var instances = M.Collapsible.init(elems);
        }
        
        // Inicializar tooltips
        var elemsTooltip = document.querySelectorAll('.tooltipped');
        if (elemsTooltip.length > 0) {
            var instancesToolTip = M.Tooltip.init(elemsTooltip);
        }
        
        // Inicializar modales
        var elemsModal = document.querySelectorAll('.modal');
        if (elemsModal.length > 0) {
            var instancesModal = M.Modal.init(elemsModal);
        }
        
        // Inicializar tabs
        var elemsTabs = document.querySelectorAll('.tabs');
        if (elemsTabs.length > 0) {
            var instanceTabs = M.Tabs.init(elemsTabs);
        }
    } else {
        console.warn("Materialize no está disponible");
    }
    
    // Verificar si la función reactivateZoomMaterialized existe antes de llamarla
    if (typeof reactivateZoomMaterialized === 'function') {
        // Reactive zoom para imágenes materializadas
        reactivateZoomMaterialized();
    } else {
        console.warn("La función reactivateZoomMaterialized no está disponible");
    }
  }
  
let tabsInitialized = false;

// Función para inicializar las tabs
function inicializarTabs() {
    // Destruir tabs existentes si las hay
    const tabsInstance = M.Tabs.getInstance(document.querySelector('.tabs'));
    if (tabsInstance) {
        tabsInstance.destroy();
    }

    // Inicializar nuevas tabs
    const tabsElement = document.querySelector('.tabs');
    if (tabsElement) {
        M.Tabs.init(tabsElement, {
            swipeable: false,
            duration: 300
        });

        // Ajustar el ancho de las tabs basado en el contenedor padre
        const tabsContentElement = document.getElementById('tabsContentID');
        if (tabsContentElement) {
            const parentContainer = document.getElementById('lateralUnityContent');
            if (parentContainer) {
                const parentContainerAncho = parentContainer.offsetWidth - 0.5;
                tabsContentElement.style.width = parentContainerAncho + 'px';
            }
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

// Variable global para rastrear la sección actual
window.seccionActual = null;

// Función principal para cargar contenido
function cargarContenido(seccionId) {
    // Evitar cargar la misma sección múltiples veces
    if (window.seccionActual === seccionId) {
        console.log("Ya está cargada esta sección:", seccionId);
        return;
    }

    console.log(`🔴 Cargando sección: ${seccionId}`);

    const contenedor = document.getElementById("lateralUnityContent");
    if (!contenedor) {
        console.error("🔴 No se encontró el contenedor lateralUnityContent");
        return;
    }

    const seccion = contenidosUnidad[seccionId];
    if (!seccion) {
        console.warn(`🔴 Sección no encontrada: ${seccionId}`);
        cargarContenido("inicio"); // Fallback a inicio
        return;
    }

    try {
        // Limpiar contenido actual
        contenedor.innerHTML = '';
        
        // Cargar nuevo contenido
        contenedor.innerHTML = seccion.contenido;
        
        // Actualizar título
        document.title = `Unidad 4 - ${seccion.titulo || seccionId}`;
        
        // Actualizar menú activo
        actualizarMenuActivo(seccionId);
        
        // Inicializar tabs solo si es la sección de inicio
        if (seccionId === 'inicio') {
            setTimeout(() => {
                const tabsElement = document.querySelector('.tabs');
                if (tabsElement) {
                    M.Tabs.init(tabsElement, {
                        swipeable: false,
                        duration: 300
                    });
                }

                // Ajustar ancho de tabs
                const tabsContent = document.getElementById('tabsContentID');
                if (tabsContent && contenedor) {
                    const ancho = contenedor.offsetWidth - 0.5;
                    tabsContent.style.width = `${ancho}px`;
                }
            }, 100);
        }

        // Scroll al inicio
        window.scrollTo(0, 0);
        
        // Actualizar sección actual
        window.seccionActual = seccionId;
        
        console.log(`🔴 Sección ${seccionId} cargada exitosamente`);
    } catch (error) {
        console.error("🔴 Error al cargar contenido:", error);
        mostrarError();
    }
}

// Función para actualizar el menú activo
function actualizarMenuActivo(seccionId) {
    // Remover clase activa de todos los elementos del desktop menu
    document.querySelectorAll('.navOptionsContent').forEach(el => {
        el.classList.remove('activeLinkOptionsContentUnit4');
    });

    // Activar elemento seleccionado en el desktop menu
    const elementoActivo = document.querySelector(`[seccion-id="${seccionId}"]`);
    if (elementoActivo) {
        elementoActivo.classList.add('activeLinkOptionsContentUnit4');
    }
    
    // Actualizar también para elementos móviles
    document.querySelectorAll('.mobileOption[seccion-id]').forEach(el => {
        if (el.getAttribute('seccion-id') === seccionId) {
            el.classList.add('activeButtonTextLateral');
        } else {
            el.classList.remove('activeButtonTextLateral');
        }
    });
}

// Función para mostrar mensaje de error
function mostrarError() {
    const contenedor = document.getElementById("lateralUnityContent");
    if (contenedor) {
        contenedor.innerHTML = `
            <div class="shadow4 border1 clw">
                <div class="textoTitulo titleContainer white-text colorCardTitleContent border1Sup">Error</div>
                <div class="cardDesign clw border1Inf">
                    <p class="clbktx textoDinamicoIdentificador textoReadingH2">
                        Ocurrió un error al cargar el contenido. Por favor, intente nuevamente.
                    </p>
                </div>
            </div>`;
    }
}

// Manejador de eventos para clicks en el menú
function handleMenuClick(event) {
    const elemento = event.target.closest('[seccion-id]');
    if (!elemento) return;

    const seccionId = elemento.getAttribute("seccion-id");
    if (!seccionId) return;

    console.log(`🔴 Clic en menú:`, seccionId);
    cargarContenido(seccionId);
    
    // Si estamos en móvil, cerrar el sidenav
    const instance = M.Sidenav.getInstance(document.querySelector('#slide-out'));
    if (instance) {
        instance.close();
    }
}

// Inicialización cuando el DOM está listo
document.addEventListener("DOMContentLoaded", function() {
    console.log("🔴 DOM completamente cargado");
    
    // Configurar eventos del menú desktop
    const menuDesktop = document.getElementById("lateralUnityMenuSectionContainer");
    if (menuDesktop) {
        // Eliminar eventos anteriores si existen
        menuDesktop.removeEventListener("click", handleMenuClick);
        // Agregar nuevo evento
        menuDesktop.addEventListener("click", handleMenuClick);
    }
    
    // Configurar eventos del menú móvil
    const menuMobileContainers = document.querySelectorAll(".mobileOptionsContainer");
    menuMobileContainers.forEach(container => {
        // Eliminar eventos anteriores si existen
        container.removeEventListener("click", handleMenuClick);
        // Agregar nuevo evento
        container.addEventListener("click", handleMenuClick);
    });
    
    // Cargar la sección de inicio por defecto
    setTimeout(() => cargarContenido("inicio"), 100);
});
  