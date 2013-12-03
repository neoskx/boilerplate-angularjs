module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

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

    'jshint': {
      'options': {
        'globals':{
          'jQuery':true,
          'angular':true
        },
        'force':true,
        'reporter': 'checkstyle',
        'reporterOutput': '<%= build_dir %>/jshint-reporter.xml'
      },
      'app_js': ['<%= app_files.app_js %>']
    }

  };


  // Project configuration.
  grunt.initConfig(grunt.util._.extend(commonConfig, projectConfig));

  console.log('%s',commonConfig.jshint.src);

  grunt.registerTask('default', ['build']);
  grunt.registerTask('build', ['jshint']);

};