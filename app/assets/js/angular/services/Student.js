/** Service student **/
services.factory('Student',
 	function($resource, Globals){
      var urlApi = Globals.apiUrl('student/:action/:param');
      return $resource(urlApi,
                       {
      	                action:'@action',
                        param:'@param'
                       },
      	               {
      	               	test:{
                           method:'POST', 
                           params:{
                           	 action:'test'
                           }
      	                }
      	               });
    });