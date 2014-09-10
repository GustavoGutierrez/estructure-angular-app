# Estructura Aplicación Angular js
Estructura para crear aplicación angularjs. La mejor forma para ordenar los archivos y carpetas segun mi experiencia, puedes hacer cualquier cambio que creas conveniente y necesario; esto solo es una base de partida y una idea de como se deberia hacer.
## Ejecutar en consola:
###Instalación de dependencias
       > npm install grunt-cli
       > npm install grunt --save-dev
       > npm install grunt-contrib-uglify --save-dev
       > npm install grunt-contrib-less --save-dev
       > npm install grunt-contrib-watch --save-dev

Esto ejecuta grunt y notifica paso a paso sus tareas con detalle

     > grunt -v
   
   se puede usar solo esto: ***> grunt***

   No confundir con ***> grunt -V***
   esto mustra la versión de grunt instalada en node.

Se debe instalar la extension livereload para que automaticamente se refresque el navegador al hacer cambios en los scripts o less atravez de las tareas watch
https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei

Se debe ejecutar en la consola de esta manera para que este atento a los cambios en el codigo
	
	> grunt watch

###Contributing

All issues and pull requests should be filed on the GustavoGutierrez/estructure-angular-app repository.

###License

The code is open-sourced - libre para todos y sus dependencias son propiededa de su desarrolldor