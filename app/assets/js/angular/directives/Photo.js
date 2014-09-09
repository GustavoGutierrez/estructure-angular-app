/** Photo Directive **/
directives.directive('photo', ['Globals', function(Globals){
	return {
		   restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		   templateUrl: Globals.viewUrl('photo.html'),
		   replace: true,
		   scope:{
		   	       caption:'@capstring',
		           photoSrc:'@'
		           } 
	      };
}]);
