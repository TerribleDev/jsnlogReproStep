module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    browserify: {
      'output.js': ['main.js'],
      options: {
      transform: ['babelify']
      }
    }
  })
  grunt.loadNpmTasks('grunt-browserify')
}
