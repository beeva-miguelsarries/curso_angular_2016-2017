'use strict';

moduleAngular
	.directive('question', function() {
		return {
      templateUrl: function(el, args) {
        var views = ['text', 'number', 'date', 'radio', 'checkbox', 'select', 'textarea'];
        var view = (views.indexOf(args.type) > -1 ? args.type : 'text');
        return '../../views/inputs/' + view + '.html';
      },
      restrict: 'EA',
      scope: {
        type: '@',
        model: '=',
        name: '@',
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
      link: function(scope, element) {
        scope.self = scope.$parent[scope.$parent.name][scope.name];
      }
    };
	});
