'use strict';
/* Config and Globals */
var app = angular.module('App', [
  'ngRoute',
  'ngResource',
  'App.filters',
  'App.services',
  'App.directives',
  'App.controllers'
]);

var services = angular.module('App.services', ['ngResource']);
var controllers = angular.module('App.controllers', []);
var filters = angular.module('App.filters', []);
var directives = angular.module('App.directives', []);

app.constant('Globals', {
	                     version:'1.0.0',
	                     rootUrl:'http://localhost/estructure-angular-app/public/',
	                     apiUrl:function(service){
	                     	return this.generateUrl(service,'api');
	                     },
	                     viewUrl:function(filename){
	                     	return this.generateUrl('js/app/views/'+filename);
	                     },
	                     generateUrl:function(request, pathRoot){
	                     	var rootUrl = this.rootUrl;
	                     	var params='';

	                     	if(!angular.isUndefined(pathRoot)){
                                 rootUrl= rootUrl+pathRoot+'/'; 
	                     	}
	                     	
	                     	if(angular.isUndefined(request)){
	                     	  return rootUrl;	
	                     	}else if(angular.isString(request)){
	                     	  params = request;
	                     	}else if(angular.isObject(request) || angular.isArray(request)){
	                     	   angular.forEach(request, function(value){
                               	 params+=value+'/';
                               });
	                     	}
	                     	return rootUrl+params;
	                     }
	                    });