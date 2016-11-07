'use strict';

/**
 * @ngdoc function
 * @name cursoAngular20162017App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the cursoAngular20162017App
 */
moduleAngular
  .controller('FormCtrl', ['$scope', function ($scope) {
    $scope.name = 'formulario';
    $scope.results = [];
  	$scope.data =
    // [
    {
      nombre: {
        name: 'nombre',
        model: null,
        label: 'Nombre',
        required: true,
        maxlength: 30,
        pattern: /^[\w ]+$/
      },
      pass: {
        name: 'pass',
        model: null,
        label: 'Contraseña',
        required: true,
        minlength: 4
      },
      nacimiento: {
        name: 'nacimiento',
        model: null,
        label: 'Fecha de nacimiento',
        required: true,
        min: new Date("January 1, 1900 00:00:00"),
        max: new Date()
      },
      email: {
        name: 'email',
        model: null,
        label: 'Email',
        required: true,
      },
      parpadeos: {
        name: 'parpadeos',
        model: null,
        label: '¿Cuantas veces parpadeas cada día?',
        required: true
      },
      pokemon: {
        name: 'pokemon',
        model: '',
        label: '¿Qué pokémon elegiste de inicio?',
        options: [{
          label: 'Bulbasaur',
          value: 'bulbasaur'
        }, {
          label: 'Charmander',
          value: 'charmander'
        }, {
          label: 'Squirtle',
          value: 'squirtle'
        }]
      },
      color: {
        name: 'color',
        model: null,
        label: '¿Cual es tu color favorito?',
        required: true,
        options: [{
          label: 'Rojo',
          value: 'rojo'
        }, {
          label: 'Azul',
          value: 'azul'
        }, {
          label: 'Verde',
          value: 'verde'
        }, {
          label: 'Amarillo',
          value: 'Amarillo'
        }, {
          label: 'Blanco',
          value: 'Blanco'
        }, {
          label: 'Negro',
          value: 'negro'
        }]
      },
      spam: {
        name: 'spam',
        model: false,
        label: '¿Quieres que te enviemos spam?'
      }
    };
    //];

    $scope.submit = function() {
      var formData = [];
      // $scope.data.forEach(function(question) {
      Object.keys($scope.data).forEach(function(name) {

        var question =  $scope.data[name];
        var questionCtrl = $scope[$scope.name][question.name];

        // Al hacer el ngSubmit del formulario, solo al campo date le ponía el ngDirty
        // y le quitaba el ngPristine, y podía ver los errores, pero al resto de campos
        // se lo tengo que poner yo mismo...
        questionCtrl.$setDirty();

        // Cargo esto aquí para evitarme repetir el bucle más abajo.
        if (questionCtrl.$valid) {

          formData.push({
            question: question.label,
            answer: question.model
          });
        }
      });

      if ($scope.formulario.$valid) {
        $scope.results = formData;

        $('#modal .modal').modal();
      }
    }
  }]);
