angular.module('app').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('components.photo.html',
    "<figure><img ng-src=\"{{ photoSrc }}\" width=\"520\" height=\"346\"><figcaption>Tomada: {{caption}}</figcaption></figure>"
  );


  $templateCache.put('components.product-title.html',
    "<div><p class=\"bg-info\">Product: {{ name }} <em class=\"pull-right\">Presio: {{ price }}</em></p></div>"
  );


  $templateCache.put('pages.home.html',
    "<div class=\"row\"><div class=\"col-md-12\"><h1>En el template home</h1><div data-product-title=\"\" price=\"25400\" name=\"Papa Rellena\"></div><input type=\"text\" value=\"{{ num | isNum }}\" ng-model=\"num\"><p>{{ num }}</p><photo photo-src=\"{{ photo.url }}\" capstring=\"{{ photo.date }}\"></photo></div></div>"
  );


  $templateCache.put('pages.student.html',
    "<h1>Estudiantes</h1>"
  );

}]);
