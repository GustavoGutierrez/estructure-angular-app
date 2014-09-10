/** Photo Directive **/
directives.directive('photo', ['Globals','$templateCache', function(Globals, $templateCache){
	return {
		   restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		   template: $templateCache.get('photo.html'),
		   replace: true,
		   scope:{
		   	       caption:'@capstring',
		           photoSrc:'@'
		           } 
	      };
}]);
