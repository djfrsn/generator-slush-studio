/*
 * slush-slush-studio
 * https://github.com/djfsn/slush-slush-studio
 *
 * Copyright (c) 2014, Dennis Jeffersojn
 * Licensed under the MIT license.
 */

'use strict';

var gulp = require('gulp'),
    install = require('gulp-install'),
    conflict = require('gulp-conflict'),
    template = require('gulp-template'),
    rename = require('gulp-rename'),
    _ = require('underscore.string'),
    inquirer = require('inquirer'),
    prompt = require('gulp-prompt'),
    rimraf = require('rimraf'),
    notify = require('gulp-notify'),
    shell = require('gulp-shell'),
    runSequence = require('run-sequence');

// Clean dir & clone fresh gulp-studi˚
var setup = {
            studio: [
        './gulp-studio/**/**/**/**/*.*'
        ],
        root: './'
    },
    sourced = {
        app: 'app/'
    };

    gulp.task('clone-studio', shell.task([
        'git clone https://github.com/djfrsn/gulp-studio.git'
]));
    
    gulp.task('drop_templates', function () {
            gulp.src(__dirname + '/templates/**')
                .pipe(conflict(setup.root)) 
                      .pipe(gulp.dest(setup.root));      
});

     gulp.task('welcome', function () {
            gulp.src(setup.root)
                .pipe(notify('Welcome to Studi˚'));
});

    gulp.task('liftStudio', function() {
      return gulp.src(setup.studio)
        .pipe(gulp.dest(setup.root));
});

    gulp.task('rm-studio', function (cb) {
        rimraf('./gulp-studio', cb);
});

    gulp.task('npm_install_confirm', function() {
        return gulp.src('./')
          .pipe(prompt.confirm('Would you like to install gulp-studi˚ dependencies?'))
          .pipe(gulp.dest('./'));
});
    
    gulp.task('npm_install', shell.task([
          'sudo npm install'
]));

    gulp.task('finished', function(done) {
        gulp.src(setup.root)
        .on('finish', function () {
        done(); // Finished!
      });
});
    gulp.task('npm_install_prompt', function(callback) {
        runSequence( 'npm_install_confirm', 'npm_install',
          callback);
});
    
    gulp.task('default', function(callback) {
        runSequence( 'rm-studio', 'clone-studio', 'liftStudio', 
            'rm-studio', 'drop_templates', 'npm_install_prompt', 
            'finished',
          callback);
    });