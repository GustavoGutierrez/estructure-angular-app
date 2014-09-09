/** Main Controller **/
controllers.controller('MainController',['$scope', 'Globals', 'Student',
function($scope, Globals, Student){
	    $scope.num=12;
		$scope.photo = {url:"img/caballos.jpg", date:'02-25-2014'};
	    $scope.photos = [{url:"img/caballos.jpg", date:'02-25-2014'},
		                 {url:"img/perro.jpg", date:'04-01-2014'},
		                 {url:"img/caballos.jpg", date:'02-05-2014'},
		                 {url:"img/caballos.jpg", date:'03-03-2014'}];
		
		$scope.initialize = function(){
			//console.log(Student.get({id:2}));
			console.log('controlador Main');
        }

		$scope.run = function(){
			$scope.initialize();
		}

		$scope.run();
	}
]);