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
* `src`: The folder is separated based on __Modularity__[^1], the style guide is:
    1. All  module should put in `app` folder. For example, in you application, you have `landing`, `environment`, `environment wizard`, `environment detail`, `environment node detail`, `environment general detail`, so the folder structure should be: 
  >    
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


[^1]: [code organization angularjs javascript](http://cliffmeyers.com/blog/2013/4/21/code-organization-angularjs-javascript)
[^2]: Why I do it like this?

## Style Guild


## Requirements
_Requirement of this project_

## Resources
_If use third part library, add third part library_

## Contact
This application is developed by Shaoke Xu. You can use following way to contact me:

**Website**: <http://shaoke.me>

**Email**: [ shaokexu@gmail.com ](shaokexu@gmail.com)

## License
**Project Name** is available under the MIT license. See the LICENSE file for more info.