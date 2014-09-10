/* Filters */
filters.filter('isNum', function() {
    return function(input) {
        if(angular.isNumber(input)){
        	return input;
        }else{
        	return '';
        }
    }
});