module.exports = function(grunt) {

    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      uglify: {
        options: {
          banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
        },
        build: {
          src: 'assets/script.js',  
          dest: 'build/script.min.js'  
        }
      },
      cssmin: {
        build: {
          src: ['assets/style.css',  'src/anythingone.css'] ,
          dest: 'build/style.min.css'  
        },
      },
      htmlmin: {
        build:{
          options: {  // Add this options object
            collapseWhitespace: true,  // Remove unnecessary spaces
            removeComments: true       // Remove comments
          },
          src: 'agreementPro.html',  
          dest: 'build/agreementpro.min.html'  
        }
      }
    });
  
    
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
  
   
    grunt.registerTask('default', ['uglify', 'cssmin', 'htmlmin']);
  
  };