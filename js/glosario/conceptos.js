const conceptos = {
    unidad1: [
        {
            titulo: "Proyecto",
            descripcion: "Es un esfuerzo temporal con un inicio y fin definidos, orientado a la creación de un producto, servicio o resultado único, gestionado mediante procesos y recursos (Project Management Institute [PMI], 2017)."
        },
        {
            titulo: "Valor Agregado",
            descripcion: "Diferencia distintiva que proporciona un proyecto en comparación con otros, resolviendo la misma problemática o necesidad, y que contribuye significativamente a su éxito."
        },
        {
            titulo: "Necesidad Humana",
            descripcion: "Requiere una solución inteligente que mejore la calidad de vida, siendo también una oportunidad de negocio, abordada a través de un proyecto (Pressman, 2014)."
        },
        {
            titulo: "Problema",
            descripcion: "Situación que genera la necesidad de una solución inteligente, identificada y abordada mediante un proyecto (Schwalbe, 2018)."
        },
        {
            titulo: "Presupuestos",
            descripcion: "Limitación de recursos financieros asignados a un proyecto (Kloppenborg, 2019)."
        },
        {
            titulo: "Periodo de Tiempo",
            descripcion: "Marco temporal en el cual se ejecuta un proyecto, con un inicio y un final (Kerzner, 2017)."
        },
        {
            titulo: "Reglamentación Legal o Formal",
            descripcion: "Normas y regulaciones que guían la ejecución de un proyecto (Schwalbe, 2018)."
        },
        {
            titulo: "Satisfacción del Cliente",
            descripcion: "Garantizar que el producto, servicio o resultado cumple con la calidad suficiente para satisfacer al cliente (PMBOK Guide, 2017)."
        },
        {
            titulo: "Clasificación de Proyectos",
            descripcion: "La organización de proyectos según criterios específicos, como la procedencia del capital, el propósito estratégico, las causas que lo generan o la relación entre los proyectos entre sí (Kerzner, 2017)."
        },
        {
            titulo: "Proyectos de Inversión",
            descripcion: "Se clasifican en privados, públicos o mixtos según la procedencia de su capital (PMBOK Guide, 2017)."
        },
        {
            titulo: "Proyectos según Propósito Estratégico",
            descripcion: "Clasificación que considera el cambio tecnológico, el potencial competitivo, el potencial financiero, el crecimiento de mercado, ordenamientos legales y consideraciones sociales como categorías (Kerzner, 2017)."
        },
        {
            titulo: "Relación entre Proyectos",
            descripcion: "Clasificación que incluye proyectos mutuamente excluyentes, proyectos independientes y proyectos contingentes o dependientes entre sí (Kerzner, 2017)."
        },
        {
            titulo: "Proyecto Informático",
            descripcion: "Sistema de cursos de acción simultáneos y/o secuenciales que involucra personas, hardware, software y comunicaciones, enfocado en obtener resultados deseables sobre un sistema de información (Pressman, 2014)."
        },
        {
            titulo: "Gestión de Proyectos Informáticos",
            descripcion: "Coordinación, control, presupuestación y documentación de actividades relacionadas con un proyecto informático, con el objetivo de alcanzar objetivos específicos según requisitos y restricciones (Pressman, 2014)."
        },
        {
            titulo: "Elementos de un Proyecto Informático",
            descripcion: "Componentes fundamentales necesarios para el desarrollo exitoso de un proyecto informático, incluyendo recursos tecnológicos, humanos y financieros (Pressman, 2014)."
        },
        {
            titulo: "Ciclo de Vida del Proyecto",
            descripcion: "División del proyecto en fases que conectan el inicio con el fin, permitiendo identificar, administrar y planificar recursos necesarios para alcanzar el objetivo (PMBOK Guide, 2017)."
        },
        {
            titulo: "Fases del Proyecto de Software",
            descripcion: "Etapas del desarrollo del proyecto de software, como inicio, proceso de desarrollo y producto final, que pueden subdividirse en etapas adicionales según el tamaño, complejidad y restricciones del presupuesto (Pressman, 2014)."
        },
        {
            titulo: "Formulación del Proyecto",
            descripcion: "Procedimiento para recopilar información orientada a abordar una problemática planteada y satisfacer una necesidad humana en el contexto de un proyecto informático (Schwalbe, 2018)."
        },
        {
            titulo: "Desarrollo del Sistema",
            descripcion: "Conjunto de actividades dedicadas a la creación, diseño, despliegue y compatibilidad de software en el marco del desarrollo de un proyecto informático (Pressman, 2014)."
        },
        {
            titulo: "Evaluación Financiera del Proyecto",
            descripcion: "Análisis que mide la rentabilidad económica de un proyecto, considerando montos de inversión, costos y gastos asociados, con el objetivo de tomar decisiones informadas (Kerzner, 2017)."
        },
        {
            titulo: "Fase de Planificación",
            descripcion: "Etapa inicial del proyecto donde se valoran las necesidades, se establecen los objetivos, se realiza un estudio de viabilidad, se analizan riesgos y se planifican las siguientes fases (Schwalbe, 2018)."
        },
        {
            titulo: "Estudio de Viabilidad",
            descripcion: "Evaluación de aspectos técnicos, financieros y legales para determinar si el proyecto puede realizarse en tiempo y con los recursos disponibles (Kerzner, 2017)."
        },
        {
            titulo: "Análisis de Riesgos",
            descripcion: "Identificación y evaluación de posibles contratiempos en el proyecto, con la previsión de alternativas de solución (Schwalbe, 2018)."
        },
        {
            titulo: "Planificación del Proyecto",
            descripcion: "Desarrollo de un plan detallado para cada fase del proyecto, asegurando el éxito en la realización de actividades y tareas (Kerzner, 2017)."
        },
        {
            titulo: "Fase de Análisis",
            descripcion: "Etapa centrada en definir funciones y características específicas del software, asignar recursos y estimar costos para el desarrollo del proyecto (Pressman, 2014)."
        },
        {
            titulo: "Asignación de Recursos",
            descripcion: "Determinación de los recursos necesarios para cada fase del proyecto y la asignación formal de responsabilidades para cada tarea (Kloppenborg, 2019)."
        },
        {
            titulo: "Estimación de Costos",
            descripcion: "Tarea crítica que involucra presupuestar desde el inicio hasta el final, considerando imprevistos que puedan afectar tiempo, alcance y costos (Kerzner, 2017)."
        },
        {
            titulo: "Fase de Diseño y Estructura",
            descripcion: "Etapa donde se estudian alternativas, se establece la estructura de la base de datos, la lógica del flujo de datos y el diseño de la interfaz de usuario (Pressman, 2014)."
        },
        {
            titulo: "Estructura de Base de Datos",
            descripcion: "Proceso fundamental en el ciclo de vida del software para facilitar la implementación del proyecto y permitir al usuario gestionar información (Pressman, 2014)."
        },
        {
            titulo: "Lógica del Flujo de Datos",
            descripcion: "Elaboración de diagramas que trazan el flujo de información del proyecto de forma visual y detallada (Pressman, 2014)."
        },
        {
            titulo: "Interfaz de Usuario",
            descripcion: "Diseño de un entorno intuitivo y fácil de usar, clave para el acceso y la navegación eficiente del usuario en el software desarrollado (Pressman, 2014)."
        },
        {
            titulo: "Fase de Desarrollo",
            descripcion: "Etapa donde se inicia la tarea de programación, seleccionando el lenguaje de programación adecuado y siguiendo buenas prácticas para escalabilidad (Pressman, 2014)."
        },
        {
            titulo: "Fase de Pruebas",
            descripcion: "Etapa posterior al desarrollo donde se realizan pruebas para identificar y corregir errores, asegurando la calidad del software (Kerzner, 2017)."
        },
        {
            titulo: "Fase de Mantenimiento",
            descripcion: "Etapa en la que el software está en funcionamiento, se realizan mejoras, se corrigen fallos, y se atienden limitaciones o propuestas para mejorar (Pressman, 2014)."
        }
    ],
    
    unidad2: [
        {
            titulo: "Finanzas empresariales",
            descripcion: "Campo de estudio que se encarga de la gestión, uso y distribución de recursos financieros dentro de una empresa para cumplir con sus objetivos."
        },
        {
            titulo: "Innovación",
            descripcion: "Proceso a través del cual una empresa introduce mejoras en productos, servicios o procesos con el objetivo de generar valor y adaptarse al mercado."
        },
        {
            titulo: "Design thinking",
            descripcion: "Metodología centrada en el usuario que busca generar soluciones innovadoras mediante un proceso iterativo dividido en cinco fases: empatizar, definir, idear, prototipar y testar."
        },
        {
            titulo: "Prototipado",
            descripcion: "Fase en el proceso de innovación donde las ideas se transforman en modelos tangibles para evaluar su viabilidad y obtener retroalimentación."
        },
        {
            titulo: "Tasa interna de retorno (TIR)",
            descripcion: "Indicador financiero que representa la tasa de descuento que hace que el valor presente neto (VPN) de un proyecto sea igual a cero, indicando la rentabilidad del proyecto."
        },
        {
            titulo: "Valor presente neto (VPN)",
            descripcion: "Indicador financiero que calcula la diferencia entre el valor presente de los flujos de efectivo futuros y la inversión inicial, permitiendo evaluar la rentabilidad de un proyecto."
        },
        {
            titulo: "Relación costo-beneficio (RCB)",
            descripcion: "Técnica utilizada para evaluar la viabilidad de un proyecto comparando los costos totales con los beneficios esperados, proporcionando una visión clara de las implicaciones financieras."
        },
        {
            titulo: "Empatía en design thinking",
            descripcion: "Primera fase del design thinking en la que se busca comprender las necesidades y problemas de los usuarios, recopilando información valiosa para generar soluciones efectivas."
        },
        {
            titulo: "Matriz de decisión",
            descripcion: "Herramienta que ayuda a comparar alternativas o propuestas en un proceso de toma de decisiones, organizada en criterios, ponderaciones y puntuaciones."
        },
        {
            titulo: "Retorno de la inversión (ROI)",
            descripcion: "Indicador financiero que mide la ganancia o pérdida generada en relación con la inversión realizada, utilizado para evaluar la rentabilidad de un proyecto."
        }
    ],

    unidad3: [
        {
            titulo: "Innovación",
            descripcion: "Transformar una oportunidad de mejora en valor mediante cambios en un sistema de referencia. Puede ser en productos, procesos o métodos de organización, con el fin de generar ventajas competitivas sostenibles en el mercado."
        },
        {
            titulo: "Design thinking",
            descripcion: "Metodología de innovación creada por la empresa IDEO en los años 70. Consiste en un proceso iterativo que consta de 5 fases, combinando procesos divergentes y convergentes para explorar, ampliar la visión de los retos y soluciones, y seleccionar las mejores ideas."
        },
        {
            titulo: "Empatizar/descubrir",
            descripcion: "Primera fase del Design Thinking donde se busca comprender el problema, las necesidades y el contexto de los usuarios involucrados en la solución. Se utilizan técnicas como la observación y la encuesta para recopilar información valiosa y crear un vínculo estrecho con los usuarios."
        },
        {
            titulo: "Definir",
            descripcion: "Segunda fase del Design Thinking donde se depura la información obtenida en la fase de empatizar/descubrir para identificar y definir las necesidades tanto emocionales como físicas de los usuarios. Se buscan revelaciones (\"insights\") que contribuyan a generar nuevos planteamientos y se define claramente el problema, sirviendo como punto de referencia común para el equipo."
        },
        {
            titulo: "Idear",
            descripcion: "Tercera fase del Design Thinking donde se generan múltiples ideas creativas y diferentes para desarrollar soluciones ante un problema. Se utilizan técnicas de creatividad como el brainstorming, SCAMPER y Da Vinci para explorar diversas posibilidades de solución."
        },
        {
            titulo: "Prototipar",
            descripcion: "Cuarta fase del Design Thinking donde las ideas se convierten en tangibles mediante la construcción de prototipos o escenarios. Estos prototipos permiten visualizar y manipular las posibles soluciones, identificando aspectos a mejorar antes de obtener el resultado final."
        },
        {
            titulo: "Testeo (validar)",
            descripcion: "Quinta fase del Design Thinking donde se presenta el prototipo a los usuarios para recoger sus opiniones y realizar ajustes. El objetivo es obtener nuevas ideas para mejorar a partir de críticas constructivas y dudas, lo que permite desarrollar colaborativamente la solución y presentar diversas mejoras al prototipo."
        },
        {
            titulo: "Integración del proyecto",
            descripcion: "Actividad que coordina y unifica los procesos del proyecto, asegurando que las actividades estén alineadas con los objetivos generales."
        },
        {
            titulo: "Gestión de adquisiciones",
            descripcion: "Proceso que implica la compra de productos o servicios necesarios para un proyecto, incluyendo la selección de proveedores y la negociación de contratos."
        },
        {
            titulo: "Riesgos del proyecto",
            descripcion: "Eventos o condiciones inciertas que pueden tener un impacto positivo o negativo en los objetivos del proyecto."
        },
        {
            titulo: "Gestión de los interesados",
            descripcion: "Identificación y gestión de las expectativas y necesidades de las personas o grupos que pueden afectar o ser afectados por el proyecto."
        },
        {
            titulo: "Modelo de proceso",
            descripcion: "Herramienta visual que representa el flujo de trabajo o secuencia de actividades de un proyecto."
        },
        {
            titulo: "Casos de uso",
            descripcion: "Técnica para capturar y describir las interacciones entre los usuarios y un sistema, generalmente representados en diagramas UML."
        },
        {
            titulo: "Descomposición funcional",
            descripcion: "Técnica para desglosar los procesos o sistemas en componentes más pequeños y manejables."
        },
        {
            titulo: "Checklist (lista de verificación)",
            descripcion: "Conjunto de preguntas o criterios utilizados para revisar y asegurar que los requisitos de un proyecto o software se han cumplido."
        },
        {
            titulo: "Inspección de software",
            descripcion: "Técnica de revisión crítica para evaluar la conformidad de un software con los estándares o especificaciones definidas."
        },
        {
            titulo: "Pruebas unitarias",
            descripcion: "Evaluaciones realizadas a componentes individuales del software para verificar su correcto funcionamiento."
        },
        {
            titulo: "Pruebas de integración",
            descripcion: "Validación de la interacción entre diferentes componentes del software para asegurar que trabajan de manera conjunta y correcta."
        },
        {
            titulo: "Pruebas de aceptación del usuario (UAT)",
            descripcion: "Proceso en el cual los usuarios finales prueban el software para verificar si cumple con sus expectativas y necesidades."
        },
        {
            titulo: "Gestión de sostenibilidad del software",
            descripcion: "Proceso de desarrollo y operación de software con un enfoque en minimizar el impacto ambiental, social y económico."
        }
    ],

    unidad4: [
        {
            titulo: "Presupuesto de inversión",
            descripcion: "Un plan detallado que estima los recursos financieros necesarios para iniciar un proyecto, considerando aspectos como mobiliario, equipo, recursos humanos, hardware, software, servicios externos, infraestructura, y contingencias."
        },
        {
            titulo: "Alcance del proyecto",
            descripcion: "Define los requisitos, funciones y características de un proyecto, así como los resultados esperados. Es crucial para planificar adecuadamente los costos y recursos."
        },
        {
            titulo: "Presupuesto de egresos",
            descripcion: "Detalla los gastos planificados durante un período específico. Se puede desglosar en gastos fijos (renta, sueldos) y variables (costos de producción)."
        },
        {
            titulo: "Inversión propia",
            descripcion: "Financiamiento de un proyecto con recursos personales o de la organización, sin recurrir a fuentes externas. Involucra la evaluación de recursos financieros disponibles, la creación de un presupuesto y la reserva de fondos para imprevistos."
        },
        {
            titulo: "Inversión financiada",
            descripcion: "Recursos obtenidos de fuentes externas como préstamos bancarios, inversores o subvenciones para financiar un proyecto. Incluye la necesidad de un plan de negocios sólido y la evaluación de diferentes opciones de financiamiento."
        },
        {
            titulo: "Costos de desarrollo",
            descripcion: "Incluyen salarios del personal, herramientas de software, equipo de hardware, licencias, consultorías externas, y otros gastos necesarios para el desarrollo de un proyecto."
        },
        {
            titulo: "Gastos de administración",
            descripcion: "Gastos relacionados con la gestión y operación diaria de una empresa, como sueldos administrativos, renta de oficinas, servicios profesionales, y mantenimiento de infraestructura tecnológica."
        },
        {
            titulo: "Presupuesto de ventas o ingresos",
            descripcion: "Estimación de los ingresos que se esperan generar durante un período específico. Se basa en datos históricos, análisis de tendencias, y factores externos que puedan influir en las ventas."
        },
        {
            titulo: "Gastos financieros",
            descripcion: "Incluyen los costos relacionados con la obtención de financiamiento, intereses sobre préstamos, comisiones bancarias, fluctuaciones cambiarias y otros gastos financieros."
        },
        {
            titulo: "Costos de investigación y desarrollo (I+D)",
            descripcion: "Gastos relacionados con la investigación y el desarrollo de nuevos productos, servicios o tecnologías dentro de una empresa."
        },
        {
            titulo: "Responsabilidad social corporativa (RSC)",
            descripcion: "Iniciativas que buscan contribuir al bienestar social y ambiental, como programas de voluntariado, patrocinios y actividades de responsabilidad social."
        },
        {
            titulo: "Innovación tecnológica",
            descripcion: "Costos asociados con la adopción de nuevas tecnologías y la mejora de la eficiencia empresarial mediante la actualización de sistemas y plataformas digitales."
        },
        {
            titulo: "Control de costos",
            descripcion: "Proceso continuo de monitoreo y ajuste de los costos a lo largo del desarrollo de un proyecto para maximizar su valor y mantener la eficiencia."
        }
    ],

    unidad5: [
        {
            titulo: "Finanzas empresariales",
            descripcion: "Estudio de la gestión de recursos financieros dentro de una empresa para optimizar su uso y maximizar la rentabilidad."
        },
        {
            titulo: "Recurso didáctico digital (RDD)",
            descripcion: "Herramienta educativa digital diseñada para apoyar el proceso de aprendizaje mediante contenidos estructurados, interactividad y accesibilidad."
        },
        {
            titulo: "Unidad de competencia",
            descripcion: "Conjunto de aprendizajes y habilidades que el estudiante debe alcanzar al concluir una unidad temática."
        },
        {
            titulo: "Metodología",
            descripcion: "En el contexto del RDD, es la secuencia de actividades y recursos propuestos para facilitar el aprendizaje autónomo y guiado de los estudiantes."
        },
        {
            titulo: "Evaluación de los aprendizajes",
            descripcion: "Proceso mediante el cual se mide el grado de adquisición de competencias, conocimientos y habilidades, utilizando diferentes actividades y herramientas evaluativas."
        },
        {
            titulo: "Requerimientos técnicos",
            descripcion: "Condiciones mínimas de software y hardware necesarias para acceder y utilizar un recurso digital de manera óptima."
        },
        {
            titulo: "Estados financieros proforma",
            descripcion: "Proyecciones financieras que estiman la situación futura de una empresa basada en presupuestos, fundamentales para la planificación financiera y la evaluación de proyectos."
        },
        {
            titulo: "Estado de resultados proforma",
            descripcion: "Documento financiero que proyecta los ingresos, costos, gastos y utilidades de una empresa en un período futuro."
        },
        {
            titulo: "Balance general proforma",
            descripcion: "Documento financiero que proyecta la situación financiera futura de una empresa, incluyendo activos, pasivos y capital."
        },
        {
            titulo: "Estado de flujo de efectivo proforma",
            descripcion: "Documento financiero que proyecta las entradas y salidas de efectivo futuras para evaluar la liquidez y capacidad de pago."
        },
        {
            titulo: "Indicadores financieros de evaluación de proyectos",
            descripcion: "Métricas utilizadas para evaluar la viabilidad, rentabilidad y eficiencia de proyectos, como ROI, Costo-Beneficio, VPN, y TIR."
        },
        {
            titulo: "Retorno de la inversión (ROI)",
            descripcion: "Indicador que mide la ganancia o pérdida en relación con la inversión realizada."
        },
        {
            titulo: "Relación costo-beneficio (RCB)",
            descripcion: "Técnica que compara los costos totales de un proyecto con los beneficios esperados para determinar su viabilidad."
        },
        {
            titulo: "Valor presente neto (VPN)",
            descripcion: "Diferencia entre el valor presente de los flujos de efectivo futuros y la inversión inicial, utilizado para evaluar la rentabilidad de un proyecto."
        },
        {
            titulo: "Tasa interna de retorno (TIR)",
            descripcion: "Tasa de descuento que hace que el VPN de un proyecto sea igual a cero, usada para evaluar su viabilidad."
        },
        {
            titulo: "Matriz de decisión",
            descripcion: "Herramienta que organiza y compara alternativas en la toma de decisiones mediante criterios, ponderación y puntuación."
        },
        {
            titulo: "Flujos netos de efectivo",
            descripcion: "Diferencia entre las entradas y salidas de efectivo, que indica la liquidez disponible o déficit en caja."
        },
        {
            titulo: "Microentorno y macroentorno",
            descripcion: "Factores internos (microentorno) y externos (macroentorno) que influyen en el desempeño y las decisiones de una empresa."
        },
        {
            titulo: "Legislación vigente",
            descripcion: "Normas y regulaciones actuales que rigen la constitución y funcionamiento de una empresa."
        },
        {
            titulo: "Administración de recursos",
            descripcion: "Gestión eficiente de recursos financieros, tecnológicos y humanos para cumplir los objetivos de una organización."
        }
    ]
};

// Función para generar HTML de una tarjeta de concepto
function generarTarjetaConcepto(concepto, unidad) {
    return `
        <div identificador_select="u${unidad}" class="conceptCard clgreyl1 shadow3 border2">
            <p class="textoTitulo clbktx">${concepto.titulo}</p>
            <p class="textoStandar clbktx">${concepto.descripcion}</p>
        </div>
    `;
}

// Función para cargar todos los conceptos
function cargarConceptos() {
    const contenedor = document.getElementById('parentConceptsGlosario');
    let html = '';

    // Generar HTML para cada unidad
    for(let i = 1; i <= 5; i++) {
        conceptos[`unidad${i}`].forEach(concepto => {
            html += generarTarjetaConcepto(concepto, i);
        });
    }

    // Agregar el contenedor para "no hay resultados"
    html += `
        <div class="conceptCard clgreyl1 shadow3 border2" id="noResultContent" style="display: none;">
            <p class="textoTitulo clbktx">No hay resultados</p>
            <div class="defaultImage">
                <div class="defaultImageContent" id="notFound"></div>
            </div>
            <span class="referenciaIcono clgreyl1 border1 clbktx">Ilustración de &nbsp; <a
                    href="https://icons8.com/illustrations/style--pixeltrue">Pixel true</a> &nbsp;, &nbsp; <a
                    href="https://icons8.com/illustrations/">Ouch!</a></span>
        </div>
    `;

    contenedor.innerHTML = html;
}

// Exportar las funciones y objetos necesarios
export { conceptos, cargarConceptos };
