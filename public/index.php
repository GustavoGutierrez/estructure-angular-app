<!DOCTYPE html>
<html lang="en" ng-app="app">
<head>
	<meta charset="UTF-8">
	<title>Angular en acción</title>
</head>
<body ng-controller="MainController">
   <ul class="menu">
   <li><a href="#">item 1</a></li>
   <li><a href="pagina2.html">item 2</a></li>
   <li><a href="pagina3.html">item 3</a></li>
   </ul>
   <input type="text" value="{{ num | isNum }}" ng-model="num">
   <p>{{ num }}</p>
   <photo photo-src="{{ photo.url }}" capstring="Tomada el : {{ photo.date }}" />
   <p>Recuerda que se instala primero:
   npm install grunt --save-dev<br/>
   npm install grunt-contrib-uglify --save-dev<br/>
   npm install grunt-contrib-less --save-dev</p>
   <script src="js/vendors.min.js"></script>
	<script src="js/app.min.js"></script>
</body>
</html>