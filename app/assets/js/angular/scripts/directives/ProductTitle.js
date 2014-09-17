/**
 * Photo Title Directive
 * @param  Object Globals Parametros compartidos Globales
 * @return photoTitleView
 */
directives.directive('productTitle', [function(){
	return {
		   restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
		   //template: $templateCache.get('product-title.html'),
		   templateUrl:'components.product-title.html',
		   replace: true,
		   scope:{
		   	       name:'@name',
		           price:'@price'
		           } 
	      };
}]);
