const contenidosUnidad = {
	actividadesAnalisis: {
		id: "actividadesAnalisis",
		titulo: "3.2.1 Actividades para el análisis de requerimientos y diseño de la arquitectura del software",
		icono: "local_library",
		contenido: `<div class="shadow4 border1 clw">
<div class="textoTitulo titleContainer white-text colorCardTitleContent border1Sup">3.2.1 Actividades para el análisis de requerimientos y diseño de la arquitectura del software </div>
<div class="cardDesign clw border1Inf">
    <p class=" clbktx textoDinamicoIdentificador textoReadingH2">
        Posterior al levantamiento y documentación de los requerimientos la etapa que sigue es el análisis de los requerimientos del software.<br>

        El análisis de requerimientos es una tarea en la que tienes que aplicar una serie de técnicas que te permitan el desglose y el análisis 
        de los requisitos y sus partes, dentro de estas técnicas podemos mencionar el modelado de procesos, el modelado de dominio, 
        el caso de uso, las inspecciones, las listas de chequeo y los prototipos.<br>

        De acuerdo con (PMOInformatica, 2016) te presentaremos 8 Técnicas para analizar requerimientos de software.<br>

        Es importante que tengas presente que las técnicas de análisis de requerimientos que a continuación se te presentan se desprenden 
        de la especificación de requisitos del proyecto<br>

    </p>

    <div class="shadow2 border1 clgreyl1">
        <div class="textoTitulo titleContainer clbktx clgreyl2 border1Sup">1.	Descomposición funcional.</div>
        <div class="cardDesign clgreyl1 border1Inf">
            <div class="shadow2 border1 clgreyl1 simpleCardText">
                <ul class="browser-default clbktx textoDinamicoIdentificador textoReadingH2 textBoldOwn" >
                    <li>Esta técnica hace referencia al proceso donde tendrás que identificar y resolver las relaciones funcionales en sus partes que lo integran, 
                        de tal manera que la función general pueda ser reconstruida a partir de sus partes.</li>
                    <li>Aplicado a la Ingeniería de requisitos, radica en tomar los requerimientos de software, seccionarlos en partes y analizarlos individualmente. 
                        Si consideras oportuno podrás fraccionarlos en más partes hasta logres un nivel adecuado de detalle.</li>
                    <li>
                        El propósito es dividir un sistema de tal forma que cada componente se pueda describir sin necesidad de referir a otro componente.
                    </li>
                    <li>
                        De esta forma, cada parte del sistema tendrá funciones independientes, que pueden reusarse y reemplazarse.
                    </li>
                </ul>
            </div>
        </div>
    </div><br>
    
    <div class="shadow2 border1 clgreyl1">
        <div class="textoTitulo titleContainer clbktx clgreyl2 border1Sup">2. Especificación vía sentencias textuales</div>
        <div class="cardDesign clgreyl1 border1Inf">
            <p class=" clbktx textoDinamicoIdentificador textoReadingH2">
                Es la manera tradicional de cómo se usan la especificación de requerimientos de software.<br><br>

                Se emplean especificaciones textuales en lenguaje natural, las cuales se deben documentan utilizando matrices de trazabilidad 
                de requerimientos o definiciones del alcance.<br><br>

                El procedimiento consiste en que ocupes el requerimiento, resultado del levantamiento de información, para que desarrolles 
                una narrativa lo más detallada posible.<br><br>

                No es recomendable que uses herramientas visuales como los flujogramas o estructura como los casos de uso, simplemente debes 
                hacer una descripción lo más detallada que puedas del requerimiento utilizando lenguaje natural.

            </p>
        </div>
    </div><br>

    <div class="shadow2 border1 clgreyl1">
        <div class="textoTitulo titleContainer clbktx clgreyl2 border1Sup">3. Modelo del proceso </div>
        <div class="cardDesign clgreyl1 border1Inf">
            <p class=" clbktx textoDinamicoIdentificador textoReadingH2">
                Para que desarrolles esta técnica es importante que consideres loa siguientes aspectos: A partir de los requerimientos del 
                software deberás crear los diagramas de flujo del proceso (Flujogramas).<br><br>

                Debes tomar en cuenta que existen una gran variedad de herramientas de modelado de procesos, y que cada de ellas cuenta 
                con su propia simbología y reglas.<br><br>

                Te será de mucha utilidad para entender el proceso que se realiza en diversos pasos, tareas, roles y departamentos o 
                áreas que intervienen.<br><br>

                La visualización del flujograma te ayudara para que tengas una mejor comunicación con terceros y al mismo tiempo ellos tengan 
                una mejor comprensión.<br><br>
                Cuando tengas procesos muy grandes o complejos, debes desglosarlos en componentes más pequeños (subprocesos).

            </p>
        </div>
    </div><br>

    <div class="shadow2 border1 clgreyl1">
        <div class="textoTitulo titleContainer clbktx clgreyl2 border1Sup">4. Modelo de dominio</div>
        <div class="cardDesign clgreyl1 border1Inf">
            <p class=" clbktx textoDinamicoIdentificador textoReadingH2">
                Para la Ingeniería de software, el análisis de dominio consiste en analizar sistemas o software relacionados en un dominio, 
                con el propósito de que encuentres sus partes comunes y sus partes que los diferencian.<br><br>

                Tendrás que producir un modelo de contexto de negocio para todo el sistema.<br><br>

                Debes tomar en cuenta que un modelo de dominio debe incluir diagramas conceptuales que contemplen tanto el comportamiento 
                de un sistema como el de sus datos.<br><br>

                Dentro de modelo de dominio encontraras los diagramas de funcionalidades (Features Diagrams), los cuales son una 
                representación "compacta" del sistema o aplicación en términos de sus características.<br><br>

                El análisis de dominio te debe producir modelos orientados a objetos o modelos relacionales de datos, que pueden ser 
                usados por los desarrolladores de software como base de arquitecturas de software y aplicaciones.

                </p>
        </div>
    </div><br>

    <div class="shadow2 border1 clgreyl1">
        <div class="textoTitulo titleContainer clbktx clgreyl2 border1Sup">5. Casos de Uso</div>
        <div class="cardDesign clgreyl1 border1Inf">
            <p class=" clbktx textoDinamicoIdentificador textoReadingH2">
                Para el Lenguaje de Modelado Unificado (UML), un caso de uso es una secuencia de interacciones entre un sistema y alguien o 
                algo que usa alguno de sus servicios.<br><br>

                En el ámbito profesional y académico, es una de las técnicas de mayor difusión para especificar el comportamiento del Sistema.<br><br>

                Esta técnica te proporcionara un formato simple y estructurado el cual lo podrás compartido entre usuarios y desarrolladores.<br><br>

                Además de que lo puedes usar para analizar los requerimientos de software, también puedes usarlo en el diseño del sistema e 
                inclusive para definir pruebas de caja negra (Testing).<br><br>

                Los diagramas de casos de uso los podrás utilizar en sistemas informáticos orientados a la funcionalidad (transacciones con 
                el usuario), que se van a implementar orientados a objetos y con UML.<br><br>

                No son la mejor opción en sistemas sin usuarios, o dominados fundamentalmente por requerimientos no funcionales.

            </p>
        </div>
    </div><br>

    <div class="shadow2 border1 clgreyl1">
        <div class="textoTitulo titleContainer clbktx clgreyl2 border1Sup">6. Checklists</div>
        <div class="cardDesign clgreyl1 border1Inf">
            <p class=" clbktx textoDinamicoIdentificador textoReadingH2">
                La lista de chequeo (Checklist) se basa en que tienes que elaborar una serie de preguntas o revisiones  sobre los requerimientos 
                de software, que no son presentados de forma escrita.<br><br>

                Una lista de chequeo la puedes realizar haciendo preguntas como:<br>

                ¿Se han especificado los requisitos de hardware y software?<br>
                ¿Se han realizado consideraciones de seguridad?<br>
                ¿El nivel de granularidad del requerimiento se ha incluido?<br>
                ¿Se ha incluido el código de referencia en para identificar el requisito en el desglose de requerimientos?<br>
                ¿Está escrito el requerimiento en un lenguaje claro y conciso?<br>
                ¿El requerimiento es único? (no existe duplicidad con otro requerimiento).<br><br>

                Y muchas preguntas más.<br><br>

                La lista de chequeo te servirá como marco de trabajo y procedimental para revisar el requerimiento, facilitándote su análisis 
                de forma estructurada.<br><br>

                Los requerimientos los puedes revisar utilizando la matriz de trazabilidad de requerimientos o sobre la definición del alcance.<br><br>

            </p>
        </div>
    </div><br>

    <div class="shadow2 border1 clgreyl1">
        <div class="textoTitulo titleContainer clbktx clgreyl2 border1Sup">7. Inspección</div>
        <div class="cardDesign clgreyl1 border1Inf">
            <p class=" clbktx textoDinamicoIdentificador textoReadingH2">
                Con esta técnica podrás hacer una revisión crítica no destructiva sobre los requerimientos de software. Por ejemplo:<br><br>

                Puedes hacer una inspección visual de un software para verificar que las pantallas requeridas se encuentran incluidas.<br><br>

                Puedes examinar y verificar que los campos necesarios para el ingreso de datos estén incluidos <br><br>

                Puedes verificar que los botones necesarios para iniciar la funcionalidad que ha sido requerida se hayan contemplado.<br><br>

                Puedes comprobar que el requerimiento se apega a los estándares definidos para la aplicación. Por ejemplo estándares de 
                navegación entre pantallas y estándares de interfaz gráfica.<br><br>

                De modo similar al uso de la lista de chequeo, la inspección consiste en que debes tomar el requerimiento definido en la matriz 
                de trazabilidad o definición de alcance, leerlo y producir un resultado para su corrección.<br>

            </p>
        </div>
    </div><br>

    <div class="shadow2 border1 clgreyl1">
        <div class="textoTitulo titleContainer clbktx clgreyl2 border1Sup">8. Prototipos</div>
        <div class="cardDesign clgreyl1 border1Inf">
            <p class=" clbktx textoDinamicoIdentificador textoReadingH2">
                El prototipado o maquetado consiste en que elabores representaciones visuales (interfaz gráfica con el usuario) de 
                los requerimientos de software.<br><br>

                El prototipo se convierte en una herramienta muy útil y barata que además la puedes  validar con los usuarios, clientes e 
                interesados de proyecto, podrás mostrar a los interesados del proyecto  que el diseño funcional corresponde a los 
                requerimientos de software.<br><br>

                Esta técnica le permitirá a los desarrolladores y usuarios entender mejor los requerimientos, determinar cuáles son 
                indispensables y cuales deseables, e identificar riesgos de forma temprana.<br><br>

                El prototipo lo puedes enfocar en toda la solución o sólo en áreas específicas.<br><br>

                La construcción de prototipos ayuda para tener  iteraciones entre desarrolladores y usuarios, en los cuales deberás  
                elaborar varias versiones y someterlas a evaluación del cliente obteniendo posibles mejoras.
                
            </p>
        </div>
    </div><br>
</div>
</div>`,
	},
	actividadesProgramacion: {
		id: "actividadesProgramacion",
		titulo: "3.2.2 Actividades para la programación",
		icono: "local_library",
		contenido: `<div class="shadow4 border1 clw">
<div class="textoTitulo titleContainer white-text colorCardTitleContent border1Sup">3.2.2 Actividades para la programación</div>
<div class="cardDesign clw border1Inf">
    <p class=" clbktx textoDinamicoIdentificador textoReadingH2">
        La programación de software se ha convertido en una tarea esencial en la era digital actual. Nos permíteme entender cómo ha cambiado 
        la manera en que interactuamos con el mundo a nuestro alrededor.<br><br>

        La programación de software podemos describirla como el proceso mediante el cual se desarrollan programas informáticos utilizando 
        lenguajes de programación. Estos programas pueden ser de diferentes tipos, como aplicaciones móviles, programas de escritorio, 
        páginas web, entre otros. El objetivo principal es crear soluciones informáticas que permitan automatizar procesos, mejorar la 
        eficiencia en el trabajo y facilitar tareas cotidianas.<br><br>

        ¿Cómo funciona?<br><br>

        Escritura del código: Los programadores utilizan lenguajes como Java, Python, o C# para escribir el código que dará vida al software.<br><br>

        Compilación: El código escrito se transforma en un lenguaje de máquina comprensible por el ordenador. Así, el software se convierte 
        en un archivo ejecutable que puede instalarse en cualquier dispositivo.<br><br>

        ¿Qué puede hacer un programador de software? Un programador de software es un profesional que: <br><br>

        Desarrolla, diseña y mantiene aplicaciones informáticas.<br><br>

        Comprende los requisitos del cliente y crea código que cumpla con esas especificaciones.<br><br>

        Prueba y depura programas para garantizar su correcto funcionamiento.
    </p>
</div>
</div>`,
	},
	actividadesPruebas: {
		id: "actividadesPruebas",
		titulo: "3.2.3 Actividades para las pruebas e implementación",
		icono: "local_library",
		contenido: `<div class="shadow4 border1 clw">
<div class="textoTitulo titleContainer white-text colorCardTitleContent border1Sup">3.2.3 Actividades para las pruebas e implementación</div>
<div class="cardDesign clw border1Inf">
    <p class=" clbktx textoDinamicoIdentificador textoReadingH2">
        Las pruebas e implementación del software son dos procesos importantes que te servirán para asegurar la calidad y el funcionamiento de 
        un producto o aplicación de software.<br><br>

        La <b>prueba de software</b> las podemos definir como el proceso de evaluar y verificar que un producto o aplicación de software hace lo que 
        se supone que debe hacer. Los beneficios de las pruebas incluyen entre otras cosas:  la prevención de errores, la reducción de los 
        costos de desarrollo y la mejora del rendimiento.<br><br>

        Existen varios tipos diferentes de pruebas de software, cada una con objetivos y estrategias específicos, estas son algunas de las 
        actividades que se realizan en cada proceso:<br><br>
        
        Planificación de pruebas: Tendrás que definir el alcance de las pruebas, los casos de prueba, los criterios de aceptación y 
        los recursos necesarios para llevar a cabo las pruebas de manera efectiva. 
    </p>
    <div class="cardDesign clw border1Inf">
        <section class="cardDesign_container">
            <div class="shadow2 border1 clgreyl1">
                <div class="textoTitulo titleContainer clbktx clgreyl2 border1Sup">Pruebas unitarias</div>
                <div class="cardDesign clgreyl1 border1Inf">
                    <p class="clbktx textoDinamicoIdentificador textoReadingH2 textBoldOwn">
                        Es importante que verifiques que cada componente individual del software funcione como se espera, para ello hay que 
                        realizar la escritura y ejecución de pruebas automatizadas para cada unidad de código.
                    </p>
                </div>
            </div>
            <div class="shadow2 border1 clgreyl1">
                <div class="textoTitulo titleContainer clbktx clgreyl2 border1Sup">Pruebas de integración</div>
                <div class="cardDesign clgreyl1 border1Inf">
                    <p class="clbktx textoDinamicoIdentificador textoReadingH2 textBoldOwn">
                        Debes probar la interacción entre diferentes componentes del software y así asegurarte de que funcionen juntos 
                        correctamente. Esto puede incluir pruebas de interfaz, pruebas de comunicación entre sistemas y pruebas 
                        de flujo de datos.
                    </p>
                </div>
            </div>
            <div class="shadow2 border1 clgreyl1">
                <div class="textoTitulo titleContainer clbktx clgreyl2 border1Sup">Pruebas de sistema</div>
                <div class="cardDesign clgreyl1 border1Inf">
                    <p class="clbktx textoDinamicoIdentificador textoReadingH2 textBoldOwn">
                        Estas pruebas son medulares para que verifiques que el sistema completo cumpla con los requisitos funcionales y 
                        no funcionales especificados. Esto implica probar todas las funcionalidades del software que simule el entorno 
                        de producción.
                    </p>
                </div>
            </div>
            <div class="shadow2 border1 clgreyl1">
                <div class="textoTitulo titleContainer clbktx clgreyl2 border1Sup">Pruebas de aceptación del usuario (UAT)</div>
                <div class="cardDesign clgreyl1 border1Inf">
                    <p class="clbktx textoDinamicoIdentificador textoReadingH2 textBoldOwn">
                        Permitirán a los usuarios finales probar el software en un entorno controlado para verificar que cumple con sus 
                        necesidades y expectativas. Esto puede incluir la participación de los usuarios en la revisión de requisitos y 
                        la validación de las características implementadas.
                    </p>
                </div>
            </div>
            <div class="shadow2 border1 clgreyl1">
                <div class="textoTitulo titleContainer clbktx clgreyl2 border1Sup">Pruebas de regresión</div>
                <div class="cardDesign clgreyl1 border1Inf">
                    <p class="clbktx textoDinamicoIdentificador textoReadingH2 textBoldOwn">
                        Después de realizar cambios en el software, se vuelven a ejecutar pruebas para asegurarse de que no se hayan 
                        introducido nuevos errores y de que las funcionalidades existentes aún funcionen como se esperaba.
                    </p>
                </div>
            </div>
            <div class="shadow2 border1 clgreyl1">
                <div class="textoTitulo titleContainer clbktx clgreyl2 border1Sup">Pruebas de rendimiento</div>
                <div class="cardDesign clgreyl1 border1Inf">
                    <p class="clbktx textoDinamicoIdentificador textoReadingH2 textBoldOwn">
                        Te servirán para evaluar el rendimiento del software bajo diferentes condiciones de carga, como el número de 
                        usuarios simultáneos, el volumen de datos y la frecuencia de las transacciones.
                    </p>
                </div>
            </div>
            <div class="shadow2 border1 clgreyl1">
                <div class="textoTitulo titleContainer clbktx clgreyl2 border1Sup">Pruebas de seguridad</div>
                <div class="cardDesign clgreyl1 border1Inf">
                    <p class="clbktx textoDinamicoIdentificador textoReadingH2 textBoldOwn">
                        Estas pruebas te servirán para identificar y abordar posibles vulnerabilidades de seguridad en el software, como 
                        vulnerabilidades de inyección de SQL, ataques de cross-site scripting (XSS) o vulnerabilidades de control de acceso.
                    </p>
                </div>
            </div>
            <div class="shadow2 border1 clgreyl1">
                <div class="textoTitulo titleContainer clbktx clgreyl2 border1Sup">Implementación del software</div>
                <div class="cardDesign clgreyl1 border1Inf">
                    <p class="clbktx textoDinamicoIdentificador textoReadingH2 textBoldOwn">
                        En la implementación empezamos con el resultado del diseño e implementamos el sistema en término de componentes, es decir, 
                        ficheros de código fuente, scripts, ficheros de código binario, ejecutables y similares.<br><br>

                        La implementación es el centro durante las iteraciones de construcción, aunque también se lleva a cabo trabajo 
                        de implementación durante la fase de elaboración, para crear la línea base ejecutable de la arquitectura, y durante 
                        la fase de transición para tratar defectos tardíos.<br><br>

                        En este flujo de trabajo se implementan las clases y objetos en ficheros fuente, binarios, ejecutables y demás. Además, 
                        se deben hacer las pruebas de unidad, es decir, cada implementador es responsable de probar las unidades que produzca. 
                        El resultado final de este flujo de trabajo es un sistema ejecutable.

                    </p>
                </div>
            </div>
            <div class="shadow2 border1 clgreyl1">
                <div class="textoTitulo titleContainer clbktx clgreyl2 border1Sup">Planificación de implementación</div>
                <div class="cardDesign clgreyl1 border1Inf">
                    <p class="clbktx textoDinamicoIdentificador textoReadingH2 textBoldOwn">
                        Establecer un plan detallado para desplegar el software en el entorno de producción. Esto puede incluir la preparación 
                        de los servidores, la configuración del software y la coordinación de la implementación con otros equipos o departamentos.
                    </p>
                </div>
            </div>
            <div class="shadow2 border1 clgreyl1">
                <div class="textoTitulo titleContainer clbktx clgreyl2 border1Sup">Despliegue del software</div>
                <div class="cardDesign clgreyl1 border1Inf">
                    <p class="clbktx textoDinamicoIdentificador textoReadingH2 textBoldOwn">
                        Instalar y configurar el software en el entorno de producción de acuerdo con el plan de implementación establecido. 
                        Esto puede incluir la migración de datos, la configuración de servidores y la integración con otros sistemas existentes
                    </p>
                </div>
            </div>
            <div class="shadow2 border1 clgreyl1">
                <div class="textoTitulo titleContainer clbktx clgreyl2 border1Sup">Pruebas post-implementación</div>
                <div class="cardDesign clgreyl1 border1Inf">
                    <p class="clbktx textoDinamicoIdentificador textoReadingH2 textBoldOwn">
                        Verificar que el software se haya desplegado correctamente y que funcione según lo esperado en el entorno de producción. 
                        Esto puede incluir pruebas de integración final, pruebas de usuario final y monitoreo del rendimiento del sistema.
                    </p>
                </div>
            </div>
            <div class="shadow2 border1 clgreyl1">
                <div class="textoTitulo titleContainer clbktx clgreyl2 border1Sup">Capacitación de usuarios</div>
                <div class="cardDesign clgreyl1 border1Inf">
                    <p class="clbktx textoDinamicoIdentificador textoReadingH2 textBoldOwn">
                        Proporcionar capacitación a los usuarios finales del software para asegurarse de que sepan cómo utilizarlo de manera 
                        efectiva y aprovechar al máximo sus funcionalidades.
                    </p>
                </div>
            </div>
            <div class="shadow2 border1 clgreyl1">
                <div class="textoTitulo titleContainer clbktx clgreyl2 border1Sup">Soporte post-implementación</div>
                <div class="cardDesign clgreyl1 border1Inf">
                    <p class="clbktx textoDinamicoIdentificador textoReadingH2 textBoldOwn">
                        Proporcionar soporte continuo a los usuarios finales para ayudarlos a resolver problemas, responder preguntas, proporcionar actualizaciones y 
                        mejoras según sea necesario.
                    </p>
                </div>
            </div>
            <div class="shadow2 border1 clgreyl1">
                <div class="textoTitulo titleContainer clbktx clgreyl2 border1Sup">Monitoreo y mantenimiento continuo</div>
                <div class="cardDesign clgreyl1 border1Inf">
                    <p class="clbktx textoDinamicoIdentificador textoReadingH2 textBoldOwn">
                        Establecer herramientas y procesos para monitorear el rendimiento y la disponibilidad del software en el entorno de producción, así como para abordar cualquier problema 
                        que surja de manera oportuna.
                    </p>
                </div>
            </div>


        </section><br>
        <p class="clbktx textoDinamicoIdentificador textoReadingH2 textBoldOwn">
            Estas actividades son fundamentales para garantizar que el software cumpla con los requisitos y expectativas del cliente y que 
            se implemente de manera exitosa y sin problemas en el entorno de producción.
        </p>
    </div>
</div>`,
	},
	actividadesDespliegue: {
		id: "actividadesDespliegue",
		titulo: "3.2.4 Actividades para el despliegue y mantenimiento",
		icono: "local_library",
		contenido: `<div class="shadow4 border1 clw">
<div class="textoTitulo titleContainer white-text colorCardTitleContent border1Sup">3.2.4 Actividades para el despliegue y mantenimiento</div>
<div class="cardDesign clw border1Inf">
    <p class=" clbktx textoDinamicoIdentificador textoReadingH2">
        Contenido sobre actividades para el despliegue y mantenimiento
    </p>
</div>
</div>`,
	},
	documentacion: {
		id: "documentacion",
		titulo: "3.2.5 Documentación",
		icono: "local_library",
		contenido: `<div class="shadow4 border1 clw">
<div class="textoTitulo titleContainer white-text colorCardTitleContent border1Sup">3.2.5 Documentación</div>
<div class="cardDesign clw border1Inf">
    <p class=" clbktx textoDinamicoIdentificador textoReadingH2">
        La documentación de software juega un papel imprescindible en el ciclo de vida del desarrollo de un programa. Te ayudará a entender 
        de manera sencilla los programas y procesos, y con esto podrás evitar que el conocimiento se pierda. Visualicemos algunos 
        aspectos clave:<br><br>

        Te has preguntado ¿Qué es la documentación de software? Pues te vamos a decir que cuando hablamos de la documentación de software 
        nos vamos a referir a la información orientada a la descripción del sistema o producto para quienes se encargan de desarrollarlo, 
        implementarlo y utilizarlo. Incluye manuales, funciones de ayuda, versiones en línea y más. Además, te permitirá comprender el 
        producto, su interfaz, capacidades y propiedades.<br><br>

        A continuación te mencionaremos algunas de las características que debe tener la documentación de software:<br><br>
        
    </p>
    <div class="shadow2 border1 clgreyl1 simpleCardText">
        <ul class="browser-default clbktx textoDinamicoIdentificador textoReadingH2 textBoldOwn">
            <li>Describe el producto tecnológico y los procesos de creación.</li>
            <li>Registra el proceso de desarrollo del sistema.</li>
            <li>Ayuda en la solución de problemas.</li>
            <li>Debe ser lo suficientemente detallada para facilitar su uso por parte de los usuarios finales y el equipo de desarrollo y soporte.</li>
        </ul>
    </div><br>
    <p class=" clbktx textoDinamicoIdentificador textoReadingH2">
        Tipos de documentación de software:
    </p>
    <div class="cardDesign clw border1Inf">
        <section class="cardDesign_container">
            <div class="shadow2 border1 clgreyl1">
                <div class="textoTitulo titleContainer clbktx clgreyl2 border1Sup">Requisitos</div>
                <div class="cardDesign clgreyl1 border1Inf">
                    <p class="clbktx textoDinamicoIdentificador textoReadingH2 textBoldOwn">
                        Identifica atributos, capacidades y características del sistema. Describe las necesidades del cliente y las funcionalidades 
                        requeridas por el software. Esto incluye documentos como el Documento de Requisitos del Usuario (URD), el Documento de 
                        Requisitos Funcionales (FRD) y el Documento de Requisitos Técnicos (TRD). 
                    </p>
                </div>
            </div>
            <div class="shadow2 border1 clgreyl1">
                <div class="textoTitulo titleContainer clbktx clgreyl2 border1Sup">Arquitectura/Diseño</div>
                <div class="cardDesign clgreyl1 border1Inf">
                    <p class="clbktx textoDinamicoIdentificador textoReadingH2 textBoldOwn">
                        Ofrece una visión general del software. Describe la arquitectura y el diseño del software. Puede incluir diagramas de 
                        arquitectura, diagramas de flujo, diagramas de clases, diagramas de secuencia, entre otros. También puede incluir una 
                        descripción detallada de los componentes del sistema y sus interacciones.
                    </p>
                </div>
            </div>
            <div class="shadow2 border1 clgreyl1">
                <div class="textoTitulo titleContainer clbktx clgreyl2 border1Sup">Documentación de código</div>
                <div class="cardDesign clgreyl1 border1Inf">
                    <p class="clbktx textoDinamicoIdentificador textoReadingH2 textBoldOwn">
                        Comentarios dentro del código fuente que explican la lógica detrás de cada función, clase o sección importante. También 
                        puede incluir guías de estilo de codificación para mantener la consistencia en el código.
                    </p>
                </div>
            </div>
            <div class="shadow2 border1 clgreyl1">
                <div class="textoTitulo titleContainer clbktx clgreyl2 border1Sup">Documentación técnica</div>
                <div class="cardDesign clgreyl1 border1Inf">
                    <p class="clbktx textoDinamicoIdentificador textoReadingH2 textBoldOwn">
                        Describe aspectos técnicos del software, como la instalación, configuración, integración con otros sistemas, APIs, etc. 
                        Esta documentación es útil para los desarrolladores que necesitan entender cómo utilizar o extender el software.
                    </p>
                </div>
            </div>
            <div class="shadow2 border1 clgreyl1">
                <div class="textoTitulo titleContainer clbktx clgreyl2 border1Sup">Documentación de pruebas</div>
                <div class="cardDesign clgreyl1 border1Inf">
                    <p class="clbktx textoDinamicoIdentificador textoReadingH2 textBoldOwn">
                        Describe los casos de prueba y los resultados de las pruebas realizadas durante el desarrollo del software. Esto puede 
                        incluir documentos como el plan de pruebas, Informes de pruebas y matrices de rastreo de requisitos a pruebas.
                    </p>
                </div>
            </div>
            <div class="shadow2 border1 clgreyl1">
                <div class="textoTitulo titleContainer clbktx clgreyl2 border1Sup">Documentación de despliegue y operaciones</div>
                <div class="cardDesign clgreyl1 border1Inf">
                    <p class="clbktx textoDinamicoIdentificador textoReadingH2 textBoldOwn">
                        Describe los procedimientos para implementar, mantener y operar el software en un entorno de producción. Puede incluir 
                        guías de instalación, configuración, monitoreo y resolución de problemas.
                    </p>
                </div>
            </div>
            <div class="shadow2 border1 clgreyl1">
                <div class="textoTitulo titleContainer clbktx clgreyl2 border1Sup">Documentación del usuario</div>
                <div class="cardDesign clgreyl1 border1Inf">
                    <p class="clbktx textoDinamicoIdentificador textoReadingH2 textBoldOwn">
                        Describe cómo utilizar el software desde la perspectiva del usuario final. Puede incluir manuales de usuario, tutoriales, 
                        guías de inicio rápido, preguntas frecuentes, entre otros.
                    </p>
                </div>
            </div>
            <div class="shadow2 border1 clgreyl1">
                <div class="textoTitulo titleContainer clbktx clgreyl2 border1Sup">Documentación de mantenimiento</div>
                <div class="cardDesign clgreyl1 border1Inf">
                    <p class="clbktx textoDinamicoIdentificador textoReadingH2 textBoldOwn">
                        Describe cómo mantener y actualizar el software a lo largo del tiempo. Puede incluir registros de cambios, hojas 
                        de ruta de desarrollo, políticas de versión y parches, entre otros.
                    </p>
                </div>
            </div>
        </section>
    </div><br>

    <p class="clbktx textoDinamicoIdentificador textoReadingH2 textBoldOwn">
        Es importante mantener esta documentación actualizada a lo largo del ciclo de vida del software, ya que ayuda a facilitar la colaboración 
        entre los miembros del equipo, garantiza la transferencia de conocimiento y facilita la resolución de problemas y la mejora continua 
        del producto.<br><br>

        La documentación de software es fundamental ya que te permitirá mantener la claridad y el conocimiento en el desarrollo y uso de programas. 
    </p>

</div>
</div>`,
	},
	gestionSostenibilidad: {
		id: "gestionSostenibilidad",
		titulo: "3.3 Gestión de sostenibilidad",
		icono: "local_library",
		contenido: `<div class="shadow4 border1 clw">
<div class="textoTitulo titleContainer white-text colorCardTitleContent border1Sup">3.3 Gestión de sostenibilidad</div>
<div class="cardDesign clw border1Inf">
    <p class=" clbktx textoDinamicoIdentificador textoReadingH2">
        La gestión de sostenibilidad en el desarrollo del software la puedes considerar como el proceso de diseñar, construir y ejecutar 
        aplicaciones de software que minimicen el impacto ambiental, social y económico de la tecnología. El software sostenible busca 
        reducir el consumo de energía, las emisiones de gases de efecto invernadero, los residuos electrónicos y otros factores que afectan 
        negativamente al planeta y a las personas. <br><br>
        
        Para que logres este objetivo, puedes aplicar diferentes principios y buenas prácticas de la ingeniería de software sostenible, 
        tales como:<br><br>

        Considerar la sostenibilidad desde el inicio del ciclo de vida del software, incluyendo los requisitos, el diseño, la implementación, 
        las pruebas y el mantenimiento.<br><br>
        
        Utilizar herramientas y metodologías que faciliten la medición, el análisis y la optimización del desempeño ambiental, social y 
        económico del software. <br><br>

        Adoptar estándares y normativas internacionales que promuevan la transparencia y la responsabilidad social en 
        el desarrollo del software. <br><br>

        Incorporar la participación y el feedback de los usuarios y los grupos de interés en el proceso de desarrollo, para asegurar que 
        el software satisfaga sus necesidades y expectativas. 

    </p>
</div>
</div>`,
	},
	materialApoyo: {
		id: "materialApoyo",
		titulo: "Material de apoyo",
		icono: "auto_stories",
		contenido: `<section class="containerActividadAprendizajeFather">
<div class="textoTitulo clbktx">Material de apoyo</div>
<section class="gridActividadesAprendizaje">

    <!-- Tarjeta 1
    <div class="actividadesAprendizaje border1 clgreyl2 shadow2 tarjetaActividades">
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
</section>`,
	},
	actividades: {
		id: "actividades",
		titulo: "Actividades de aprendizaje",
		icono: "fitness_center",
		contenido: `<!--Tarjeta con las actividades-->
<section class="containerActividadAprendizajeFather">
<div class="textoTitulo clbktx">Actividades de aprendizaje</div>
<section class="gridActividadesAprendizaje">
    <!--Tarjeta 4-->
    <div class="actividadesAprendizaje border1 clgreyl2 shadow2 tarjetaActividades">
        <p class="cardTitleActividad tituloActividadAprendizaje clgreyl1 clbktx">Actividad 3</p>
        <p class="truncate descActividadAprendizaje clgreyl1 clbktx">Plan de gestión para la dirección del proyecto</p>
        <a href="./pdf/actividades/ACTIVIDAD_3 Plan de gestion para la dir del proyecto.pdf" target="_blank">
            <div class="buttonDownloadActividadAprendizaje clw border1 shadow2 waves-effect">
                <i class="material-icons clbktx">download</i>
                <span class="clbktx">Descargar</span>
            </div>
        </a>
    </div>

</section>
</section>`,
	},
	cierre: {
		id: "cierre",
		titulo: "Cierre de la unidad temática",
		icono: "local_library",
		contenido: `<div class="shadow4 border1 clw">
<div class="textoTitulo titleContainer white-text colorCardTitleContent border1Sup">Cierre de la unidad temática
</div>
<div class="cardDesign clw border1Inf">
    <p class="clbktx textoDinamicoIdentificador textoReadingH2">
        ¡Felicidades! Has concluido esta unidad temática. Ahora tienes más elementos que te ayudarán a reconocer la
        relevancia que tienen las finanzas en todas las organizaciones y en específico en las empresas,
        independientemente de su constitución, tamaño y giro.
    </p>

    <blockquote class="clgreyl1 clgreytx textoDinamicoIdentificador textoReadingH2">
        Recuerda que las empresas son indispensables en nuestras vidas y que constituyen la columna vertebral de la
        economía. En este sentido, la productividad, la rentabilidad y la competitividad se han convertido en tres
        de las principales pretensiones de muchas empresas. Para lograr dichas pretensiones se requiere, entre otros
        aspectos, de la toma de decisiones basadas en información financiera verídica, confiable y oportuna que se
        verá reflejada en los estados financieros, tema que estudiarás en la unidad temática 2.
    </blockquote>

    <div class="defaultImage">
        <div class="defaultImageContent" id="cierre"></div>
    </div>
    <span class="referenciaIcono clgreyl1 border1 clbktx">Retomado de Pixeltrue proveniente de &nbsp;
        <a href="https://icons8.com/illustrations/illustration/pixeltrue-success" target="_blank">Ouch!</a>
    </span>
</div>
</div>`,
	},
	referencias: {
		id: "referencias",
		titulo: "Referencias",
		icono: "local_library",
		contenido: `11 (referencias)`,
	},
	referencia12: {
		id: "referencia12",
		titulo: "Referencia 12",
		icono: "local_library",
		contenido: `12`,
	},
	referencia13: {
		id: "referencia13",
		titulo: "Referencia 13",
		icono: "local_library",
		contenido: `13`,
	},
	referencia14: {
		id: "referencia14",
		titulo: "Referencia 14",
		icono: "local_library",
		contenido: `14`,
	},
	referencia15: {
		id: "referencia15",
		titulo: "Referencia 15",
		icono: "local_library",
		contenido: `15`,
	},
	referencia16: {
		id: "referencia16",
		titulo: "Referencia 16",
		icono: "local_library",
		contenido: `16`,
	},
};

// Exportar el objeto de contenidos para que pueda ser importado por unidad3.js
export { contenidosUnidad };
