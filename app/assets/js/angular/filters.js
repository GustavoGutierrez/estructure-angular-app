/* Filters */
filters.filter('isNum', function() {
    return function(input) {
        if(angular.isNumber(input)){
    	console.log('is number'+input);
        	return input;
        }else{
        	console.log('not is number '+input);
        	return '';
        }
    }
});