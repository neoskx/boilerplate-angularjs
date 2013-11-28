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

## Style Guild

## Bower.json

Add following dependencies:

1. [AngularJS](http://angularjs.org)
2. [Bootstrap](http://getbootstrap.com/2.3.2/)

## package.json


-------
You can get more information from [specification](https://npmjs.org/doc/json.html)

## Gruntfile.js

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