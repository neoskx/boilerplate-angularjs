# angular-boilerplate

A startup template of [AngularJS](http://angularjs.org) Project.

===================

## Features
_What's features, this project has_

## Get Started
_If need add how to get started_

## Folder Structure


```
angularjs-boilerplate
    |-- .bowerrc
    |-- bower.json
    |-- build/
    |-- Gruntfile.js
    |-- LICENSE
    |-- package.json
    |-- README.md
    |-- src/
        |-- app/
            |-- landing/
            |-- home/
            |-- home.create/
        |-- assets/
            |-- img/
        |-- common/
            |-- controllers/
            |-- directives/
            |-- filters/
            |-- resources/
            |-- services/
        |-- index.html
        |-- less/
    |-- vendor/
```

*  `.bowerrc`: the Bower configuration file. This file told Bower to install all the libraries to the `vendor/` directory
*  `bower.json`: Specify all dependency libraries of this project
*  `build`: store the files after build.
*  `Gruntfile.js`: `Gruntfile.js` includes project and task configuration, loading Grunt plugin and tasks and define custom tasks
*  `LICENSE`: describe the detail of license
*  `package.json`: describes this project's information, such as: name, version. And define needed Grunt plugins
* `README.md`:  introduce this boilerplate, includes how to use it and get started of this boilerplate
* `src`: The folder is separated based on [__Modularity__](http://cliffmeyers.com/blog/2013/4/21/code-organization-angularjs-javascript), the style guide is:
    1. All  module should put in `app` folder. For example, in you application, you have `landing`, `environment`, `environment wizard`, `environment detail`, `environment node detail`, `environment general detail`, so the folder structure should be: 

        ```
    app/
        |-- landing/
            |-- landing.js
            |-- landing.spec.js
            |-- landing.lang.js
            |-- landing.tpl.html
        |-- environment/
        |-- environment.wizard/
        |-- environment.detail.node/
        |-- environment.detail.general/
        ```
    2. Put all the styles to `assets` folder, also images, each module folder include js and template file
    3. File Name Standard：
        * Test file:          **.spec.js
        * Template file: **.tpl.html
        * Language file: **.lang.js
 * `vendor`:  Install all used libraries to this folder

## [Style Guide](id:style_guide)

1. **JavaScript Style Guide**
    
    Recommend [Google's JavaScript Style Guide](http://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml)
2. [**Angular Style Guide**](id:angular_style_guide)
    * All template HTML should named like this `*.tpl.htm `
    * All language files should named like this `*.lang.js`
    * All Test specify files named like this `*.spec.js`
    * All  module should put in `app` folder. For example, in you application, you have `landing`, `environment`, `environment wizard`, `environment detail`, `environment node detail`, `environment general detail`, so the folder structure should be: 

        ```
    app/
        |-- landing/
            |-- landing.js
            |-- landing.spec.js
            |-- landing.lang.js
            |-- landing.tpl.html
        |-- environment/
        |-- environment.wizard/
        |-- environment.detail.node/
        |-- environment.detail.general/
        ```
    * Put all the styles to `assets` folder, also images, each module folder include js and template file
    * `vendor`:  Install all used libraries to this folder

    

## Project Configuration

Following part let me show you how do I configure this project.

### Bower.json

Add following dependencies:

1. [AngularJS](http://angularjs.org)
2. [Bootstrap](http://getbootstrap.com/2.3.2/)

### package.json

Needed following Grunt Plugins:

1. [grunt-contrib-jshint](https://npmjs.org/package/grunt-contrib-jshint): Validate file with JSHint, similar with JSLint
2. [grunt-contrib-uglify](https://npmjs.org/package/grunt-contrib-uglify): Minify files with UglifyJS
3. [grunt-contrib-watch](https://npmjs.org/package/grunt-contrib-watch): Run predefined tasks whenever watched file patterns are added, changed or deleted
4. [grunt-contrib-clean](https://npmjs.org/package/grunt-contrib-clean): Clean files and folders
5. [grunt-contrib-copy](https://npmjs.org/package/grunt-contrib-copy): Copy files and folders
6. [grunt-contrib-concat](https://npmjs.org/package/grunt-contrib-concat):  Concatenate files
7. [grunt-contrib-connect](https://npmjs.org/package/grunt-contrib-connect): Start a connect web server
8. [grunt-recess](https://npmjs.org/package/grunt-recess): Lint and minify CSS and LESS
9. [grunt-html2js](https://npmjs.org/package/grunt-html2js): Compiles AngularJS templates to JavaScript

-------
* Get more information from [specification](https://npmjs.org/doc/json.html)
* See all grunt plugins from [Grunt Plugins](http://gruntjs.com/plugins#/)

### Gruntfile.js

#### jshint -- [grunt-contrib-jshint](https://npmjs.org/package/grunt-contrib-jshint)

```
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
```

`jshint` will search all js files except test file and language files, and run `jshint ` to validate, and put result to `build/jshint-reporter.xml`

#### recess -- [grunt-recess](https://npmjs.org/package/grunt-recess)

```
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
```

You can configure your project's LESS files in `project.config.js`.  Default I assume your following [Angular Style Guide](#angular_style_guide)

 It has two mode:

1. `development`

    Compile LESS files, then put it to **develop folder**(this folder you can configure it in `project.config.js`). 
    

2. `production`
    
    Compile LESS files and compress it, then put it in **production folder**(this folder you can configure it in `project.config.js`)
   
#### html2js

```
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
```

All the template file should be named like this `*.tpl.html`, otherwise you need to specify template file by yourself in `project.config.js`



## Requirements

Before you use this boilerplate you should learn following technologies before:

1. [AngularJS](http://angularjs.org): A front end develop framework
2. [Bootstrap](http://getbootstrap.com/2.3.2/): Sleek, intuitive, and powerful front-end framework for faster and easier web development
3. [jQuery](http://jquery.com): A fast, small, and feature-rich JavaScript library
4. [Bower](http://bower.io): A package manager for the web
5. [Grunt](http://gruntjs.com): The JavaScript Task Runner
6. [Jenkins](http://jenkins-ci.org): Continuous integration server

## Resources
_If use third part library, add third part library_

## Contact
This application is developed by Shaoke Xu. You can use following way to contact me:

**Website**: <http://shaoke.me>

**Email**: [ shaokexu@gmail.com ](shaokexu@gmail.com)

## License
**Project Name** is available under the MIT license. See the LICENSE file for more info.