angular.module('app').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('photo.html',
    "<figure><img ng-src=\"{{ photoSrc }}\" width=\"500px\"><figcaption>Desde template {{caption}}</figcaption></figure>"
  );


  $templateCache.put('product-title.html',
    "<div><p class=\"bg-info\">Product: {{ name }} <em class=\"pull-right\">Presio: {{ price }}</em></p></div>"
  );

}]);
