module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			files:["assets/stylus/*.styl", "*.html"],
			tasks: ['stylus'],
			options: {
	      livereload: true
	    }
		},
		stylus: {
			compile:{
				files: {
			    'assets/css/main.css': ['assets/stylus/*.styl']
			  }
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-stylus');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-handlebars');
	grunt.registerTask('default', ['watch']);
}