module.exports = function(grunt){ 
  
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
  	uglify : {
  		options : {
  			compress : true,
        sourceMap:true,
  			report : 'min',
        preserveComments:false,
  			banner : '/* <%= pkg.name %> v<%= pkg.version %> created <%= grunt.template.today("yyyy-mm-dd") %> \n Created <%= pkg.author %>\n*/',
  		},
  		app : {
  			files : {
               "public/js/app.min.js": [
                  "app/assets/js/angular/globals.js",
                  "app/assets/js/angular/routes.js",
                  "app/assets/js/angular/filters.js",
                  "app/assets/js/angular/services/**.js",
                  "app/assets/js/angular/directives/**.js",
                  "app/assets/js/angular/controllers/**.js",
               ]
  			}
  		}
  	},

    concat : {
      options : {
        report : true,
        stripBanners: true,
        banner : '/* Vendor for <%= pkg.name %> v<%= pkg.version %> created <%= grunt.template.today("yyyy-mm-dd") %> \n Created for <%= pkg.author %>\n*/'
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
          banner : '/* Css <%= pkg.name %> v<%= pkg.version %> created <%=  grunt.template.today("yyyy-mm-dd") %>\n Created <%= pkg.author %>\n */'
        },
        files : {
            "public/css/styles.min.css": "app/assets/less/styles.less",
            "public/css/theme/default.min.css": "app/assets/less/themes/default.less",
            "public/css/theme/blue.min.css": "app/assets/less/themes/blue.less"
          }
      }
    },

    watch: {
      all: {
        options: { livereload: true },
        files: ['public/js/angular/**.js'],
        tasks: ['uglify'],
      },
    }

  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-concat');
  //grunt.loadNpmTasks('grunt-contrib-livereload');
 
  grunt.registerTask('default', ['uglify', 'less', 'concat']);
}