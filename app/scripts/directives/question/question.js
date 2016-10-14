'use strict';

moduleAngular
	.directive('question', function() {
		return {
      templateUrl: function()'question.html',
      restrict: 'EA',
      scope: {
        type: '@'
      },
      link: function(scope, element) {

        

      }
    };
	});