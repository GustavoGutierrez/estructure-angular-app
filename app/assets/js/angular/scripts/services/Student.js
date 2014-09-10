/** Service student **/
services.factory('Student',['$resource', 'Globals',
 	function($resource, Globals){
      var urlApi = Globals.apiUrl('student/:id/:action');
      return $resource(urlApi,
                       {
      	                action:'@action',
                        id:'@id'
                       },
      	               {
      	               	test:{
                           method:'POST', 
                           params:{
                           	 action:'test'
                           }
      	                }
      	               });
    }]);