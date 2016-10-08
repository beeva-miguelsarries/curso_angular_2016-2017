# Curso_angular_2016-2017

**CURSO BÁSICO**

**Contenido del bloque teórico:**

* Introducción
* Data binding
* Controladores
* Scope
* Inyección de dependencia
* Expresiones
* Directivas nativas
* Control de errores
* Buenas prácticas

**Contenido del bloque práctico:**

Comenzaremos un ejercicio básico para construir un formulario, utilizando para ello las directivas nativas imprescindibles de Angular. Se trabajará de forma individual.


**CURSO AVANZADO**

**Contenido del bloque teórico:**

* Directivas personalizadas
* Servicios
* Filtros
* Transclusión
* Herencia de directivas
* Angular 2

**Contenido del bloque práctico:**

Partiendo del ejercicio básico, crear una directiva personalizada llamada question que permita crear cada tipo de input con su correspondiente control de errores de una forma clara y sencilla.

Como ejercicio opcional, desarrollar el juego del tres en raya.

**REQUISITOS TECNOLÓGICOS**

En este repositorio se proporcionará el esqueleto del cual partir para realizar el ejercicio básico. Los alumnos deberán hacerse un Fork de dicho esqueleto.

Para poder asistir a los cursos de Angular será necesario:
* Traer el ordenador
* Tener instalados los siguientes programas:
    * Git
    * Grunt
    * NPM (una vez instalado, npm install)
    * Bower (una vez instalado, bower update)

Seguiremos los siguientes pasos para lanzar la aplicación:
* Hacemos un fork (desde la aplicación Web de Git) para copiar el repositorio en nuestra cuenta
* Desde consola de comandos hacemos un clone del repositorio a nuestra carpeta local ( **git clone https://github.com/beeva-xxxx/curso_angular_2016-2017.git**)
* Accedemos a la carpeta donde se encuentra el fichero **bower.json**
* Instalamos todos los paquetes (npm install, bower update)
* Cambiamos de rama a la que corresponda según el ejercicio (git branch ejercicio-basico, ejercicio-avanzado)
* Arrancamos el servidor con **grunt serve**
* En cualquier navegador: **http://localhost:9000**


**ENLACES DE INTERÉS**

Para instalar las herramientas de Yeoman, un generador de Angular y el resto de elementos necesarios para dejar la estructura preparada (además de los test de prueba), y poder ejecutar un servidor con grunt os dejo un par de enlaces muy interesantes:
* https://www.toptal.com/angular-js/your-first-angularjs-app-part-2-scaffolding-building-and-testing
* https://github.com/angular-fullstack/generator-angular-fullstack
