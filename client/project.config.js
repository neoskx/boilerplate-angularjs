/**
 *
 */
module.exports = {
	/**
     * `release_dir` this folder store all compiled files that is ready for **Release**.
     */
	'release_dir': 'release',
	
	/**
     * `build_dir` this folder store all compiled JavaScript, CSS, HTML, images... sources.
     */
	'build_dir':'build',

	'app_files': {
		// All the JavaScript files used in this project
		'app_js': ['src/**/*.js', '!src/**/*.spec.js', '!src/**/*.lang.js'],
		// All test files
		'spec_js': ['src/**/*.spec.js'],
		// Language files
		'lang_js': ['src/**/*.lang.js'],

		// All templates in this project. we will put template to angular templatecache
		'tpl': ['src/**/*.tpl.html'],
		// All css file.
		'less': ['src/less/stylesheet.less'],
		'lessWatch':['src/less/**/*.less']
	}

};