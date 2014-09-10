/** Photo Directive **/
directives.directive('productTitle', ['Globals','$templateCache', function(Globals, $templateCache){
	console.log('esta en la directiva',$templateCache.get('product-title.html'));
	return {
		   restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
		   template: $templateCache.get('product-title.html'),
		   replace: true,
		   scope:{
		   	       name:'@name',
		           price:'@price'
		           } 
	      };
}]);
