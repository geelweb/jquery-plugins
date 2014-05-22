module.exports = function(grunt) {
    var plugins = [
        'src/filehandler.js',
        'src/select.js',
        'src/ajax.js'
    ];
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            minify: {
                files: {
                    'build/geelweb-jquery.min.js': plugins
                }
            },
            build: {
                options: {
                    beautify: true,
                    mangle: false
                },
                files: {
                    'build/geelweb-jquery.js': plugins
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['uglify']);
};
