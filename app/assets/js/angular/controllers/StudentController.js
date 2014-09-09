/** Main Controller **/
controllers.controller('StudentController',['$scope', 'Globals', 'Student',
function($scope, Globals, Student){
	    $scope.num=12;		
		$scope.initialize = function(){
			//console.log(Student.get({id:2}));
			console.log('controlador estudiante');
        }

		$scope.run = function(){
			$scope.initialize();
		}

		$scope.run();
	}
]);