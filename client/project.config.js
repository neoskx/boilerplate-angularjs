/**
 *
 */
module.exports = {
	/**
     * `production_dir` this folder store all compiled files that is ready for **Release**.
     */
	'production_dir': 'release',
	
	/**
     * `build_dir` this folder store all compiled JavaScript, CSS, HTML, images... sources.
     */
	'build_dir':'build',

	'source_dir': 'src',

	/**
	 * `log` this folder store all the log files
	 */
	'log': 'log',

	'app_files': {
		// All the JavaScript files used in this project
		'app_js': ['<%= source_dir %>/**/*.js', '!<%= source_dir %>/**/*.spec.js', '!<%= source_dir %>/**/*.lang.js'],
		// All test files
		'spec_js': ['<%= source_dir %>/**/*.spec.js'],
		// Language files
		'lang_js': ['<%= source_dir %>/**/*.lang.js'],

		// All templates in this project. we will put template to angular templatecache
		'tpl': ['<%= source_dir %>/**/*.tpl.html'],
		// All css file.
		'less': {
			'src':['<%= source_dir %>/assets/less/stylesheet.less'],
			'dest_dev':'<%= source_dir %>/assets/css/<%= pkg.name %>-<%= pkg.version %>.css',
			'dest_prod':'<%= production_dir %>/assets/css/<%= pkg.name %>-<%= pkg.version %>.css'
		},
		'lessWatch':['<%= source_dir %>/assets/less/**/*.less']
	}

};