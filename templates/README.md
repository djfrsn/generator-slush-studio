## Studi˚

[Repository of modern web development tooling and components](http://studio.dennisjefferson.com)....batmans tool bet. 

## Quickstart

[Install/Run Slush-Studio](https://github.com/djfrsn/slush-studio)

Install dependencies

```sh
npm install
```
Run 

```sh
gulp
```
Vivy!

Head to app/easel.html || app/lib/ & start building your creation!  

Use

```sh
@@include('include/hello.html')
```

format to include files. Easel includes will get compiled into index.html.  

Try running 

```sh
gulp test
``` 
to ensure everything is stable.

## Features

#### HTML 
+ Minify/Prettify
+ [file-includes](https://www.npmjs.org/package/gulp-file-include)
+ H5BP

#### CSS
+ SASS 
+ Inline Critical CSS w/ dedicated SASS lib
+ Autoprefixer
+ Lint
+ Comb CSS 


#### JS 
+ Minify
+ Concat
+ Lint

#### Images
+ Compression with image-min

#### Template Task
+ Use gulp/task/template.js to bootstrap your own task

#### Watch
+ Browser-Sync
+ Live Reload
+ [Connect](https://www.npmjs.org/package/gulp-connect)


#### Build

Run 

```sh 
gulp build-studio
```

to create distributable app

## Filesystem 

#### SASS

app/lib/styles for all your styling needs

app/lib/styles/critical/_modules/_critical.scss - Any css written here will be inlined in app/index.html after running 'gulp crit' or if _critical changes after running 'gulp paint'

#### HTML 

Include w/ @@include('included.html')

#### Images

image-min compress files within 'app/lib/img/**/*' on 'gulp build-studio'

#### JS

Automatic minification on build 
Set files to concat with concat.js paths

#### Creating new task

To create a new gulp task, create a newTask.js file and add this to gulp/task/

Task boilerplate:

```sh
var gulp = require('gulp');

gulp.task('newTask', function () {
    var source = 'my/source';
    var dest = 'my/dist';
    // do something
    return gulp.src(source)
    .pipe(gulp.dest(dest));
});  
```
Test your task with 

```sh
gulp newTask
```
+ gulp-changed is automatically required on all task
Refer to community docs/write ups for details on how to customize your task further

### Task Performance

['gulp-changed'](https://www.npmjs.org/package/gulp-changed) runs for relevant gulp task.

### Gulp Commands

#### Automate w/ Bash

Quick commands for your bash_profile: 

```sh
alias g="gulp"
alias gs="gulp styles"
alias gsb="gulp styles-build"
alias gjs="gulp script"
alias gjsb="gulp script-build"
alias gh="gulp scaffold"
alias ghb="gulp build-scaffold"
alias gb="gulp build"
alias gw="gulp paint"
```

#### Watch For Changes & Automatically Refresh Across Devices

```sh
$ gulp paint
```

This boots a connect server that loads your project in the browser, then watches your html/sass/js for changes & live updates. 

### Build & Optimize

```sh
$ gulp studio
```

Run all task essential to compile optimized '/app' 


```sh
$ gulp build-paint
```

Run build versions of default task:
+ Styles - Compile SASS, prefix, comb('zen'), minify, check for errors & pipe to dest.
+ Compile-Critical - Inline Critical CSS
+ JS - Minify, Concat & Lint
+ Img - Run imgmin default settings
+ Scaffold - Compile includes & Minify
+ Aux - Grabs misc files parallel to index.html path & provides performance insights w/ pagespeed(Future ver)

### Testing

Using bash to test all modules.......I know its ugly...but it works. 

#### Gulp Studi˚ CLI commands

```sh
# Gulp Studi˚ 
alias g="gulp"
alias gstu="gulp studio"
alias gp="gulp paint"
alias gs="gulp styles"
alias gsb="gulp build-styles"
alias gj="gulp brush"
alias gsc="gulp scaffold"
alias gscb="gulp build-scaffold"
alias ga="gulp aux"
alias gab="gulp build-aux"
alias gc="gulp compile-critical"
alias gic="gulp inline-critical"
alias gpe="gulp prettify-index"
alias gb="gulp build-studio"
alias gbs="gulp browser-sync"
alias gptest="gs; gc; gsc; gic; gj; gstu;"
alias buildtest="gsb; gc; gsc; gab; gic; gscb; gj; gb;"
alias ta="gulp test-app"
alias tb="gulp test-build"
alias t="gulp test" 
# http://tinyurl.com/testruntime
# real - start to finish
# user - user mode code
# sys - kernal code
alias test="time runtest"
function runtest {
    ta
    sleep 10
    tb
}
```

Use 'gptest' after running 'gulp paint' to test task w/ browser sync & server

Run 'gulp test-app && gulp test-build' to test all modules with the exception of 'gulp paint'

## Config

#### Paths

Global paths are set @ gulp/index.js

## Vendor CSS 

jQuery 2.1.1 is located in node_modules/jquery

## Troubleshooting

Contact me

## A Boilerplate-only Option

Remove lib folder & reconfigure source paths in /gulp/task

## Inspiration

Studio is inspired by a desire to build a quick web dev platform with modern tooling & best practices baked in, while leaving the door wide open to build anything possible with HTML, CSS, Javascript and other web technologies.

## Contributing

## Milestones

#### Paint & Easel v 0.1.1 

--- Modules tested: 
+ paint
+ brush
+ browser-sync
+ aux 
+ img
+ scaffold
+ studio
+ styles
+ compile-critical
+ inline-critical
+ prettify-index
+ styles
+ watch
+ studio

Contributions, questions and comments are all welcome and encouraged.

## Credits

[Google Web Starter Kit](https://github.com/google/web-starter-kit)
    Readme template & being the "gold standard"

[Greypants gulp-starter](https://github.com/greypants/gulp-starter)
    Gulp framework & filesystem 

## License

MIT
