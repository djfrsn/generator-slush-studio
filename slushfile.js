/*
 * slush-slush-studio
 * https://github.com/djfsn/slush-slush-studio
 *
 * Copyright (c) 2014, Dennis Jeffersojn
 * Licensed under the MIT license.
 */

'use strict';

var gulp = require('gulp'),
    shell = require('gulp-shell'),
    install = require('gulp-install'),
    conflict = require('gulp-conflict'),
    rimraf = require('rimraf'),
    notify = require('gulp-notify'),
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

    gulp.task('slush', function () {
        gulp.src(__dirname + '/templates/**')
            .pipe(conflict(setup.root)) 
            .pipe(gulp.dest(setup.root))
            .pipe(install());      
});

    gulp.task('finished', function(done) {
        gulp.src(setup.root)
            .on('finish', function () {
            done(); // Finished!
            });
});
    
    gulp.task('default', function(callback) {
        runSequence( 'rm-studio', 'clone-studio', 'liftStudio', 
            'rm-studio', 'slush', 'welcome', 'finished', 
          callback);
    });