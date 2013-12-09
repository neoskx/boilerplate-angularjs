
module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-recess');
  grunt.loadNpmTasks('grunt-html2js');

  grunt.loadNpmTasks('grunt-ngmin');

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
        'dest':'<%= app_files.less.dest_dev %>'
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
    },

    /**
     * 
     */
     'index': {
        'development':{
          'dir': '<%= source_dir %>',
          'src': [
            '<%= vendor_files.css %>',
            '<%= vendor_files.js %>',
            '<%= app_files.less.dest_dev %>',
            '<%= app_files.app_js%>'
          ]
        },
        'production':{

        }
     }

  };

  /**
   * A utility function to get all app JavaScript sources.
   */
  function filterForJS ( files ) {
    return files.filter( function ( file ) {
      return file.match( /\.js$/ );
    });
  }

  /**
   * A utility function to get all app CSS sources.
   */
  function filterForCSS ( files ) {
    return files.filter( function ( file ) {
      return file.match( /\.css$/ );
    });
  }

  /** 
   * The index.html template includes the stylesheet and javascript sources
   * based on dynamic names calculated in this Gruntfile. This task assembles
   * the list into variables for the template to use and then runs the
   * compilation.
   */
  grunt.registerMultiTask( 'index', 'Process index.html template', function () {

    var dirRE = new RegExp( '^('+grunt.config('build_dir')+'|'+grunt.config('source_dir')+'|'+grunt.config('production_dir')+')\/', 'g' );
    var jsFiles = filterForJS( this.filesSrc ).map( function ( file ) {
      return file.replace( dirRE, '' );
    });
    var cssFiles = filterForCSS( this.filesSrc ).map( function ( file ) {
      return file.replace( dirRE, '' );
    });

    grunt.file.copy( this.data.dir + '/index-original.html', this.data.dir + '/index.html', { 
      process: function ( contents, path ) {
        return grunt.template.process( contents, {
          data: {
            scripts: jsFiles,
            styles: cssFiles,
            version: grunt.config( 'pkg.version' )
          }
        });
      }
    });
  });

  // Project configuration.
  grunt.initConfig(grunt.util._.extend(commonConfig, projectConfig));

  grunt.registerTask('default', ['build']);
  grunt.registerTask('build', ['jshint']);

};










