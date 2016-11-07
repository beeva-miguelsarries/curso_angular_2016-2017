'use strict';

moduleAngular
	.directive('modal', function() {
		return {
      templateUrl: '../../views/modal.html',
      restrict: 'E',
      scope: {
        results: '='
      }
    }
  });
