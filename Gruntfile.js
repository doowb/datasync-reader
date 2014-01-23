/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    /**
     * Lint all JavaScript
     */
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      files: [
        'Gruntfile.js',
        'src/**/*.js',
        'test/**/*.js'
      ]
    },

    /**
     * Run mocha tests.
     */
    mochaTest: {
      tests: {
        options: {
          reporter: 'progress'
        },
        src: ['test/**/*_test.js']
      }
    },

    readme: {
      options: {
        boilerplate: 'node-util'
      }
    },

    watch: {
      dev: {
        files: ['<%= jshint.files %>'],
        tasks: ['default']
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-readme');

  // Default task.
  grunt.registerTask('default', ['test']);
  grunt.registerTask('test', ['mochaTest']);
  grunt.registerTask('dev', ['default', 'watch']);

};
