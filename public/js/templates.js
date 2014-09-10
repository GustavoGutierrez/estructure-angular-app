angular.module('app').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('photo.html',
    "<figure><img ng-src=\"{{ photoSrc }}\" width=\"500px\"><figcaption>Tomada: {{caption}}</figcaption></figure>"
  );


  $templateCache.put('product-title.html',
    "<div><p class=\"bg-info\">Product: {{ name }} <em class=\"pull-right\">Presio: {{ price }}</em></p></div>"
  );


  $templateCache.put('product.html',
    "<div class=\"product\"><h3>{{ name }}</h3><em class=\"pull-right\">Presio: {{ price }}</em><p>{{ description }}</p></div>"
  );

}]);
