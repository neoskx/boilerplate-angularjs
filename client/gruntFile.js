
module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-recess');
  grunt.loadNpmTasks('grunt-html2js');

  /**
   * Load the custom project configuration file
   * Because each project is different, so user can define their project's information in this file
   */
  var projectConfig = require('./project.config.js');

  var commonConfig = {
    /**
     * We read our `package.json` file so we can access the package name and version.
     * It's already there, we don't need to repeat here. This can reduce our maintain cause.
     */
    'pkg': grunt.file.readJSON("package.json"),

    /**
     * `meta` store all basic information that will be used in js, css, html... files
     * For example, `banner` is the comment that is placed at the top of our compiled files.
     */
    'meta': {
      'banner': '/*! \n' + ' * <%= pkg.title || pkg.name %> - v<%= pkg.version %>\n' + ' * Build Time: <%= grunt.template.today("dddd, mmmm dS, yyyy, h:MM:ss TT") %>\n' + ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %>;\n' + ' */\n'
    },

    /**
     * `jshint` defines the rules of our linter as well as which files we
     * should check. This file, all javascript sources, and all our unit tests
     * are linted based on the policies listed in `options`. But we can also
     * specify exclusionary patterns by prefixing them with an exclamation
     * point (!); this is useful when code comes from a third party but is
     * nonetheless inside `src/`.
     */
    'jshint': {
      'options': {
        'globals':{
          'jQuery':true,
          'angular':true
        },
        'force':true,
        'reporter': 'checkstyle',
        'reporterOutput': '<%= log %>/jshint-reporter.xml'
      },
      'app_js': ['<%= app_files.app_js %>']
    },

    /**
     * `recess` lint and minify CSS and LESS
     * 1. In `development` mode, compile LESS files, then put it in **develop folder**(this folder you can configure it in `project.config.js`)
     * 2. In `production` mode, compile and compress LESS files, then put it in **production folder**(this folder you can configure it in `project.config.js`)
     */
    'recess': {
      'development':{
        'options': {
          'compile': true,
          'compress': false,
          'noUnderscores': false,
          'noIDs': false,
          'zeroUnits': false
        },
        'src': ['<%= app_files.less.src%>'],
        'dest':'<%= app_files.less.dest_dev%>'
      },
      'production':{
        'options': {
          'compile': true,
          'compress': true,
          'noUnderscores': false,
          'noIDs': false,
          'zeroUnits': false
        },
        'src': ['<%= app_files.less.src%>'],
        'dest':'<%= app_files.less.dest_prod%>'
      }
    },

    /**
     * `grunt-html2js`: Compiles AngularJS templates to JavaScript
     * 1. In `development` mode, we don't compile it
     * 2. In `procduction` mode, we compile it, and put it to `partials/template.js`
     */
    'html2js':{
      'development':{
      },
      'production':{
        'options':{
          'base': 'src'
        },
        'src':['<%= app_files.tpl %>'],
        'dest':'<%= production_dir %>/partials/template.js'
      }
    }
  };

  // Project configuration.
  grunt.initConfig(grunt.util._.extend(commonConfig, projectConfig));

  grunt.registerTask('default', ['build']);
  grunt.registerTask('build', ['jshint']);

};










