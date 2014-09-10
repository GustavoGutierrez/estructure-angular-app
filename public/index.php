<!DOCTYPE html>
<html lang="en" ng-app="app">
<head>
	<meta charset="UTF-8">
	<title>Angular en acción</title>

   <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css" rel="stylesheet">

</head>
<body ng-controller="MainController">
<div class="container">
   <div class="row">
     <div class="col-md-12">
       <div data-product-title="" price="25400" name="Papa Rellena"></div>
      <input type="text" value="{{ num | isNum }}" ng-model="num">
      <p>{{ num }}</p>
      <photo photo-src="{{ photo.url }}" capstring="Tomada el : {{ photo.date }}"></photo>
     </div>
   </div>
   
   <div class="row">
    <div class="col-md-12">
      <p>Recuerda que se instala primero:
         npm install grunt --save-dev<br/>
         npm install grunt-contrib-uglify --save-dev<br/>
         npm install grunt-contrib-less --save-dev</p>
         <p>Se puede usar el siguiente codigo para incluir template</p>
         <p>Usando Javascript:</p>
         <pre>
            $templateCache.get( 'templateId.html')
         </pre>

      </div>
   </div>

</div> 
   <!-- script app -->
   <script src="js/vendors.min.js"></script>
   <script src="js/app.min.js"></script>
   <script src="js/templates.js"></script>
</body>
</html>