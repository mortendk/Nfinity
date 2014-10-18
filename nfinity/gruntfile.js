// This shows a full config file!
module.exports = function (grunt) {
    grunt.initConfig({
        watch: {
            files: "sass/*.scss",
            tasks: ['sass']
        },
        sass: {
            dev: {
                options: {
                    bundleExec: true
                },
                files: [{
                  expand: true,
                  cwd: 'sass',
                  src: ['**/*.scss'],
                  dest: 'css',
                  ext: '.css'
                }]
            }
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src : ['css/**/*.css', '*.html']
                },
                options: {
                    watchTask: true, // < VERY important
                    baseDir: "./"
                }
            }
        }
    });

    // load npm tasks
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');


    // define default task
    grunt.registerTask('default', ["browserSync", "watch"]);
};
