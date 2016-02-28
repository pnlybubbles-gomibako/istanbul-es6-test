gulp = require 'gulp'
mocha = require 'gulp-mocha'
istanbul = require 'gulp-istanbul'
isparta = require 'isparta'
coverageEnforcer = require 'gulp-istanbul-enforcer'

# gulp.task 'test', ->
#   require 'espower-babel/guess'
#   gulp
#     .src './test/**/*.js'
#     .pipe mocha
#       reporter: 'spec'

gulp.task 'cover', (cb) ->
  babelMoreOptions = {presets: 'es2015'}
  gulp
    .src './src/**/*.js'
    .pipe istanbul
      instrumenter: isparta.Instrumenter
      includeUntested: true
    .pipe istanbul.hookRequire()
    .on 'finish', ->
      require 'espower-babel/guess'
      gulp
        .src './test/**/*.js', {read: false}
        .pipe mocha
          reporter: 'spec'
        .pipe istanbul.writeReports
          dir: './coverage'
          reporters: ['text', 'text-summary', 'json', 'html']
        .on 'end', cb
