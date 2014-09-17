/** Photo Directive **/
directives.directive('photo', [function(){
	return {
		   restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		   templateUrl: 'components.photo.html',
		   replace: true,
		   scope:{
		   	       caption:'@capstring',
		           photoSrc:'@'
		           } 
	      };
}]);
