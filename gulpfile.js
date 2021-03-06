'use strict';

const gulp = require('gulp'),
  ghPages = require('gulp-gh-pages'),
  browserSync = require('browser-sync').create(),
  del = require('del'),
  autoprefixer = require('gulp-autoprefixer'),
  babel = require('gulp-babel'),
  cache = require('gulp-cache'),
  cached = require('gulp-cached'),
  cheerio = require('gulp-cheerio'),
  concat = require('gulp-concat'),
  csscomb = require('gulp-csscomb'),
  csso = require('gulp-csso'),
  imagemin = require('gulp-imagemin'),
  plumber = require('gulp-plumber'),
  pug = require('gulp-pug'),
  rename = require('gulp-rename'),
  replace = require('gulp-replace'),
  sass = require('gulp-sass'),
  sourcemaps = require('gulp-sourcemaps'),
  svgmin = require('gulp-svgmin'),
  svgstore = require('gulp-svgstore'),
  uglify = require('gulp-uglify'),
  webp = require('gulp-webp'),
  imgCompress  = require('imagemin-jpeg-recompress');

sass.compiler = require('node-sass');

gulp.task('scss', () => {
  return gulp.src('./src/scss/styles.scss')
    .pipe(plumber())
    /* .pipe(sourcemaps.init()) */
    .pipe(sass())
    .pipe(autoprefixer({
      overrideBrowserslist:  ['last 3 versions'],
      cascade: false
    }))
    .pipe(csscomb())
    .pipe(gulp.dest('./build/css'))
    .pipe(browserSync.reload({ stream: true }))
    .pipe(replace('/*! normalize.css', '/* normalize.css'))
    .pipe(csso())
    /* .pipe(sourcemaps.write()) */
    .pipe(rename('styles.min.css'))
    .pipe(gulp.dest('./build/css'));
});

gulp.task('pug', () => {
  return gulp.src('./src/pug/*.pug')
    .pipe(plumber())
    .pipe(pug({
      pretty: true
    }))
    .pipe(plumber.stop())
    .pipe(cached('pug'))
    .pipe(gulp.dest('./build/'))
    .pipe(browserSync.reload({ stream: true }));
});
gulp.task('pug:min', () => {
  return gulp.src('./src/pug/*.pug')
    .pipe(plumber())
    .pipe(pug())
    .pipe(plumber.stop())
    .pipe(cached('pug'))
    .pipe(gulp.dest('./build/'))
});

gulp.task('js', () => {
  return gulp.src('./src/js/*.js')
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(concat('script.min.js'))
    .pipe(uglify({toplevel: true}))
    .pipe(gulp.dest('./build/js'))
    .pipe(browserSync.reload({stream: true}));
});
gulp.task('js:libs', () => {
  return gulp.src([
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/slick-carousel/slick/slick.min.js',
    'node_modules/svg4everybody/dist/svg4everybody.min.js',
    'node_modules/magnific-popup/dist/jquery.magnific-popup.min.js',
    'node_modules/jquery-validation/dist/jquery.validate.min.js'
  ])
    /* .pipe(babel({
      presets: ['@babel/env']
    })) */
    .pipe(concat('libs.min.js'))
    /* .pipe(uglify({toplevel: true})) */
    .pipe(gulp.dest('./build/js'))
    .pipe(browserSync.reload({stream: true}));
});
gulp.task('js:fills', () => {
  return gulp.src('./src/js/fills/*.js')
    .pipe(uglify({toplevel: true}))
    .pipe(gulp.dest('./build/js/fills-min'))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('img', () => {
  return gulp.src('./src/img/**/*.{png,jpg,webp}', {base: './src/img'})
    .pipe(cache(imagemin([
        imgCompress({
            loops: 4,
            min: 70,
            max: 80,
            quality: 'high',
            progressive: true
        }),
        imagemin.gifsicle(),
        imagemin.optipng(),
        imagemin.svgo()
      ])))
    .pipe(gulp.dest('./build/img'));
});
gulp.task('webp', () => {
  return gulp.src('./src/img/**/*.{png,jpg}', {base: './src/img'})
    .pipe(webp({quality: 80}))
    .pipe(gulp.dest('./build/img'));
});
gulp.task('svg', () => {
  return gulp.src('./src/img/svg/*.svg')
    .pipe(svgmin({js2svg:{pretty: true}}))
    .pipe(cheerio({ run: function ($) {
        $('[fill]').removeAttr('fill');
        $('[stroke]').removeAttr('stroke');
        $('[style]').removeAttr('style');
      },parserOptions: {xmlMode: true}}))
    .pipe(replace('&gt;', '>'))
    .pipe(gulp.dest('./build/img/svg'));
});
gulp.task('sprite', () => {
  return gulp.src('./src/img/svg/icons/**/*.svg')
    .pipe(svgmin({js2svg:{pretty: true}}))
    .pipe(cheerio({ run: function ($) {
        $('[fill]').removeAttr('fill');
        $('[stroke]').removeAttr('stroke');
        $('[style]').removeAttr('style');
      },parserOptions: {xmlMode: true}}))
    .pipe(replace('&gt;', '>'))
    .pipe(svgstore({inLineSvg: true}))
    .pipe(rename('sprite.svg'))
    .pipe(gulp.dest('./build/img/svg'));
});
gulp.task('sprite:social', () => {
  return gulp.src('./src/img/svg/icons-article/**/*.svg')
    .pipe(svgmin({js2svg:{pretty: true}}))
    /* .pipe(cheerio({ run: function ($) {
        $('[fill]').removeAttr('fill');
        $('[stroke]').removeAttr('stroke');
        $('[style]').removeAttr('style');
      },parserOptions: {xmlMode: true}}))
    .pipe(replace('&gt;', '>')) */
    .pipe(svgstore({inLineSvg: true}))
    .pipe(rename('sprite-article-social.svg'))
    .pipe(gulp.dest('./build/img/svg'));
});

gulp.task('fonts', () => {
  return gulp.src('./src/fonts/**')
    .pipe(gulp.dest('./build/fonts'))
    .pipe(browserSync.reload({stream: true}));
});
gulp.task('clean:img', () => {
  return del(
    './build/img'
  );
});
gulp.task('clean:dev', () => {
  return del([
    './build/css',
    './build/js',
    './build/*.html'
  ]);
});
gulp.task('clean:fonts', () => {
  return del('./build/fonts');
});

gulp.task('watch', () => {
  browserSync.init({server: {baseDir: './build'}});
  gulp.watch('./src/**/*.scss', gulp.series('scss')).on('change', browserSync.reload);
  gulp.watch('./src/js/*.js', gulp.series('js'));
  gulp.watch('./src/js/fills/*.js', gulp.series('js:fills'));
  gulp.watch('./src/**/*.pug', gulp.series('pug')).on('change', browserSync.reload);
  gulp.watch('./src/fonts/**', gulp.series('fonts'));
});

gulp.task('deploy', () => {
  return gulp.src('./build/**/*')
    .pipe(ghPages());
});

gulp.task('optimg', gulp.series('clean:img', 'img', 'webp', 'svg', 'sprite', 'sprite:social'));
gulp.task('dev', gulp.series('clean:dev', gulp.parallel('scss', 'js', 'js:libs', 'js:fills', 'pug')));
gulp.task('build', gulp.series(gulp.parallel('clean:img', 'clean:fonts', 'clean:dev'), gulp.parallel('optimg', 'fonts', 'scss', 'js', 'js:libs', 'js:fills', 'pug:min'), 'watch'));
gulp.task('default', gulp.series('dev', 'watch'));