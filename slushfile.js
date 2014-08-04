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
    rimraf = require('rimraf'),
    notify = require('gulp-notify'),
    shell = require('gulp-shell'),
    runSequence = require('run-sequence');

function format(string) {
    var username = string.toLowerCase();
    return username.replace(/\s/g, '');
}

var defaults = (function () {
    var homeDir = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE,
        workingDirName = process.cwd().split('/').pop().split('\\').pop(),
        osUserName = homeDir && homeDir.split('/').pop() || 'root',
        configFile = homeDir + '/.gitconfig',
        user = {};
    if (require('fs').existsSync(configFile)) {
        user = require('iniparser').parseSync(configFile).user;
    }
    return {
        appName: workingDirName,
        userName: format(user.name) || osUserName,
        authorEmail: user.email || ''
    };
})();

gulp.task('slush', function (done) {
    var prompts = [{
        name: 'appName',
        message: 'What is the name of your project?',
        default: defaults.appName
    }, {
        name: 'appDescription',
        message: 'What is the description?'
    }, {
        name: 'appVersion',
        message: 'What is the version of your project?',
        default: '0.1.0'
    }, {
        name: 'authorName',
        message: 'What is the author name?',
    }, {
        name: 'authorEmail',
        message: 'What is the author email?',
        default: defaults.authorEmail
    }, {
        name: 'userName',
        message: 'What is the github username?',
        default: defaults.userName
    }, {
        type: 'confirm',
        name: 'moveon',
        message: 'Continue?'
    }];
    //Ask
    inquirer.prompt(prompts,
        function (answers) {
            if (!answers.moveon) {
                return done();
            }
            answers.appNameSlug = _.slugify(answers.appName);
            gulp.src(__dirname + '/templates/**')
                .pipe(template(answers))
                .pipe(rename(function (file) {
                    if (file.basename[0] === '-') {
                        file.basename = '.' + file.basename.slice(1);
                    }
                }))
                .pipe(conflict('./'))
                .pipe(gulp.dest('./'))
                .pipe(install())
                .pipe(notify('Welcome to Studi˚'))
                .on('end', function () {
                    done();
                });
        });
});

// Clean dir & clone gulp-studio in separate dir, then transport studio back in to ./
var setup = {
            studio: [
        './gulp-studio/**/**/**/**/*.*'
        ],
        root: './'
    },
    sourced = {
        app: 'app/'
    };
  
    gulp.task('cleandir', function() {
    return gulp.src('./', { read: false }) // much faster
        .pipe(ignore('node_modules/**'))
        .pipe(rimraf());
});

    gulp.task('clone-studio', shell.task([
        'git clone https://github.com/djfrsn/gulp-studio.git'
]))

    gulp.task('liftStudio', function() {
      return gulp.src(setup.studio)
        .pipe(gulp.dest(setup.root));
});

    gulp.task('clear-studio', function (cb) {
        rimraf('./gulp-studio', cb);
});

    gulp.task('default', function(callback) {
        runSequence( 'clear-studio', 'clone-studio', 'liftStudio', 'clear-studio', 'slush',
          callback);
    });


