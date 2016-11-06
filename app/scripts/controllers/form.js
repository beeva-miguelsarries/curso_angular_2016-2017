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
  	$scope.data = {
      nombre: {
        model: null,
        label: 'Nombre',
        required: true,
        maxlength: 30,
        pattern: /^[\w ]+$/
      },
      pass: {
        model: null,
        label: 'Contraseña',
        required: true,
        minlength: 4
      },
      nacimiento: {
        model: null,
        label: 'Fecha de nacimiento',
        required: true,
        min: new Date("January 1, 1900 00:00:00"),
        max: new Date()
      },
      email: {
        model: null,
        label: 'Email',
        required: true,
      },
      parpadeos: {
        model: null,
        label: '¿Cuantas veces parpadeas cada día?',
        required: true
      },
      pokemon: {
        model: null,
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
        model: false,
        label: '¿Quieres que te enviemos spam?'
      }
  	};

    $scope.submit = function() {

      // solo al date le ponía ng-dirty y le quitaba ng-pristine al hacer el ngSubmit...
      Object.keys($scope.data)
        .map(k => $scope[$scope.name][k])   // este mapeo depende de que al <question> le demos el mimso name que la clave del $scope.data
        .filter(el => !!el && !!el.$setDirty)
        .forEach(el => el.$setDirty());

      if ($scope.formulario.$valid) {
        var send = Object.keys($scope.data)
          .map(k => ({ q: $scope.data[k].label, a: $scope.data[k].model }));

        console.log('iee', send);
      }
    }
  }]);
