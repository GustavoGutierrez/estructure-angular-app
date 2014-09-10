<!DOCTYPE html>
<html lang="en" ng-app="app">
<head>
	<meta charset="UTF-8">
	<title>Angular en acción</title>
</head>
<body ng-controller="MainController">
   <input type="text" value="{{ num | isNum }}" ng-model="num">
   <p>{{ num }}</p>
   <photo photo-src="{{ photo.url }}" capstring="Tomada el : {{ photo.date }}" />
   <p>Recuerda que se instala primero:
   npm install grunt --save-dev<br/>
   npm install grunt-contrib-uglify --save-dev<br/>
   npm install grunt-contrib-less --save-dev</p>
   
   <!-- script app -->
   <script src="js/vendors.min.js"></script>
	<script src="js/app.min.js"></script>
</body>
</html>