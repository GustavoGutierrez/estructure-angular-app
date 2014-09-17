/** Main Controller **/
app.controller('MainController',['$scope','$location', 'Globals',
	function($scope, $location, Globals){
	    $scope.num=89;
	    $scope.name = 'Prueba nombre';
		$scope.photo = {url:"img/caballos.jpg", date:'02-25-2014'};
		/**
		 * initialize objects prerequired
		 * @return void
		 */
		$scope.initialize = function(){
			//console.log(Student.get({id:2,action:'edit'}));
			console.log('controlador Main');
        }      
	   $scope.initialize();
	}
]);