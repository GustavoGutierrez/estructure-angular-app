/* Filters */
filters.filter('isNum', function() {
    return function(input) {
    	console.log(input);
        if(angular.isNumber(input)){
        	return input;
        }else{
        	return null;
        }
    }
});