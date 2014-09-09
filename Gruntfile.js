module.exports = function(grunt){ 
  
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
  	uglify : {
  		options : {
  			compress : true,
        sourceMap:true,
  			report : true,
  			banner : '/* <%= pkg.name %> v<%= pkg.version %> created <%= grunt.template.today("yyyy-mm-dd") %> \n Created <%= pkg.autor %>\n*/',
  		},
  		app : {
  			files : {
               "public/js/app.min.js": [
                  "app/assets/js/angular/globals.js",
                  "app/assets/js/angular/routes.js",
                  "app/assets/js/angular/filters.js",
                  "app/assets/js/angular/directives/directives/Photo.js",
                  "app/assets/js/angular/services/Student.js",
                  "app/assets/js/angular/controlles/MainController.js",
                  "app/assets/js/angular/controlles/StudentController.js"
               ]
  			}
  		}
  	},

    concat : {
      options : {
        report : true,
        stripBanners: true,
        banner : '/* <%= pkg.name %> v<%= pkg.version %> created <%= grunt.template.today("yyyy-mm-dd") %> \n Created <%= pkg.autor %>\n*/'
      },
      angular: {
            src: ["public/js/vendor/angular.min.js",
                   "public/js/vendor/angular-route.min.js",
                   "public/js/vendor/angular-resource.min.js"],
            dest: 'public/js/vendors.min.js',
      }
    },

    less : {
      production : {
        options : {
          compress : true,
          report:'min', //'min', 'gzip'
          banner : '/* Css <%= pkg.name %> v<%= pkg.version %> created <%=  grunt.template.today("yyyy-mm-dd") %>\n Created <%= pkg.name %>\n */'
        },
        files : {
            "public/css/styles.min.css": "app/assets/less/styles.less",
            "public/css/theme/default.min.css": "app/assets/less/themes/default.less",
            "public/css/theme/blue.min.css": "app/assets/less/themes/blue.less"
          }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-concat');
 
  grunt.registerTask('default', ['uglify', 'less', 'concat']);
}