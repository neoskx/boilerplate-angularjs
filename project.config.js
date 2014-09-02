module.exports = {
    project_config: {
        /**
         * __Required__
         * `production_dir` this folder store all compiled files that is ready for **Release**.
         */
        production_dir: 'release/',

        /**
         * __Required__
         * `build_dir` this folder store all compiled JavaScript, CSS, HTML, images... sources.
         */
        build_dir: 'build/',

        /**
         * __Required__
         * `source_dir` this folder store all compiled JavaScript, CSS, HTML, images... sources.
         */
        source_dir: 'src/',

        /**
         * `log_dir` this folder store all the log files
         */
        log_dir: 'log/',

        /**
         * `api_dir` store api documents
         */
        api_dir: 'docs/api/',

        /**
         * __Required__
         * `app_files` stores all files created by this project. Includes js, css, img...
         */
        app_files: {
            /**
             * __Required__
             * JavaScript files, you can configure it based on your project
             */
            app_js: {
                src : ['<%= project_config.source_dir %>common/**/*.js','<%= project_config.source_dir %>app/main/<%= pkg.name %>.js', '<%= project_config.source_dir %>app/**/*.js', '!<%= project_config.source_dir %>vendor/**/*', '!<%= project_config.source_dir %>dummy/**/*'],
                dest: '<%= project_config.build_dir %>js/<%= pkg.name %>.js'
            },

            /**
             * __Required__
             * AngularJS html template files
             */
            tpl: {
                src : ['<%= project_config.source_dir %>**/*.tpl.html'],
                dest: '<%= project_config.build_dir %>/js/<%= pkg.name %>.tpl.js'
            },

            /**
             * __Required__
             * Less css files
             */
            less: {
                src : '<%= project_config.source_dir %>asset/less/<%= pkg.name %>.less',
                dest: '<%= project_config.build_dir %>asset/css/<%= pkg.name %>.min.css'
            },

            /**
             * __Required__
             * Resource files, such as: images, fonts...
             */
            asset: ['asset/**', '!asset/less/**', '!asset/css/**']
        },

        /**
         * __Required__
         * Third part libraries depended by this project
         */
        vendor: [
            'vendor/**/*'
        ]
    }
};