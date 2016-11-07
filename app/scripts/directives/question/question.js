'use strict';

moduleAngular
	.directive('question', function() {
		return {
      // template: '<div ng-include src="questionUrl()"></div>',
      templateUrl: function(el, attrs) {
        var views = ['text', 'number', 'date', 'radio', 'checkbox', 'select', 'textarea'];
        var view = (views.indexOf(attrs.type) > -1 ? attrs.type : 'text');  // email y password van a text
        return '../../views/inputs/' + view + '.html';
      },
      restrict: 'EA',
      scope: {
        // type: '@',
        model: '=',
        name: '=',
        label: '=',
        required: '=',
        max: '=',
        min: '=',
        maxlength: '=',
        minlength: '=',
        step: '=',
        pattern: '=',
        options: '='
      },
      link: function(scope) {
        /*
        var views = ['text', 'number', 'date', 'radio', 'checkbox', 'select', 'textarea'];
        var view = (views.indexOf(scope.type) > -1 ? scope.type : 'text');

        // El parámetro de attrs que cogería en templateUrl para sacar la vista no se
        // interpola durante la ejecución de la directiva.
        // Además, es como que llama a la directiva, ejecuta su compile, y luego la repite,
        // pero solo ejecuta link, como explicas en las diapositvas.
        // Resulta que los atributos que tuviera tambien los carga solo la primera vez.
        //
        // http://stackoverflow.com/questions/28414568/angularjs-templateurl-fails-to-bind-attributes-inside-ng-repeat
        // http://stackoverflow.com/questions/21835471/angular-js-directive-dynamic-templateurl
        scope.questionUrl = function() {
          return '../../views/inputs/' + view + '.html';
        }

        // Resulta que por motivos ajenos a mi salud mental, formCtrl, el controlador del formulario no
        // cargaba sus NgModelController, pero al hacerlo asíncrono pues sí. (en la consola de chrome
        // me salían, pero al llamarlos no aparecían (!!!), ni con Object.keys, ni nada...)
        setTimeout(function() {
          // El primer $parent es el del ng-include
          var formCtrl = scope.$parent.$parent[scope.$parent.$parent.name];
          scope.self = scope.$parent.$parent[scope.$parent.$parent.name][scope.name];
        }, 0);
        */

        scope.self = scope.$parent[scope.$parent.name][scope.name];
      }
    };
	});
