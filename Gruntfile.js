
/**
 * grunt-pagespeed-ngrok
 * http://www.jamescryer.com/grunt-pagespeed-ngrok
 *
 * Copyright (c) 2014 James Cryer
 * http://www.jamescryer.com
 */
'use strict'

var ngrok = require('ngrok');

module.exports = function(grunt) {

  // Load grunt tasks
  require('load-grunt-tasks')(grunt);

  // Grunt configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    imagemin: {
      dynamic: {
        options: {
            optimizationLevel: 7,
            progressive: true,
        },
        files: [{
            expand: true,
            cwd: "img/",
            src: "**/*.{gif,GIF,jpg,JPG,png,PNG}",
            dest: "imgMin/"
        }, {
            expand: true,
            cwd: "views/images/",
            src: "**/*.{gif,GIF,jpg,JPG,png,PNG}",
            dest: "views/imageMin/"
        }]
      }
    },
    pagespeed: {
      options: {
        nokey: true,
        locale: "en_GB",
        threshold: 40
      },
      local: {
        options: {
          strategy: "desktop"
        }
      },
      mobile: {
        options: {
          strategy: "mobile"
        }
      }
    }
  });

  // Register customer task for ngrok
  grunt.registerTask('psi-ngrok', 'Run pagespeed with ngrok', function() {
    var done = this.async();
    var port = 8000;

    ngrok.connect(port, function(err, url) {
      if (err !== null) {
        grunt.fail.fatal(err);
        return done();
      }
      grunt.config.set('pagespeed.options.url', url);
      grunt.task.run('pagespeed');
      done();
    });
  });
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  // Register default tasks
  grunt.registerTask('default', ['psi-ngrok']);
  grunt.registerTask('imagemin' ['imagemin']);
};
