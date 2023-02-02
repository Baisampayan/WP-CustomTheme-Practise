import gulp from "gulp";
import yargs from "yargs";
import cleanCSS from "gulp-clean-css";
import gulpIf from "gulp-if";
import sourcemaps from "gulp-sourcemaps";
import imagemin from "gulp-imagemin";
import webpack from "webpack-stream";
import named from "vinyl-named";
import uglify from "gulp-uglify";
import browserSync from "browser-sync";
import zip from "gulp-zip";
import replace from "gulp-replace";
const clean = require('gulp-clean');
const sass = require('gulp-sass')(require('sass'));
import info from './package.json';

// Defining source & destination path
const paths = {
    styles: {
        src: ['src/assets/scss/bundle.scss','src/assets/scss/admin.scss'],
        dest: 'dist/assets/css'
    },
    scripts: {
        src: ['src/assets/js/bundle.js', 'src/assets/js/admin.js'],
        dest: 'dist/assets/js'
    },
    images: {
        src: 'src/assets/images/**/*.{jpg,png,gif,webp,tiff,jpeg,svg}',
        dest: 'dist/assets/images'
    },
    others: {
        // Path for copying all files from development to production except that are already done
        src: ['src/assets/**/*', '!src/assets/{images,js,scss}', '!src/assets/{images,js,scss}/**/*'],
        dest: 'dist/assets'
    },
    package: {
        src: ['**/*', '!node_modules{,/**}', '!node_modules/**/*', '!src{,/**}', '!.babelrc', '!gulpfile.babel.js', '!npm-shrinkwrap.json', '!package-lock.json', '!package.json', '!theme-packaged{,/**}' ],
        dist: 'theme-packaged'
    },
    themeFonts: {
        src: ['node_modules/slick-carousel/slick/fonts/*', 'node_modules/@fortawesome/fontawesome-free/webfonts/*'],
        dest: 'dist/assets/fonts'
    }
}

const PRODUCTION = yargs.argv.prod;
// For Style Minification & Mapping
export const themestyles = () => {
    return gulp.src(paths.styles.src)
    .pipe(gulpIf(!PRODUCTION, sourcemaps.init()))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulpIf(PRODUCTION, cleanCSS({compatibility: 'ie8'})))
    .pipe(gulpIf(!PRODUCTION, sourcemaps.write()))
    .pipe(gulp.dest(paths.styles.dest));
}

// For Copying Theme Fonts
export const copyThemeFonts = () => {
    return gulp.src(paths.themeFonts.src)
    .pipe(gulp.dest(paths.themeFonts.dest));
};

// For Javascript Minification & Bundling
export const themescripts = () => {
    return gulp.src(paths.scripts.src)
    .pipe(named())
    .pipe(webpack({
        module: {
            rules: [ //  <--changed from loaders to rules that's it :)
                {
                    test: /\.js$/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                ['@babel/preset-env']
                            ],
                            plugins: ['@babel/plugin-proposal-class-properties']
                        }
                    }
                }
            ]
        },
        output: {
            filename: '[name].js'
        },
        // Using '$' instead of jquery
        externals: {
            jquery: 'jQuery'
        },
        devtool: !PRODUCTION ? 'inline-source-map' : false,
            mode: PRODUCTION ? 'production' : 'development'
    }))
    .pipe(gulpIf(PRODUCTION, uglify()))
    .pipe(gulp.dest(paths.scripts.dest));
}

// For Image Minification
export const themeimagesmin = () => {
    return gulp.src(paths.images.src)
        .pipe(gulpIf(PRODUCTION, imagemin()))
        .pipe(gulp.dest(paths.images.dest));
}

// Automating the gulp call via watch function
export const watch = () => {
    gulp.watch('src/assets/scss/**/*.scss', gulp.series(themestyles, reload));
    gulp.watch('src/assets/js/**/*.js',gulp.series(themescripts, reload));
    gulp.watch('**/*.php', reload());
    gulp.watch(paths.images.src, gulp.series(themeimagesmin, reload));
    gulp.watch(paths.others.src, gulp.series(themefilecopy, copyThemeFonts, reload));
    
}

// Copy all files from development to production except that are already done
export const themefilecopy = () => {
    return gulp.src(paths.others.src)
        .pipe(gulp.dest(paths.others.dest));
}


// Task to delete target build folder
export const themeclean = () => {
    return gulp.src('dist', {read: false})
        .pipe(clean());
}

// For making Browser refresh automatically after any code change
const server = browserSync.create();
export const serve = (done) => {
    server.init({
        proxy: 'https://wpcustom:8890'
    });
    done();
}

export const reload = () => {
    return server.reload();
}

// Preparing the Zip file of the theme
export const themecompress = () => {
    return gulp.src(paths.package.src)
        // Replacing the theme name
        .pipe(replace('_themename', info.name))
        .pipe(zip(`${info.name}.zip`))
        .pipe(gulp.dest(paths.package.dist));
}

// Build all the files for development
export const pro_built = gulp.series(themeclean, gulp.parallel(themestyles, themescripts, themeimagesmin, themefilecopy, copyThemeFonts));

// Build all the files for production
export const dev_built = gulp.series(themeclean, gulp.parallel(themestyles, themescripts, themeimagesmin, themefilecopy, copyThemeFonts), serve, watch);

// Build all the files as final theme Zip file
export const theme_built = gulp.series(pro_built, themecompress);

// Default function
export default dev_built;