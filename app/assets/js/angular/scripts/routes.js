/* Routes */
//window.history.star({pushState:true});

app.config(['$routeProvider',
function($route){ 
    
    $route.when("/", {
    	//templateUrl: 'http://'+ window.location.host+"/index.html", 
    	controller: "MailController"
    });

    $route.when("/student", {
    	//templateUrl: 'http://'+ window.location.host+"/index.html", 
    	controller: "StudentController"
    });

    $route.otherwise({redirectTo: '/'});

}]);
