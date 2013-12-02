/**
 *
 */
module.exports = {
	/**
	 * After compile, put the files to `release_dir`, and it is ready for release
	 * @type {String}
	 */
	'release_dir': 'release',

	'app_files': {
		// All the JavaScript files used in this project
		'app_js': ['src/**/*.js', !'src/**/*.spec.js', !'src/**/*.lang.js'],
		// 
		'test_js': ['src/**/*.spec.js'],
		// Language files
		'lang_js': ['src/**/*.lang.js'],

		// All templates in this project. we will put template to angular templatecache
		'tpl': ['src/**/*.tpl.html']
	},

	'vendor_files': {
		'js': [
			''
		],
		'css':[
		],
		'assets':[
		]
	}

};