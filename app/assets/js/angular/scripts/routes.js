/* Routes */
//window.history.star({pushState:true});

app.config(['$routeProvider','$locationProvider',
function($routeProvider, $locationProvider){ 
    
    $locationProvider.baseHref = "http://localhost/";
    //$locationProvider.html5Mode(true);//.hashPrefix('!');
    
    $routeProvider.when("/", {
    	templateUrl: 'pages.home.html', 
    	controller: "MainController"
    });

    $routeProvider.when("/student", {
    	templateUrl: 'pages.student.html', 
    	controller: "StudentController",
    });

    $routeProvider.otherwise({redirectTo: '/'});
    

}]);
