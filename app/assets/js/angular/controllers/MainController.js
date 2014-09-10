/** Main Controller **/
app.controller('MainController',['$scope', 'Globals','Student',
	function($scope, Globals, Student){
	    $scope.num=12;
		$scope.photo = {url:"img/caballos.jpg", date:'02-25-2014'};
		/**
		 * initialize objects prerequired
		 * @return void
		 */
		$scope.initialize = function(){
			console.log(Student.get({id:2,action:'edit'}));
			console.log('controlador Main');
        }
       
	   $scope.initialize();
	}
]);