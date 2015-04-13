/*global module:false*/
module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		//concat: {
		//	js: {
		//		src: 'data/*.js',
		//		dest: 'dist/core.js'
		//	},
		//},
		uglify: {
			min: {
				files: grunt.file.expandMapping(['data/**/*.js'], '../output/', {
					rename: function(destBase, destPath) {
						return destBase+destPath.replace('.js', '.min.js');
					}
				})
			}
		},
	});

	//grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
    //grunt.loadNpmTasks('grunt-contrib-copy');
	

	// build all files & copy to eqdkp folder
	grunt.registerTask('default', ['uglify']);
};
