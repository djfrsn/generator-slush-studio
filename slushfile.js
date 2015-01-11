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
    prompt = require('gulp-prompt'),
    conflict = require('gulp-conflict'),
    rimraf = require('rimraf'),
    notify = require('gulp-notify'),
    runSequence = require('run-sequence');

// Clean dir & clone fresh gulp-studi˚
var setup = {
            studio: [
        './gulp-studio/**/**/**/**/*.*'
        ],
        studio_vvv: [
        './gulp-studio-vvv/**/**/**/**/*.*'
        ],
        quickdraw: [
        './gulp-quickdraw/**/**/*.*'
        ],
        root: './'
    },
    sourced = {
        app: 'app/'
    };

var dev_environment = 'dev_environment';

gulp.task('studio-wizard', function(){

    return gulp.src(setup.root, {read: false})
        .pipe(prompt.prompt([
            {
                type: 'input',
                name: 'userInput',
                message: 'Choose your dev environment( html || wordpress || quickdraw )'
            }
        ], function(res){
            dev_environment = res.userInput;
            if (dev_environment === 'html') {
                dev_environment = 'git clone https://github.com/djfrsn/gulp-studio.git'
            } else if (dev_environment === 'wordpress') {
                dev_environment = 'git clone https://github.com/djfrsn/gulp-studio-vvv.git && mkdir vvv && cd vvv && git clone git://github.com/Varying-Vagrant-Vagrants/VVV.git vagrant-local'
            } 
            else if (dev_environment === 'quickdraw') {
                dev_environment = 'git clone https://github.com/djfrsn/gulp-quickdraw.git'
            } else {
                dev_environment = 'git clone https://github.com/djfrsn/gulp-studio.git'
            }
        }));
});
    

    gulp.task('clone-studio', ['studio-wizard'], function() {
    return gulp.src(setup.root)
        .pipe(shell([
      dev_environment
    ]))
});

     gulp.task('welcome', function () {
        gulp.src(setup.root)
            .pipe(notify('Welcome to Studi˚'));
});

    gulp.task('liftGulpStudio', function() {
        return gulp.src(setup.studio)
            .pipe(gulp.dest(setup.root));
});

gulp.task('liftGulpStudioVVV', function() {
        return gulp.src(setup.studio_vvv)
            .pipe(gulp.dest(setup.root));
});

gulp.task('liftQuickdraw', function() {
        return gulp.src(setup.quickdraw)
            .pipe(gulp.dest(setup.root));
});

gulp.task('liftStudio', function(callback) {
        runSequence( ['liftGulpStudio', 'liftGulpStudioVVV' ],
          callback);
});

    gulp.task('rm-gulp', function (cb) {
        rimraf('./gulp', cb);
});

    gulp.task('rm-gulp-studio', function (cb) {
        rimraf('./gulp-studio', cb);
});

gulp.task('rm-gulp-studio-vvv', function (cb) {
        rimraf('./gulp-studio-vvv', cb);
});

gulp.task('rm-vvv', function (cb) {
        rimraf('./vvv', cb);
});

gulp.task('rm-app', function (cb) {
        rimraf('./app', cb);
});

    gulp.task('rm-studio', function (callback) {
        runSequence( ['rm-vvv', 'rm-app', 'rm-gulp', 'rm-gulp-studio-vvv', 'rm-gulp-studio' ],
          callback);
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
        runSequence( 'rm-studio', 'clone-studio', ['liftGulpStudio', 'liftGulpStudioVVV', 'liftQuickdraw' ], 
            'rm-gulp-studio-vvv', 'rm-gulp-studio', 'slush', 'welcome', 'finished', 
          callback);
    });